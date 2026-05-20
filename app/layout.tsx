import type { Metadata, Viewport } from "next";
import { Anton, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

function resolveMetadataBase(): URL {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    "http://localhost:3000";

  try {
    return new URL(rawUrl);
  } catch {
    return new URL("http://localhost:3000");
  }
}

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  weight: "500",
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: resolveMetadataBase(),
  title: "Cafe Racer — espresso · bar · garage",
  description:
    "The coffee shop for gear heads. Espresso pulled hard, a kitchen that knows breakfast, a bar that opens at five, and a garage in back for the bikes.",
  openGraph: {
    title: "Cafe Racer — espresso · bar · garage",
    description:
      "The coffee shop for gear heads. Espresso, bar, and a garage in back. Saturday rides leave at 8.",
    images: ["/photo-hero.jpg"],
    type: "website",
    siteName: "Cafe Racer",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
