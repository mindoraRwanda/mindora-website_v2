import React from 'react';
import { Button } from '@/components/ui/button';
import { LucideChevronRight, LucideDownload, LucidePhone, LucideGlobe } from 'lucide-react'; // Alternative icons
import HeroCarousel from '@/components/HeroCarousel';
import PartnersSection from '@/components/PartnersSection';
import DownloadSection from '@/components/DownloadSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      {/* <div className="relative bg-cover bg-center" style={{ backgroundImage: 'url("/images/hero-bg.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <h1 className="text-5xl font-extrabold text-white mb-4 animate__animated animate__fadeIn">
            Welcome to Mindora Africa
          </h1>
          <p className="text-lg text-white mb-6 animate__animated animate__fadeIn animate__delay-1s">
            Empowering mental well-being with innovative, AI-powered solutions.
          </p>
          <Button className="bg-[#9333EA] text-white hover:bg-[#9333EA]/90 py-3 px-10 rounded-full text-lg shadow-lg transition-transform hover:scale-105">
            Learn More
          </Button>
        </div>
      </div> */}
      <HeroCarousel />

      {/* Features Section */}
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-4xl font-extrabold text-foreground mb-8 animate__animated animate__fadeIn">
          Our Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
            <LucideChevronRight className="text-6xl text-[#9333EA] mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-4">Personalized Support</h3>
            <p className="text-md text-muted-foreground">
              AI-driven solutions tailored to your unique mental health needs, ensuring personalized care every step of the way.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
            <LucideDownload className="text-6xl text-[#9333EA] mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-4">24/7 Access</h3>
            <p className="text-md text-muted-foreground">
              Get access to mental health tools and support anytime, anywhere, right at your fingertips.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform">
            <LucideGlobe className="text-6xl text-[#9333EA] mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-4">Data Security</h3>
            <p className="text-md text-muted-foreground">
              We prioritize your privacy. All your data is secure and encrypted to ensure your peace of mind.
            </p>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <PartnersSection />
       
        {/* Call to Action Section */}
       <div className="bg-[#9333EA] text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 animate__animated animate__fadeIn">
            Ready to Take Control of Your Mental Well-being?
          </h2>
          <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Start your journey with Mindora Africa and access personalized mental health support.
          </p>
          <Button className="bg-white text-[#9333EA] hover:bg-[#9333EA]/90 text-lg py-4 px-10">
            Get Started
          </Button>
        </div>
      </div>

      {/* App Download Section */}
      <DownloadSection />


     
     
    </>
  );
}
