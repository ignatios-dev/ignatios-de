import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getSiteConfig } from "@/lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const config = getSiteConfig();

export const metadata: Metadata = {
  title: config.site.title,
  description: config.site.description,
  metadataBase: new URL("https://ignatios.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: config.site.title,
    description: config.site.description,
    url: "https://ignatios.de/",
    siteName: "ignatios.de",
    locale: "de_DE",
    images: [
      {
        url: "/images/oleander.jpg",
        width: 1200,
        height: 630,
        alt: "Oleander Apartments — Vafios, Lesbos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: config.site.title,
    description: config.site.description,
    images: ["/images/oleander.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
