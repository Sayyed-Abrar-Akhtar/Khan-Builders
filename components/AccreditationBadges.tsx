import { ShieldCheck, Award, Zap, CheckCircle2 } from "lucide-react";

export function AccreditationBadges() {
  const badges = [
    {
      title: "NICEIC / NAPIT Aligned",
      description: "Qualified Electrical Safety Standard",
      icon: ShieldCheck,
      placeholderText: "ELECTRICAL SAFETY",
    },
    {
      title: "TrustMark Quality",
      description: "Government Endorsed Standards",
      icon: Award,
      placeholderText: "QUALITY ASSURED",
    },
    {
      title: "Part P Registered",
      description: "Building Control Compliant",
      icon: Zap,
      placeholderText: "BUILDING CONTROL",
    },
    {
      title: "F-Gas Certified",
      description: "Safe Refrigerant Handling",
      icon: CheckCircle2,
      placeholderText: "HVAC CERTIFIED",
    },
  ];

  return (
    <div className="relative border border-concrete bg-white p-6 md:p-8">
      {/* Structural corner bracket marks */}
      <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-amber pointer-events-none" />
      <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-amber pointer-events-none" />
      <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-amber pointer-events-none" />
      <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-amber pointer-events-none" />

      <div className="text-center max-w-2xl mx-auto mb-6">
        <h3 className="font-heading font-bold text-ink text-lg uppercase tracking-wide">
          Trade Compliance & Accreditation Standards
        </h3>
        <p className="text-xs sm:text-sm text-ink/70 mt-1">
          Every building alteration, electrical installation, and air conditioning setup strictly complies with UK safety regulations and local authority codes.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <div
              key={idx}
              className="bg-steel border border-concrete/80 p-4 flex flex-col items-center text-center justify-between"
            >
              <div className="w-10 h-10 bg-circuit/10 text-circuit flex items-center justify-center rounded-none border border-circuit/30 mb-3">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-heading font-bold text-ink text-xs uppercase tracking-wider">
                  {badge.title}
                </span>
                <span className="block text-[11px] text-ink/70 mt-0.5">
                  {badge.description}
                </span>
              </div>
              <div className="mt-3 text-[10px] uppercase font-mono font-bold tracking-widest text-amber bg-ink px-2 py-0.5 w-full">
                {badge.placeholderText}
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-[11px] text-ink/50 text-center mt-4">
        {/* TODO: owner to confirm exact registration numbers prior to official site publication */}
        * Accreditation slots reserved for verified business certificate IDs.
      </p>
    </div>
  );
}
