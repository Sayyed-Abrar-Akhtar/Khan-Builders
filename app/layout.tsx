import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { StickyMobileCallButton } from "@/components/StickyMobileCallButton";
import { siteConfig } from "@/content/site-config";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Builders, Electricians & AC Specialists in Luton`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Khan Builders and Electrical Works",
    "Builders Luton",
    "Electrician Luton",
    "Air Conditioning Luton",
    "EICR Luton",
    "Home Extensions Luton",
    "Loft Conversions Luton",
    "EV Charger Installation Bedfordshire",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    title: `${siteConfig.name} — Builders & Electricians in Luton`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Builders & Electricians in Luton`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${archivo.variable} ${ibmPlexSans.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-body bg-steel text-ink antialiased min-h-screen flex flex-col selection:bg-amber selection:text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCallButton />
      </body>
    </html>
  );
}
