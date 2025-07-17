"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  ChevronUpIcon,
  Phone,
  ArrowRightIcon,
  Users,
} from "lucide-react";
import { getTeamMembers } from "./action";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  extendedBio?: string;
  expertise?: string[];
  linkedin?: string;
  twitter?: string;
  email?: string;
  phone?: string;
}

const predefinedRoleOrder = [
  "Co-founder & CEO",
  "Co-founder & SEO",
  "Co-founder & CTO",
  "Co-founder & CPO",
  "COO of MindoraHealth",
  "MRO",
  "DIO",
  "PPO",
  "Content Creator",
  "UX",
  "Marketing Director",
];

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const toggleExpanded = (name: string) => {
    setExpandedMember(expandedMember === name ? null : name);
  };

  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        const members = await getTeamMembers();
        const formattedMembers = members.map((member) => ({
          name: member.name || "Unknown",
          role: member.role || "Unknown",
          imageUrl: member.imageUrl || "/default-image.png",
          bio: member.bio || "",
          extendedBio: member.description || "",
        }));

        // Sort team members based on predefined role order
        const sortedMembers = formattedMembers.sort((a, b) => {
          const aIndex = predefinedRoleOrder.indexOf(a.role);
          const bIndex = predefinedRoleOrder.indexOf(b.role);
          
          if (aIndex >= 0 && bIndex >= 0) {
            return aIndex - bIndex;
          }
          
          // If only one role is in the predefined order, it comes first
          if (aIndex >= 0) return -1;
          if (bIndex >= 0) return 1;
          
          // If neither role is in the predefined order, sort alphabetically
          return a.role.localeCompare(b.role);
        });

        setTeamMembers(sortedMembers);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    }

    fetchTeamMembers();
  }, []);

  const memberVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Ultra-Modern Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-ping delay-0"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-primary/20 rounded-full animate-ping delay-2000"></div>
        <svg
          className="absolute inset-0 w-full h-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-8">
            <Users className="w-4 h-4" />
            <span>Our Team</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight">
            The Minds Behind{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Our Mission
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our passionate team combines expertise in psychology, technology, and design
            to create meaningful mental health support for everyone.
          </p>
        </motion.div>

        {/* Team members grid - all displayed together */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={memberVariants}
              layoutId={`card-${member.name}`}
            >
              <Card
                className={`
                  group relative overflow-hidden border-0 rounded-3xl
                  ${
                    expandedMember === member.name
                      ? "bg-card shadow-2xl scale-105 z-10"
                      : "bg-card shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  }
                `}
              >
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500" />

                <div className="p-8 relative z-10">
                  <div className="flex flex-col items-center text-center">
                    {/* Professional Profile Image */}
                    <div className="relative w-32 h-32 rounded-2xl overflow-hidden shrink-0 mb-6 group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl p-1">
                        <Image
                          src={member.imageUrl}
                          alt={member.name}
                          fill
                          sizes="128px"
                          className="object-cover rounded-2xl"
                          priority
                        />
                      </div>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                    {/* Professional Member Info */}
                    <div className="w-full">
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
                      <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                        {member.role}
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed mb-6 line-clamp-3">
                        {member.bio}
                      </p>

                      {/* Professional Social Links */}
                      <div className="flex justify-center gap-3">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex justify-center items-center rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                          >
                            <LinkedinIcon className="w-5 h-5" />
                          </a>
                        )}
                        {member.twitter && (
                          <a
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex justify-center items-center rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                          >
                            <TwitterIcon className="w-5 h-5" />
                          </a>
                        )}
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="w-10 h-10 flex justify-center items-center rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                          >
                            <MailIcon className="w-5 h-5" />
                          </a>
                        )}
                        {member.phone && (
                          <a
                            href={`tel:${member.phone}`}
                            className="w-10 h-10 flex justify-center items-center rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                          >
                            <Phone className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {member.extendedBio && (
                    <div className="mt-5">
                      <Button
                        variant="ghost"
                        className={`
                          w-full flex items-center justify-center gap-2 text-sm
                          ${
                            expandedMember === member.name
                              ? "text-white bg-indigo-700/30"
                              : "text-indigo-300 hover:text-white hover:bg-indigo-700/20"
                          }
                        `}
                        onClick={() => toggleExpanded(member.name)}
                      >
                        {expandedMember === member.name ? (
                          <>
                            Hide Details <ChevronUpIcon className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Show Details <ArrowRightIcon className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                      
                      {expandedMember === member.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 text-gray-300 text-sm leading-relaxed"
                        >
                          <div className="bg-slate-800/70 rounded-lg p-4 backdrop-blur-sm border border-indigo-900/50">
                            {member.extendedBio}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}