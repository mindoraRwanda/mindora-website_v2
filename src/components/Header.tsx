"use client";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { JSX, SVGProps } from "react";
import { ModeToggle } from "@/components/ModeToggle";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex h-20 w-full items-center px-4 md:px-6 transition-colors ${
        isScrolled
          ? "bg-[#9333EA] text-white shadow-md dark:bg-[#5B21B6]"
          : "bg-transparent text-black dark:text-white"
      }`}
    >
      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={`lg:hidden ${
              isScrolled ? "text-white" : "text-black dark:text-white"
            }`}
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="flex flex-col space-y-4 py-6">
            <MobileNavLink href="/home">Home</MobileNavLink>
            <MobileNavLink href="/about">About us</MobileNavLink>
            <MobileNavLink href="/services">Services</MobileNavLink>
            <MobileNavLink href="/news">News and Articles</MobileNavLink>
            <MobileNavLink href="/contact">Contact us</MobileNavLink>
          </div>
        </SheetContent>
      </Sheet>

      {/* Logo */}
      <Link href="/" className="mr-6 font-bold text-xl">
        <div>MINDORA</div> Africa
      </Link>

      {/* Desktop Navigation */}
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <DesktopNavLink href="/home">Home</DesktopNavLink>
          <DesktopNavLink href="/about">About us</DesktopNavLink>
          <DesktopNavLink href="/services">Services</DesktopNavLink>
          <DesktopNavLink href="/news">News and Articles</DesktopNavLink>
          <DesktopNavLink href="/contact">Contact us</DesktopNavLink>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Actions */}
      <div className="ml-auto flex gap-2">
        <Button
          variant="outline"
          className={`${
            isScrolled ? "text-white border-white" : "text-black border-black dark:text-white dark:border-white"
          }`}
        >
          Download App
        </Button>
        <ModeToggle />
      </div>
    </header>
  );
}

// Helper components for links
function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:underline"
    >
      {children}
    </Link>
  );
}

function DesktopNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="group inline-flex h-9 items-center justify-center px-4 text-sm font-medium transition-colors hover:text-gray-900 focus:text-gray-900 dark:hover:text-gray-100 dark:focus:text-gray-100"
      >
        {children}
      </Link>
    </NavigationMenuLink>
  );
}

// Icons
function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
