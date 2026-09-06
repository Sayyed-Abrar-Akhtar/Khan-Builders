import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: `Privacy Policy (UK GDPR) | ${siteConfig.name}`,
  description:
    "Privacy Policy for Khan Builders and Electrical Works. Explains how personal data collected via our quote request form is stored and processed under UK GDPR.",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-12 lg:space-y-16 pb-16">
      <section className="bg-ink text-white py-12 lg:py-16 border-b border-concrete/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Link
              href="/"
              className="inline-flex items-center text-xs text-amber hover:underline font-heading font-bold uppercase tracking-wider mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1" />
              Return Home
            </Link>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl uppercase tracking-tight text-white">
              Privacy Policy & Data Notice (UK GDPR)
            </h1>
            <p className="text-sm sm:text-base text-steel/90">
              Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-ink space-y-8">
        <div className="bg-white border border-concrete p-6 sm:p-8 space-y-6 text-sm leading-relaxed">
          <div className="space-y-2">
            <h2 className="font-heading font-bold text-ink text-lg uppercase tracking-tight flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber" />
              1. Overview & Data Controller
            </h2>
            <p className="text-ink/80">
              This Privacy Policy explains how <strong>{siteConfig.name}</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, processes, and protects personal data provided by visitors to our website. We are committed to complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
            <p className="text-ink/80">
              <strong>Data Controller:</strong> {siteConfig.name}<br />
              <strong>Address:</strong> {siteConfig.address.formatted}<br />
              <strong>Contact Email:</strong> {siteConfig.email}<br />
              <strong>Telephone:</strong> {siteConfig.phone.display}
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t border-concrete">
            <h2 className="font-heading font-bold text-ink text-lg uppercase tracking-tight">
              2. Information We Collect
            </h2>
            <p className="text-ink/80">
              When you submit a quote enquiry via our online contact form, we collect the following personal information:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-ink/80">
              <li>Full Name</li>
              <li>Telephone Number</li>
              <li>Email Address</li>
              <li>Preferred contact method (Phone, WhatsApp, Email)</li>
              <li>Project summary, property details, and location notes</li>
            </ul>
          </div>

          <div className="space-y-2 pt-4 border-t border-concrete">
            <h2 className="font-heading font-bold text-ink text-lg uppercase tracking-tight">
              3. Legal Basis for Processing
            </h2>
            <p className="text-ink/80">
              We process your personal data under Article 6(1)(b) of the UK GDPR (&ldquo;processing is necessary for the performance of a contract or to take steps prior to entering into a contract&rdquo;). Your information is used strictly to evaluate your project requirements, communicate with you, and prepare a written quote.
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t border-concrete">
            <h2 className="font-heading font-bold text-ink text-lg uppercase tracking-tight">
              4. Data Sharing & Security
            </h2>
            <p className="text-ink/80">
              We do <strong>not</strong> sell, rent, or trade your personal information to third-party marketing brokers. Your submission is accessed solely by authorized trade personnel at {siteConfig.name} for customer service and project estimating purposes.
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t border-concrete">
            <h2 className="font-heading font-bold text-ink text-lg uppercase tracking-tight">
              5. Data Retention & Your Rights
            </h2>
            <p className="text-ink/80">
              Enquiry data is retained for as long as necessary to fulfill the quote request or maintain active project records. Under UK GDPR, you have the right to request access to your personal data, request rectification of inaccurate data, or request the erasure of your personal records at any time by emailing us at <strong>{siteConfig.email}</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
