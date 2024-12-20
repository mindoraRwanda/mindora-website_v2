import React from 'react';
import TopSection from "@/components/TopSection";
import { Button } from '@/components/ui/button';

export default function About() {
  const teamMembers = [
    { name: 'John Doe', role: 'CEO & Founder', image: '/images/team.jpg', bio: 'John is the visionary behind Mindora Africa.' },
    { name: 'Jane Smith', role: 'CTO', image: '/images/team.jpg', bio: 'Jane leads the technology team at Mindora.' },
    { name: 'Michael Johnson', role: 'Lead Psychologist', image: '/images/team.jpg', bio: 'Michael brings psychological expertise to our platform.' },
    { name: 'Sarah Lee', role: 'Product Manager', image: '/images/team.jpg', bio: 'Sarah oversees product development and user experience.' },
    { name: 'David Brown', role: 'Lead Developer', image: '/images/team.jpg', bio: 'David leads the development of our AI tools.' },
    { name: 'Emily Davis', role: 'UI/UX Designer', image: '/images/team.jpg', bio: 'Emily creates intuitive and user-friendly interfaces.' },
    { name: 'James Wilson', role: 'Marketing Director', image: '/images/team.jpg', bio: 'James handles the marketing and outreach efforts for Mindora.' },
    { name: 'Alice Green', role: 'Customer Support Lead', image: '/images/team.jpg', bio: 'Alice ensures our customers have the best experience with Mindora.' },
    { name: 'Tom Harris', role: 'Data Scientist', image: '/images/team.jpg', bio: 'Tom analyzes data to improve our AI predictions.' },
    { name: 'Sophia Lewis', role: 'Operations Manager', image: '/images/team.jpg', bio: 'Sophia streamlines operations to ensure smooth workflows.' },
  ];

  return (
    <>
      {/* Hero Section */}
      <TopSection
        backgroundImage="/images/aboutbg.jpg"
        title="About Us"
        description="Discover the story behind Mindora Africa and our mission to innovate and inspire."
      />

      {/* Our Story Section */}
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-extrabold text-foreground mb-6">
          Our Story
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          At Mindora, we believe that mental health is a key part of living a fulfilled life. We are driven by the mission to
          provide accessible, AI-powered solutions that help individuals take control of their mental well-being before challenges arise.
          Our team is passionate about innovation, empathy, and bringing the best of technology to the world of mental health.
        </p>
      </div>

      {/* Meet Our Team Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-foreground mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-md text-muted-foreground">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-extrabold text-foreground mb-6">Our Core Values</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-60">
            <h3 className="text-2xl font-semibold text-foreground">Innovation</h3>
            <p className="text-md text-muted-foreground">
              We strive to constantly push boundaries and bring new solutions to mental health.
            </p>
          </div>
          <div className="w-60">
            <h3 className="text-2xl font-semibold text-foreground">Empathy</h3>
            <p className="text-md text-muted-foreground">
              We understand the importance of compassion and empathy in every solution we offer.
            </p>
          </div>
          <div className="w-60">
            <h3 className="text-2xl font-semibold text-foreground">Collaboration</h3>
            <p className="text-md text-muted-foreground">
              We work together as a team to achieve our common goal: improving mental well-being for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-foreground mb-6">Milestones</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-60">
              <h3 className="text-2xl font-semibold text-foreground">2015</h3>
              <p className="text-md text-muted-foreground">Founded with a vision to transform mental health care using AI.</p>
            </div>
            <div className="w-60">
              <h3 className="text-2xl font-semibold text-foreground">2018</h3>
              <p className="text-md text-muted-foreground">Launched our first mental health prediction tool.</p>
            </div>
            <div className="w-60">
              <h3 className="text-2xl font-semibold text-foreground">2023</h3>
              <p className="text-md text-muted-foreground">Expanded to serve thousands of users across Africa.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-extrabold text-foreground mb-6">Our Vision</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          We envision a world where mental health support is as accessible and intuitive as possible. Through innovation, empathy, and advanced AI
          technologies, Mindora Africa strives to help individuals manage their mental well-being and build emotional resilience for the future.
        </p>
        <Button className="bg-[#9333EA] text-white hover:bg-[#9333EA]/90 text-lg py-4 px-10 mt-6">
          Join Us on Our Journey
        </Button>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-[#9333EA] text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">Want to Learn More?</h2>
          <p className="text-lg mb-8">Get in touch with us today and discover how we can help you take charge of your mental well-being.</p>
          <Button className="bg-white text-[#9333EA] hover:bg-[#9333EA]/90 text-lg py-4 px-10">
            Contact Us
          </Button>
        </div>
      </div>
    </>
  );
}
