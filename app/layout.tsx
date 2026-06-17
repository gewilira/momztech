import type { Metadata } from "next";
import { Space_Grotesk, Fraunces, JetBrains_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "MomzTech | IT Consultancy & Software Solutions",
  description:
    "MomzTech is an IT consultancy delivering custom web applications, AI integration, cloud architecture, and enterprise software solutions.",
  keywords: [
    "IT Consultancy",
    "Web Application Development",
    "AI Consultation",
    "Cloud Architecture",
    "Enterprise Software",
    "Software Solutions",
    "momztech",
  ],
  openGraph: {
    title: "MomzTech | IT Consultancy & Software Solutions",
    description:
      "We build. We innovate. We deliver. Custom software solutions tailored to your business needs.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
