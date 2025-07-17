/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import TopSection from "@/components/TopSection";
import {
  Brain,
  ArrowRight,
  Quote,
  Sparkles,
  CheckCircle,
  Star,
  Heart,
  Shield,
  Zap,
  Users,
  Clock,
  Target,
  Award,
  TrendingUp,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getServices, getStories } from "./action";

export default async function Services() {
  // Fetch services and success stories from the database
  const [services, stories] = await Promise.all([getServices(), getStories()]);

  if (!services || services.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">No services available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <TopSection
        backgroundImage="/images/servicbg.jpg"
        title="Our Services"
        description="Empowering mental health with innovative, AI-driven solutions tailored to young Africans."
      />

      {/* Enhanced Main Services Section */}
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

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-5xl mx-auto">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Our Services</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-foreground leading-tight">
              Comprehensive Mental Health{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-4xl mx-auto">
              From AI-powered early detection to community support, our comprehensive range of services provides accessible, culturally relevant, and effective mental health solutions.
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Empowering mental wellness with innovative, evidence-based solutions tailored specifically for Africa's diverse communities.
            </p>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              // Professional icons for different services
              const serviceIcons = [Brain, Heart, Shield, Zap, Users, Clock, Target, Award];
              const IconComponent = serviceIcons[index % serviceIcons.length];

              return (
                <Card
                  key={service.id}
                  className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 bg-card relative overflow-hidden"
                >
                  {/* Card Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />

                  <CardHeader className="pb-8 pt-12 relative z-10">
                    <div className="flex flex-col items-center text-center gap-6">
                      <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                        <IconComponent className="w-12 h-12 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.name}
                      </h3>
                    </div>
                  </CardHeader>

                  <CardContent className="text-center pb-12 relative z-10">
                    <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                      {service.description}
                    </p>

                    {/* Professional Features Indicator */}
                    <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm">Professional Support</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Enhanced Call to Action */}
          <div className="mt-32 text-center max-w-5xl mx-auto">
            <Card className="border-0 bg-gradient-to-r from-primary via-primary/95 to-primary text-primary-foreground shadow-2xl overflow-hidden relative">
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

              <CardContent className="pt-20 pb-20 relative z-10">
                {/* Premium Badge */}
                <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-8 border border-primary-foreground/20">
                  <Star className="w-4 h-4 text-yellow-300" />
                  <span>Start Your Journey</span>
                </div>

                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                  Ready to Transform{" "}
                  <span className="relative">
                    Your Life?
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-foreground/50 rounded-full"></div>
                  </span>
                </h3>

                <p className="text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto text-primary-foreground/90">
                  Join our growing community of over 10,000 individuals committed to mental wellness.
                  Take the first step toward a healthier, happier you with professional support.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="group bg-background text-foreground hover:bg-background/90 px-10 py-6 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    Get Started Free
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="group border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 px-10 py-6 rounded-2xl text-xl font-bold backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                    <Heart className="ml-2 w-6 h-6 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 text-primary-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="font-semibold">No Credit Card Required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="font-semibold">HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="font-semibold">24/7 Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Service Statistics Section */}
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

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-bold mb-8 border border-primary-foreground/20">
              <TrendingUp className="w-4 h-4" />
              <span>Service Impact</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Proven Results{" "}
              <span className="relative">
                Across Africa
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-foreground/50 rounded-full"></div>
              </span>
            </h2>

            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Our comprehensive services have delivered measurable impact across mental health support in Africa.
            </p>
          </div>

          {/* Service Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-foreground/20 transition-all duration-300 group-hover:scale-110">
                <Users className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="text-4xl md:text-5xl font-black mb-2 text-primary-foreground group-hover:scale-105 transition-transform">
                10,000+
              </div>
              <div className="text-xl font-bold mb-2 text-primary-foreground/90">
                Active Users
              </div>
              <div className="text-sm text-primary-foreground/70 leading-relaxed">
                Across 15+ African countries
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-foreground/20 transition-all duration-300 group-hover:scale-110">
                <Brain className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="text-4xl md:text-5xl font-black mb-2 text-primary-foreground group-hover:scale-105 transition-transform">
                98%
              </div>
              <div className="text-xl font-bold mb-2 text-primary-foreground/90">
                Success Rate
              </div>
              <div className="text-sm text-primary-foreground/70 leading-relaxed">
                Users report improved wellness
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-foreground/20 transition-all duration-300 group-hover:scale-110">
                <Clock className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="text-4xl md:text-5xl font-black mb-2 text-primary-foreground group-hover:scale-105 transition-transform">
                24/7
              </div>
              <div className="text-xl font-bold mb-2 text-primary-foreground/90">
                Support Available
              </div>
              <div className="text-sm text-primary-foreground/70 leading-relaxed">
                Round-the-clock assistance
              </div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-foreground/20 transition-all duration-300 group-hover:scale-110">
                <Award className="w-10 h-10 text-primary-foreground" />
              </div>
              <div className="text-4xl md:text-5xl font-black mb-2 text-primary-foreground group-hover:scale-105 transition-transform">
                15+
              </div>
              <div className="text-xl font-bold mb-2 text-primary-foreground/90">
                Service Types
              </div>
              <div className="text-sm text-primary-foreground/70 leading-relaxed">
                Comprehensive mental health solutions
              </div>
            </div>
          </div>

          {/* Professional Certifications */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-primary-foreground/20 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-primary-foreground mb-2">HIPAA Compliant</h3>
                <p className="text-sm text-primary-foreground/80">Highest data security standards</p>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-primary-foreground/20 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-primary-foreground mb-2">Healthcare Innovation Award</h3>
                <p className="text-sm text-primary-foreground/80">Recognized excellence in mental health</p>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-primary-foreground/20 transition-all duration-300">
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-primary-foreground mb-2">Global Reach</h3>
                <p className="text-sm text-primary-foreground/80">Serving communities across Africa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Success Stories Section */}
      <section className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        {/* Modern Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-primary/20 rounded-full animate-ping delay-1500"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8">
              <Quote className="w-4 h-4" />
              <span>Success Stories</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Transforming Lives{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Every Day
              </span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Hear from individuals who have transformed their mental wellness journey with our professional support and innovative solutions.
            </p>
          </div>

          {/* Enhanced Success Stories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stories.map((story, index) => (
              <Card
                key={story.id || `story-${index}`}
                className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4 bg-card relative overflow-hidden"
              >
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />

                <CardContent className="pt-10 pb-10 relative z-10">
                  {/* Professional Quote Icon */}
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={`star-${index}-${i}`} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg italic">
                    "{story.text}"
                  </p>

                  {/* Professional Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-bold text-lg shadow-lg">
                      {story.author ? story.author[0] : 'U'}
                    </div>
                    <div>
                      <p className="font-bold text-lg text-foreground">{story.author || 'Anonymous'}</p>
                      <p className="text-sm text-muted-foreground font-medium">{story.role || 'MindoraHealth User'}</p>
                    </div>
                  </div>

                  {/* Verification Badge */}
                  <div className="flex items-center gap-2 mt-4 text-primary font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Verified User</span>
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