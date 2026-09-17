/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import TopSection from "@/components/TopSection";
import { Brain,  ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getServices, getStories } from "./action";

export const dynamic = 'force-dynamic';

export default async function Services() {
  // Fetch services and success stories from the database
  const [services, stories] = await Promise.all([getServices(), getStories()]);

  if (!services || services.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-lg text-muted-foreground">No services available at the moment.</p>
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
      <section className="py-24 relative overflow-hidden">
        {/* Soft calming wash with gently drifting accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/40 via-background to-calm-50/40 -z-10" />
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-200/30 dark:bg-brand-900/20 rounded-full blur-3xl animate-float-slow -z-10" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-calm-200/30 dark:bg-calm-900/20 rounded-full blur-3xl animate-float -z-10" />

        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-brand-600 via-calm-600 to-brand-600 bg-clip-text text-transparent">
              Discover Our Comprehensive Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From early detection to community support, our wide range of services aims to provide accessible, culturally relevant, and effective mental health solutions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group rounded-2xl hover:shadow-lg transition-all duration-500 hover:-translate-y-1 backdrop-blur-sm bg-card/90 border border-brand-100 dark:border-brand-900"
              >
                <CardHeader>
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 rounded-full bg-gradient-to-br from-brand-100 to-calm-100 dark:from-brand-900 dark:to-calm-900 group-hover:scale-110 transition-transform duration-500">
                      {/* Placeholder for service icon */}
                      <Brain className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
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

          {/* Call to Action */}
          <div className="mt-24 text-center max-w-3xl mx-auto">
            <Card className="rounded-3xl bg-gradient-to-br from-brand-600 via-calm-600 to-brand-600 text-white shadow-md hover:shadow-xl hover:shadow-brand-500/20 transition-all duration-500 border-0">
              <CardContent className="pt-16 pb-14">
                <h3 className="text-4xl font-bold mb-6">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-xl opacity-90 mb-10">
                  Join our growing community of individuals committed to mental wellness.
                  Take the first step toward a better you.
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="group bg-white text-brand-600 hover:bg-brand-50 hover:scale-105 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-secondary/30 dark:bg-stone-900/40 relative overflow-hidden">
        {/* Gently drifting decorative accents */}
        <div className="absolute -left-20 top-20 w-96 h-96 bg-brand-300/20 dark:bg-brand-900/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute -right-20 bottom-20 w-96 h-96 bg-calm-300/20 dark:bg-calm-900/20 rounded-full blur-3xl animate-float" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-brand-600 to-calm-600 bg-clip-text text-transparent">
              What Our Users Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from individuals who have transformed their mental wellness journey with our support.
            </p>
          </div>

          {/* Success Stories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card
                key={index}
                className="group relative rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 backdrop-blur-sm bg-card/90 border border-brand-100 dark:border-brand-900"
              >
                {/* Decorative oversized quote mark for warmth */}
                <Quote className="absolute -top-4 -right-4 w-28 h-28 text-brand-100 dark:text-brand-900/40 pointer-events-none select-none" />
                <CardContent className="pt-8 relative">
                  <Quote className="w-10 h-10 text-primary/40 mb-6 group-hover:text-primary/60 transition-colors" />
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    {story.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-100 to-calm-100 dark:from-brand-900 dark:to-calm-900 flex items-center justify-center text-primary font-semibold">
                      {story.author ? story.author[0] : ''}
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{story.author}</p>
                      <p className="text-sm text-muted-foreground">{story.role}</p>
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