import { ImageResponse } from "next/og";
import { OG_KICKER, OG_LINE, OG_TITLE_EN } from "@/lib/siteConfig";

export const alt = OG_TITLE_EN;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(160deg,#1a1a12 0%,#0B0D10 60%)",
          color: "#E8E2D6",
          padding: "72px",
        }}
      >
        <div style={{ color: "#C6A75E", fontSize: 28, letterSpacing: 6 }}>{OG_KICKER}</div>
        <div style={{ marginTop: 24, fontSize: 76, lineHeight: 1.1 }}>{OG_TITLE_EN}</div>
        <div style={{ marginTop: 24, fontSize: 30, color: "#9AA3AD" }}>{OG_LINE}</div>
      </div>
    ),
    { ...size },
  );
}
