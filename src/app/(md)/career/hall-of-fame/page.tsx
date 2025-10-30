import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { 
  Star, 
  Award, 
  Sparkles, 
  Heart, 
  Users, 
  ArrowRight, 
  Crown, 
  Trophy,
  Medal,
  Globe,
  Zap,
  Target
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const contributors = [
  {
    name: "Kwizera Rulinda",
    role: "CEO & Founder",
    image: "/images/kwizera.jpg",
    achievement: "Visionary Leader",
    description: "Leading MindoraHealth's mission to transform mental healthcare across Africa",
    icon: Crown,
    years: "2019 - Present"
  },
  {
    name: "Takudzwa Tarutira",
    role: "CTO & Co-Founder",
    image: "/images/takudzwa.jpg",
    achievement: "Technology Pioneer",
    description: "Architecting AI-powered solutions that serve 10,000+ users across 15+ countries",
    icon: Zap,
    years: "2019 - Present"
  },
  {
    name: "Muhire Leon Pierre",
    role: "Marketing Director & Co-Founder",
    image: "/images/muhire.jpg",
    achievement: "Growth Catalyst",
    description: "Building brand awareness and driving user engagement across African markets",
    icon: Target,
    years: "2019 - Present"
  },
  {
    name: "Gahire Hubert",
    role: "Project & Planning Officer",
    image: "/images/gahire.jpg",
    achievement: "Operations Excellence",
    description: "Ensuring seamless project delivery and strategic planning initiatives",
    icon: Trophy,
    years: "2020 - Present"
  },
  {
    name: "Nizigama Noella",
    role: "Disability Inclusion Officer",
    image: "/images/noella.jpg",
    achievement: "Inclusion Champion",
    description: "Pioneering accessibility and inclusive design in mental health technology",
    icon: Heart,
    years: "2021 - Present"
  },
];

export default function HallOfFame() {
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
          <div className="max-w-5xl mx-auto">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8">
              <Trophy className="w-4 h-4" />
              <span>Hall of Fame</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground leading-tight">
              Celebrating Our{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Champions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
              Meet the visionary leaders and dedicated contributors who have shaped MindoraHealth's mission 
              to transform mental healthcare across Africa.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Their passion, innovation, and commitment have made it possible to impact over 10,000 lives 
              across 15+ countries.
            </p>

            {/* Professional Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">Founding Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-sm text-muted-foreground">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contributors Section */}
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
              <Medal className="w-4 h-4" />
              <span>Our Champions</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Meet the{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Visionaries
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              The exceptional individuals who have dedicated their expertise and passion to revolutionizing mental healthcare
            </p>
          </div>

          {/* Enhanced Contributors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {contributors.map((person, index) => {
              const IconComponent = person.icon;
              
              return (
                <Card key={person.name} className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 bg-card relative overflow-hidden">
                  {/* Card Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />
                  
                  <CardHeader className="flex flex-col items-center pb-8 pt-12 relative z-10">
                    {/* Professional Profile Image */}
                    <div className="relative w-32 h-32 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl p-1">
                        <Image
                          src={person.image}
                          alt={person.name}
                          fill
                          sizes="128px"
                          className="object-cover rounded-2xl"
                          priority
                        />
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Achievement Badge */}
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    
                    <CardTitle className="text-2xl font-bold text-center group-hover:text-primary transition-colors mb-2">{person.name}</CardTitle>
                    
                    <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                      {person.role}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="text-center pb-12 relative z-10">
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-foreground mb-2">{person.achievement}</h3>
                      <p className="text-muted-foreground leading-relaxed text-base mb-4">
                        {person.description}
                      </p>
                      <div className="text-sm text-primary font-semibold">
                        {person.years}
                      </div>
                    </div>
                    
                    {/* Professional Indicator */}
                    <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm">Hall of Fame Member</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action Section */}
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
              <Award className="w-4 h-4" />
              <span>Join Our Mission</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Ready to Make{" "}
              <span className="relative">
                History?
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-foreground/50 rounded-full"></div>
              </span>
            </h2>

            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-6 leading-relaxed">
              Want to be part of something meaningful and join our Hall of Fame?
              We're always looking for passionate individuals to help transform mental healthcare across Africa.
            </p>

            <p className="text-base md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-12">
              Check out our current opportunities and become part of our mission-driven team.
            </p>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
              <Button size="lg" variant="secondary" className="group bg-background text-foreground hover:bg-background/90 px-10 py-6 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" asChild>
                <Link href="/career" className="flex items-center gap-3">
                  View Career Opportunities
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" className="group border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 px-10 py-6 rounded-2xl text-xl font-bold backdrop-blur-sm transition-all duration-300 hover:scale-105">
                Learn About Our Culture
                <Heart className="ml-2 w-6 h-6 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Professional Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-primary-foreground/20 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-primary-foreground mb-2">Join the Team</h3>
                <p className="text-sm text-primary-foreground/80">Work with passionate professionals</p>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-primary-foreground/20 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-primary-foreground mb-2">Global Impact</h3>
                <p className="text-sm text-primary-foreground/80">Transform lives across Africa</p>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-primary-foreground/20 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-primary-foreground mb-2">Innovation</h3>
                <p className="text-sm text-primary-foreground/80">Work with cutting-edge AI technology</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
