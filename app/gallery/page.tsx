import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { GalleryGrid } from "@/components/GalleryGrid";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Project Gallery | ${siteConfig.name} — Luton`,
  description:
    "Explore real completed building, electrical rewiring, solar panel, and air conditioning projects by Khan Builders and Electrical Works in Luton and Bedfordshire.",
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <div className="space-y-12 lg:space-y-16 pb-16">
      {/* Page Banner */}
      <section className="bg-ink text-white py-12 lg:py-16 border-b border-concrete/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-circuit/40 border border-circuit px-3 py-1 text-xs text-amber font-heading font-bold uppercase tracking-wider">
              <span>Verified Portfolio</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
              Project Gallery
            </h1>
            <p className="text-base sm:text-lg text-steel/90 leading-relaxed font-normal">
              Real photographs of our building extensions, loft conversions, electrical consumer unit upgrades, solar installations, and air conditioning setups across Luton and Bedfordshire.
            </p>
          </div>
        </div>
      </section>

      {/* Filterable Gallery Grid Component */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryGrid />
      </section>

      {/* CTA Band */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ink text-white p-8 border border-concrete flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl uppercase tracking-tight text-white">
              Like What You See in Our Work?
            </h3>
            <p className="text-xs sm:text-sm text-steel/80">
              Get an accurate written quote for your building, electrical, or air conditioning project in Luton.
            </p>
          </div>
          <Link
            href="/contact#quote"
            className="bg-amber text-ink font-heading font-bold px-6 py-3 text-xs uppercase tracking-wider hover:bg-amber/90 transition-colors shrink-0 inline-flex items-center"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
