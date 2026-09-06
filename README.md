# Khan Builders and Electrical Works — Rebuilt Reference Website

A modern, fast, SEO-optimized rebuild of the small-business marketing website for **Khan Builders and Electrical Works** in Luton, UK.

## Tech Stack & Architecture

- **Framework:** Next.js 14+ (App Router), React 18, TypeScript (Strict Mode)
- **Styling:** Tailwind CSS (extended theme: `ink`, `steel`, `concrete`, `amber`, `circuit`, `white`)
- **Typography:** `next/font` with Archivo (Headings) and IBM Plex Sans (Body)
- **API Runtime:** Node.js API route (`app/api/contact/route.ts`) with Zod validation, honeypot anti-spam, and Resend email capability
- **Structured Data:** JSON-LD Schema.org (`LocalBusiness` / `GeneralContractor` + `Electrician`)
- **Config & Content:** Fully typed data in `/content/site-config.ts`, `services.ts`, `gallery.ts`, and `testimonials.ts`

## Environment Variables Setup

Create a `.env.local` file in the root directory:

```env
# Optional: Resend API Key for live email delivery
EMAIL_API_KEY=re_your_resend_api_key_here

# Recipient email for quote form enquiries
CONTACT_TO_EMAIL=info@khannbuilders.co.uk

# Public site URL (defaults to production URL if omitted)
NEXT_PUBLIC_SITE_URL=https://khannbuilders.co.uk
```

## Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` to view the application.

3. **Check Code Quality & Linting:**
   ```bash
   npm run lint
   ```

4. **Build for Production:**
   ```bash
   npm run build
   ```

## Deployment

Designed for seamless 1-click deployment on **Vercel**. All dynamic service routes (`/services/[slug]`) are statically generated at build time using `generateStaticParams`.
