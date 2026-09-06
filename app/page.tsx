import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { services, serviceCategories } from "@/content/services";
import { galleryItems } from "@/content/gallery";
import { testimonials } from "@/content/testimonials";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { AccreditationBadges } from "@/components/AccreditationBadges";
import { QuoteForm } from "@/components/QuoteForm";
import { Phone, ChevronRight, CheckCircle2, ShieldCheck, MapPin, ArrowRight } from "lucide-react";

export default function HomePage() {
  const featuredServices = [
    services.find((s) => s.slug === "home-extensions")!,
    services.find((s) => s.slug === "electrical-installations")!,
    services.find((s) => s.slug === "air-conditioning-installation")!,
    services.find((s) => s.slug === "landlord-eicr")!,
    services.find((s) => s.slug === "loft-conversions")!,
    services.find((s) => s.slug === "ev-charging-points")!,
  ];

  const featuredGallery = galleryItems.slice(0, 3);

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* HERO SECTION */}
      <section className="bg-ink text-white pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-concrete/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Asymmetric Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-circuit/40 border border-circuit px-3 py-1 text-xs text-amber font-heading font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-amber" />
                <span>Building • Electrical • Air Conditioning — One Team</span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1] text-white">
                General Building, Certified Electrical, and Air Conditioning Specialists in Luton.
              </h1>

              <p className="text-base sm:text-lg text-steel/90 max-w-2xl leading-relaxed font-normal">
                Khan Builders and Electrical Works brings general construction, certified electrical wiring, and air conditioning under one local, single-source team. No sub-contractor delays — just plain-spoken trade quality across Bedfordshire.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact#quote"
                  className="bg-amber text-ink font-heading font-bold px-6 py-3.5 text-sm uppercase tracking-wider hover:bg-amber/90 transition-colors border border-amber inline-flex items-center"
                >
                  <span>Request a Free Quote</span>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>

                <a
                  href={`tel:${siteConfig.phone.raw}`}
                  className="bg-circuit/60 text-white font-heading font-bold px-6 py-3.5 text-sm uppercase tracking-wider hover:bg-circuit transition-colors border border-circuit/50 inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2 text-amber" />
                  <span>{siteConfig.phone.display}</span>
                </a>
              </div>

              {/* Honest Trust Points (No fabricated counters) */}
              <div className="pt-6 border-t border-concrete/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="block font-heading font-bold text-amber text-sm uppercase tracking-wider">
                    Luton Based
                  </span>
                  <span className="text-concrete">Local single-location trade team</span>
                </div>
                <div>
                  <span className="block font-heading font-bold text-amber text-sm uppercase tracking-wider">
                    Fully Insured
                  </span>
                  <span className="text-concrete">Public liability & property cover</span>
                </div>
                <div>
                  <span className="block font-heading font-bold text-amber text-sm uppercase tracking-wider">
                    Part P & F-Gas
                  </span>
                  <span className="text-concrete">Building control & HVAC compliance</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Image with Corner Bracket Structural Motif */}
            <div className="lg:col-span-5 relative">
              <div className="relative border border-concrete/30 bg-steel p-2">
                {/* Structural corner-bracket marks */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-amber pointer-events-none" />
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-amber pointer-events-none" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-amber pointer-events-none" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-amber pointer-events-none" />

                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src="/images/gallery/01-ua-double-storey-house-extension-1024x.jpg"
                    alt="Completed two-storey house extension built by Khan Builders and Electrical Works in Luton"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover animate-[subtle-zoom_20s_infinite_alternate]"
                  />
                </div>
              </div>

              <div className="mt-3 bg-circuit/40 p-3 text-xs text-concrete border-l-2 border-amber flex items-center justify-between">
                <span>Featured Project: Two-Storey Extension in Luton</span>
                <Link href="/gallery" className="text-amber font-bold hover:underline">
                  View Gallery →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE TRADE CATEGORIES BAND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <h2 className="font-heading font-extrabold text-ink text-2xl sm:text-3xl uppercase tracking-tight">
            Our Three Specialized Trade Pillars
          </h2>
          <p className="text-sm text-ink/70 mt-1">
            We operate as one unified company, eliminating the friction and scheduling delays of coordinating separate building contractors, electricians, and air conditioning installers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCategories.map((cat) => {
            const catImage = cat.id === "building"
              ? "/images/gallery/building-tech-1.jpeg"
              : cat.id === "electrical"
              ? "/images/gallery/vanceelectric-springfield-va-picture-of-electric-tools-1920w.webp"
              : "/images/gallery/703f7372-bbff-4e28-9331-41cb43ea42ef.jpg";

            return (
              <div key={cat.id} className="bg-white border border-concrete p-6 flex flex-col justify-between hover:border-circuit transition-colors">
                <div>
                  <div className="relative aspect-[16/9] w-full bg-steel mb-4 overflow-hidden border border-concrete">
                    <Image
                      src={catImage}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-ink text-xl mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-concrete">
                  <Link
                    href={`/services#${cat.id}`}
                    className="inline-flex items-center text-xs font-heading font-bold text-circuit hover:text-amber uppercase tracking-wider transition-colors"
                  >
                    Explore {cat.title}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURED SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-concrete gap-4">
          <div>
            <h2 className="font-heading font-extrabold text-ink text-2xl sm:text-3xl uppercase tracking-tight">
              Popular Services in Luton & Bedfordshire
            </h2>
            <p className="text-sm text-ink/70 mt-1">
              Handled directly by Khan Builders and Electrical Works with clear quotes and certified completion.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center text-xs font-heading font-bold uppercase tracking-wider text-circuit hover:text-amber transition-colors shrink-0"
          >
            Browse All Services ({services.length}) →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((svc) => (
            <ServiceCard key={svc.slug} service={svc} />
          ))}
        </div>
      </section>

      {/* ACCREDITATION & TRUST BADGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AccreditationBadges />
      </section>

      {/* REAL REVIEWS / TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="font-heading font-extrabold text-ink text-2xl sm:text-3xl uppercase tracking-tight">
            Client Feedback from Luton & Bedfordshire
          </h2>
          <p className="text-sm text-ink/70 mt-1">
            Genuine testimonials from completed building, electrical, and solar installation projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </section>

      {/* RECENT PROJECTS / GALLERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-concrete gap-4">
          <div>
            <h2 className="font-heading font-extrabold text-ink text-2xl sm:text-3xl uppercase tracking-tight">
              Recent Project Photography
            </h2>
            <p className="text-sm text-ink/70 mt-1">
              Real completed jobs across Luton, Dunstable, and Bedfordshire with exact human descriptions.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center text-xs font-heading font-bold uppercase tracking-wider text-circuit hover:text-amber transition-colors shrink-0"
          >
            View Full Project Gallery →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredGallery.map((item) => (
            <div key={item.id} className="bg-white border border-concrete group">
              <div className="relative aspect-[4/3] w-full bg-steel overflow-hidden border-b border-concrete">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-ink/90 text-amber text-[10px] font-heading font-bold uppercase tracking-widest px-2.5 py-1">
                  {item.categoryTitle}
                </span>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-heading font-bold text-ink text-base">
                  {item.title}
                </h3>
                <p className="text-xs text-ink/80 leading-relaxed">
                  {item.caption}
                </p>
                <div className="pt-2 flex items-center text-[11px] text-ink/60">
                  <MapPin className="w-3 h-3 text-amber mr-1" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL QUOTE CTA BAND */}
      <section id="quote" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6 bg-ink text-white p-8 border border-concrete">
            <div className="w-10 h-10 bg-amber text-ink font-heading font-extrabold flex items-center justify-center text-xl">
              K
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-white">
              Ready to Discuss Your Project in Luton?
            </h2>
            <p className="text-sm text-steel/90 leading-relaxed">
              Contact Khan Builders and Electrical Works today. Whether you need a full home extension, an EICR electrical safety report, or an air conditioning system installation, we provide clear written quotes and expert advice.
            </p>

            <div className="space-y-3 pt-2 text-xs border-t border-concrete/20">
              <div className="flex items-center gap-2 text-amber font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Direct trade advice from licensed specialists</span>
              </div>
              <div className="flex items-center gap-2 text-amber font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Single NAP contact details enforced site-wide</span>
              </div>
              <div className="flex items-center gap-2 text-amber font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Transparent pricing with zero hidden surcharges</span>
              </div>
            </div>

            <div className="pt-4 border-t border-concrete/20">
              <p className="text-xs text-concrete mb-1">Direct Telephone Line:</p>
              <a
                href={`tel:${siteConfig.phone.raw}`}
                className="font-heading font-extrabold text-xl text-amber hover:underline"
              >
                {siteConfig.phone.display}
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </section>
    </div>
  );
}
