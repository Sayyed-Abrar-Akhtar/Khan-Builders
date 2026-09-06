import Link from "next/link";
import { Home, Phone } from "lucide-react";
import { siteConfig } from "@/content/site-config";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white border border-concrete p-8 text-center space-y-6">
        <div className="w-12 h-12 bg-amber text-ink font-heading font-extrabold flex items-center justify-center text-2xl mx-auto">
          404
        </div>

        <div className="space-y-2">
          <h1 className="font-heading font-extrabold text-ink text-2xl uppercase tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-ink/75 leading-relaxed">
            The page or project route you requested could not be located. It may have been moved or renamed.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto bg-amber text-ink font-heading font-bold px-5 py-2.5 text-xs uppercase tracking-wider hover:bg-amber/90 transition-colors inline-flex items-center justify-center border border-amber"
          >
            <Home className="w-4 h-4 mr-1.5" />
            <span>Return to Home</span>
          </Link>

          <a
            href={`tel:${siteConfig.phone.raw}`}
            className="w-full sm:w-auto bg-circuit text-white font-heading font-bold px-5 py-2.5 text-xs uppercase tracking-wider hover:bg-circuit/90 transition-colors inline-flex items-center justify-center border border-circuit"
          >
            <Phone className="w-4 h-4 mr-1.5 text-amber" />
            <span>Call Luton Office</span>
          </a>
        </div>
      </div>
    </div>
  );
}
