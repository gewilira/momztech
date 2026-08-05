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
  title: "MomzTech | Local AI Boxes — AI That Runs on Your Own Hardware",
  description:
    "Turnkey local AI boxes: a GPU appliance preloaded with open models, installed on your premises and supported on a retainer. Your data never leaves your building.",
  keywords: [
    "Local AI Box",
    "On-Premise AI",
    "Private LLM",
    "Self-Hosted AI",
    "Local LLM Server",
    "On-Prem RAG",
    "Data Sovereignty",
    "GPU AI Appliance",
    "Responsible Technology",
    "Web Application Development",
    "Cloud Architecture",
    "Managed IT",
    "momztech",
  ],
  openGraph: {
    title: "MomzTech | Local AI Boxes — AI That Runs on Your Own Hardware",
    description:
      "We build the box, install it in your building, and support it. Private AI, no cloud, no metered prompts — powerful technology in balance with the world.",
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
