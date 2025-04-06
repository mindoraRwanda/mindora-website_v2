/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import TopSection from "@/components/TopSection";
import {
  Brain,
  Shield,
  Heart,
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
import { getServices } from "./action";

export default async function Services() {
  // Fetch services from the database
  const services = await getServices();

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
                      {/* Dynamically render the icon */}
                      <Brain className="w-8 h-8 text-primary group-hover:animate-pulse" />
                    </div>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {service.name}
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
    </div>
  );
}