import React from "react";
import TopSection from "@/components/TopSection";
import {
  Brain,
  Shield,
  Heart,
  CheckCircle,
  Stars,
  Activity,
  Smile,
  UserCheck,
  Globe,
  ArrowRight,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Services() {
  const services: Service[] = [
    {
      title: "Early Detection & Monitoring",
      description:
        "Predict, prevent, and empower your mental health journey with AI-driven emotional assessment and personalized alerts.",
      icon: <Brain className="w-12 h-12 text-purple-600" />,
    },
    {
      title: "Tele-Therapy Services",
      description:
        "Access affordable, youth-centered virtual therapy tailored to your needs, with options for chat, voice, or video sessions.",
      icon: <Shield className="w-12 h-12 text-purple-600" />,
    },
    {
      title: "Self-Help Tools",
      description:
        "Interactive tools to foster resilience, manage stress, and build healthy habits anytime, anywhere.",
      icon: <Heart className="w-12 h-12 text-purple-600" />,
    },
    {
      title: "Culturally Relevant Solutions",
      description:
        "Mental health support designed for Africa, addressing stigma and promoting open dialogue.",
      icon: <Activity className="w-12 h-12 text-purple-600" />,
    },
    {
      title: "The Mindora Game Board",
      description:
        "A gamified platform to track your growth, complete challenges, and make mental health fun.",
      icon: <Stars className="w-12 h-12 text-purple-600" />,
    },
    {
      title: "Community Support",
      description:
        "Connect with peers, share experiences, and foster a supportive mental health community.",
      icon: <Smile className="w-12 h-12 text-purple-600" />,
    },
    {
      title: "Tailored Resources",
      description:
        "Access personalized mental health resources that fit your unique needs and preferences.",
      icon: <UserCheck className="w-12 h-12 text-purple-600" />,
    },
    {
      title: "Global Collaboration",
      description:
        "Collaborate with international experts and organizations to promote mental health awareness.",
      icon: <Globe className="w-12 h-12 text-purple-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopSection
        backgroundImage="/images/servicbg.jpg"
        title="Our Services"
        description="Empowering mental health with innovative, AI-driven solutions tailored to young Africans."
      />

      {/* Main Services Section */}
      <section className="py-24 relative">
        {/* Enhanced background with animated gradient */}
        <div className="absolute inset-0 bg-grid-gray-900/[0.04] -z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-background animate-gradient -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              Discover Our Comprehensive Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From early detection to community support, our wide range of services aims to provide accessible, culturally relevant, and effective mental health solutions.
            </p>
          </div>

          {/* Services Grid with Staggered Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border border-purple-100 dark:border-purple-900"
              >
                <CardHeader>
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 group-hover:scale-110 transition-transform duration-500">
                      {React.cloneElement(service.icon as React.ReactElement, {
                        className: "w-8 h-8 text-primary group-hover:animate-pulse"
                      })}
                    </div>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {service.title}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <div className="mt-24 text-center max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 text-white hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
              <CardContent className="pt-16 pb-14">
                <h3 className="text-4xl font-bold mb-6 animate-gradient-x">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-xl opacity-90 mb-10">
                  Join our growing community of individuals committed to mental wellness. 
                  Take the first step toward a better you.
                </p>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="group bg-white text-purple-600 hover:bg-purple-50 hover:scale-105 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 dark:from-gray-800/50 dark:via-purple-900/30 dark:to-gray-800/50 relative overflow-hidden">
        {/* Enhanced decorative elements */}
        <div className="absolute inset-0 bg-grid-gray-900/[0.04] -z-10" />
        <div className="absolute -left-20 top-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -right-20 bottom-20 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              What Our Users Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from individuals who have transformed their mental wellness journey with our support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Mindora helped me understand my emotions and take control of my mental health. The AI tools are a game-changer!",
                author: "Sarah K.",
                role: "Student"
              },
              {
                text: "The therapy sessions are so convenient and affordable. I feel supported every step of the way.",
                author: "James M.",
                role: "Professional"
              },
              {
                text: "The self-help tools and community have been invaluable in my journey to better mental health. Thank you, Mindora!",
                author: "Grace N.",
                role: "Artist"
              }
            ].map((testimonial, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/90 dark:bg-gray-800/90 border-purple-100 dark:border-purple-900"
              >
                <CardContent className="pt-8">
                  <Quote className="w-12 h-12 text-primary/30 mb-6 group-hover:text-primary/50 transition-colors" />
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 flex items-center justify-center text-primary font-semibold">
                      {testimonial.author[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}