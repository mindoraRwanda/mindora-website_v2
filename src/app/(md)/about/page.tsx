import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TopSection from '@/components/TopSection';
import { ArrowRight, Heart, Lightbulb, Users, Star, ChevronRight, MessageCircle } from 'lucide-react';

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const metadata = {
  title: 'About Us',
};

export default function About() {
  const values: Value[] = [
    {
      icon: <Lightbulb className="w-8 h-8 text-brand-500" />,
      title: 'Innovation',
      description: 'We continuously push boundaries with AI-powered solutions that make mental health support more effective and accessible.',
    },
    {
      icon: <Heart className="w-8 h-8 text-brand-500" />,
      title: 'Empathy',
      description: 'Our approach is rooted in compassion and understanding, catering to each individual’s mental health journey.',
    },
    {
      icon: <Users className="w-8 h-8 text-brand-500" />,
      title: 'Collaboration',
      description: 'We partner with mental health professionals and communities to create culturally relevant and impactful solutions.',
    },
  ];

  const milestones: Milestone[] = [
    {
      year: '2019',
      title: 'Foundation',
      description: 'Mindora Health was established with a vision to transform mental health support for Africa’s youth.',
    },
    {
      year: '2021',
      title: 'AI Integration',
      description: 'We launched our first AI-powered mental health assessment platform, revolutionizing early detection and prevention.',
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'We proudly reached over 100,000 users across multiple African countries, impacting lives positively.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopSection
        backgroundImage="/images/aboutbg.jpg"
        title="About Us"
        description="Learn about Mindora Health’s mission to empower Africa’s youth through innovative mental health solutions."
      />

      {/* Our Story Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-brand-200/30 dark:bg-brand-900/20 blur-3xl animate-float-slow pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-calm-200/30 dark:bg-calm-900/20 blur-3xl animate-float pointer-events-none"
          aria-hidden="true"
        />
        <div className="container relative z-10 mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-br from-brand-200/60 to-calm-200/60 dark:from-brand-800/40 dark:to-calm-800/30 p-[1px] shadow-sm">
            <div className="rounded-[calc(1.5rem-1px)] bg-card/90 backdrop-blur-sm p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-calm-600">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Mindora Health was founded to tackle the growing mental health crisis among adolescents and young people across Africa.
                  By leveraging technology and empathy, we aim to provide stigma-free, accessible mental health care
                  tailored to the unique cultural and social challenges faced by Africa’s youth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<TeamSection />*/}

      {/* Values Section */}
      <section className="py-20 bg-stone-50 dark:bg-stone-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-card p-8 rounded-2xl shadow-sm border border-border/50 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="relative flex items-start mb-12 last:mb-0">
                <div className="absolute top-0 left-8 h-full w-0.5 bg-brand-200 dark:bg-brand-800" />
                <div
                  className="flex-shrink-0 w-16 h-16 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center z-10"
                >
                  <span className="text-brand-600 dark:text-brand-400 font-bold">{milestone.year}</span>
                </div>
                <div className="ml-8 bg-card p-6 rounded-2xl shadow-sm border border-border/50 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-brand-600 via-brand-500 to-calm-600 text-white">
        <div
          className="absolute top-10 right-10 w-56 h-56 rounded-full bg-white/10 blur-3xl animate-float pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-calm-300/20 blur-3xl animate-float-slow pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-white/10 blur-2xl animate-breathe pointer-events-none"
          aria-hidden="true"
        />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Star className="w-12 h-12 mx-auto mb-6 opacity-75" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Vision</h2>
            <p className="text-xl mb-12 text-brand-100">
              We envision a world where mental health support is accessible and stigma-free. Mindora Health aims to
              empower Africa’s youth through AI-driven, culturally relevant solutions that build resilience and foster growth.
            </p>
            <Button
              className="bg-white text-brand-600 hover:bg-brand-50 text-lg py-6 px-8 rounded-xl shadow-sm transform transition-transform hover:scale-105"
            >
              Join Us on Our Journey
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-stone-50 dark:bg-stone-900">
        <div className="container mx-auto px-4">
          <div
            className="relative overflow-hidden max-w-4xl mx-auto bg-gradient-to-br from-brand-600 to-calm-600 rounded-3xl p-12 text-center text-white shadow-md"
          >
            <div
              className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-white/10 blur-3xl animate-float-slow pointer-events-none"
              aria-hidden="true"
            />
            <MessageCircle className="w-12 h-12 mx-auto mb-6 opacity-75" />
            <h2 className="text-4xl font-bold mb-6">Want to Learn More?</h2>
            <p className="text-xl mb-8">
              Get in touch with us today and discover how we can help you take charge of your mental well-being.
            </p>
            <Button
              asChild
              className="bg-white text-brand-600 hover:bg-brand-50 text-lg py-6 px-8 rounded-xl transform transition-transform hover:scale-105"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
