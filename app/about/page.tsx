import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { AccreditationBadges } from "@/components/AccreditationBadges";
import { MapPin, Phone, Mail, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name} — Luton Trade Specialists`,
  description:
    "Learn about Khan Builders and Electrical Works in Luton. Single-source local contractor providing general building, certified electrical installations, and air conditioning.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="space-y-12 lg:space-y-16 pb-16">
      {/* Header Banner */}
      <section className="bg-ink text-white py-12 lg:py-16 border-b border-concrete/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-circuit/40 border border-circuit px-3 py-1 text-xs text-amber font-heading font-bold uppercase tracking-wider">
              <span>Local Trade Expertise</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
              About Khan Builders and Electrical Works
            </h1>
            <p className="text-base sm:text-lg text-steel/90 leading-relaxed font-normal">
              Based in Luton, we bring general building construction, certified electrical services, and climate control air conditioning under one local, experienced team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Real Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading font-extrabold text-ink text-2xl sm:text-3xl uppercase tracking-tight">
              One Unified Team for Building, Wiring, and Climate Control
            </h2>

            <p className="text-sm sm:text-base text-ink/80 leading-relaxed">
              At Khan Builders and Electrical Works, we provide expert building and electrical solutions across Luton and surrounding Bedfordshire towns. Rather than hiring separate sub-contractors for groundwork, bricklaying, fuse box wiring, and AC fitting, our integrated team manages every trade discipline seamlessly.
            </p>

            <p className="text-sm sm:text-base text-ink/80 leading-relaxed">
              We specialize in new builds, house extensions, loft conversions, full property rewires, landlord EICR safety testing, solar panel installations, and air conditioning servicing. Our direct hands-on approach ensures clear communication, safety compliance, and on-time project completion.
            </p>

            <div className="bg-steel p-6 border-l-4 border-amber space-y-3">
              <h3 className="font-heading font-bold text-ink text-base uppercase tracking-wide">
                Our Core Trade Commitments
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-ink/85">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0" />
                  <span>Strict UK Building Regs (Part P & L)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0" />
                  <span>NICEIC / NAPIT Aligned Wiring Safety</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0" />
                  <span>F-Gas Handling for AC Refrigerants</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber shrink-0" />
                  <span>Transparent Written Cost Quotes</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="relative border border-concrete bg-steel p-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/gallery/vanceelectric-springfield-va-picture-of-electric-tools-1920w.webp"
                  alt="Khan Builders and Electrical Works tools and equipment prepared for a project in Luton"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-ink text-white p-6 border border-concrete space-y-3">
              <h3 className="font-heading font-bold text-amber text-sm uppercase tracking-wider">
                Luton Office Contact Details
              </h3>
              <ul className="space-y-2 text-xs text-steel/90">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                  <span>{siteConfig.address.formatted}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber shrink-0" />
                  <span>{siteConfig.phone.display}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber shrink-0" />
                  <span>{siteConfig.email}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AccreditationBadges />
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-circuit/20 border border-circuit/40 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-extrabold text-ink text-xl sm:text-2xl uppercase tracking-tight">
              Planning a Construction, Electrical, or AC Project?
            </h3>
            <p className="text-xs sm:text-sm text-ink/80 mt-1">
              Talk directly with our local trade team in Luton for practical advice and a clear written estimate.
            </p>
          </div>
          <Link
            href="/contact#quote"
            className="bg-amber text-ink font-heading font-bold px-6 py-3 text-xs uppercase tracking-wider hover:bg-amber/90 transition-colors shrink-0 inline-flex items-center border border-amber"
          >
            <span>Request Free Quote</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
