import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shane Bunting - Developer",
  description: "Software developer portfolio, projects, updates and technical notes.",

  metadataBase: new URL("https://shanebunting.dev"),

  openGraph: {
    title: "Shane Bunting - Portfolio",
    description: "Software developer portfolio, projects, updates and technical notes.",
    url: "https://shanebunting.dev",
    siteName: "shanebunting.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shane Bunting Portfolio Open Graph Image",
      }
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shane Bunting",
    description: "Software developer portfolio, projects, updates and technical notes.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <div className="fixed h-full w-full inset-0 -z-0 overflow-hidden">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video/space-bg.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10">
          <Header />
          {children}
          <Footer />
        </div>
        <Analytics />

      </body>
    </html>
  );
}