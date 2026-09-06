import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { services, serviceCategories, ServiceCategory } from "@/content/services";
import { ServiceCard } from "@/components/ServiceCard";
import { ArrowRight, Hammer, Zap, Wind } from "lucide-react";

export const metadata: Metadata = {
  title: `Services Overview | ${siteConfig.name} — Luton`,
  description:
    "Explore complete building, electrical, and air conditioning services offered by Khan Builders and Electrical Works in Luton, Dunstable, and Bedfordshire.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  const getCategoryIcon = (catId: ServiceCategory) => {
    switch (catId) {
      case "building":
        return <Hammer className="w-5 h-5 text-amber" />;
      case "electrical":
        return <Zap className="w-5 h-5 text-amber" />;
      case "air-conditioning":
        return <Wind className="w-5 h-5 text-amber" />;
    }
  };

  return (
    <div className="space-y-12 lg:space-y-16 pb-16">
      {/* Page Banner */}
      <section className="bg-ink text-white py-12 lg:py-16 border-b border-concrete/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-circuit/40 border border-circuit px-3 py-1 text-xs text-amber font-heading font-bold uppercase tracking-wider">
              <span>Trade Offerings</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
              Our Professional Services
            </h1>
            <p className="text-base sm:text-lg text-steel/90 leading-relaxed font-normal">
              Integrated building construction, certified electrical works, and climate control air conditioning for domestic homeowners, landlords, and commercial properties across Luton.
            </p>
          </div>
        </div>
      </section>

      {/* Services grouped by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {serviceCategories.map((cat) => {
          const catServices = services.filter((s) => s.category === cat.id);

          return (
            <section id={cat.id} key={cat.id} className="scroll-mt-24 space-y-6">
              <div className="flex items-center justify-between border-b-2 border-amber pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-ink text-amber border border-concrete/20">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div>
                    <h2 className="font-heading font-extrabold text-ink text-2xl sm:text-3xl uppercase tracking-tight">
                      {cat.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-ink/70 mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {catServices.map((svc) => (
                  <ServiceCard key={svc.slug} service={svc} />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA Band */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ink text-white p-8 border border-concrete flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-heading font-extrabold text-2xl uppercase tracking-tight text-white">
              Need Advice on a Specific Project?
            </h3>
            <p className="text-xs sm:text-sm text-steel/80">
              Speak directly with Khan Builders and Electrical Works to discuss scope, building regulations, or site surveys.
            </p>
          </div>
          <Link
            href="/contact#quote"
            className="bg-amber text-ink font-heading font-bold px-6 py-3 text-xs uppercase tracking-wider hover:bg-amber/90 transition-colors shrink-0 inline-flex items-center"
          >
            <span>Request Quote</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
