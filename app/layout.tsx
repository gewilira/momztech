import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
