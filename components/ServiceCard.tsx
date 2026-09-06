import Image from "next/image";
import Link from "next/link";
import { Service } from "@/content/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group bg-white border border-concrete flex flex-col justify-between hover:border-circuit/60 transition-all">
      <div>
        {/* Image Header */}
        <div className="relative aspect-[16/10] w-full bg-steel overflow-hidden border-b border-concrete">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3 bg-ink/90 text-amber text-[10px] font-heading font-bold uppercase tracking-widest px-2.5 py-1 border border-concrete/20">
            {service.categoryTitle}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-3">
          <h3 className="font-heading font-extrabold text-ink text-lg sm:text-xl group-hover:text-circuit transition-colors">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-ink/75 leading-relaxed line-clamp-3">
            {service.shortSummary}
          </p>

          <div className="pt-2 border-t border-concrete/50">
            <ul className="space-y-1.5">
              {service.whatIsInvolved.slice(0, 2).map((item, idx) => (
                <li key={idx} className="flex items-start text-xs text-ink/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber shrink-0 mr-1.5 mt-0.5" />
                  <span className="line-clamp-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer CTA Link */}
      <div className="p-5 sm:p-6 pt-0 mt-auto">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center text-xs font-heading font-bold text-circuit group-hover:text-amber uppercase tracking-wider transition-colors pt-3 border-t border-concrete w-full justify-between"
        >
          <span>View Detailed Service Information</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
