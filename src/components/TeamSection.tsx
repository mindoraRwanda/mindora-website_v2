
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  ChevronUpIcon,
  BookOpenIcon,
  Phone,
} from "lucide-react";

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
  phone?: string;
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
    name: 'Umukundwa Larisse',
    role: 'Co-founder & CPO',
    bio: 'Mental Health Advocate transforming care delivery',
    extendedBio: 'Passionate about making mental health support accessible to all communities through innovative product solutions.',
    expertise: ['Product Strategy', 'Mental Health Education', 'Community Outreach'],
    linkedin: 'https://www.linkedin.com/in/umukundwa-larisse-749498244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
  {
    image: 'team13.jpg',
    name: 'Bizimana Clement',
    role: 'COO of MINDORA',
    bio: 'Business Operations expert streamlining mental healthcare delivery',
    extendedBio: "Clement Bizimana is the Chief Operating Officer with a Bachelor's degree in Human Nutrition and Dietetics. He specializes in managing operations and projects across various organizations, including Gardens for Health and Remera Medicalized Health Center. Passionate about human health, environmental health as well ada climate change, Clement is dedicated to making a positive impact in these fields.",
    expertise: ['Operations Management', 'Strategy', 'Healthcare Administration'],
    email: 'clementbizimana3@gmail.com',
    phone: '+250 782 298 879',
    twitter: 'x.com/clement9732'
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
    extendedBio: 'Gahire is a medical student pursuing an MBBS and a Bachelor of Computer Science, combining his passion for medicine and digital health. He serves as the SRHR Consultant and Director of Programs at iMatter Initiative, PPO of MINDORA, Project Coordinator of YEAMG, and University Lead at Health Innovation Toolbox. With extensive leadership experience, he advocates for menstrual health, gender equity, and youth empowerment. His research focuses on Public health, Mental health , and SRHR. Recognized as an ICPD Young Champion, he engages youth through SRHR-focused talks and impactful innovation initiatives',
    expertise: ['Medical Integration', 'Holistic Health', 'Healthcare Policy'],
    linkedin: 'http://www.linkedin.com/in/hubert-gahire-6a881231a'
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
    extendedBio: "A Bachelor's holder in Human Nutrition and Dietetics, specialized in Marketing and Communication from working with The New Times, Inyarwanda, GAERG and TECNO Mobile Rwanda. I'm passionate about human health, communication, politics and leadership",
    expertise: ['Marketing Strategy', 'Business Development', 'Brand Management'],
    email:'leonpierremuhire30@gmail.com',
    phone: '+250 781 726 737',
    twitter: 'x.com/LeonPMuhire',
    linkedin: 'https://www.linkedin.com/in/LeonPierreMuhire/'
  }
];
export default function TeamSection() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const toggleExpanded = (name: string) => {
    setExpandedMember(expandedMember === name ? null : name);
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 overflow-hidden">
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
            Our dedicated team of experts is committed to revolutionizing mental
            health support through innovation and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className={`group relative overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl
                ${
                  expandedMember === member.name
                    ? "scale-105 z-10"
                    : "hover:scale-102"
                }`}
            >
              <CardContent className="p-0">
                <div className="relative w-full pt-[75%] overflow-hidden rounded-t-lg bg-gradient-to-br from-purple-100 to-blue-50 dark:from-purple-900 dark:to-blue-900">
                  <div className="absolute inset-0">
                    <Image
                      src={`/images/${member.image}`}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                      }}
                      priority
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                      style={{ mixBlendMode: "multiply" }}
                    />
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

                  {expandedMember === member.name && member.extendedBio && (
                    <div className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                      {member.extendedBio}
                    </div>
                  )}

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
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-8 w-8 flex justify-center items-center text-purple-600 hover:text-purple-800"
                        >
                          <LinkedinIcon className="h-4 w-4" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-8 w-8 flex justify-center items-center text-blue-400 hover:text-blue-600"
                        >
                          <TwitterIcon className="h-4 w-4" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="h-8 w-8 flex justify-center items-center text-red-600 hover:text-red-800"
                        >
                          <MailIcon className="h-4 w-4" />
                        </a>
                      )}
                      {member.phone && (
                        <a
                          href={`tel:${member.phone}`}
                          className="h-8 w-8 flex justify-center items-center text-green-600 hover:text-green-800"
                        >
                          <Phone className="h-4 w-4" />
                        </a>
                      )}
                    </div>

                    {member.extendedBio && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs flex items-center gap-1"
                        onClick={() => toggleExpanded(member.name)}
                      >
                        {expandedMember === member.name ? (
                          <>
                            Hide <ChevronUpIcon className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            More <BookOpenIcon className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}




