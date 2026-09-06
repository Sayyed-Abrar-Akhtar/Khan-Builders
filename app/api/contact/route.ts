import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// Node.js runtime explicit config
export const runtime = "nodejs";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  phone: z.string().min(7, "Please provide a valid phone number."),
  email: z.string().email("Please provide a valid email address."),
  serviceNeeded: z.string().min(2, "Please select a service."),
  message: z.string().min(10, "Message should be at least 10 characters long."),
  preferredContact: z.enum(["phone", "whatsapp", "email"]).default("phone"),
  websiteUrl: z.string().optional(), // Honeypot
});

// Simple memory store for IP rate limiting
const ipMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = ipMap.get(ip);

  if (!record) {
    ipMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (now - record.lastReset > RATE_LIMIT_WINDOW_MS) {
    ipMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count += 1;
  return false;
}

export async function POST(req: Request) {
  try {
    const clientIp = req.headers.get("x-forwarded-for") || "127.0.0.1";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Too many quote requests from this IP. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot spam check
    if (body.websiteUrl && body.websiteUrl.trim() !== "") {
      // Silently accept to fool spam bots
      return NextResponse.json({ success: true, message: "Enquiry submitted successfully." });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      const errorMsg = parsed.error.issues.map((i) => i.message).join(" ");
      return NextResponse.json({ error: errorMsg }, { status: 400 });
    }

    const { name, phone, email, serviceNeeded, message, preferredContact } = parsed.data;

    const apiKey = process.env.EMAIL_API_KEY;
    const recipientEmail = process.env.CONTACT_TO_EMAIL || "info@khannbuilders.co.uk";

    if (apiKey) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "Khan Builders Website <onboarding@resend.dev>",
        to: recipientEmail,
        replyTo: email,
        subject: `New Quote Request: ${serviceNeeded} - ${name}`,
        text: `
Name: ${name}
Phone: ${phone}
Email: ${email}
Preferred Contact: ${preferredContact}
Service Required: ${serviceNeeded}

Project Message:
${message}
        `,
      });
    } else {
      console.log("[QUOTE FORM SUBMISSION LOGGED (NO API KEY SET)]", {
        name,
        phone,
        email,
        preferredContact,
        serviceNeeded,
        message,
        recipientEmail,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your quote request has been safely received.",
    });
  } catch (err: unknown) {
    console.error("Contact Form API Error:", err);
    return NextResponse.json(
      { error: "An internal server error occurred while processing your request." },
      { status: 500 }
    );
  }
}
