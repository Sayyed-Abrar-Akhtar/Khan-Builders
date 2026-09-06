import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site-config";


export const alt = "Khan Builders and Electrical Works — Builders & Electricians in Luton";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 32,
          background: "#10151F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          color: "white",
          fontFamily: "sans-serif",
          border: "12px solid #F2A73B",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "#F2A73B",
              color: "#10151F",
              fontWeight: "900",
              fontSize: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            K
          </div>
          <span style={{ color: "#EEF1F3", fontSize: "28px", fontWeight: "bold" }}>
            {siteConfig.name}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              color: "#F2A73B",
              fontSize: "20px",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Luton & Bedfordshire Trade Specialists
          </div>
          <div
            style={{
              fontSize: "48px",
              fontWeight: "900",
              lineHeight: 1.1,
              maxWidth: "900px",
              color: "#FFFFFF",
            }}
          >
            General Building • Certified Electrical • Air Conditioning
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid rgba(217, 222, 227, 0.2)",
            paddingTop: "24px",
            fontSize: "20px",
            color: "#D9DEE3",
          }}
        >
          <span>{siteConfig.address.formatted}</span>
          <span style={{ color: "#F2A73B", fontWeight: "bold" }}>
            {siteConfig.phone.display}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
