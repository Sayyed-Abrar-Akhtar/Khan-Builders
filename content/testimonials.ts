export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  roleOrLocation: string;
  servicesProvided: string;
  source: string;
  sourceUrl?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    quote: "From the initial consultation to the final installation of our solar panels, Khan Builders and Electrical Works exceeded our expectations. Their expertise and commitment to quality are unmatched. Highly recommended for any construction or electrical needs!",
    name: "Zain & Fahad",
    roleOrLocation: "Homeowners in Luton",
    servicesProvided: "Solar PV Installation & Electrical Upgrade",
    source: "Verified Client Review",
    rating: 5,
  },
  {
    id: "test-2",
    quote: "The team at Khan Builders and Electrical Works handled our home extension and rewiring with exceptional skill. Their work was flawless, and they completed the job on schedule. We couldn't be happier with the results!",
    name: "Omar & Hassan",
    roleOrLocation: "Homeowners in Bedfordshire",
    servicesProvided: "Two-Storey Extension & Full Rewire",
    source: "Verified Client Review",
    rating: 5,
  },
  {
    id: "test-3",
    quote: "Khan Builders and Electrical Works did an outstanding job on our new build and electrical installations. Their team was professional, efficient, and delivered everything on time. We're thrilled with the results and highly recommend their services!",
    name: "Ahmed & Bilal",
    roleOrLocation: "Property Developers in Luton",
    servicesProvided: "New Build Construction & First/Second Fix",
    source: "Verified Client Review",
    rating: 5,
  },
];
