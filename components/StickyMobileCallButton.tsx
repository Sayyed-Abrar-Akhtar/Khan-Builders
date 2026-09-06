"use client";

import { siteConfig } from "@/content/site-config";
import { Phone, MessageSquare } from "lucide-react";

export function StickyMobileCallButton() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-ink/95 backdrop-blur-md border-t border-concrete/20 p-2.5 shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${siteConfig.phone.raw}`}
          className="flex items-center justify-center gap-2 bg-amber text-ink font-heading font-bold py-2.5 px-3 text-xs uppercase tracking-wider hover:bg-amber/90 transition-colors"
        >
          <Phone className="w-4 h-4 fill-ink" />
          <span>Call Us Now</span>
        </a>

        <a
          href={`https://wa.me/${siteConfig.phone.whatsappRaw}?text=Hello%20Khan%20Builders,%20I%20would%20like%20to%20request%20a%20quote.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-circuit text-white font-heading font-bold py-2.5 px-3 text-xs uppercase tracking-wider hover:bg-circuit/90 transition-colors border border-circuit/30"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </div>
  );
}
