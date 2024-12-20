import React from 'react';
import TopSection from "@/components/TopSection";
import { Button } from '@/components/ui/button';

export default function Services() {
  const services = [
    {
      title: 'Predictive Mental Health Solutions',
      description:
        'Mindora uses AI to predict mental health challenges before they arise, helping you take proactive steps toward your well-being.',
      image: '/images/service1.jpg',
      link: '/services/predictive',
    },
    {
      title: 'Preventive Therapy Programs',
      description:
        'Our preventive therapy programs are designed to help you avoid mental health issues and stay emotionally resilient.',
      image: '/images/service2.jpg',
      link: '/services/preventive',
    },
    {
      title: 'Emotional Resilience Tools',
      description:
        'Mindora offers a variety of tools to help you build emotional resilience and cope with stress, anxiety, and other challenges.',
      image: '/images/service3.jpg',
      link: '/services/resilience',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <TopSection
        backgroundImage="/images/servicbg.jpg"
        title="Our Services"
        description="Explore the cutting-edge solutions we offer to empower your mental health and well-being."
      />

      {/* Services Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-extrabold text-center text-foreground mb-12">
          Services to Enhance Your Mental Well-being
        </h2>

        {/* Service Cards - 2-Column Layout */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center gap-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl p-6"
            >
              {/* Left: Image Section */}
              <div className="lg:w-1/2 w-full overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Right: Text Section */}
              <div className="lg:w-1/2 w-full space-y-6">
                <h3 className="text-2xl font-bold text-foreground dark:text-black hover:text-[#9333EA] transition-all">
                  {service.title}
                </h3>
                <p className="text-muted-foreground dark:text-gray-400">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className="bg-[#9333EA] text-white hover:bg-[#9333EA]/90 text-base w-full mt-4 transform transition-all hover:scale-105 text-center py-2 px-4 rounded-lg"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="flex justify-center mt-12">
          <Button className="bg-[#9333EA] text-white hover:bg-[#9333EA]/90 text-lg py-4 px-10">
            Get Started with Mindora
          </Button>
        </div>
      </div>
    </>
  );
}
