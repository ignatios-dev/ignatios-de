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
}

export const projects: Project[] = [
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
