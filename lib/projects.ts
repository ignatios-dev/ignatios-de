export interface Project {
  slug: string;
  href: string;
  external?: boolean;
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  tags?: string[];
  cta: string;
  large?: boolean;
  imagePosition?: "top" | "center";
  /** Nur auf der Software-Seite zeigen, nicht auf der Startseite */
  softwareOnly?: boolean;
}

export const projects: Project[] = [
  {
    slug: "poikilia",
    href: "/poikilia/#beta",
    image: "/images/poikilia-feature.png",
    imageAlt: "Poikilia – Vielfalt-Tagebuch für Android",
    category: "Android-App — Beta-Tester gesucht",
    title: "Poikilia",
    description:
      "Iss vielfältiger – ohne Kalorienzählen. Ernährungstagebuch mit Vielfalt-Score, Rezepten und Kochmodus. Ich suche Beta-Tester für zwei Wochen im Play Store.",
    tags: ["Kotlin", "Compose Multiplatform", "Offline", "Android"],
    cta: "Beta-Tester werden →",
    large: true,
    imagePosition: "center",
  },
  {
    slug: "agora",
    href: "https://agora-production-aae4.up.railway.app/",
    external: true,
    image: "/images/agora-screenshot.png",
    imageAlt: "Agora — Marketing-Tool für Kleinstunternehmen",
    category: "SaaS — Marketing-Tool",
    title: "Agora",
    description:
      "Multi-Kanal Marketing für Kleinstunternehmen — Kundenliste importieren, personalisierte Kampagnen per E-Mail oder WhatsApp versenden. Ohne Umwege, ohne CRM-Zwang.",
    tags: ["Laravel", "CSV-Import", "Serienbriefe", "DSGVO"],
    cta: "Demo ansehen →",
    large: true,
  },
  {
    slug: "kneipensimulator",
    href: "/blog/kneipensimulator/",
    image: "/images/kneipensimulator.svg",
    imageAlt: "Kneipensimulator",
    category: "Browserspiel — In Entwicklung",
    title: "Kneipensimulator",
    description:
      "Eckkneipe einrichten, Schichten planen und das Schichtprotokoll lesen – ein gemütliches Browserspiel mit Wochenliga gegen Freunde.",
    tags: ["TypeScript", "React", "PixiJS", "Fastify"],
    cta: "Mehr lesen →",
    softwareOnly: true,
  },
  {
    slug: "uther-party",
    href: "https://uther-party-production.up.railway.app/",
    external: true,
    image: "/images/uther-party-placeholder.svg",
    imageAlt: "Uther Party — Mini-Games mit Highscore",
    category: "Web-Game — In Entwicklung",
    title: "Uther Party",
    description:
      "Mario-Party-artige Minispielsammlung nach Vorbild der Warcraft-3-Mod, mit Highscore-Board zum Verewigen unter Freunden. Aktuell mit dem ersten Minispiel im Aufbau.",
    tags: ["React", "Vite", "Firebase"],
    cta: "Ausprobieren →",
  },
  {
    slug: "mixmaid",
    href: "/blog/mixmaid/",
    image: "/images/mixmaid.svg",
    imageAlt: "MixMaid",
    category: "Terminal-Tool",
    title: "MixMaid",
    description:
      "Räumt die Musiksammlung auf: Qualitätscheck inkl. Fake-FLAC-Erkennung, Duplikate per Fingerabdruck, saubere Tags von MusicBrainz.",
    tags: ["Rust", "TUI", "ffmpeg", "MusicBrainz"],
    cta: "Mehr lesen →",
    softwareOnly: true,
  },
  {
    slug: "archivar",
    href: "/blog/archivar/",
    image: "/images/archivar.svg",
    imageAlt: "archivar",
    category: "Desktop-Tool — Alpha",
    title: "archivar",
    description:
      "Sortiert Fotos, Videos, Musik und Dokumente, erkennt Dubletten und bereitet GoPro-Material als Kdenlive-Projekt vor.",
    tags: ["Python", "KDE", "Claude", "EXIF/XMP"],
    cta: "Mehr lesen →",
    softwareOnly: true,
  },
  {
    slug: "crew",
    href: "/blog/crew/",
    image: "/images/crew.svg",
    imageAlt: "crew",
    category: "Entwickler-Werkzeug",
    title: "crew",
    description:
      "Ein lokales Software-Team aus KI-Agenten: Product Manager, Engineer und Reviewer – ich bin nur noch der Stakeholder.",
    tags: ["Bash", "Claude Code", "Git", "Agents"],
    cta: "Mehr lesen →",
    softwareOnly: true,
  },
  {
    slug: "das-nichts",
    href: "/blog/das-nichts/",
    image: "/images/das-nichts.svg",
    imageAlt: "Das Nichts",
    category: "KI-Experiment",
    title: "Das Nichts",
    description:
      "Drei KI-Wesen bauen Geschichten und Homepages, ich küre den Sieger – und sie versuchen, mich in der nächsten Runde zu überzeugen.",
    tags: ["Python", "Claude", "Ollama", "Sandbox"],
    cta: "Mehr lesen →",
    softwareOnly: true,
  },
  {
    slug: "vokabeltrainer",
    href: "/vocab/",
    image: "/images/vokabeltrainer-screenshot.png",
    imageAlt: "Griechisch Vokabeltrainer App",
    category: "Web-App",
    title: "Griechisch Vokabeltrainer",
    description:
      "Lerne die wichtigsten griechischen Vokabeln mit Aussprache — direkt im Browser.",
    cta: "Ansehen →",
  },
  {
    slug: "hoodini",
    href: "/blog/hoodini/",
    image: "/images/hoodini.svg",
    imageAlt: "HOODINI",
    category: "Web-App — Prototyp",
    title: "HOODINI",
    description:
      "Geo-Marker-Karte für Freundeskreise mit XP-System – und eine Community-Lobby, um rechtsextreme Symbole im Stadtbild zu dokumentieren.",
    tags: ["Flutter", "Supabase", "OpenStreetMap"],
    cta: "Mehr lesen →",
    softwareOnly: true,
  },
  {
    slug: "akolyth",
    href: "/blog/akolyth/",
    image: "/images/akolyth.svg",
    imageAlt: "Akolyth",
    category: "KI-Experiment",
    title: "Akolyth",
    description:
      "Terminal-Assistent, der sein Wissen in einer lokalen SQLite-Datenbank speichert – mit frischem Kontext bei jeder Anfrage.",
    tags: ["Python", "SQLite FTS5", "Claude"],
    cta: "Mehr lesen →",
    softwareOnly: true,
  },
  {
    slug: "oleander",
    href: "/apartments/index.html",
    image: "/images/oleander.jpg",
    imageAlt: "Oleander Apartments — Sonnenuntergang über Olivenhain",
    category: "Ferienwohnungen",
    title: "Oleander Apartments",
    description:
      "Unsere Familienanlage im Bergdorf Vafios auf Lesbos — drei Apartments zwischen Olivenhainen.",
    cta: "Ansehen →",
    imagePosition: "center",
  },
];
