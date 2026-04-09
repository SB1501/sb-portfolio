import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

import { Analytics } from "@vercel/analytics/next"

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
    <html lang="en-GB">

      <body className="antialiased">

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

        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
          {children}
          </main>
          <Footer />
        </div>
        <Analytics />

      </body>
    </html>
  );
}
