"use client";
import React, { useEffect, useState } from "react";
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
import { getTeamMembers } from "./action";

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
  "COO of MINDORA",
  "MRO",
  "DIO",
  "PPO",
  "Content Creator",
  "UX",
  "Marketing Director",
  // You can add more roles here if needed in the future
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
        setTeamMembers(
          members.map((member) => ({
            name: member.name || "Unknown",
            role: member.role || "Unknown",
            imageUrl: member.imageUrl || "/default-image.png", // Ensure fallback to default image
            bio: member.bio || "",
            extendedBio: member.description || "",
          }))
        );
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    }

    fetchTeamMembers();
  }, []);

  // Group team members by role
  const groupedByRole = teamMembers.reduce((acc, member) => {
    const role = member.role || "Unknown";
    if (!acc[role]) {
      acc[role] = [];
    }
    acc[role].push(member);
    return acc;
  }, {} as Record<string, TeamMember[]>);

  // Sort roles according to predefined order
  const sortedRoles = Object.keys(groupedByRole).sort((a, b) => {
    const aIndex = predefinedRoleOrder.indexOf(a);
    const bIndex = predefinedRoleOrder.indexOf(b);
    return aIndex - bIndex; // Sorting based on predefined order
  });

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

        {/* Render team members grouped by role */}
        {sortedRoles.map((role) => (
          <div key={role} className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-4">{role}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedByRole[role].map((member) => (
                <Card
                  key={member.name}
                  className={`group relative overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transition-all duration-300 hover:shadow-xl
                    ${expandedMember === member.name ? "scale-105 z-10" : "hover:scale-102"}`}
                >
                  <CardContent className="p-0">
                    <div className="relative w-full pt-[75%] overflow-hidden rounded-t-lg bg-gradient-to-br from-purple-100 to-blue-50 dark:from-purple-900 dark:to-blue-900">
                      <div className="absolute inset-0">
                        <Image
                          src={member.imageUrl}
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
        ))}
      </div>
    </section>
  );
}
