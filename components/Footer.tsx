import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-steel border-t border-concrete/20">
      {/* Trade Accreditation & Quality Banner */}
      <div className="bg-circuit/30 border-b border-concrete/10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="p-2 bg-amber/10 border border-amber/30 text-amber shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="font-heading font-bold text-white text-sm sm:text-base">
                Fully Licensed & Insured Local Trade Specialists
              </p>
              <p className="text-xs text-concrete">
                Compliant with UK Building Regulations (Part P & Part L) and F-Gas handling standards across Luton & Bedfordshire.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <Link
              href="/contact#quote"
              className="inline-flex items-center text-xs font-heading font-bold uppercase tracking-wider text-amber hover:text-white transition-colors"
            >
              Verify Credentials / Request Inspection
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Col 1: Business Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber text-ink font-heading font-extrabold flex items-center justify-center text-lg">
                K
              </div>
              <span className="font-heading font-bold text-white text-lg">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-concrete leading-relaxed">
              Single-source local trade business serving Luton, Dunstable, Harpenden, and Bedfordshire. We bring building construction, certified electrical work, and climate-control air conditioning together under one roof.
            </p>
            <div className="pt-2 text-xs text-concrete/80">
              <p className="font-semibold text-white">Canonical Name:</p>
              <p>{siteConfig.name}</p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-amber pl-2">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-amber transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber transition-colors">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-amber transition-colors">
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber transition-colors">
                  Contact & Location
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-amber transition-colors">
                  Privacy Policy (UK GDPR)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-amber pl-2">
              Core Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/services/new-builds" className="hover:text-amber transition-colors">
                  New Builds & Home Extensions
                </Link>
              </li>
              <li>
                <Link href="/services/loft-conversions" className="hover:text-amber transition-colors">
                  Loft Conversions & Roofing
                </Link>
              </li>
              <li>
                <Link href="/services/electrical-installations" className="hover:text-amber transition-colors">
                  Electrical Rewiring & Consumer Units
                </Link>
              </li>
              <li>
                <Link href="/services/landlord-eicr" className="hover:text-amber transition-colors">
                  Landlord EICR Safety Testing
                </Link>
              </li>
              <li>
                <Link href="/services/ev-charging-points" className="hover:text-amber transition-colors">
                  EV Charger Installation
                </Link>
              </li>
              <li>
                <Link href="/services/air-conditioning-installation" className="hover:text-amber transition-colors">
                  Air Conditioning Install & Servicing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Single Source of Truth */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-amber pl-2">
              Contact Information
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                <span>{siteConfig.address.formatted}</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-amber shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.raw}`}
                  className="hover:text-amber transition-colors font-semibold"
                >
                  {siteConfig.phone.display}
                </a>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-amber shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-amber transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Clock className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                <span>{siteConfig.hours.displayShort}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="mt-12 pt-8 border-t border-concrete/10 flex flex-col sm:flex-row justify-between items-center text-xs text-concrete/70 gap-4">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Luton Office Map
            </Link>
            <span>•</span>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
