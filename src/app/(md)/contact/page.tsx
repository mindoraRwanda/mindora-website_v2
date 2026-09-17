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
  User,
  MessageSquare,
  Building2,
} from "lucide-react";
import TopSection from "@/components/TopSection";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Contact Us",
};

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-brand-500" />,
      title: "Phone",
      details: "+250 783 974-066",
      subtext: "Monday to Friday, 9am to 5pm",
    },
    {
      icon: <Mail className="w-6 h-6 text-brand-500" />,
      title: "Email",
      details: "info@mindora.rw",
      subtext: "We'll respond within 24 hours",
    },
    {
      icon: <MapPin className="w-6 h-6 text-brand-500" />,
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
                className="bg-card p-8 rounded-2xl shadow-sm border border-border/50
                transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 dark:bg-brand-950/40 flex items-center justify-center shrink-0">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{info.title}</h3>
                </div>
                <p className="text-lg font-medium text-foreground mb-2">
                  {info.details}
                </p>
                <p className="text-sm text-muted-foreground">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <MessageCircle className="w-12 h-12 text-brand-500 mx-auto mb-4" />
              <h2 className="text-4xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground">
                We&apos;re here to help and answer any questions you might have.
              </p>
            </div>

            <form className="bg-card p-8 md:p-10 rounded-2xl shadow-sm border border-border/50 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  <Input
                    type="text"
                    className="w-full h-auto pl-10 p-3 rounded-xl bg-background focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-0"
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
                    className="w-full h-auto pl-10 p-3 rounded-xl bg-background focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-0"
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
                    className="w-full h-auto pl-10 p-3 rounded-xl bg-background focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-0"
                    placeholder="Your Institution"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Your Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground pointer-events-none" />
                  <Textarea
                    className="w-full pl-10 p-3 rounded-xl bg-background focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-0"
                    rows={6}
                    placeholder="Tell us more about your needs..."
                    required
                  />
                </div>
              </div>
              <Button className="w-full bg-brand-600 text-white hover:bg-brand-700 rounded-xl p-4 h-auto shadow-sm">
                Send Message
              </Button>
            </form>
            <p className="text-sm text-muted-foreground text-center mt-4">
              By submitting this form, you agree to our{" "}
              <a href="/privacy-policy" className="text-brand-500 underline">
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
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
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
                className="w-11 h-11 rounded-full bg-card shadow-sm flex items-center justify-center
                  text-stone-600 hover:text-brand-600 dark:text-stone-400
                  dark:hover:text-brand-400 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
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
