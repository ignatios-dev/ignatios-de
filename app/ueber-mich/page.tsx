import { Navigation } from "@/components/Navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über mich — Ignatios Waffenschmidt",
  description:
    "Software Engineer mit über 10 Jahren Erfahrung. Kotlin/Spring Boot, PHP/Symfony, React, PostgreSQL. Berufserfahrung und Technologien.",
};

const career = [
  {
    period: "2024 – heute",
    role: "Software-Entwickler",
    company: "sevdesk",
    note: "SaaS-Buchhaltungsplattform",
    description:
      "Kotlin/Spring Boot, Ingestion-Pipeline, verteilte Systeme, Observability",
  },
  {
    period: "2022 – 2024",
    role: "Engineering Manager",
    company: "sevdesk",
    description:
      "Teamführung (5–7 Entwickler), unternehmensweites Großprojekt",
  },
  {
    period: "2020 – 2022",
    role: "Software-Entwickler",
    company: "Konmedia GmbH",
    description: "Core-Produkt-Team (ERP, CMS, DMS), Doctrine-ORM-Migration",
  },
  {
    period: "2015 – 2018",
    role: "Ausbildung Fachinformatiker",
    company: "Konmedia GmbH",
    description: "Anwendungsentwicklung",
  },
];

const skills = [
  "Kotlin",
  "Spring Boot",
  "PHP",
  "Symfony",
  "Laravel",
  "PostgreSQL",
  "REST APIs",
  "React",
  "TypeScript",
  "CI/CD",
  "Docker",
  "Feature Flags",
];

export default function UeberMich() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />

      <section className="pt-28 pb-16 md:pt-40 md:pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Über mich
          </h1>
          <p className="mt-8 text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Software Engineer mit über 10 Jahren Erfahrung in der Backend- und
            Fullstack-Entwicklung im SaaS-Umfeld — mit Kotlin/Spring Boot und
            dem PHP-Ökosystem. Zweimal aktiv an technologischen Transformationen
            gewachsener Plattformen mitgewirkt. Nach knapp zwei Jahren als
            Engineering Manager bewusst zurück in die Entwicklung.
          </p>
          <div className="mt-8 w-12 h-px bg-gray-300 mx-auto" />
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-8 text-center text-gray-900">
              Berufserfahrung
            </h2>
            <div className="space-y-6">
              {career.map((c) => (
                <div key={c.period} className="flex gap-6">
                  <div className="w-28 shrink-0 text-sm text-gray-400 font-medium pt-1">
                    {c.period}
                  </div>
                  <div className="relative border-l border-gray-200 pl-6 pb-2">
                    <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-gray-900" />
                    <div className="font-semibold text-gray-900">{c.role}</div>
                    <div className="text-sm text-gray-500">
                      {c.company}
                      {c.note && (
                        <span className="text-gray-400">
                          {" "}
                          &middot; {c.note}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {c.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold mb-6 text-gray-900">
              Technologien
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 bg-white border border-gray-200 rounded-full text-sm text-gray-600 shadow-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-500 mb-6">
            Interesse an einer Zusammenarbeit?
          </p>
          <a
            href="/software#kontakt"
            className="inline-block px-8 py-3.5 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
          >
            Projekt anfragen
          </a>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <span>
            &copy; {new Date().getFullYear()} Ignatios Waffenschmidt
          </span>
          <div className="flex gap-6">
            <a
              href="/impressum"
              className="hover:text-gray-900 transition-colors"
            >
              Impressum
            </a>
            <a
              href="/software#kontakt"
              className="hover:text-gray-900 transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
