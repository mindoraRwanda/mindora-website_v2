"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigationItems = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/services", label: "Services" },
    { href: "/news", label: "Our Impact" },
    { href: "/career", label: "Careers" },
    { href: "/contact", label: "Contact us" }
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-lg bg-background/80 shadow-sm border-b border-border/60 h-16"
          : "bg-transparent h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden relative"
            >
              {isMobileOpen ? (
                <X className="h-6 w-6 transition-transform duration-200" />
              ) : (
                <Menu className="h-6 w-6 transition-transform duration-200" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80">
            <div className="mt-8 flex flex-col space-y-6">
              {navigationItems.map((item) => (
                <MobileNavLink
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </MobileNavLink>
              ))}
              <Button asChild className="w-full rounded-full bg-brand-600 hover:bg-brand-700 text-white">
                <Link href="https://app.mindora.rw/">
                  Access the App
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>

      
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-calm-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative font-bold text-2xl bg-gradient-to-r from-brand-600 to-calm-600 text-transparent bg-clip-text">
              MINDORA
              <span className="absolute -top-1 -right-1">
                <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse" />
              </span>
            </div>
          </div>
          <span className="text-sm font-medium text-stone-600 dark:text-stone-300">Health</span>
        </Link>

        
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex space-x-1">
            {navigationItems.map((item) => (
              <DesktopNavLink
                key={item.href}
                href={item.href}
                isActive={activeLink === item.href}
                onMouseEnter={() => setActiveLink(item.href)}
                onMouseLeave={() => setActiveLink("")}
              >
                {item.label}
              </DesktopNavLink>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button
            asChild
            variant="default"
            className={`hidden md:inline-flex rounded-full bg-gradient-to-r from-brand-600 to-calm-600
              hover:from-brand-700 hover:to-calm-700 text-white transform transition-all
              duration-300 hover:scale-105 shadow-md hover:shadow-lg shadow-brand-600/20 ${
              isScrolled ? "py-2" : "py-3"
            }`}
          >
            <Link href="https://app.mindora.rw/">
              Access the App
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

function MobileNavLink({ href, children, onClick }: { 
  href: string; 
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center space-x-2 text-lg font-medium text-stone-700 dark:text-stone-200 
        hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-200 
        group relative py-2"
    >
      <span className="absolute left-0 w-0 h-0.5 bg-brand-600 group-hover:w-full transition-all duration-300" />
      {children}
      <ChevronDown className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 
        group-hover:translate-x-0 transition-all duration-300" />
    </Link>
  );
}

function DesktopNavLink({ 
  href, 
  children, 
  isActive,
  onMouseEnter,
  onMouseLeave 
}: { 
  href: string; 
  children: React.ReactNode;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className={`relative group px-4 py-2 rounded-full transition-all duration-300
          ${isActive 
            ? 'text-brand-600 dark:text-brand-400' 
            : 'text-stone-700 dark:text-stone-200'
          }`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span className="relative z-10">{children}</span>
        <span className={`absolute inset-0 bg-brand-100 dark:bg-brand-900/40 
          rounded-full scale-0 group-hover:scale-100 transition-transform 
          duration-300 ease-out ${isActive ? 'scale-100' : ''}`} 
        />
      </Link>
    </NavigationMenuLink>
  );
}

