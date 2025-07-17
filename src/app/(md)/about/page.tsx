import React from 'react';
import { Button } from '@/components/ui/button';
import TopSection from '@/components/TopSection';
import TeamSection from '@/components/team/TeamSection';
import {
  ArrowRight,
  Heart,
  Users,
  ChevronRight,
  MessageCircle,
  Link,
  Award,
  Target,
  TrendingUp,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  Sparkles,
  Brain,
  Clock,
  Star
} from 'lucide-react';

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
  // Professional Statistics
  const statistics = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "10,000+",
      label: "Lives Impacted",
      description: "Users across Africa trust our platform"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      number: "15+",
      label: "Countries Served",
      description: "Expanding mental health access globally"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      number: "98%",
      label: "Success Rate",
      description: "Users report improved mental wellness"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock mental health assistance"
    }
  ];

  // Professional Achievements
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Healthcare Innovation Award 2023",
      description: "Recognized for AI-powered mental health solutions"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "HIPAA Compliant Platform",
      description: "Ensuring the highest standards of data security"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Top-Rated Mental Health App",
      description: "4.9/5 rating from over 5,000 user reviews"
    }
  ];

  const values: Value[] = [
    {
      icon: <Brain />,
      title: 'AI-Powered Innovation',
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
      description: 'MindoraHealth was established with a vision to transform mental health support for Africa’s youth.',
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
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-3xl p-8 md:p-16 shadow-xl border-0">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                  Our Story
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
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

      {/* Professional Testimonials Section */}
      <section className="py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8">
              <Star className="w-4 h-4" />
              <span>What People Say</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Thousands
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Hear from the people whose lives have been transformed by MindoraHealth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-card rounded-3xl p-8 shadow-xl border-0 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "MindoraHealth has been a game-changer for my mental wellness journey. The AI-powered recommendations feel so personal and culturally relevant."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Sarah M.</div>
                    <div className="text-sm text-muted-foreground">University Student, Kenya</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-card rounded-3xl p-8 shadow-xl border-0 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "As a healthcare professional, I'm impressed by the clinical accuracy and cultural sensitivity of MindoraHealth's approach."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Dr. James O.</div>
                    <div className="text-sm text-muted-foreground">Psychiatrist, Nigeria</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-card rounded-3xl p-8 shadow-xl border-0 relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />

              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "The 24/7 support and accessibility have made mental health care finally feel approachable and stigma-free for our community."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Amina K.</div>
                    <div className="text-sm text-muted-foreground">Community Leader, Ghana</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              <Target className="w-4 h-4" />
              <span>Our Values</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Core Values That{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Drive Us
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              These fundamental principles guide everything we do at MindoraHealth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="group bg-card border-0 p-10 rounded-3xl shadow-xl hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-4 relative overflow-hidden"
              >
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />

                <div className="relative z-10">
                  <div className="mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-300 shadow-lg">
                      {React.cloneElement(value.icon as React.ReactElement, {
                        className: "w-10 h-10 text-primary"
                      })}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Statistics Section */}
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
              <span>Our Impact</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Transforming Lives{" "}
              <span className="relative">
                Across Africa
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-foreground/50 rounded-full"></div>
              </span>
            </h2>

            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              Our commitment to excellence is reflected in the measurable impact we've made in mental health support across the continent.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {statistics.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="w-20 h-20 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-foreground/20 transition-all duration-300 group-hover:scale-110">
                  {React.cloneElement(stat.icon as React.ReactElement, {
                    className: "text-primary-foreground"
                  })}
                </div>
                <div className="text-4xl md:text-5xl font-black mb-2 text-primary-foreground group-hover:scale-105 transition-transform">
                  {stat.number}
                </div>
                <div className="text-xl font-bold mb-2 text-primary-foreground/90">
                  {stat.label}
                </div>
                <div className="text-sm text-primary-foreground/70 leading-relaxed">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Professional Achievements */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={achievement.title} className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-primary-foreground/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {React.cloneElement(achievement.icon as React.ReactElement, {
                      className: "text-primary-foreground"
                    })}
                  </div>
                  <h3 className="font-bold text-primary-foreground mb-2">{achievement.title}</h3>
                  <p className="text-sm text-primary-foreground/80">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Modern Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8">
              <Award className="w-4 h-4" />
              <span>Our Journey</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Milestones That{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Define Us
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Key milestones that have shaped MindoraHealth's mission and impact
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative flex items-start mb-16 last:mb-0 group">
                {/* Timeline Line */}
                {index < milestones.length - 1 && (
                  <div className="absolute top-20 left-10 h-full w-0.5 bg-gradient-to-b from-primary/30 to-primary/10" />
                )}

                {/* Year Badge */}
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center z-10 border-4 border-background shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary font-bold text-lg">{milestone.year}</span>
                </div>

                {/* Content Card */}
                <div className="ml-12 bg-card p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 flex-grow border-0 group-hover:-translate-y-2 relative overflow-hidden">
                  {/* Card Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />

                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{milestone.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{milestone.description}</p>
                  </div>
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
            <Target className="w-12 h-12 mx-auto mb-6 opacity-75" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
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
      <section className="py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-16 text-center text-primary-foreground shadow-2xl relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <MessageCircle className="w-8 h-8 text-primary-foreground" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Want to Learn More?</h2>
              <p className="text-lg md:text-xl mb-10 text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
                Get in touch with us today and discover how we can help you take charge of your mental well-being.
              </p>

              <Button
                className="bg-background text-foreground hover:bg-background/90 text-lg py-6 px-10 rounded-2xl transform transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl font-bold"
                asChild
              >
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
