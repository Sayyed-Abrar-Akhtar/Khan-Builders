"use client";

import { useState } from "react";
import { services } from "@/content/services";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceNeeded: services[0].title,
    message: "",
    preferredContact: "phone",
    websiteUrl: "", // Honeypot
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceNeeded: services[0].title,
        message: "",
        preferredContact: "phone",
        websiteUrl: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "An unexpected error occurred.";
      setErrorMessage(message);
    }
  };

  return (
    <div className="bg-white border border-concrete p-6 sm:p-8 relative">
      <div className="mb-6">
        <h3 className="font-heading font-extrabold text-ink text-xl sm:text-2xl uppercase tracking-tight">
          Request a Detailed Quote
        </h3>
        <p className="text-sm text-ink/70 mt-1">
          Tell us about your project in Luton or surrounding Bedfordshire areas. We will review your enquiry and contact you promptly with an honest estimate.
        </p>
      </div>

      {status === "success" ? (
        <div className="bg-steel border-2 border-circuit/40 p-6 text-center space-y-4">
          <div className="w-12 h-12 bg-circuit text-white flex items-center justify-center mx-auto rounded-none">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="font-heading font-bold text-ink text-xl">
            Enquiry Received Successfully
          </h4>
          <p className="text-sm text-ink/80 max-w-md mx-auto">
            Thank you for contacting Khan Builders and Electrical Works. Our team will review your project details and contact you via your preferred method ({formData.preferredContact}).
          </p>
          <div className="pt-2">
            <button
              onClick={() => setStatus("idle")}
              type="button"
              className="bg-amber text-ink font-heading font-bold px-6 py-2.5 text-xs uppercase tracking-wider hover:bg-amber/90 transition-colors"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field (hidden from normal users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="websiteUrl">Do not fill this out</label>
            <input
              type="text"
              id="websiteUrl"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs font-heading font-bold text-ink uppercase tracking-wider mb-1">
                Full Name <span className="text-amber">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. David Miller"
                className="w-full bg-steel border border-concrete px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-circuit focus:ring-1 focus:ring-circuit"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-heading font-bold text-ink uppercase tracking-wider mb-1">
                Phone Number <span className="text-amber">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 07700 900000"
                className="w-full bg-steel border border-concrete px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-circuit focus:ring-1 focus:ring-circuit"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-heading font-bold text-ink uppercase tracking-wider mb-1">
                Email Address <span className="text-amber">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. david@example.co.uk"
                className="w-full bg-steel border border-concrete px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-circuit focus:ring-1 focus:ring-circuit"
              />
            </div>

            <div>
              <label htmlFor="serviceNeeded" className="block text-xs font-heading font-bold text-ink uppercase tracking-wider mb-1">
                Service Required <span className="text-amber">*</span>
              </label>
              <select
                id="serviceNeeded"
                name="serviceNeeded"
                value={formData.serviceNeeded}
                onChange={handleChange}
                className="w-full bg-steel border border-concrete px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-circuit focus:ring-1 focus:ring-circuit"
              >
                {services.map((svc) => (
                  <option key={svc.slug} value={svc.title}>
                    {svc.categoryTitle} — {svc.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="preferredContact" className="block text-xs font-heading font-bold text-ink uppercase tracking-wider mb-1">
              Preferred Contact Method
            </label>
            <div className="flex items-center space-x-6 py-1 text-sm text-ink">
              <label className="inline-flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value="phone"
                  checked={formData.preferredContact === "phone"}
                  onChange={handleChange}
                  className="accent-amber"
                />
                <span>Phone Call</span>
              </label>
              <label className="inline-flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value="whatsapp"
                  checked={formData.preferredContact === "whatsapp"}
                  onChange={handleChange}
                  className="accent-amber"
                />
                <span>WhatsApp</span>
              </label>
              <label className="inline-flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="preferredContact"
                  value="email"
                  checked={formData.preferredContact === "email"}
                  onChange={handleChange}
                  className="accent-amber"
                />
                <span>Email</span>
              </label>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-heading font-bold text-ink uppercase tracking-wider mb-1">
              Project Summary & Property Location <span className="text-amber">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe your requirements (e.g. extension dimensions, EICR inspection urgency, AC unit room size, property location in Luton)..."
              className="w-full bg-steel border border-concrete px-3.5 py-2.5 text-sm text-ink focus:outline-none focus:border-circuit focus:ring-1 focus:ring-circuit"
            />
          </div>

          {status === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-3 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-amber text-ink font-heading font-bold py-3 px-6 text-sm uppercase tracking-wider hover:bg-amber/90 transition-colors flex items-center justify-center gap-2 border border-amber disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Quote Request</span>
              </>
            )}
          </button>

          <p className="text-[11px] text-ink/60 text-center">
            By submitting this form, you agree to our{" "}
            <a href="/privacy-policy" className="underline hover:text-ink">
              Privacy Policy (UK GDPR)
            </a>. Your data is used solely to respond to your quote request.
          </p>
        </form>
      )}
    </div>
  );
}
