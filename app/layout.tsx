import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Fraunces, JetBrains_Mono } from "next/font/google";
import CircuitBackground from "@/components/CircuitBackground";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#F2F8FD",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://momztech.com"),
  title: "MomzTech | Technology in Balance with the World",
  description:
    "MomzTech builds modern web, AI, and cloud software that's fast and future-ready — yet efficient, accessible, and built to last. Powerful technology in balance with nature and people.",
  keywords: [
    "Responsible Technology",
    "Sustainable Software",
    "Web Application Development",
    "AI Consultation",
    "Cloud Architecture",
    "Accessible Software",
    "Software Solutions",
    "momztech",
  ],
  openGraph: {
    title: "MomzTech | Technology in Balance with the World",
    description:
      "Powerful technology that respects the people, and the world, it serves — fast and future-ready, yet efficient, accessible, and built to last.",
    siteName: "MomzTech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${fraunces.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="antialiased">
        <a href="#top" className="skip-link">Skip to content</a>
        <CircuitBackground />
        {children}
      </body>
    </html>
  );
}
