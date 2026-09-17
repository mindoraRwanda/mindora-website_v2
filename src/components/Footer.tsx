import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full mt-auto border-t border-border bg-secondary/40 dark:bg-secondary/20 px-6 py-12 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {/* Logo and Description */}
        <div className="space-y-4">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-brand-600 dark:text-brand-400">
            MINDORA Health
            <Heart className="h-5 w-5 fill-calm-500 text-calm-500" />
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            At Mindora, we believe that mental health is a key part of living a fulfilled life. We are driven by the mission to provide accessible, AI-powered solutions that help individuals take control of their mental well-being before challenges arise.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About Us", "Services", "News", "Contact Us"].map(
              (link, index) => (
                <FooterLink key={index} href={`/${link.toLowerCase().replace(/ /g, "-")}`}>
                  {link}
                </FooterLink>
              )
            )}
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Subscribe</h3>
          <p className="text-sm text-muted-foreground">
            Stay updated with our latest news and updates. Subscribe to our newsletter!
          </p>
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-input bg-background px-4 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <SocialIcon href="https://facebook.com" label="Facebook" icon={<Facebook className="h-4 w-4" />} />
          <SocialIcon href="https://twitter.com" label="Twitter" icon={<Twitter className="h-4 w-4" />} />
          <SocialIcon href="https://instagram.com" label="Instagram" icon={<Instagram className="h-4 w-4" />} />
          <SocialIcon href="https://linkedin.com" label="LinkedIn" icon={<Linkedin className="h-4 w-4" />} />
        </div>

        {/* Copyright Notice */}
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} MINDORA Africa. All Rights Reserved.
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
        className="text-sm text-muted-foreground transition hover:text-brand-600 dark:hover:text-brand-400"
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
      className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-muted-foreground shadow-sm transition hover:bg-brand-600 hover:text-white"
    >
      {icon}
    </a>
  );
}
