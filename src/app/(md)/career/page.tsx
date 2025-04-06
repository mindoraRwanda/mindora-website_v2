import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, ArrowRight, Users, Heart, Star, GitBranch, Zap, Globe } from "lucide-react";
import Link from "next/link";

export default function Careers() {
  const benefits = [
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Purpose-Driven Impact",
      description: "Work on projects that have a real impact on mental health for young Africans."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Diverse & Inclusive Culture",
      description: "Thrive in a welcoming, innovative, and inclusive environment where your ideas matter."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Reach",
      description: "Be part of a team working across Africa to transform mental healthcare access."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Meaningful Work",
      description: "Make a difference in people's lives through innovative healthcare solutions."
    },
    {
      icon: <GitBranch className="w-8 h-8 text-primary" />,
      title: "Growth Opportunities",
      description: "Develop your skills and advance your career in a supportive environment."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Innovation Focus",
      description: "Work with AI and cutting-edge technology to solve real-world health challenges."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-20 text-center">
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-64 h-64 rounded-full bg-primary blur-3xl"></div>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Join Our Mission at Mindora Health</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            At Mindora Health, we are revolutionizing mental health care for young people across Africa.
            Be part of a team that&apos;s making a difference with AI-powered and culturally sensitive solutions.
          </p>
          <div className="flex justify-center gap-4">
           <Button size="lg" className="rounded-full">
              <Link href="/career/jobs" className="flex items-center gap-2">
                 View Open Positions<ArrowRight className="w-5 h-5" />
              </Link>
          </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Our Culture
            </Button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Join Mindora Health?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-col items-center pb-2">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {benefit.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Current Openings */}
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Current Openings</h2>
          <Card className="border border-border/50 bg-background/50 backdrop-blur-sm mb-8">
            <CardContent className="flex flex-col items-center py-12">
              <Star className="w-12 h-12 text-muted-foreground mb-4" />
              <p className="text-lg mb-6">We&apos;re preparing exciting new opportunities!</p>
              <p className="text-muted-foreground">Check back soon or join our talent community to be notified when positions open up.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Join Talent Community */}
      <div className="container mx-auto px-4 py-16 pb-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Join Our Talent Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Even if there are no current openings that fit your skills, stay connected! 
            Be the first to know about new opportunities at Mindora Health.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="rounded-full">
              <Link href="/career/hall-of-fame" className="flex items-center gap-2">
                Visit Our Hall of Fame <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}