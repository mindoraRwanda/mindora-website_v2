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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6 text-center">
          <div className="relative mb-16 max-w-5xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <div className="w-96 h-96 rounded-full bg-primary blur-3xl"></div>
            </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">Join Our Mission at MindoraHealth</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            At MindoraHealth, we are revolutionizing mental health care for young people across Africa.
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
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Why Join MindoraHealth?</h2>
            <p className="text-lg text-muted-foreground">
              Discover the benefits of being part of our mission-driven team
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-0 bg-card shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <CardHeader className="flex flex-col items-center pb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  {React.cloneElement(benefit.icon as React.ReactElement, {
                    className: "w-8 h-8 text-primary"
                  })}
                </div>
                <CardTitle className="text-2xl font-semibold text-center">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-center leading-relaxed">
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