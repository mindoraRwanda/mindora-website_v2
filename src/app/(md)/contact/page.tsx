 "use client"

import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Clock, ChevronDown, MessageCircle } from 'lucide-react';
import TopSection from '@/components/TopSection';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export default function Contact() {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "How can I get started with Mindora's mental health platform?",
      answer: "Getting started is easy! Simply create an account on our platform, complete a brief assessment, and you'll be matched with the appropriate resources and support options tailored to your needs.",
      category: "Getting Started"
    },
    {
      question: "What type of mental health support does Mindora provide?",
      answer: "We offer a range of AI-powered support services including mood tracking, guided meditation, cognitive behavioral therapy exercises, and connection to licensed mental health professionals when needed.",
      category: "Services"
    },
    {
      question: "Is my information kept confidential?",
      answer: "Yes, absolutely. We take privacy very seriously and adhere to strict data protection standards. All your information is encrypted and stored securely, and we never share your personal data without your explicit consent.",
      category: "Privacy"
    },
    {
      question: "Can I access Mindora's services from my mobile device?",
      answer: "Yes, our platform is fully accessible via web browsers on all devices, and we also offer dedicated mobile apps for both iOS and Android devices.",
      category: "Accessibility"
    },
    {
      question: "What are your operating hours for support?",
      answer: "Our AI-powered platform is available 24/7. For human support, our team is available Monday through Friday, 9:00 AM to 6:00 PM EAT. Emergency support is available 24/7 through our crisis hotline.",
      category: "Support"
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-purple-500" />,
      title: "Phone",
      details: "+250 783 974-066",
      subtext: "Monday to Friday, 9am to 5pm"
    },
    {
      icon: <Mail className="w-6 h-6 text-purple-500" />,
      title: "Email",
      details: "info@mindora.rw",
      subtext: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-500" />,
      title: "Office",
      details: "123 Innovation Hub, Nyarugenge",
      subtext: "Kigali, RWanda"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopSection
        backgroundImage="/images/contactbg.jpg"
        title="Let's Connect"
        description="Reach out to learn more about how we can support your mental health journey."
      />

      {/* Contact Information Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg 
                transform transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-4">
                  {info.icon}
                  <h3 className="text-xl font-semibold">{info.title}</h3>
                </div>
                <p className="text-lg font-medium text-foreground mb-2">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <MessageCircle className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground">
                We&apos;re here to help and answer any questions you might have
              </p>
            </div>
            
            <form className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Name</label>
                  <Input 
                    type="text" 
                    className="w-full p-3 bg-gray-50 dark:bg-gray-700" 
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Email</label>
                  <Input 
                    type="email" 
                    className="w-full p-3 bg-gray-50 dark:bg-gray-700" 
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input 
                  type="text" 
                  className="w-full p-3 bg-gray-50 dark:bg-gray-700" 
                  placeholder="How can we help?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Message</label>
                <Textarea 
                  className="w-full p-3 bg-gray-50 dark:bg-gray-700" 
                  rows={6}
                  placeholder="Tell us more about your needs..."
                />
              </div>
              <Button className="w-full bg-purple-600 text-white hover:bg-purple-700 p-6">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find quick answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full text-left p-6 flex justify-between items-center"
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform ${
                      openFAQ === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                      {faq.category}
                    </div>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Visit Our Office</h2>
              <p className="text-lg text-muted-foreground">
                Come see us in person at our Kigali headquarters
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
               <iframe
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036273116!2d30.03177575829067!3d-1.944165344744954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2s!4v1704391273713!5m2!1sen!2s"
               width="100%"
               height="450"
               style={{ border: 0 }}
               allowFullScreen
               loading="lazy"
               className="rounded-xl shadow-lg"
               ></iframe>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-purple-500" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">123 Innovation Hub, Nyarugenge</p>
                      <p className="text-muted-foreground">Kigali, Rwanda</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-6 h-6 text-purple-500" />
                    <div>
                      <h3 className="font-medium">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday</p>
                      <p className="text-muted-foreground">9:00 AM - 5:00 PM EAT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Connect With Us</h2>
          <div className="flex justify-center space-x-8">
            {[
              { icon: <Facebook className="w-6 h-6" />, link: "https://facebook.com" },
              { icon: <Twitter className="w-6 h-6" />, link: "https://twitter.com" },
              { icon: <Instagram className="w-6 h-6" />, link: "https://instagram.com" },
              { icon: <Linkedin className="w-6 h-6" />, link: "https://linkedin.com" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 
                  dark:hover:text-purple-400 transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}