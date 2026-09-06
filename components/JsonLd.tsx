import { siteConfig } from "@/content/site-config";

export function JsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "Electrician"],
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.phone.display,
    email: siteConfig.email,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.latitude,
      longitude: siteConfig.address.longitude,
    },
    areaServed: siteConfig.areasCovered.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    priceRange: "££",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Trade Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Building & Construction Services",
        },
        {
          "@type": "OfferCatalog",
          name: "Electrical Services",
        },
        {
          "@type": "OfferCatalog",
          name: "Air Conditioning Services",
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
