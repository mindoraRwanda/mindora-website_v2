import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Link, LucideChevronRight, LucideDownload, LucideGlobe, Users, Gamepad2, ArrowRight } from "lucide-react"; 
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

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Choose MindoraHealth
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience the future of mental health support with our innovative, AI-powered platform designed specifically for your well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <LucideChevronRight className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold mb-3">Personalized Support</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  AI-driven solutions tailored to your unique mental health needs, ensuring personalized care every step of the way.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <LucideDownload className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold mb-3">24/7 Access</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  Get access to mental health tools and support anytime, anywhere, right at your fingertips.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <LucideGlobe className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold mb-3">Data Security</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  We prioritize your privacy. All your data is secure and encrypted to ensure your peace of mind.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      
      <PartnersSection />
      
      {/* Statistics and Board Game Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Statistics Card */}
            <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-5xl font-bold text-primary mb-3">
                  10,000+
                </CardTitle>
                <CardDescription className="text-xl font-semibold text-foreground">Active Users</CardDescription>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <div className="space-y-3">
                  <p className="text-muted-foreground text-lg">Join thousands of users worldwide who trust MindoraHealth</p>
                  <p className="text-muted-foreground">Experience personalized mental health support</p>
                </div>
              </CardContent>
            </Card>

            {/* Board Game Card */}
            <Card className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="text-center pb-6 relative z-10">
                <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <Gamepad2 className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold mb-3">MindoraHealth Board Game</CardTitle>
                <CardDescription className="text-lg font-medium text-foreground">
                  Interactive Mental Health Support
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Discover our therapeutic board game that promotes mental health awareness while offering an engaging experience for all ages.
                </p>
              </CardContent>
              <CardFooter className="justify-center relative z-10">
                <Button className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl" asChild>
                  <Link href="/about" className="inline-flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <Sponsor />

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary/95 to-primary text-primary-foreground relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-foreground/5 to-transparent" />
        </div>

        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Ready to Take Control of Your Mental Well-being?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            Start your journey with MindoraHealth and access personalized mental health support designed specifically for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              className="group bg-background text-foreground hover:bg-background/90 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href="/demo" className="inline-flex items-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
              asChild
            >
              <Link href="/about" className="inline-flex items-center gap-2">
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <DownloadSection />
    </>
  );
}