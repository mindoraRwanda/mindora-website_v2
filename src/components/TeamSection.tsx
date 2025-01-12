"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  LinkedinIcon, 
  TwitterIcon, 
  MailIcon,
  ChevronUpIcon,
  BookOpenIcon
} from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  extendedBio?: string;
  expertise?: string[];
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    image: 'team1.jpg',
    name: 'Kwizera Rulinda',
    role: 'Co-founder & CEO',
    bio: 'Clinical Psychologist with a passion for accessible mental healthcare',
    extendedBio: 'A visionary leader with over 10 years in clinical psychology, specializing in innovative therapeutic approaches and digital mental health solutions.',
    expertise: ['Cognitive Behavioral Therapy', 'Digital Health', 'Leadership'],
    linkedin: '#',
    twitter: '#',
    email: '#'
  },
  {
    image: 'team16.png',
    name: 'Nicole Marizan',
    role: 'Co-founder & SEO',
    bio: 'Software Engineer bridging technology and mental health',
    extendedBio: 'Combines technical expertise with a deep understanding of user needs to create impactful digital mental health solutions.',
    expertise: ['Full-Stack Development', 'UX Design', 'AI Integration'],
    linkedin: '#',
    twitter: '#'
  },
  {
    image: 'team8.jpg',
    name: 'Takudzwa Tarutira',
    role: 'Co-founder & CTO',
    bio: 'AI and Machine Learning Engineer pioneering smart mental health solutions',
    extendedBio: 'Leading the technical innovation with focus on AI-powered mental health support systems and predictive analytics.',
    expertise: ['AI/ML', 'Data Science', 'Systems Architecture'],
    linkedin: '#'
  },
  {
    image: 'team15.png',
    name: 'Umukundwa Larissa',
    role: 'Co-founder & CPO',
    bio: 'Mental Health Advocate transforming care delivery',
    extendedBio: 'Passionate about making mental health support accessible to all communities through innovative product solutions.',
    expertise: ['Product Strategy', 'Mental Health Education', 'Community Outreach'],
    twitter: '#'
  },
  {
    image: 'team13.jpg',
    name: 'Bizimana Clement',
    role: 'COO of MINDORA',
    bio: 'Business Operations expert streamlining mental healthcare delivery',
    extendedBio: 'Focuses on operational excellence and scaling mental health services efficiently and effectively.',
    expertise: ['Operations Management', 'Strategy', 'Healthcare Administration'],
    linkedin: '#'
  },
  {
    image: 'team12.jpg',
    name: 'M. Lisa Cynthia',
    role: 'MRO',
    bio: 'Psychologist specializing in research-based interventions',
    extendedBio: 'Leads research initiatives to develop evidence-based mental health interventions and treatment protocols.',
    expertise: ['Clinical Research', 'Treatment Planning', 'Mental Health Assessment'],
    email: '#'
  },
  {
    image: 'team3.jpg',
    name: 'Noella Nizigama',
    role: 'DIO',
    bio: 'Disability & Inclusion Expert ensuring accessible care for all',
    extendedBio: 'Champions inclusive mental health solutions that cater to diverse needs and abilities.',
    expertise: ['Inclusive Design', 'Accessibility', 'Community Integration'],
    linkedin: '#'
  },
  {
    image: 'team9.jpg',
    name: 'Dr. Gahire Hubert',
    role: 'PPO',
    bio: 'Medical Doctor integrating physical and mental healthcare',
    extendedBio: 'Specializes in the intersection of physical and mental health, promoting holistic healthcare approaches.',
    expertise: ['Medical Integration', 'Holistic Health', 'Healthcare Policy'],
    email: '#'
  },
  {
    image: 'team14.jpg',
    name: 'Utuje Benie',
    role: 'Content Creator',
    bio: 'Clinical Psychologist crafting engaging mental health content',
    extendedBio: 'Creates compelling content that makes mental health education accessible and engaging.',
    expertise: ['Content Strategy', 'Mental Health Education', 'Digital Communication'],
    twitter: '#'
  },
  {
    image: 'team7.jpg',
    name: 'Kevin Ishimwe',
    role: 'UX',
    bio: 'Software Engineer focused on user-centered design',
    extendedBio: 'Designs intuitive and empathetic user experiences for digital mental health platforms.',
    expertise: ['UX/UI Design', 'Front-end Development', 'User Research'],
    linkedin: '#'
  },
  {
    image: 'team4.jpg',
    name: 'Muhire Leon Pierre',
    role: 'Marketing Director',
    bio: 'Business & Market Strategist expanding mental health access',
    extendedBio: 'Develops strategic marketing initiatives to increase awareness and accessibility of mental health services.',
    expertise: ['Marketing Strategy', 'Business Development', 'Brand Management'],
    twitter: '#',
    linkedin: '#'
  }
];

export default function TeamSection() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 inline-block mb-4">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our dedicated team of experts is committed to revolutionizing mental health support through innovation and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className={`group relative overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl
                ${expandedMember === member.name ? 'scale-105 z-10' : 'hover:scale-102'}`}
            >
              <CardContent className="p-0">
                {/* Image Container */}
                <div className="relative w-full pt-[75%] overflow-hidden rounded-t-lg bg-gradient-to-br from-purple-100 to-blue-50 dark:from-purple-900 dark:to-blue-900">
                  <div className="absolute inset-0">
                    <Image
                      src={`/images/${member.image}`}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                      style={{
                        position: 'absolute',
                        height: '100%',
                        width: '100%',
                        inset: '0px',
                      }}
                      priority
                    />
                    
                    {/* Enhanced Gradient Overlay */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                      style={{ mixBlendMode: 'multiply' }}
                    />
                    
                    {/* Text Overlay with Better Positioning */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10 bg-gradient-to-t from-black/60 to-transparent">
                      <h3 className="text-lg font-bold text-white leading-tight drop-shadow-sm">
                        {member.name}
                      </h3>
                      <p className="text-sm font-medium text-purple-200 drop-shadow-sm">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="min-h-[4rem]">
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {member.bio}
                    </p>
                  </div>

                  {member.expertise && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex gap-2">
                      {member.linkedin && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-purple-600">
                          <LinkedinIcon className="h-4 w-4" />
                        </Button>
                      )}
                      {member.twitter && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-purple-600">
                          <TwitterIcon className="h-4 w-4" />
                        </Button>
                      )}
                      {member.email && (
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-purple-600">
                          <MailIcon className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    {member.extendedBio && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-purple-600 hover:text-purple-700 dark:text-purple-400 p-2"
                        onClick={() => setExpandedMember(expandedMember === member.name ? null : member.name)}
                      >
                        {expandedMember === member.name ? (
                          <ChevronUpIcon className="h-4 w-4" />
                        ) : (
                          <BookOpenIcon className="h-4 w-4" />
                        )}
                      </Button>
                    )}
                  </div>

                  {expandedMember === member.name && (
                    <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg animate-fadeIn">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {member.extendedBio}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}