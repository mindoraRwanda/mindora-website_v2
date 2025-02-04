import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Link, LucideChevronRight, LucideDownload, LucideGlobe, Users, Gamepad2, ArrowRight } from "lucide-react"; 
import HeroCarousel from "@/components/HeroCarousel";
import PartnersSection from "@/components/PartnersSection";
import DownloadSection from "@/components/DownloadSection";
import Sponsor from "@/components/Sponsor";

export const metadata = {
  title: "Home"
};

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <LucideChevronRight className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Personalized Support</CardTitle>
              <CardDescription>
                AI-driven solutions tailored to your unique mental health needs, ensuring personalized care every step of the way.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <LucideDownload className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>24/7 Access</CardTitle>
              <CardDescription>
                Get access to mental health tools and support anytime, anywhere, right at your fingertips.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <LucideGlobe className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Data Security</CardTitle>
              <CardDescription>
                We prioritize your privacy. All your data is secure and encrypted to ensure your peace of mind.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      
      <PartnersSection />
      
      
      <div className="bg-gradient-to-b from-background to-background/50 py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-4xl font-bold text-primary mb-2">
                  10,000+
                </CardTitle>
                <CardDescription className="text-xl font-medium">Active Users</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2">
                  <p className="text-muted-foreground">Join thousands of users worldwide who trust Mindora</p>
                  <p className="text-muted-foreground">Experience personalized mental health support</p>
                </div>
              </CardContent>
            </Card>

            {/* Mindora Board Game Card */}
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Gamepad2 className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">Mindora Board Game</CardTitle>
                <CardDescription className="text-lg">
                  Interactive Mental Health Support
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  Discover our therapeutic board game that promotes mental health awareness while offering an engaging experience for all ages.
                </p>
              </CardContent>
              <CardFooter className="justify-center">
                <Button className="group" asChild>
                  <Link href="/about" className="inline-flex items-center gap-2">
                    Learn More 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div> 

      <Sponsor />

      {/* Call to Action Section */}
      <div className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to Take Control of Your Mental Well-being?
          </h2>
          <p className="text-xl mb-12 text-primary-foreground/90">
            Start your journey with Mindora Health and access personalized mental health support.
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="group"
            asChild
          >
            <Link href="/demo" className="inline-flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
      
      <DownloadSection />
    </>
  );
}