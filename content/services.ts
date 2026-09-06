export type ServiceCategory = "building" | "electrical" | "air-conditioning";

export interface Service {
  slug: string;
  category: ServiceCategory;
  categoryTitle: string;
  title: string;
  shortSummary: string; // Used in cards (2-3 sentences max)
  fullDescription: string;
  whatIsInvolved: string[];
  keyBenefits: string[];
  ownerReviewNeeded?: boolean;
  image: {
    src: string;
    alt: string;
  };
}

export const serviceCategories = [
  {
    id: "building" as ServiceCategory,
    title: "Building & Construction",
    description: "From structural extensions and loft conversions to complete home refurbishments and roofing in Luton.",
  },
  {
    id: "electrical" as ServiceCategory,
    title: "Electrical Services",
    description: "Certified domestic and commercial electrical works, EICR inspection reports, EV chargers, and 24/7 callouts.",
  },
  {
    id: "air-conditioning" as ServiceCategory,
    title: "Air Conditioning",
    description: "Climate control installations, regular maintenance, rapid repairs, and refrigerant servicing for homes and offices.",
  },
];

export const services: Service[] = [
  // --- BUILDING & CONSTRUCTION ---
  {
    slug: "new-builds",
    category: "building",
    categoryTitle: "Building & Construction",
    title: "New Builds",
    shortSummary: "Complete architectural construction services from foundation laying to final handover for residential properties in Luton. We manage site clearance, brickwork, utilities, and interior finishes with structured project control.",
    fullDescription: "Our new build construction team handles every stage of your residential or light commercial build. Working closely with structural engineers, architects, and local building control officers, Khan Builders and Electrical Works delivers energy-efficient, structurally sound properties tailored to your exact specification.",
    whatIsInvolved: [
      "Groundwork, foundation excavation, and concrete pouring",
      "Structural brickwork, timber frame erection, and steel installation",
      "Roof structure, tiling, weatherproofing, and insulation",
      "Complete electrical, plumbing, heating, and plastering first/second fix",
      "Final inspection, building regulations compliance sign-off, and handover"
    ],
    keyBenefits: [
      "Turnkey management eliminating the hassle of coordinating multiple separate sub-contractors",
      "Strict compliance with UK Building Regulations (Part P, Part L, structural standards)",
      "Transparent schedule with clear milestones and cost management"
    ],
    /* TODO: owner to confirm accuracy */
    image: {
      src: "/images/gallery/building-tech-1.jpeg",
      alt: "Newly constructed modern residential house frame with brickwork in Luton"
    }
  },
  {
    slug: "home-extensions",
    category: "building",
    categoryTitle: "Building & Construction",
    title: "Home Extensions",
    shortSummary: "Single-storey, double-storey, and side-return extension solutions designed to maximize your living space and add real property value. We handle structural groundwork, brick matching, roofing, and full utility connections.",
    fullDescription: "Expand your home without the stress and expense of moving. Whether you require an expanded open-plan kitchen diner, an extra ground-floor bedroom, or a double-storey rear extension, Khan Builders and Electrical Works delivers seamless integration with your existing house architecture.",
    whatIsInvolved: [
      "Site assessment, ground testing, and footings excavation",
      "Matching structural brickwork, stonework, and exterior rendering",
      "Flat roof (GRP/EPDM) or pitched tile roof installation with skylights",
      "Knock-throughs, steel lintel installation, and structural padstones",
      "Full internal wiring, plumbing, insulation, and plaster finishing"
    ],
    keyBenefits: [
      "Substantially increases living area and home market value",
      "Custom layout design optimized for natural light and flow",
      "Integrated electrical and heating installations directly from one experienced team"
    ],
    /* TODO: owner to confirm accuracy */
    image: {
      src: "/images/gallery/01-ua-double-storey-house-extension-1024x.jpg",
      alt: "Completed two-storey brick home extension with double glazed windows in Luton"
    }
  },
  {
    slug: "loft-conversions",
    category: "building",
    categoryTitle: "Building & Construction",
    title: "Loft Conversions",
    shortSummary: "Transform underutilized attic space into master bedrooms, en-suite bathrooms, or quiet home offices. We provide dormer, Velux, and hip-to-gable conversions with full structural reinforcement.",
    fullDescription: "A loft conversion is one of the most cost-effective ways to increase living space in your home. We install structural steel beams, subfloor reinforcement, staircase fitting, thermal insulation, dormer construction, and complete electrical and plumbing fit-outs.",
    whatIsInvolved: [
      "Steel beam placement (RSJs) to support the new floor joists",
      "Dormer window framing or roof window (Velux) integration",
      "Staircase construction adhering strictly to pitch and headroom regulations",
      "High-grade thermal and acoustic acoustic insulation installation",
      "Electrical sockets, lighting circuits, and en-suite plumbing connections"
    ],
    keyBenefits: [
      "Adds valuable functional square footage without reducing garden space",
      "Significantly improves overall property thermal efficiency when properly insulated",
      "Smooth project timeline with minimal day-to-day disturbance to ground floor living"
    ],
    /* TODO: owner to confirm accuracy */
    image: {
      src: "/images/gallery/134818.webp",
      alt: "Spacious master bedroom loft conversion with skylights and fitted spotlights in Luton"
    }
  },
  {
    slug: "roofing",
    category: "building",
    categoryTitle: "Building & Construction",
    title: "Roofing & Repairs",
    shortSummary: "Comprehensive pitched roof tiling, flat roof GRP rubber membranes, chimney repairs, and guttering services. We ensure your roof structure is leak-free, weather-resistant, and fully insulated.",
    fullDescription: "Protect your property from water ingress and structural timber decay. Khan Builders and Electrical Works handles everything from emergency tile replacements and mortar ridge re-pointing to full roof pitch renewals and fiberglass flat roof installations.",
    whatIsInvolved: [
      "Roof tile inspection, damaged batten replacement, and breathable felt installation",
      "GRP fiberglass and EPDM rubber roofing for flat extension roofs",
      "Lead flashing installation around chimneys, parapets, and valleys",
      "Fascia, soffit, guttering, and downpipe repairs and replacements",
      "Structural roof truss repair and timber treatment"
    ],
    keyBenefits: [
      "Prevents damp issues and structural timber rot",
      "Durable weatherproofing backed by manufacturer material guarantees",
      "Improved kerb appeal and thermal insulation retention"
    ],
    /* TODO: owner to confirm accuracy */
    image: {
      src: "/images/gallery/GettyImages-1329550866-640w.webp",
      alt: "Roofer fitting dark slate roof tiles on a residential property in Luton"
    }
  },
  {
    slug: "kitchen-and-bathroom-renovations",
    category: "building",
    categoryTitle: "Building & Construction",
    title: "Kitchen & Bathroom Renovations",
    shortSummary: "Full layout refurbishments including plumbing, electrical work, tiling, appliance installation, and custom carpentry. We create modern, functional kitchens and high-end bathrooms tailored to your lifestyle.",
    fullDescription: "From modern open-plan kitchens to luxurious walk-in wet rooms, we manage the entire renovation process internally. Because our team includes skilled builders, qualified electricians, and plumbers, you benefit from a coordinated installation with no delays between trades.",
    whatIsInvolved: [
      "Demolition, strip-out, and safe disposal of existing fixtures",
      "Plumbing rerouting for sinks, showers, toilets, and modern appliances",
      "Electrical rewiring for appliances, LED task lighting, and extractor fans",
      "Precision floor and wall tiling with waterproof tanking systems",
      "Cabinet fitting, worktop installation, and sanitaryware connections"
    ],
    keyBenefits: [
      "Single point of contact for carpentry, plumbing, tiling, and electrical tasks",
      "High-precision finishing and waterproof seal protection",
      "Optimized storage and utility placement tailored to room dimensions"
    ],
    /* TODO: owner to confirm accuracy */
    image: {
      src: "/images/gallery/Kitchen-and-bath-e1737617010101.jpg",
      alt: "Modern renovated kitchen with fitted cupboards, sleek countertops, and tile splashback"
    }
  },
  {
    slug: "general-repairs-and-renovations",
    category: "building",
    categoryTitle: "Building & Construction",
    title: "General Repairs & House Renovations",
    shortSummary: "Structural alterations, damp proofing, interior wall removal, tiling, plastering, and general property refurbishment. Perfect for homeowners upgrading older properties or preparing houses for tenancy.",
    fullDescription: "Whether you need load-bearing wall removal to create open plan spaces, structural repairs, floor levelling, or whole-house decorative refurbishments, our building team executes high-quality residential maintenance and repairs across Luton.",
    whatIsInvolved: [
      "Load-bearing wall removal with steel RSJ calculations and insertion",
      "Plastering, skimming, drywall installation, and partition wall framing",
      "Floor substrate preparation, tiling, and timber flooring installation",
      "Damp remediation, brickwork pointing, and exterior rendering repairs",
      "Carpentry, internal door hanging, and skirting board fitments"
    ],
    keyBenefits: [
      "Restores structural integrity and aesthetics of tired properties",
      "Safe removal of internal walls with proper structural sign-off",
      "Durable materials selected for high wear resistance"
    ],
    /* TODO: owner to confirm accuracy */
    image: {
      src: "/images/gallery/commercial-building-repairing-service-500x500-1.webp",
      alt: "Worker carrying out interior renovation and structural wall repair work"
    }
  },

  // --- ELECTRICAL SERVICES ---
  {
    slug: "electrical-installations",
    category: "electrical",
    categoryTitle: "Electrical Services",
    title: "Electrical Installations",
    shortSummary: "Professional installation of consumer units (fuse boards), new power circuits, indoor/outdoor lighting systems, and main earthing upgrades. Safe, certified installations for homes and offices in Luton.",
    fullDescription: "We provide complete electrical installation services for domestic households and commercial spaces. From upgrading obsolete fuse boxes to modern RCD/RCBO distribution boards to wiring out extension spaces, all work adheres strictly to BS 7671 wiring regulations.",
    whatIsInvolved: [
      "Modern metal-clad consumer unit installation with Surge Protection (SPD)",
      "New ring main power circuits and dedicated high-draw appliance lines",
      "Interior LED recessed downlights, smart switches, and outdoor security lighting",
      "Main earthing bonding upgrades to gas and water supplies",
      "Issuance of Electrical Installation Certificates (EIC) on completion"
    ],
    keyBenefits: [
      "Prevents electrical fire hazards and accidental shock risks",
      "Complies fully with Part P Building Regulations",
      "Energy-efficient LED installations that cut ongoing electricity bills"
    ],
    /* TODO: owner to confirm accuracy */
    image: {
      src: "/images/gallery/vanceelectric-springfield-va-picture-of-electric-tools-1920w.webp",
      alt: "Professional electrician inspecting a modern domestic consumer unit with insulated tools"
    }
  },
  {
    slug: "landlord-eicr",
    category: "electrical",
    categoryTitle: "Electrical Services",
    title: "Landlord EICR (Electrical Safety Reports)",
    shortSummary: "Comprehensive Electrical Installation Condition Reports (EICR) for Luton landlords, letting agents, and homebuyers. Detailed testing of fixed wiring to ensure statutory legal compliance.",
    fullDescription: "Under UK law, private landlords must have the electrical installations in their properties inspected and tested by a qualified person at least every 5 years. Khan Builders and Electrical Works performs thorough EICR testing and delivers official pass certificates or clear remedial recommendations.",
    whatIsInvolved: [
      "Visual assessment of fuse boards, sockets, light fittings, and wiring condition",
      "Dead testing (continuity, insulation resistance, earthing loop checks)",
      "Live testing (RCD trip times, voltage drop, prospective fault current)",
      "Classification of defects using C1, C2, C3, and FI codes",
      "Issuance of official EICR digital reports with remedial item pricing"
    ],
    keyBenefits: [
      "Fulfills mandatory legal requirements for UK private rented sector landlords",
      "Identifies hidden dangerous electrical degradation before faults occur",
      "Direct remedial repair capability if faults are found during testing"
    ],
    /* TODO: owner to confirm accuracy */
    image: {
      src: "/images/gallery/hero-06.jpg",
      alt: "Qualified electrician carrying out digital multi-meter EICR circuit testing"
    }
  },
  {
    slug: "rewiring",
    category: "electrical",
    categoryTitle: "Electrical Services",
    title: "Full & Partial House Rewiring",
    shortSummary: "Replacing unsafe, aged, or rubber-insulated electrical wiring in older Luton properties with modern twin-and-earth cables, modern consumer units, and child-safe double sockets.",
    fullDescription: "If your house is over 25-30 years old or still relies on round-pin sockets or wire fuses, a complete rewire is essential for safety. We replace dated cabling with safe, modern circuits capable of handling high power demands from contemporary appliances.",
    whatIsInvolved: [
      "First fix: channelling walls, running fire-rated twin-and-earth cables, backboxes",
      "Second fix: fitting switches, double sockets, light fixtures, and fused spurs",
      "Installing modern RCD/RCBO consumer unit with surge protection",
      "Circuit separation for kitchen appliances, showers, and lighting",
      "Full dead/live circuit testing and Part P certificate registration"
    ],
    keyBenefits: [
      "Eliminates electrical fire risk from degraded cable insulation",
      "Provides ample power outlets in every room for modern appliance demands",
      "Protects property resale value and satisfies insurance requirements"
    ],
    /* TODO: owner to confirm accuracy */
    image: {
      src: "/images/gallery/how-long-does-it-take-to-rewire-a-house1.webp",
      alt: "Electrician feeding new double-insulated copper cabling through wall channels"
    }
  },
  {
    slug: "ev-charging-points",
    category: "electrical",
    categoryTitle: "Electrical Services",
    title: "EV Charging Point Installation",
    shortSummary: "Safe, fast domestic and commercial electric vehicle charge point installations. We install smart wallbox chargers (7kW to 22kW) with dynamic load balancing and app controls.",
    fullDescription: "Power your electric vehicle conveniently at home or work. We assess your incoming electrical supply, recommend optimal charger locations, run dedicated high-amperage cables, and install weatherproof smart EV chargers compatible with all major EV brands.",
    whatIsInvolved: [
      "Surveying existing consumer unit capacity and main fuse rating",
      "Installing dedicated high-current circuit protection (Type A RCD/RCBO)",
      "Outdoor weatherproof cabling and wall-mounted charging station setup",
      "Smart app pairing and load management configuration",
      "Full safety testing and electrical certification"
    ],
    keyBenefits: [
      "Significantly cheaper EV charging compared to public rapid charging networks",
      "Fast 7kW home charging overnight for full vehicle range",
      "Neat, weatherproof installation complying with IET Code of Practice"
    ],
    /* TODO: owner to confirm accuracy */
    image: {
      src: "/images/gallery/charging.jpg",
      alt: "Electric vehicle connected to a smart wall-mounted home charger cable"
    }
  },
  {
    slug: "emergency-electrical-callout",
    category: "electrical",
    categoryTitle: "Electrical Services",
    title: "24/7 Emergency Electrical Callouts & Fault Finding",
    shortSummary: "Rapid response fault finding and emergency repair for tripping switches, complete power loss, burning smells, or water-damaged electrical fittings across Luton and nearby towns.",
    fullDescription: "Electrical emergencies can threaten your safety and cause severe disruption. Our emergency electricians carry diagnostic testing instruments and common spare parts to isolate dangerous faults, restore main power safely, and make installations secure.",
    whatIsInvolved: [
      "Immediate on-site arrival and electrical isolation of hazardous circuits",
      "Diagnostic insulation resistance and fault isolation testing",
      "Repair or temporary safe bypass of burnt fuses, sockets, or damaged cables",
      "Restoration of critical lighting, refrigeration, and heating circuits",
      "Written summary of fault root cause and permanent repair plan"
    ],
    keyBenefits: [
      "Fast local response across Luton 24 hours a day",
      "Systematic fault tracing that isolates issues without unnecessary invasive damage",
      "Ensures life-safety systems (alarms, emergency lighting) remain operational"
    ],
    /* TODO: owner to confirm accuracy */
    image: {
      src: "/images/gallery/hero-04-1.jpg",
      alt: "Electrician diagnosing circuit breaker fault in distribution box with digital meter"
    }
  },
  {
    slug: "solar-panel-installation",
    category: "electrical",
    categoryTitle: "Electrical Services",
    title: "Solar PV & Battery Storage Installation",
    shortSummary: "Reduce grid dependence and lower electricity costs with custom roof solar panel arrays and battery storage solutions installed by certified electrical engineers in Luton.",
    fullDescription: "Harness renewable solar energy to power your property. We design, mount, and connect photovoltaic solar panels to smart hybrid inverters and battery storage units, allowing you to store surplus energy for evening use or feed excess electricity back to the grid.",
    whatIsInvolved: [
      "Roof structure load assessment and solar yield generation calculations",
      "Weather-tight roof mounting rails and high-efficiency PV panel array fitting",
      "DC wiring installation to DC isolator, hybrid inverter, and battery storage",
      "AC connection into property distribution board with generation meter",
      "Grid connection notification and system commissioning"
    ],
    keyBenefits: [
      "Protects household or business against rising utility electricity tariffs",
      "Reduces carbon footprint while storing off-peak energy in battery units",
      "Clean integration with existing electrical distribution system"
    ],
    /* TODO: owner to confirm accuracy */
    image: {
      src: "/images/gallery/istockphoto-1350971530-612x612-1.jpg",
      alt: "Photovoltaic solar panels installed on a residential roof in Luton"
    }
  },

  // --- AIR CONDITIONING SERVICES ---
  {
    slug: "air-conditioning-installation",
    category: "air-conditioning",
    categoryTitle: "Air Conditioning",
    title: "Air Conditioning Installation",
    shortSummary: "Supply and precision installation of wall-mounted split system, multi-split, and ducted air conditioning units for homes, shops, and offices in Luton. Year-round heating and cooling.",
    fullDescription: "Enjoy ideal indoor temperatures year-round with modern heat-pump air conditioning systems. Today’s inverter units offer quiet, highly efficient cooling in summer and cost-effective heating during winter months. We install leading brands with clean pipe routing and neat wall finishes.",
    whatIsInvolved: [
      "Heat load room calculation to select correctly sized kW capacity unit",
      "Wall mounting indoor fan coil unit and outdoor condenser unit placement",
      "Refrigerant copper line insulation, condensate drainage, and power wiring",
      "Nitrogen pressure testing, vacuum evacuation, and refrigerant charge check",
      "System testing, Wi-Fi smart app integration, and customer demonstration"
    ],
    keyBenefits: [
      "Dual functionality: rapid cooling in summer and low-cost heating in winter",
      "Advanced air filtration removes dust, pollen, and airborne allergens",
      "Whisper-quiet operation suitable for bedrooms and executive offices"
    ],
    /* TODO: owner to confirm accuracy */
    image: {
      src: "/images/gallery/703f7372-bbff-4e28-9331-41cb43ea42ef.jpg",
      alt: "Sleek wall-mounted residential air conditioning unit installed above a window"
    }
  },
  {
    slug: "air-conditioning-repair",
    category: "air-conditioning",
    categoryTitle: "Air Conditioning",
    title: "Air Conditioning Repair",
    shortSummary: "Fast response diagnosis and repair for air conditioning units that fail to cool, leak water, produce unusual noises, or display error codes.",
    fullDescription: "A broken air conditioner causes rapid discomfort in warm weather or office environments. Our air conditioning engineers diagnose compressor failures, electrical control board faults, sensor errors, fan motor issues, and refrigerant leaks quickly.",
    whatIsInvolved: [
      "Diagnostic fault tracing, error code analysis, and electrical testing",
      "Refrigerant pressure checks and leak detection using electronic sniffer tools",
      "Condensate pump and drain line blockage clearing",
      "Replacement of failed capacitors, fan motors, expansion valves, or PCBs",
      "Recommissioning and temperature differential testing"
    ],
    keyBenefits: [
      "Restores effective cooling and airflow without delay",
      "Prevents minor component issues from damaging expensive compressors",
      "Transparent repair quotes before work commences"
    ],
    /* TODO: owner to confirm accuracy */
    image: {
      src: "/images/gallery/HVAC_technician_repairing_air_co.jpeg",
      alt: "AC technician testing refrigerant pressures on an outdoor condenser unit"
    }
  },
  {
    slug: "air-conditioning-servicing-and-maintenance",
    category: "air-conditioning",
    categoryTitle: "Air Conditioning",
    title: "Air Conditioning Servicing & Maintenance",
    shortSummary: "Scheduled preventive maintenance including coil antibacterial sanitization, filter cleaning, condensate line flushing, and system efficiency optimization.",
    fullDescription: "Regular servicing keeps your air conditioning system operating efficiently, prevents foul odours caused by bacterial buildup, and extends equipment lifespan. We offer single service visits and recurring maintenance plans for Luton homes and commercial properties.",
    whatIsInvolved: [
      "Deep cleaning and anti-bacterial sanitization of evaporator coils",
      "Washing, sanitizing, or replacing washable air intake filters",
      "Checking refrigerant charge levels and operating pressures",
      "Clearing condensate drain trays and testing condensate pump operation",
      "Inspecting electrical connections, fan balance, and insulation"
    ],
    keyBenefits: [
      "Maintains maximum energy efficiency and reduces monthly electricity usage",
      "Eliminates stale odours and prevents mould growth inside indoor units",
      "Validates manufacturer warranty terms and prevents unexpected breakdowns"
    ],
    /* TODO: owner to confirm accuracy */
    image: {
      src: "/images/gallery/Technicians_replacing_air_condit.jpeg",
      alt: "Engineer carrying out antibacterial chemical coil clean on an indoor AC unit"
    }
  },
  {
    slug: "air-conditioning-replacement",
    category: "air-conditioning",
    categoryTitle: "Air Conditioning",
    title: "Air Conditioning Replacement & Upgrades",
    shortSummary: "Replacing old, noisy, or inefficient AC units with A+++ rated modern eco-friendly R32 refrigerant systems that drastically lower energy consumption.",
    fullDescription: "If your existing air conditioner is over 10-12 years old, uses obsolete refrigerants like R22 or older R410A, or requires frequent costly repairs, upgrading to a modern inverter unit will deliver vastly superior cooling with up to 40% lower energy consumption.",
    whatIsInvolved: [
      "Safe recovery and eco-friendly disposal of old refrigerant gases under F-Gas standards",
      "Removal and recycling of old indoor/outdoor hardware and brackets",
      "Flushing or upgrading copper pipework to handle modern operating pressures",
      "Installation of high-efficiency A+++ rated inverter cooling unit",
      "Full vacuum, charging, commissioning, and system hand-over"
    ],
    keyBenefits: [
      "Up to 40% reduction in electricity consumption compared to legacy non-inverter systems",
      "Uses environmentally friendly R32 refrigerant with low global warming potential",
      "Updated slimline designs and smartphone Wi-Fi app compatibility"
    ],
    /* TODO: owner to confirm accuracy */
    image: {
      src: "/images/gallery/download-3.png",
      alt: "Modern eco-friendly outdoor multi-split air conditioning compressor unit"
    }
  }
];
