import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import {
  Link,
  Users,
  Gamepad2,
  ArrowRight,
  Shield,
  Zap,
  Heart,
  Brain,
  CheckCircle,
  TrendingUp,
  Award,
  Sparkles
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import PartnersSection from "@/components/Partener/PartnersSection";
import DownloadSection from "@/components/DownloadSection";
import Sponsor from "@/components/Sponsor";

export const metadata = {
  title: "Home"
};

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* Revolutionary Features Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Revolutionary Mental Health Platform
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                MindoraHealth
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Experience the future of mental health support with our innovative, AI-powered platform designed specifically for your well-being and success.
            </p>
          </div>

          {/* Enhanced Feature Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature 1 - Enhanced */}
            <Card className="group relative border-0 bg-gradient-to-br from-card to-card/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />

              <CardHeader className="pb-6 relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <Brain className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  AI-Powered Personalization
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-lg">
                  Advanced AI algorithms analyze your unique patterns and preferences to deliver truly personalized mental health support that evolves with you.
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>Tailored recommendations</span>
                </div>
              </CardContent>
            </Card>

            {/* Feature 2 - Enhanced */}
            <Card className="group relative border-0 bg-gradient-to-br from-card to-card/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />

              <CardHeader className="pb-6 relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  Instant 24/7 Support
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-lg">
                  Get immediate access to mental health resources, crisis support, and therapeutic tools whenever you need them, day or night.
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>Always available</span>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3 - Enhanced */}
            <Card className="group relative border-0 bg-gradient-to-br from-card to-card/50 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />

              <CardHeader className="pb-6 relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  Enterprise-Grade Security
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-lg">
                  Your privacy is paramount. Military-grade encryption and HIPAA compliance ensure your data remains completely secure and confidential.
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>HIPAA compliant</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <PartnersSection />
      
      {/* Impact & Innovation Showcase */}
      <section className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/6 w-2 h-2 bg-primary rounded-full animate-ping"></div>
          <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-primary/50 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary rounded-full animate-ping delay-1000"></div>
        </div>

        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="w-4 h-4" />
              Proven Impact & Innovation
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Transforming Lives Through{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Enhanced Statistics Card */}
            <Card className="group relative border-0 bg-gradient-to-br from-card via-card to-card/80 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700" />

              <CardHeader className="text-center pb-8 relative z-10 pt-12">
                <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  <Users className="w-12 h-12 text-primary" />
                </div>

                {/* Animated Counter */}
                <div className="relative">
                  <CardTitle className="text-6xl md:text-7xl font-black text-primary mb-4 group-hover:scale-105 transition-transform duration-500">
                    10,000+
                  </CardTitle>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full animate-ping"></div>
                </div>

                <CardDescription className="text-2xl font-bold text-foreground mb-6">
                  Active Users Worldwide
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center relative z-10 pb-12">
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-3 text-primary font-semibold text-lg">
                    <Award className="w-6 h-6" />
                    <span>Trusted by thousands globally</span>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
                    Join our growing community of individuals who have transformed their mental health journey with MindoraHealth
                  </p>
                  <div className="flex justify-center gap-8 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Countries</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Board Game Card */}
            <Card className="group relative border-0 bg-gradient-to-br from-card via-card to-card/80 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-700" />

              <CardHeader className="text-center pb-8 relative z-10 pt-12">
                <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                  <Gamepad2 className="w-12 h-12 text-primary" />
                </div>

                <CardTitle className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                  MindoraHealth Board Game
                </CardTitle>
                <CardDescription className="text-xl font-semibold text-foreground mb-6">
                  Interactive Mental Health Experience
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center relative z-10 pb-8">
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-md mx-auto">
                  Experience our revolutionary therapeutic board game that combines fun with mental health education, designed for all ages and backgrounds.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Educational</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Therapeutic</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">All Ages</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Engaging</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="justify-center relative z-10 pb-12">
                <Button className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-10 py-4 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105" asChild>
                  <Link href="/about" className="inline-flex items-center gap-3">
                    Discover More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <Sponsor />

      {/* Revolutionary Call to Action Section */}
      <section className="py-40 relative overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary-foreground/20 rounded-full animate-bounce delay-0"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary-foreground/30 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary-foreground/25 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-primary-foreground/15 rounded-full animate-bounce delay-1500"></div>
        </div>

        <div className="container mx-auto px-6 text-center max-w-6xl relative z-10">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground px-6 py-3 rounded-full text-sm font-bold mb-12 border border-primary-foreground/20">
            <CheckCircle className="w-5 h-5 text-green-300" />
            <span>Join 10,000+ Users Worldwide</span>
            <CheckCircle className="w-5 h-5 text-green-300" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight text-primary-foreground">
            Ready to{" "}
            <span className="relative">
              Transform
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-300 rounded-full"></div>
            </span>
            <br />
            Your Mental Health?
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl mb-12 text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Start your personalized journey with MindoraHealth today and experience the future of mental wellness support.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="group relative bg-background text-foreground hover:bg-background/90 px-12 py-6 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 overflow-hidden"
              asChild
            >
              <Link href="/demo" className="inline-flex items-center gap-3 relative z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                Get Started Free
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group border-3 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50 px-12 py-6 rounded-2xl text-xl font-bold backdrop-blur-sm transition-all duration-500 hover:scale-105"
              asChild
            >
              <Link href="/about" className="inline-flex items-center gap-3">
                Watch Demo
                <Heart className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-primary-foreground/80">
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
        </div>
      </section>
      
      <DownloadSection />
    </>
  );
}