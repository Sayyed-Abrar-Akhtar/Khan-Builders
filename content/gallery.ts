import { ServiceCategory } from "./services";

export interface GalleryItem {
  id: string;
  slug: string;
  category: ServiceCategory;
  categoryTitle: string;
  title: string;
  location: string;
  caption: string;
  image: {
    src: string;
    alt: string;
  };
}

export const galleryItems: GalleryItem[] = [
  // --- BUILDING ---
  {
    id: "gal-1",
    slug: "double-storey-extension-luton",
    category: "building",
    categoryTitle: "Building & Construction",
    title: "Two-Storey Brick Extension",
    location: "Luton, Bedfordshire",
    caption: "Rear two-storey brick extension adding a spacious modern kitchen diner and extra master bedroom.",
    image: {
      src: "/images/gallery/01-ua-double-storey-house-extension-1024x.jpg",
      alt: "Rear view of completed two-storey brick extension on a Luton semi-detached house"
    }
  },
  {
    id: "gal-2",
    slug: "modern-kitchen-renovation",
    category: "building",
    categoryTitle: "Building & Construction",
    title: "Kitchen & Dining Refurbishment",
    location: "Bury Park, Luton",
    caption: "Full kitchen makeover including custom cabinetry fitting, quartz worktops, and modern splashback tiling.",
    image: {
      src: "/images/gallery/Kitchen-and-bath-e1737617010101.jpg",
      alt: "Renovated open-plan kitchen with fitted cabinets, spotlights, and contemporary tile floor"
    }
  },
  {
    id: "gal-3",
    slug: "dormer-loft-conversion",
    category: "building",
    categoryTitle: "Building & Construction",
    title: "Master Suite Loft Conversion",
    location: "Dunstable",
    caption: "Rear dormer loft conversion creating a master bedroom suite with Velux skylights and fitted LED lighting.",
    image: {
      src: "/images/gallery/134818.webp",
      alt: "Finished loft conversion bedroom featuring sloped roof Velux skylight windows"
    }
  },
  {
    id: "gal-4",
    slug: "pitched-roof-tiling",
    category: "building",
    categoryTitle: "Building & Construction",
    title: "Pitched Roof Tile Replacement",
    location: "Harpenden",
    caption: "Complete roof pitch refurbishment using slate tiles, breathable underlay membrane, and fresh ridge mortar.",
    image: {
      src: "/images/gallery/GettyImages-1329550866-640w.webp",
      alt: "Roofer placing dark slate tiles on roof timber battens during residential roof repair"
    }
  },
  {
    id: "gal-5",
    slug: "structural-renovation-wall",
    category: "building",
    categoryTitle: "Building & Construction",
    title: "Structural Alteration & Plastering",
    location: "Luton",
    caption: "Internal wall removal with steel RSJ installation to create an open-plan ground floor layout.",
    image: {
      src: "/images/gallery/commercial-building-repairing-service-500x500-1.webp",
      alt: "Interior building renovation showing structural wall repair and fresh plaster skimming"
    }
  },
  {
    id: "gal-6",
    slug: "new-build-structure-frame",
    category: "building",
    categoryTitle: "Building & Construction",
    title: "New Build Shell & Brickwork",
    location: "Leagrave, Luton",
    caption: "Ground-up construction project showcasing completed brickwork footings and upper level structural framing.",
    image: {
      src: "/images/gallery/building-tech-1.jpeg",
      alt: "Residential property under construction showing completed brick wall footings and structural frame"
    }
  },

  // --- ELECTRICAL ---
  {
    id: "gal-7",
    slug: "consumer-unit-upgrade",
    category: "electrical",
    categoryTitle: "Electrical Services",
    title: "Modern Consumer Unit Upgrade",
    location: "Luton, Bedfordshire",
    caption: "Replaced obsolete fuse box with a metal-clad dual RCD consumer unit featuring surge protection.",
    image: {
      src: "/images/gallery/vanceelectric-springfield-va-picture-of-electric-tools-1920w.webp",
      alt: "Qualified electrician using insulated screwdriver on a newly installed consumer unit"
    }
  },
  {
    id: "gal-8",
    slug: "landlord-eicr-testing",
    category: "electrical",
    categoryTitle: "Electrical Services",
    title: "Landlord EICR Inspection",
    location: "High Town, Luton",
    caption: "Complete electrical safety inspection and testing for a rental flat, certified with digital EICR report.",
    image: {
      src: "/images/gallery/hero-06.jpg",
      alt: "Electrician using a calibrated multi-function meter to test fixed circuit wiring safety"
    }
  },
  {
    id: "gal-9",
    slug: "ev-wallbox-charger",
    category: "electrical",
    categoryTitle: "Electrical Services",
    title: "Smart EV Charger Installation",
    location: "Hitchin",
    caption: "7.4kW smart electric vehicle charger mounted on driveway garage wall with dedicated armored cabling.",
    image: {
      src: "/images/gallery/charging.jpg",
      alt: "Smart electric vehicle wallbox charger plugged into an electric car on a residential driveway"
    }
  },
  {
    id: "gal-10",
    slug: "solar-pv-roof-array",
    category: "electrical",
    categoryTitle: "Electrical Services",
    title: "Roof Solar PV System",
    location: "Bedford",
    caption: "10-panel photovoltaic solar panel roof array connected to a smart hybrid inverter and battery storage.",
    image: {
      src: "/images/gallery/istockphoto-1350971530-612x612-1.jpg",
      alt: "High-efficiency black solar panels neatly mounted on pitched house roof in Bedfordshire"
    }
  },

  // --- AIR CONDITIONING ---
  {
    id: "gal-11",
    slug: "residential-ac-split-system",
    category: "air-conditioning",
    categoryTitle: "Air Conditioning",
    title: "Bedroom AC Split System",
    location: "Luton",
    caption: "Whisper-quiet wall split air conditioner providing rapid cooling and energy-efficient winter heating.",
    image: {
      src: "/images/gallery/703f7372-bbff-4e28-9331-41cb43ea42ef.jpg",
      alt: "Sleek wall-mounted indoor air conditioning unit operating in a residential bedroom"
    }
  },
  {
    id: "gal-12",
    slug: "outdoor-condenser-service",
    category: "air-conditioning",
    categoryTitle: "Air Conditioning",
    title: "Commercial AC Maintenance & Repair",
    location: "Dunstable",
    caption: "Pressure testing and outdoor condenser coil cleaning during routine commercial air conditioning service.",
    image: {
      src: "/images/gallery/HVAC_technician_repairing_air_co.jpeg",
      alt: "HVAC engineer testing refrigerant pressures on outdoor heat pump condenser unit"
    }
  }
];
