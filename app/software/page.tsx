import { Navigation } from "@/components/Navigation";
import { ContactSection } from "@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software — Ignatios Waffenschmidt",
  description:
    "Individuelle Softwarelösungen für kleine Unternehmen. Kein Baukasten, keine Agentur — direkt vom Entwickler.",
};

const problems = [
  {
    question: "Aufträge in Excel, Termine per WhatsApp?",
    answer: "Eine zentrale Lösung, die zu Ihrem Ablauf passt.",
  },
  {
    question: "Standard-Software passt nicht zu Ihrem Workflow?",
    answer: "Software, die sich nach Ihnen richtet — nicht umgekehrt.",
  },
  {
    question: "Zu viel Handarbeit, zu viele Fehlerquellen?",
    answer: "Automatisierung, die Ihnen Zeit und Nerven spart.",
  },
];

const steps = [
  {
    num: "1",
    title: "Erstgespräch",
    text: "Wir sprechen über Ihr Problem. Kostenlos, unverbindlich, 30 Minuten.",
  },
  {
    num: "2",
    title: "Angebot",
    text: "Sie erhalten ein konkretes Angebot mit festem Preis und Zeitrahmen.",
  },
  {
    num: "3",
    title: "Umsetzung",
    text: "In Tagen statt Monaten. Sie sehen regelmäßig den Fortschritt.",
  },
  {
    num: "4",
    title: "Übergabe",
    text: "Ihre Software läuft. Einweisung und Support inklusive.",
  },
];

const useCases = [
  "Auftragsverwaltung",
  "Lagerverwaltung",
  "Dashboards & Reporting",
  "Automatisierung",
  "Kundenverwaltung",
];

export default function Software() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Individuelle Software für Ihr Unternehmen
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Kein Baukasten, keine Agentur. Ich entwickle als erfahrener
            Software-Entwickler maßgeschneiderte Lösungen — schnell und zum
            fairen Preis.
          </p>
          <a
            href="#kontakt"
            className="mt-8 inline-block px-8 py-3.5 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 hover:shadow-lg transition-all duration-300"
          >
            Kostenloses Erstgespräch
          </a>
        </div>
      </section>

      {/* Problem / Lösung */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-10">
            Kennen Sie das?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problems.map((p) => (
              <div key={p.question} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <p className="font-semibold text-gray-900 mb-3">
                  {p.question}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">{p.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-10">
            So läuft es ab
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.num} className="text-center group">
                <div className="w-11 h-11 bg-gradient-to-br from-gray-800 to-gray-950 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {s.num}
                </div>
                <div className="font-semibold text-gray-900 mb-2">
                  {s.title}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{s.text}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-5 w-8 h-px bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use-Cases */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-10">
            Beispiel-Projekte
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {useCases.map((uc) => (
              <div
                key={uc}
                className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="text-sm font-semibold text-gray-900">{uc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertrauen */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center border border-gray-100">
            <h2 className="text-xl font-bold mb-4">
              Direkter Kontakt, kein Vermittler
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Über 10 Jahre Berufserfahrung als Software-Entwickler in
              professionellen SaaS-Teams. Sie arbeiten direkt mit mir — kein
              Freelancer-Vermittler, keine Agentur dazwischen.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {[
                "Kotlin/Spring Boot",
                "PHP/Symfony",
                "React",
                "PostgreSQL",
              ].map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-20 px-4 bg-gray-50 scroll-mt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Projekt anfragen
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Beschreiben Sie kurz Ihr Vorhaben — ich melde mich innerhalb von
            24 Stunden.
          </p>
          <ContactSection />
        </div>
      </section>

      {/* Footer */}
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
            <a href="/" className="hover:text-gray-900 transition-colors">
              Startseite
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
