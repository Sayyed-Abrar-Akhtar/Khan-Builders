"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site-config";
import { Phone, Menu, X, ChevronRight } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-concrete/20 text-white shadow-md">
      {/* Top emergency & contact bar */}
      <div className="bg-ink/90 border-b border-concrete/10 text-xs py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-4 text-concrete">
            <span className="inline-flex items-center text-amber font-medium">
              <span className="w-2 h-2 rounded-full bg-amber animate-pulse mr-1.5" />
              Luton & Bedfordshire Trade Specialists
            </span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">{siteConfig.hours.displayShort}</span>
          </div>

          <div className="flex items-center space-x-4 text-xs">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="inline-flex items-center text-white hover:text-amber transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-amber" />
              <span>{siteConfig.phone.display}</span>
            </a>
            <span className="text-concrete/40">|</span>
            <Link
              href="/contact#quote"
              className="text-amber hover:underline font-semibold"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 bg-amber text-ink font-heading font-extrabold flex items-center justify-center text-xl rounded-none border border-white/20">
              K
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-tight tracking-tight text-white group-hover:text-amber transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-xs text-concrete/80 font-normal">
                Building • Electrical • Air Conditioning
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm font-medium transition-colors relative ${
                    active
                      ? "text-amber font-semibold"
                      : "text-steel hover:text-white"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact#quote"
              className="inline-flex items-center justify-center bg-amber text-ink font-heading font-bold px-4 py-2 text-sm hover:bg-amber/90 transition-colors border border-amber"
            >
              Request Quote
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-steel hover:text-white focus:outline-none focus:ring-2 focus:ring-amber"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ink border-t border-concrete/20 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-base font-medium transition-colors ${
                    active
                      ? "bg-circuit/40 text-amber font-semibold border-l-2 border-amber"
                      : "text-steel hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-concrete/10 space-y-2">
            <a
              href={`tel:${siteConfig.phone.raw}`}
              className="flex items-center justify-center gap-2 w-full bg-circuit/60 text-white font-medium py-2.5 px-4 text-sm border border-circuit hover:bg-circuit"
            >
              <Phone className="w-4 h-4 text-amber" />
              Call {siteConfig.phone.display}
            </a>
            <Link
              href="/contact#quote"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-amber text-ink font-heading font-bold py-2.5 px-4 text-sm hover:bg-amber/90"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
