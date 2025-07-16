import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";
import TopSection from "@/components/TopSection";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Contact Us",
};

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone />,
      title: "Phone",
      details: "+250 783 974-066",
      subtext: "Monday to Friday, 9am to 5pm",
    },
    {
      icon: <Mail />,
      title: "Email",
      details: "info@mindora.rw",
      subtext: "We'll respond within 24 hours",
    },
    {
      icon: <MapPin />,
      title: "Office",
      details: "123 Innovation Hub, Nyarugenge",
      subtext: "Kigali, Rwanda",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopSection
        backgroundImage="/images/contactbg.jpg"
        title="Let's Connect"
        description="Reach out to learn more about how we can support your mental health journey."
      />

      {/* Contact Information Cards */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-card border-0 p-8 rounded-2xl shadow-lg hover:shadow-xl
                transform transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    {React.cloneElement(info.icon as React.ReactElement, {
                      className: "w-6 h-6 text-primary"
                    })}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{info.title}</h3>
                </div>
                <p className="text-lg font-medium text-foreground mb-3">
                  {info.details}
                </p>
                <p className="text-muted-foreground">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Send Us a Message</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're here to help and answer any questions you might have.
              </p>
            </div>

            <form className="bg-card border-0 p-8 md:p-12 rounded-3xl shadow-xl space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">Your Name</label>
                  <Input
                    id="name"
                    type="text"
                    className="w-full p-4 bg-background border-input rounded-xl text-lg"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">Your Email</label>
                  <Input
                    id="email"
                    type="email"
                    className="w-full p-4 bg-background border-input rounded-xl text-lg"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="institution" className="text-sm font-semibold text-foreground">Institution Affiliation (Optional)</label>
                <Input
                  id="institution"
                  type="text"
                  className="w-full p-4 bg-background border-input rounded-xl text-lg"
                  placeholder="Your Institution"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">Your Message</label>
                <Textarea
                  id="message"
                  className="w-full p-4 bg-background border-input rounded-xl text-lg min-h-[150px]"
                  placeholder="Tell us more about your needs..."
                  required
                />
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 p-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Send Message
              </Button>
            </form>
            <p className="text-sm text-muted-foreground text-center mt-4">
              By submitting this form, you agree to our{" "}
              <a href="/privacy-policy" className="text-primary underline hover:text-primary/80 transition-colors">
                Privacy Policy
              </a>
              . Your information is secure with us.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <FAQ />
      </section>

      {/* Social Links */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Connect With Us</h2>
          <div className="flex justify-center space-x-8">
            {[
              { icon: <Facebook className="w-6 h-6" />, link: "https://facebook.com" },
              { icon: <Twitter className="w-6 h-6" />, link: "https://twitter.com" },
              { icon: <Instagram className="w-6 h-6" />, link: "https://www.instagram.com/mindorarwanda/" },
              { icon: <Linkedin className="w-6 h-6" />, link: "https://www.linkedin.com/company/mindora-rwanda/" },
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
