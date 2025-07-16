import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {

  return (
    <footer className="w-full mt-auto px-6 py-10 md:px-16 lg:px-24 bg-muted text-foreground">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary">MindoraHealth</h2>
          <p className="text-sm">
            At MindoraHealth, we believe that mental health is a key part of living a fulfilled life. We are driven by the mission to provide accessible, AI-powered solutions that help individuals take control of their mental well-being before challenges arise.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
          <ul className="space-y-2">
            <FooterLink href="/home">Home</FooterLink>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/services">Services</FooterLink>
            <FooterLink href="/news">News</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Subscribe</h3>
          <p className="text-sm">
            Stay updated with our latest news and updates. Subscribe to our newsletter!
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-input bg-background px-4 py-2 text-foreground placeholder-muted-foreground"
            />
            <button
              type="submit"
              className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="mt-10 flex flex-col items-center justify-between border-t border-border pt-6 md:flex-row">
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <SocialIcon
            href="https://facebook.com"
            label="Facebook"
            icon={<Facebook />}
          />
          <SocialIcon
            href="https://twitter.com"
            label="Twitter"
            icon={<Twitter />}
          />
          <SocialIcon
            href="https://instagram.com"
            label="Instagram"
            icon={<Instagram />}
          />
          <SocialIcon
            href="https://linkedin.com"
            label="LinkedIn"
            icon={<Linkedin />}
          />
        </div>

        {/* Copyright Notice */}
        <p className="mt-4 text-sm md:mt-0">
          &copy; {new Date().getFullYear()} MindoraHealth. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

// Footer Link Component
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm hover:underline hover:text-primary transition"
      >
        {children}
      </Link>
    </li>
  );
}

// Social Media Icon Component
function SocialIcon({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition"
    >
      {icon}
    </a>
  );
}
