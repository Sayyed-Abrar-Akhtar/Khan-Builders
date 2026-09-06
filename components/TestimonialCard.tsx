import { Testimonial } from "@/content/testimonials";
import { Star, Quote } from "lucide-react";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-steel p-6 sm:p-8 flex flex-col justify-between relative border-l-4 border-amber">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex text-amber">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber stroke-amber" />
            ))}
          </div>
          <Quote className="w-8 h-8 text-concrete shrink-0" />
        </div>

        <p className="text-sm text-ink leading-relaxed font-normal">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-concrete flex items-center justify-between">
        <div>
          <h4 className="font-heading font-bold text-ink text-sm sm:text-base">
            {testimonial.name}
          </h4>
          <p className="text-xs text-ink/70">{testimonial.roleOrLocation}</p>
        </div>
        <div className="text-right">
          <span className="inline-block bg-circuit/10 text-circuit border border-circuit/20 text-[10px] font-mono px-2 py-0.5">
            {testimonial.servicesProvided}
          </span>
        </div>
      </div>
    </div>
  );
}
