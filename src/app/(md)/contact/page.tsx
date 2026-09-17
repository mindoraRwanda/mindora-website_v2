import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  User,
  MessageSquare,
  Building2,
} from "lucide-react";
import SignalMark from "@/components/SignalMark";
import TopSection from "@/components/TopSection";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Contact Us",
};

export default function Contact() {
  const contactInfo = [
    {
      title: "Phone",
      details: "+250 783 974-066",
      subtext: "Monday to Friday, 9am to 5pm",
    },
    {
      title: "Email",
      details: "info@mindora.rw",
      subtext: "We'll respond within 24 hours",
    },
    {
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-md border border-border border-l-4 border-l-brand-600
                transition-colors duration-300 hover:border-brand-500"
              >
                <SignalMark className="h-6 w-6 text-brand-600 mb-6" />
                <h3 className="font-display text-xs uppercase tracking-wide text-muted-foreground mb-3">
                  {info.title}
                </h3>
                <p className="text-xl font-semibold text-foreground mb-2">
                  {info.details}
                </p>
                <p className="text-sm text-muted-foreground">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <SignalMark className="h-8 w-8 text-brand-600 mx-auto mb-4" />
              <h2 className="text-4xl mb-4">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground">
                We&apos;re here to help and answer any questions you might have.
              </p>
            </div>

            <form className="bg-card p-8 md:p-10 rounded-md border border-border border-t-4 border-t-brand-600 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  <Input
                    type="text"
                    className="w-full h-auto pl-10 p-3 rounded-md bg-background focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-0"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  <Input
                    type="email"
                    className="w-full h-auto pl-10 p-3 rounded-md bg-background focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-0"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Institution Affiliation (Optional)</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  <Input
                    type="text"
                    className="w-full h-auto pl-10 p-3 rounded-md bg-background focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-0"
                    placeholder="Your Institution"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                  <Textarea
                    className="w-full pl-10 p-3 rounded-md bg-background focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-0"
                    rows={6}
                    placeholder="Tell us more about your needs..."
                    required
                  />
                </div>
              </div>
              <Button className="w-full bg-brand-600 text-white hover:bg-brand-700 rounded-md p-4 h-auto font-display uppercase tracking-wide">
                Send Message
              </Button>
            </form>
            <p className="text-sm text-muted-foreground text-center mt-4">
              By submitting this form, you agree to our{" "}
              <a href="/privacy-policy" className="text-brand-600 underline">
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
      <section className="py-20 bg-ink">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl mb-8 text-paper">Connect With Us</h2>
          <div className="flex justify-center space-x-4">
            {[
              { icon: <Facebook className="w-5 h-5" />, link: "https://facebook.com" },
              { icon: <Twitter className="w-5 h-5" />, link: "https://twitter.com" },
              { icon: <Instagram className="w-5 h-5" />, link: "https://www.instagram.com/mindorarwanda/" },
              { icon: <Linkedin className="w-5 h-5" />, link: "https://www.linkedin.com/company/mindora-rwanda/" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-md border border-paper/20 flex items-center justify-center
                  text-paper/70 hover:bg-brand-600 hover:text-paper hover:border-brand-600 transition-colors duration-300"
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
