import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site-config";
import { QuoteForm } from "@/components/QuoteForm";
import { AccreditationBadges } from "@/components/AccreditationBadges";
import { CheckCircle2, ArrowLeft, Phone, ShieldCheck, MapPin } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: `${service.title} Luton | ${siteConfig.name}`,
    description: service.shortSummary,
    alternates: {
      canonical: `${siteConfig.url}/services/${service.slug}`,
    },
  };
}

export default function SingleServicePage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-12 lg:space-y-16 pb-16">
      {/* Service Banner */}
      <section className="bg-ink text-white py-12 lg:py-16 border-b border-concrete/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center text-xs text-amber hover:underline font-heading font-bold uppercase tracking-wider mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1" />
              Back to Services Overview
            </Link>

            <div className="inline-block bg-circuit/40 border border-circuit px-3 py-1 text-xs text-amber font-heading font-bold uppercase tracking-wider">
              {service.categoryTitle}
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
              {service.title} in Luton
            </h1>

            <p className="text-base sm:text-lg text-steel/90 leading-relaxed font-normal">
              {service.shortSummary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Content + Side Quote Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Service Description */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative aspect-[16/10] w-full bg-steel border border-concrete overflow-hidden">
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-ink">
              <h2 className="font-heading font-extrabold text-2xl uppercase tracking-tight">
                Service Overview & Practical Delivery
              </h2>
              <p className="text-sm sm:text-base text-ink/80 leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* What is involved */}
            <div className="bg-steel p-6 border-l-4 border-amber space-y-3">
              <h3 className="font-heading font-bold text-ink text-base uppercase tracking-wider">
                What is Involved in this Work?
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-ink/85">
                {service.whatIsInvolved.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-ink text-lg uppercase tracking-wider">
                Why Choose Khan Builders and Electrical Works?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.keyBenefits.map((benefit, idx) => (
                  <div key={idx} className="bg-white border border-concrete p-4 space-y-1">
                    <div className="flex items-center gap-2 text-circuit font-heading font-bold text-xs uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4 text-amber" />
                      <span>Key Advantage</span>
                    </div>
                    <p className="text-xs text-ink/80 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Owner accuracy flag as per brief requirement */}
            {service.ownerReviewNeeded && (
              <p className="text-[11px] text-ink/50 italic">
                {/* TODO: owner to confirm accuracy */}
                * Technical service specifications subject to site survey and building control requirements.
              </p>
            )}
          </div>

          {/* Sticky Sidebar with Quote Form */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <QuoteForm />

            <div className="bg-ink text-white p-6 border border-concrete space-y-3">
              <h4 className="font-heading font-bold text-amber text-sm uppercase tracking-wider">
                Prefer to Call Directly?
              </h4>
              <p className="text-xs text-steel/80">
                Speak directly with our Luton trade team for urgent queries or immediate bookings.
              </p>
              <a
                href={`tel:${siteConfig.phone.raw}`}
                className="inline-flex items-center text-amber font-heading font-extrabold text-lg hover:underline"
              >
                <Phone className="w-4 h-4 mr-2" />
                {siteConfig.phone.display}
              </a>
              <div className="pt-2 text-[11px] text-concrete flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber shrink-0" />
                <span>Serving {siteConfig.serviceArea}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AccreditationBadges />
      </section>
    </div>
  );
}
