import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { getSiteConfig } from "@/lib/config";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
  },
  twitter: {
    card: "summary",
    title: config.site.title,
    description: config.site.description,
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
      <body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
