import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { QuoteForm } from "@/components/QuoteForm";
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: `Contact & Location | ${siteConfig.name} — Luton`,
  description:
    "Contact Khan Builders and Electrical Works in Luton. Get in touch for building, electrical, and air conditioning quotes, map location, and 24/7 callouts.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="space-y-12 lg:space-y-16 pb-16">
      {/* Page Banner */}
      <section className="bg-ink text-white py-12 lg:py-16 border-b border-concrete/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-circuit/40 border border-circuit px-3 py-1 text-xs text-amber font-heading font-bold uppercase tracking-wider">
              <span>Single Point of Contact</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
              Contact & Quote Request
            </h1>
            <p className="text-base sm:text-lg text-steel/90 leading-relaxed font-normal">
              We operate from Luton, providing general building, electrical safety testing, rewiring, and air conditioning services across Bedfordshire.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details + Quote Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details & NAP Single Source of Truth */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-concrete p-6 sm:p-8 space-y-6">
              <h2 className="font-heading font-extrabold text-ink text-xl uppercase tracking-tight border-b border-concrete pb-3">
                Luton Office & Contact Details
              </h2>

              <ul className="space-y-4 text-sm text-ink">
                <li className="flex items-start space-x-3">
                  <div className="p-2 bg-steel text-amber border border-concrete shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-heading font-bold text-xs uppercase tracking-wider text-ink/70">
                      Official Address
                    </span>
                    <span className="font-medium">{siteConfig.address.formatted}</span>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <div className="p-2 bg-steel text-amber border border-concrete shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-heading font-bold text-xs uppercase tracking-wider text-ink/70">
                      Telephone
                    </span>
                    <a
                      href={`tel:${siteConfig.phone.raw}`}
                      className="font-heading font-bold text-base text-circuit hover:text-amber transition-colors"
                    >
                      {siteConfig.phone.display}
                    </a>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <div className="p-2 bg-steel text-amber border border-concrete shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-heading font-bold text-xs uppercase tracking-wider text-ink/70">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-medium hover:text-amber transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start space-x-3">
                  <div className="p-2 bg-steel text-amber border border-concrete shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-heading font-bold text-xs uppercase tracking-wider text-ink/70">
                      Operating Hours
                    </span>
                    <span className="font-medium">{siteConfig.hours.displayFull}</span>
                  </div>
                </li>
              </ul>

              {/* Quick WhatsApp & Call Buttons */}
              <div className="pt-4 border-t border-concrete space-y-2">
                <a
                  href={`tel:${siteConfig.phone.raw}`}
                  className="w-full bg-amber text-ink font-heading font-bold py-3 px-4 text-xs uppercase tracking-wider hover:bg-amber/90 transition-colors flex items-center justify-center gap-2 border border-amber"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {siteConfig.phone.display}</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.phone.whatsappRaw}?text=Hello%20Khan%20Builders,%20I%20would%20like%20to%20request%20a%20quote.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-circuit text-white font-heading font-bold py-3 px-4 text-xs uppercase tracking-wider hover:bg-circuit/90 transition-colors flex items-center justify-center gap-2 border border-circuit"
                >
                  <MessageSquare className="w-4 h-4 text-amber" />
                  <span>Message via WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="bg-steel border border-concrete p-6 space-y-2">
              <div className="flex items-center gap-2 text-circuit font-heading font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-amber" />
                <span>Service Guarantee</span>
              </div>
              <p className="text-xs text-ink/80 leading-relaxed">
                All enquiries are handled directly by Khan Builders and Electrical Works. We do not pass your details to third-party lead generation websites.
              </p>
            </div>
          </div>

          {/* Form */}
          <div id="quote" className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-concrete p-4 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-heading font-bold text-ink text-sm uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber" />
              Luton Location Map
            </h3>
            <span className="text-xs text-ink/60">
              {siteConfig.address.formatted}
            </span>
          </div>

          <div className="relative aspect-[21/9] w-full bg-steel border border-concrete overflow-hidden">
            <iframe
              title="Khan Builders and Electrical Works Luton Location Map"
              src={siteConfig.address.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
