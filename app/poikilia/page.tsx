import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionLabel } from "@/components/SectionLabel";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Poikilia – Vielfalt-Tagebuch — Ignatios Waffenschmidt",
  description:
    "Poikilia (griechisch für Vielfalt): Ernährungstagebuch für Vielfalt statt Kalorien. Offline, ohne Konto, ohne Tracking.",
  alternates: { canonical: "/poikilia/" },
};

const points: [string, string][] = [
  ["Tagebuch mit einem Tipp", "Gekocht, gegessen, Reste oder ohne Rezept – mit Geschmack, Verträglichkeit und Foto."],
  ["Vielfalt statt Kalorien", "Pflanzenvielfalt, Vielfalt-Score und was dir gerade fehlt – mit passenden Rezepten."],
  ["Rezepte von überall", "Aus Claude, von Rezeptseiten oder selbst geschrieben. Kochmodus und Einkaufsliste inklusive."],
  ["Alles bleibt bei dir", "Kein Konto, keine Werbung, kein Tracking. Deine Daten liegen nur auf deinem Gerät."],
];

export default function Poikilia() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="nb-dots">
        <div className="max-w-[1100px] mx-auto px-6 py-16 md:px-12 md:py-[100px]">
          <SectionLabel>Android-App · Beta</SectionLabel>
          <h1 className="text-[30px] md:text-[52px] font-bold tracking-[-0.02em] mb-4 max-w-[800px]">Poikilia</h1>
          <p className="text-[19px] leading-[1.6] text-body-text m-0 mb-3 max-w-[760px]">
            Iss vielfältiger – ohne Kalorienzählen. Poikilia (ποικιλία) ist griechisch und heißt Vielfalt.
          </p>
          <p className="text-[17px] leading-[1.7] text-body-text m-0 mb-10 max-w-[760px]">
            Die App zeigt dir, was in deinem Essen steckt und wie bunt du isst – nicht, wie viel. Sie ist gerade in
            einer geschlossenen Beta im Google Play Store.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {points.map(([title, text]) => (
              <div key={title} data-reveal className="bg-background nb-border nb-shadow rounded-2xl p-6">
                <div className="text-[18px] font-bold mb-2">{title}</div>
                <p className="text-[15px] leading-[1.6] text-body-text m-0">{text}</p>
              </div>
            ))}
          </div>
          <section
            id="beta"
            data-reveal
            className="scroll-mt-24 bg-light-blue nb-border nb-shadow rounded-2xl p-7 md:p-10 mb-12"
          >
            <SectionLabel>Beta-Tester gesucht</SectionLabel>
            <h2 className="text-[24px] md:text-[34px] font-bold tracking-[-0.02em] mb-4">Teste Poikilia zwei Wochen lang</h2>
            <p className="text-[17px] leading-[1.7] text-body-text m-0 mb-5 max-w-[720px]">
              Für die Veröffentlichung im Play Store braucht Google mindestens 12 Tester, die die App 14 Tage lang
              installiert haben. Du nutzt sie einfach, wie es dir passt, und sagst mir, was auffällt.
            </p>
            <ol className="list-decimal pl-5 text-[16px] leading-[1.7] text-body-text mb-6 max-w-[720px]">
              <li>Schreib mir kurz mit deiner <strong>Google-Mail-Adresse</strong> (die auf deinem Android-Handy).</li>
              <li>Ich trage dich ein und schicke dir den Link zur Beta im Play Store.</li>
              <li>Installieren, 14 Tage dabeibleiben, Feedback direkt aus der App schicken.</li>
            </ol>
            <ObfuscatedEmail
              subject="Poikilia Beta – ich bin dabei"
              body={"Hi Ignatios,\n\nich teste Poikilia gerne mit.\n\nMeine Google-Mail-Adresse (Play Store): \n\nViele Grüße"}
              className="inline-block font-bold text-[16px] bg-accent text-white nb-border nb-shadow-sm nb-press rounded-xl px-[26px] py-[14px] no-underline hover:text-white"
            >
              Beta-Tester werden →
            </ObfuscatedEmail>
            <p className="font-mono text-[12px] text-secondary mt-4 mb-0">
              Nur Android. Deine Adresse nutze ich nur für die Testerliste im Play Store.
            </p>
          </section>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/poikilia/datenschutz/"
              className="inline-block font-bold text-[15px] bg-accent text-white nb-border nb-shadow-sm nb-press rounded-xl px-[26px] py-[14px] no-underline hover:text-white"
            >
              Datenschutzerklärung →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
