import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  ArrowRight,
  Users,
  Heart,
  Star,
  GitBranch,
  Zap,
  Globe,
  Sparkles,
  Award,
  GraduationCap,
  Building
} from "lucide-react";
import Link from "next/link";

export default function Careers() {
  const benefits = [
    {
      icon: Briefcase,
      title: "Purpose-Driven Impact",
      description: "Work on projects that have a real impact on mental health for young Africans."
    },
    {
      icon: Users,
      title: "Diverse & Inclusive Culture",
      description: "Thrive in a welcoming, innovative, and inclusive environment where your ideas matter."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Be part of a team working across Africa to transform mental healthcare access."
    },
    {
      icon: Heart,
      title: "Meaningful Work",
      description: "Make a difference in people's lives through innovative healthcare solutions."
    },
    {
      icon: GitBranch,
      title: "Growth Opportunities",
      description: "Develop your skills and advance your career in a supportive environment."
    },
    {
      icon: Zap,
      title: "Innovation Focus",
      description: "Work with AI and cutting-edge technology to solve real-world health challenges."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-ping delay-0"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/40 rounded-full animate-ping delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-primary/20 rounded-full animate-ping delay-2000"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Join Our Team</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground leading-tight">
              Shape the Future of{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Mental Health
              </span>
              {" "}in Africa
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
              At MindoraHealth, we're revolutionizing mental healthcare for young people across Africa.
              Join our mission-driven team and make a meaningful impact with AI-powered, culturally sensitive solutions.
            </p>

            <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Be part of a diverse, innovative team that's transforming lives and breaking barriers in mental health support.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" asChild>
                <Link href="/career/jobs" className="flex items-center gap-3">
                  View Open Positions
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" className="group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-6 rounded-2xl text-xl font-bold transition-all duration-300 hover:scale-105">
                Our Culture
                <Heart className="ml-2 w-6 h-6 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-primary/20 rounded-full animate-ping delay-1500"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8">
              <Award className="w-4 h-4" />
              <span>Why Join Us</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                MindoraHealth?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Discover the exceptional benefits and opportunities of being part of our mission-driven team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="group border-0 bg-card shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 relative overflow-hidden">
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />

                <CardHeader className="flex flex-col items-center pb-8 pt-12 relative z-10">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                    {React.createElement(benefit.icon, { className: "w-10 h-10 text-primary" })}
                  </div>
                  <CardTitle className="text-2xl font-bold text-center group-hover:text-primary transition-colors">{benefit.title}</CardTitle>
                </CardHeader>

                <CardContent className="text-muted-foreground text-center leading-relaxed text-lg pb-12 relative z-10">
                  {benefit.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Current Openings Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Professional Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8">
              <Briefcase className="w-4 h-4" />
              <span>Current Opportunities</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground">
              Open{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Positions
              </span>
            </h2>

            <Card className="border-0 bg-card shadow-2xl mb-12 relative overflow-hidden">
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />

              <CardContent className="flex flex-col items-center py-16 relative z-10">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                  <Star className="w-10 h-10 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-6 text-foreground">Exciting Opportunities Coming Soon!</h3>
                <p className="text-lg mb-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  We're actively expanding our team and preparing exciting new positions across engineering, design, healthcare, and operations.
                </p>
                <p className="text-base text-muted-foreground max-w-xl mx-auto">
                  Join our talent community to be the first to know when positions that match your skills become available.
                </p>

                {/* Professional Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
                  <div className="text-center p-4 bg-primary/5 rounded-2xl">
                    <Building className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold text-foreground">Remote-First</div>
                    <div className="text-sm text-muted-foreground">Work from anywhere</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-2xl">
                    <GraduationCap className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold text-foreground">Learning & Growth</div>
                    <div className="text-sm text-muted-foreground">Continuous development</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-2xl">
                    <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold text-foreground">Impact-Driven</div>
                    <div className="text-sm text-muted-foreground">Meaningful work</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Company Culture Section */}
      <section className="py-32 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8">
              <Heart className="w-4 h-4" />
              <span>Our Culture</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Life at{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                MindoraHealth
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Experience a workplace culture that values innovation, diversity, and meaningful impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Culture Values */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Collaborative Environment</h3>
                  <p className="text-muted-foreground leading-relaxed">Work alongside passionate professionals from diverse backgrounds, all united by our mission to improve mental health across Africa.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Innovation-First</h3>
                  <p className="text-muted-foreground leading-relaxed">Push boundaries with cutting-edge AI technology and creative solutions that make real-world impact in mental healthcare.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Global Impact</h3>
                  <p className="text-muted-foreground leading-relaxed">Your work directly impacts thousands of lives across 15+ countries, creating meaningful change in mental health accessibility.</p>
                </div>
              </div>
            </div>

            {/* Professional Benefits */}
            <div className="bg-card rounded-3xl p-8 shadow-xl border-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-6">Professional Benefits</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">Competitive salary and equity packages</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">Comprehensive health and wellness benefits</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">Flexible remote work arrangements</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">Professional development opportunities</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">Annual learning and conference budget</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">Mental health support and resources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Talent Community Section */}
      <section className="py-32 bg-gradient-to-r from-primary via-primary/95 to-primary text-primary-foreground relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary-foreground/20 rounded-full animate-bounce delay-0"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary-foreground/30 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary-foreground/25 rounded-full animate-bounce delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-8 border border-primary-foreground/20">
              <Users className="w-4 h-4" />
              <span>Join Our Community</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Join Our{" "}
              <span className="relative">
                Talent Community
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-foreground/50 rounded-full"></div>
              </span>
            </h2>

            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-6 leading-relaxed">
              Even if there are no current openings that fit your skills, stay connected with MindoraHealth!
              Be the first to know about new opportunities and join our mission to transform mental healthcare.
            </p>

            <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-12">
              Get exclusive access to job openings, company updates, and insights into our innovative work culture.
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-16">
              <Button size="lg" variant="secondary" className="group bg-background text-foreground hover:bg-background/90 px-10 py-6 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" asChild>
                <Link href="/career/hall-of-fame" className="flex items-center gap-3">
                  Visit Our Hall of Fame
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" className="group border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 px-10 py-6 rounded-2xl text-xl font-bold backdrop-blur-sm transition-all duration-300 hover:scale-105">
                Subscribe to Updates
                <Sparkles className="ml-2 w-6 h-6 group-hover:rotate-12 transition-transform" />
              </Button>
            </div>

            {/* Professional Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-primary-foreground/20 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-primary-foreground mb-2">Early Access</h3>
                <p className="text-sm text-primary-foreground/80">First to know about new positions</p>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-primary-foreground/20 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-primary-foreground mb-2">Global Network</h3>
                <p className="text-sm text-primary-foreground/80">Connect with professionals worldwide</p>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-primary-foreground/20 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-primary-foreground mb-2">Mission-Driven</h3>
                <p className="text-sm text-primary-foreground/80">Make a meaningful impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}