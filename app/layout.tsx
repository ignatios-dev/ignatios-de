import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { getSiteConfig } from "@/lib/config";
import { getPostCards } from "@/lib/posts";
import { projects } from "@/lib/projects";
import { Mascot, type MascotTip } from "@/components/Mascot";

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
  const latestPost = getPostCards().find((p) => p.type !== "project");

  const featured = projects[0];
  const tips: MascotTip[] = [
    ...(latestPost
      ? [{ text: `Neu im Blog: „${latestPost.title}“`, href: `/blog/${latestPost.slug}/`, linkLabel: "Weiterlesen →" }]
      : []),
    ...(featured
      ? [{ text: `Psst … schon ${featured.title} gesehen? ${featured.description.split(" — ")[0]}.`, href: featured.href, linkLabel: featured.cta }]
      : []),
    { text: "Du brauchst Software für dein Unternehmen? Ich kenne da jemanden.", href: "/software/", linkLabel: "Projekt anfragen →" },
    { text: "Wusstest du? Auf Lesbos warten 3 Apartments im Olivenhain. Da komme ich übrigens her.", href: "/apartments/index.html", linkLabel: "Nach Griechenland →" },
    { text: "Ich bin Glauki, die Eule der Athene. Klick mich ruhig öfter an!" },
  ];

  return (
    <html lang="de">
      <body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
        {children}
        <Mascot tips={tips} />
      </body>
    </html>
  );
}
