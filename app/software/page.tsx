import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software — Ignatios Waffenschmidt",
  description:
    "Individuelle Softwarelösungen für kleine Unternehmen. Fullstack-Entwicklung mit Kotlin, PHP/Symfony und React.",
};

export default function Software() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="max-w-[1100px] mx-auto px-6 py-16 md:px-12 md:py-[100px]">
        <div className="font-mono text-[13px] tracking-[0.08em] text-accent uppercase mb-5">Software</div>
        <h1 className="text-[30px] md:text-[52px] font-bold tracking-[-0.02em] mb-5 md:mb-7 max-w-[800px]">
          Individuelle Softwarelösungen für kleine Unternehmen.
        </h1>
        <p className="text-[18px] leading-[1.7] text-secondary max-w-[680px] mb-[60px]">
          Als freiberuflicher Fullstack-Entwickler baue ich Web-Anwendungen und interne Tools, die genau auf euren Betrieb zugeschnitten sind — von der ersten Idee bis zum laufenden Support.
        </p>

        {/* Tech Stack */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[10px] md:gap-3 mb-14 md:mb-20">
          {['Kotlin', 'PHP / Symfony', 'React', 'PostgreSQL'].map((tech) => (
            <div key={tech} className="border border-border p-[18px] font-mono text-[14px] font-medium text-center">
              {tech}
            </div>
          ))}
        </div>

        {/* Leistungen */}
        <div className="mb-20">
          <h2 className="text-[28px] font-bold mb-8">Leistungen</h2>
          <div className="flex flex-col">
            {[
              { num: '01', title: 'Individuelle Web-Anwendungen', desc: 'Von Konzept über Architektur bis zum Deployment.' },
              { num: '02', title: 'Interne Tools & Automatisierung', desc: 'Prozesse digitalisieren, die aktuell noch per Excel laufen.' },
              { num: '03', title: 'Wartung & Beratung', desc: 'Langfristige Betreuung bestehender Systeme.' },
            ].map((item, i, arr) => (
              <div
                key={item.num}
                className={`flex gap-7 py-6 border-t border-border ${i === arr.length - 1 ? 'border-b' : ''}`}
              >
                <div className="font-mono text-accent font-semibold">{item.num}</div>
                <div>
                  <div className="font-semibold text-[17px] mb-[6px]">{item.title}</div>
                  <div className="text-secondary text-[15px]">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Project */}
        <div className="border border-border p-7 md:p-11 flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-6 flex-wrap mb-14 md:mb-20">
          <div>
            <div className="font-mono text-[12px] text-accent uppercase tracking-[0.05em] mb-2">Projekt</div>
            <h3 className="text-[24px] font-bold mb-2">Griechisch Vokabeltrainer</h3>
            <p className="text-secondary text-[15px] m-0 max-w-[480px]">Eine kleine Web-App zum Lernen griechischer Vokabeln mit Aussprache, direkt im Browser.</p>
          </div>
          <Link href="/vocab/" className="font-semibold text-[14px] whitespace-nowrap no-underline text-foreground hover:text-foreground">Ansehen →</Link>
        </div>

        {/* Dark CTA */}
        <div className="bg-dark text-white p-9 md:p-14 text-center">
          <h2 className="text-[24px] md:text-[30px] font-bold mb-3 md:mb-[14px]">Ihr habt ein Projekt im Kopf?</h2>
          <p className="text-[oklch(0.8_0.01_255)] mb-7">Schreibt mir — ich melde mich innerhalb von zwei Werktagen.</p>
          <ObfuscatedEmail className="inline-block bg-accent text-white px-8 py-4 font-semibold no-underline hover:text-white" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
