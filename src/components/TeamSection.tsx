import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  { image: 'team1.jpg', name: 'Kwizera Rulinda', role: 'Co-founder & CEO', bio: 'Clinical Psychologist' },
  { image: 'team16.png', name: 'Nicole Marizan', role: 'Co-founder & SEO', bio: 'Software Engineer' },
  { image: 'team8.jpg', name: 'Takudzwa Tarutira', role: 'Co-founder & CTO', bio: 'AI and Machine Learning Engineer' },
  { image: 'team15.png', name: 'Umukundwa Larissa', role: 'Co-founder & CPO', bio: 'Mental Health Advocate' },
  { image: 'team13.jpg', name: 'Bizimana Clement', role: 'COO of MINDORA', bio: 'Business Operations' },
  { image: 'team12.jpg', name: 'M. Lisa Cynthia', role: 'MRO', bio: 'Psychologist' },
  { image: 'team3.jpg', name: 'Noella Nizigama', role: 'DIO', bio: 'Disability & Inclusion Expert' },
  { image: 'team9.jpg', name: 'Dr. Gahire Hubert', role: 'PPO', bio: 'Medical Doctor' },
  { image: 'team14.jpg', name: 'Utuje Benie', role: 'Content Creator', bio: 'Clinical Psychologist' },
  { image: 'team7.jpg', name: 'Kevin Ishimwe', role: 'UX', bio: 'Software Engineer' },
  { image: 'team4.jpg', name: 'Muhire Leon Pierre', role: 'Marketing Director', bio: 'Business & Market Strategist' },
];

export default function TeamSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Meet Our Team
        </h2>
        <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full mb-6" />
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Our dedicated team is here to provide innovative mental health solutions and support.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={`/images/${member.image}`}
                  alt={`${member.name} - ${member.role}`}
                  layout="fill"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600 to-transparent opacity-50 rounded-xl"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{member.name}</h3>
              <p className="text-md text-gray-600 dark:text-gray-300">{member.role}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{member.bio}</p>

              {/* Decorative Hover Effect */}
              <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/10 dark:group-hover:bg-purple-400/10 rounded-2xl transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-8 -left-8 w-16 h-16 bg-purple-200/20 dark:bg-purple-400/10 rounded-full blur-xl" />
        <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-200/20 dark:bg-purple-400/10 rounded-full blur-xl" />
      </div>
    </section>
  );
}