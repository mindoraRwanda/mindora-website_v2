"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(darkMode);
  }, []);

  return (
    <footer
      className={`w-full mt-auto px-6 py-10 md:px-16 lg:px-24 ${
        isDarkMode ? "bg-[#1e1e2f] text-gray-300" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#9333EA]">MINDORA Health</h2>
          <p className="text-sm">
            At Mindora, we believe that mental health is a key part of living a fulfilled life. We are driven by the mission to provide accessible, AI-powered solutions that help individuals take control of their mental well-being before challenges arise.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#9333EA]">Quick Links</h3>
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
          <h3 className="text-lg font-semibold text-[#9333EA]">Subscribe</h3>
          <p className="text-sm">
            Stay updated with our latest news and updates. Subscribe to our newsletter!
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full rounded-md border px-4 py-2 ${
                isDarkMode
                  ? "border-gray-700 bg-[#1a1a29] text-gray-300 placeholder-gray-500"
                  : "border-gray-300 bg-white text-gray-800 placeholder-gray-500"
              }`}
            />
            <button
              type="submit"
              className="rounded-md bg-[#9333EA] px-4 py-2 text-white hover:bg-[#7E22CE] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="mt-10 flex flex-col items-center justify-between border-t border-gray-300 dark:border-gray-600 pt-6 md:flex-row">
        {/* Social Media Links */}
        <div className="flex space-x-4">
          <SocialIcon
            href="https://facebook.com"
            label="Facebook"
            icon={<Facebook />}
            isDarkMode={isDarkMode}
          />
          <SocialIcon
            href="https://twitter.com"
            label="Twitter"
            icon={<Twitter />}
            isDarkMode={isDarkMode}
          />
          <SocialIcon
            href="https://instagram.com"
            label="Instagram"
            icon={<Instagram />}
            isDarkMode={isDarkMode}
          />
          <SocialIcon
            href="https://linkedin.com"
            label="LinkedIn"
            icon={<Linkedin />}
            isDarkMode={isDarkMode}
          />
        </div>

        {/* Copyright Notice */}
        <p className="mt-4 text-sm md:mt-0">
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
        className="text-sm hover:underline hover:text-[#9333EA] transition"
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
  isDarkMode,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  isDarkMode: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`flex h-10 w-10 items-center justify-center rounded-full ${
        isDarkMode ? "bg-[#2c2c3d] text-gray-300" : "bg-gray-200 text-gray-800"
      } hover:bg-[#9333EA] hover:text-white transition`}
    >
      {icon}
    </a>
  );
}
