// Single source of truth for NAP (Name, Address, Phone), opening hours, socials, and site details.
// Every page, footer, map embed, and Schema.org JSON-LD component imports directly from this config.

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  phone: {
    display: string;
    raw: string; // tel: link
    whatsappRaw: string; // https://wa.me/
  };
  email: string;
  address: {
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
    formatted: string;
    // Map embed query parameter
    mapEmbedUrl: string;
    latitude: number;
    longitude: number;
  };
  hours: {
    displayShort: string;
    displayFull: string;
    weekdays: string;
    saturday: string;
    sunday: string;
    // Schema.org openingHours format
    schemaHours: string[];
  };
  serviceArea: string;
  areasCovered: string[];
  socials: {
    facebook?: string;
    instagram?: string;
    googleReviews?: string;
  };
}

// TODO: confirm with client before launch — placeholder only
export const siteConfig: SiteConfig = {
  name: "Khan Builders and Electrical Works",
  legalName: "Khan Builders and Electrical Works Ltd",
  tagline: "General Building, Electrical, and Air Conditioning Specialists in Luton",
  description: "Licensed general builders, NICEIC-aligned electricians, and qualified air conditioning installers providing domestic and commercial services across Luton and surrounding Bedfordshire.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://khannbuilders.co.uk",
  phone: {
    // TODO: confirm with client before launch — placeholder only
    display: "07404 241153",
    raw: "+447404241153",
    whatsappRaw: "447404241153",
  },
  // TODO: confirm with client before launch — placeholder only
  email: "info@khannbuilders.co.uk",
  address: {
    // TODO: confirm with client before launch — placeholder only (44 Warwick Road West vs 30 Humberstone Road in original audit)
    street: "30 Humberstone Road",
    locality: "Luton",
    region: "Bedfordshire",
    postalCode: "LU4 9SP",
    country: "United Kingdom",
    formatted: "30 Humberstone Road, Luton, Bedfordshire, LU4 9SP",
    mapEmbedUrl: "https://maps.google.com/maps?q=30%20Humberstone%20Road%20Luton%20LU4%209SP&t=m&z=15&output=embed&iwloc=near",
    latitude: 51.8988,
    longitude: -0.4578,
  },
  hours: {
    // TODO: confirm with client before launch — placeholder only
    displayShort: "Mon–Sat 09:00–17:00",
    displayFull: "Monday to Saturday: 09:00 – 17:00 (24/7 Emergency Electrical Callouts Available)",
    weekdays: "Monday – Friday: 09:00 – 17:00",
    saturday: "Saturday: 09:00 – 17:00",
    sunday: "Sunday: Closed (Emergency Call-Out Only)",
    schemaHours: [
      "Mo-Fr 09:00-17:00",
      "Sa 09:00-17:00"
    ],
  },
  serviceArea: "Luton & Surrounding Bedfordshire (Dunstable, Harpenden, Hitchin, Bedford)",
  areasCovered: [
    "Luton",
    "Dunstable",
    "Harpenden",
    "Hitchin",
    "Bedford",
    "Leighton Buzzard",
    "Milton Keynes"
  ],
  socials: {
    facebook: "https://facebook.com",
    googleReviews: "https://google.com",
  },
};
