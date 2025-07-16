import React from 'react';
import { Button } from '@/components/ui/button';
import TopSection from '@/components/TopSection';
import TeamSection from '@/components/team/TeamSection';
import { ArrowRight, Heart, Lightbulb, Users, Star, ChevronRight, MessageCircle, Link } from 'lucide-react';

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
      icon: <Lightbulb />,
      title: 'Innovation',
      description: 'We continuously push boundaries with AI-powered solutions that make mental health support more effective and accessible.',
    },
    {
      icon: <Heart />,
      title: 'Empathy',
      description: 'Our approach is rooted in compassion and understanding, catering to each individual’s mental health journey.',
    },
    {
      icon: <Users />,
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
        title="About MindoraHealth"
        description="Learn about Mindora Health’s mission to empower Africa’s youth through innovative mental health solutions."
      />

      {/* Our Story Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-3xl p-8 md:p-16 shadow-xl border-0">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
                  Our Story
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                  MindoraHealth was founded to tackle the growing mental health crisis among adolescents and young people across Africa.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By leveraging technology and empathy, we aim to provide stigma-free, accessible mental health care
                  tailored to the unique cultural and social challenges faced by Africa’s youth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TeamSection />

      {/* Values Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              These fundamental principles guide everything we do at MindoraHealth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-card border-0 p-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2"
              >
                <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {React.cloneElement(value.icon as React.ReactElement, {
                      className: "w-8 h-8 text-primary"
                    })}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              Key milestones that have shaped MindoraHealth's mission and impact
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative flex items-start mb-12 last:mb-0">
                <div className="absolute top-0 left-8 h-full w-0.5 bg-primary/20 last:hidden" />
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center z-10 border-4 border-background shadow-lg">
                  <span className="text-primary font-bold text-sm">{milestone.year}</span>
                </div>
                <div className="ml-8 bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex-grow border-0">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gradient-to-r from-primary via-primary/95 to-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Star className="w-12 h-12 mx-auto mb-6 opacity-75" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Vision</h2>
            <p className="text-xl mb-12 text-purple-100">
              We envision a world where mental health support is accessible and stigma-free. Mindora Health aims to 
              empower Africa’s youth through AI-driven, culturally relevant solutions that build resilience and foster growth.
            </p>
            <Button
              className="bg-white text-purple-600 hover:bg-purple-50 text-lg py-6 px-8 rounded-xl transform transition-transform hover:scale-105"
            >
              Join Us on Our Journey
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div
            className="max-w-4xl mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white shadow-xl"
          >
            <MessageCircle className="w-12 h-12 mx-auto mb-6 opacity-75" />
            <h2 className="text-4xl font-bold mb-6">Want to Learn More?</h2>
            <p className="text-xl mb-8">
              Get in touch with us today and discover how we can help you take charge of your mental well-being.
            </p>
            <Button
              className="bg-white text-purple-600 hover:bg-purple-50 text-lg py-6 px-8 rounded-xl transform transition-transform hover:scale-105"
            > <Link href="/contact">
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
