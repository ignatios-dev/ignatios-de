import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionLabel } from "@/components/SectionLabel";
import { projects } from "@/lib/projects";
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

      <header className="nb-dots border-b-[3px] border-foreground">
        <div className="nb-intro max-w-[1100px] mx-auto px-6 pt-16 pb-14 md:px-12 md:pt-[100px] md:pb-20">
          <SectionLabel>Software</SectionLabel>
          <h1 className="text-[30px] md:text-[52px] font-bold tracking-[-0.02em] mb-5 md:mb-7 max-w-[800px]">
            Individuelle Softwarelösungen für{" "}
            <span className="nb-wiggle inline-block bg-accent text-white nb-border nb-shadow-sm rounded-2xl px-3 -rotate-1 cursor-default">
              kleine Unternehmen.
            </span>
          </h1>
          <p className="text-[18px] leading-[1.7] text-body-text max-w-[680px] mb-10">
            Als freiberuflicher Fullstack-Entwickler baue ich Web-Anwendungen und interne Tools, die genau auf euren Betrieb zugeschnitten sind — von der ersten Idee bis zum laufenden Support.
          </p>

          {/* Tech Stack */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Kotlin", "PHP / Symfony", "React", "PostgreSQL"].map((tech) => (
              <div
                key={tech}
                className="nb-hop bg-background nb-border nb-shadow-sm rounded-xl p-[18px] font-mono text-[14px] font-medium text-center"
              >
                {tech}
              </div>
            ))}
          </div>

          {/* Poikilia Beta-Hinweis */}
          <Link
            href="/poikilia/#beta"
            className="group mt-8 flex flex-col md:flex-row md:items-center gap-3 md:gap-5 bg-accent text-white nb-border nb-shadow nb-press rounded-2xl p-5 md:p-6 no-underline hover:text-white"
          >
            <span className="self-start md:self-auto inline-block bg-white text-accent nb-border rounded-full font-mono text-[12px] font-bold uppercase tracking-[0.06em] px-3 py-1">
              Beta-Tester gesucht
            </span>
            <span className="flex-1 text-[16px] md:text-[17px] leading-[1.5]">
              <strong>Poikilia</strong> — iss vielfältiger, ohne Kalorienzählen. Teste meine Android-App zwei Wochen lang im Play Store.
            </span>
            <span className="font-bold whitespace-nowrap">
              Mitmachen <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">→</span>
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-[1100px] mx-auto px-6 py-16 md:px-12 md:py-[100px]">
        {/* Leistungen */}
        <div className="mb-20">
          <SectionLabel>Leistungen</SectionLabel>
          <h2 className="text-[28px] md:text-[38px] font-bold tracking-[-0.02em] mb-8">Was ich für euch mache</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Individuelle Web-Anwendungen", desc: "Von Konzept über Architektur bis zum Deployment." },
              { num: "02", title: "Interne Tools & Automatisierung", desc: "Prozesse digitalisieren, die aktuell noch per Excel laufen." },
              { num: "03", title: "Wartung & Beratung", desc: "Langfristige Betreuung bestehender Systeme." },
            ].map((item) => (
              <div
                key={item.num}
                data-reveal
                className="group bg-background nb-border nb-shadow nb-press rounded-2xl p-6 md:p-7"
              >
                <div className="inline-flex items-center justify-center w-11 h-11 mb-5 bg-light-blue nb-border rounded-full font-mono text-accent font-semibold transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:rotate-[360deg]">
                  {item.num}
                </div>
                <div className="font-bold text-[18px] mb-[6px]">{item.title}</div>
                <div className="text-secondary text-[15px] leading-[1.6]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Aktive Projekte */}
        <div className="mb-14 md:mb-20">
          <SectionLabel>Aktive Projekte</SectionLabel>
          <h2 className="text-[28px] md:text-[38px] font-bold tracking-[-0.02em] mb-8">Gerade auf der Werkbank</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-9">
            {projects.filter((p) => p.active).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        {/* Ältere Projekte */}
        <div className="mb-14 md:mb-20">
          <SectionLabel>Ältere Projekte</SectionLabel>
          <h2 className="text-[28px] md:text-[38px] font-bold tracking-[-0.02em] mb-3">Aus der Werkstatt</h2>
          <p className="text-[16px] text-secondary leading-[1.6] max-w-[680px] mb-8">
            Projekte, die gerade schlummern — fertig genug zum Anschauen, aber nicht in aktiver Entwicklung.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-9">
            {projects.filter((p) => !p.active).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div data-reveal className="relative bg-dark text-white nb-border nb-shadow rounded-3xl p-9 md:p-14 text-center overflow-hidden">
          <div aria-hidden className="nb-float absolute -top-6 -left-6 w-24 h-24 rounded-full border-[3px] border-accent opacity-60" />
          <div aria-hidden className="nb-float absolute -bottom-8 -right-4 w-32 h-32 rounded-full bg-accent opacity-30 [animation-delay:1.5s]" />
          <h2 className="relative text-[24px] md:text-[30px] font-bold mb-3 md:mb-[14px]">Ihr habt ein Projekt im Kopf?</h2>
          <p className="relative text-[oklch(0.8_0.01_255)] mb-8">Schreibt mir — ich melde mich innerhalb von zwei Werktagen.</p>
          <span
            className="relative inline-block" 
          >
            <ObfuscatedEmail className="inline-block bg-accent text-white border-[3px] border-white rounded-xl shadow-[6px_6px_0_0_white] px-8 py-4 font-bold no-underline transition-[transform,box-shadow] duration-150 hover:text-white hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[9px_9px_0_0_white] active:translate-x-1 active:translate-y-1 active:shadow-none" />
          </span>
        </div>
      </main>

      <Footer />
    </div>
  );
}
