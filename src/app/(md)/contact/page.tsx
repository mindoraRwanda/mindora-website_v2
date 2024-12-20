import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import TopSection from '@/components/TopSection';

export default function Contact() {
  return (
    <>
      {/* Top Section - Hero */}
      <TopSection
        backgroundImage="/images/contactbg.jpg"
        title="Get in touch with us"
        description="Explore the cutting-edge solutions we offer to empower your business."
      />

      {/* Contact Form and Details */}
      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Contact Form Section */}
        <section>
          <h2 className="text-4xl font-extrabold tracking-tight mb-8 text-center text-foreground">
            We'd Love to Hear from You!
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {/* Contact Form */}
            <form className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full md:w-1/2 space-y-6">
              <Input type="text" placeholder="Your Name" className="w-full p-4 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-md" />
              <Input type="email" placeholder="Your Email" className="w-full p-4 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-md" />
              <Textarea placeholder="Your Message" className="w-full p-4 bg-gray-100 dark:bg-gray-700 dark:text-white rounded-md" rows={6} />
              <Button
                type="submit"
                className="w-full bg-primary text-white hover:bg-primary/90 dark:bg-black dark:text-white dark:hover:bg-black/90 p-4 rounded-md transition-all"
              >
                Send Message
              </Button>
            </form>

            {/* Social Media Links */}
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition text-3xl"
              >
                <Facebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition text-3xl"
              >
                <Twitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition text-3xl"
              >
                <Instagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition text-3xl"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </section>

        {/* Office Location Section */}
        <section className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight mb-8 text-foreground">
            Visit Our Office
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Map Embed */}
            <div className="md:w-1/2 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.9430479296!2d-0.3817843360992481!3d51.528735199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fdc7c4d13eb%3A0xd308ae9eb64d7e0!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1698054728298!5m2!1sen!2s"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg shadow-xl"
              ></iframe>
            </div>

            {/* Address */}
            <div className="space-y-6 md:w-1/3">
              <div className="flex items-center space-x-4 justify-center md:justify-start">
                <MapPin size={24} />
                <p className="text-lg font-medium text-foreground">
                  123 Creative Street, Innovation City, Techland
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Mon - Fri, 9:00am - 6:00pm
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
