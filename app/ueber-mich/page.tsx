import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";
import { SectionLabel } from "@/components/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über mich — Ignatios Waffenschmidt",
  description:
    "Software-Entwickler aus Freiburg mit griechischen Wurzeln. Fullstack-Entwicklung und Olivenhain auf Lesbos.",
};

export default function UeberMich() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="nb-dots">
        <div className="max-w-[1100px] mx-auto px-6 py-16 md:px-12 md:py-[100px]">
          {/* Portrait + Bio */}
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-14 mb-14 md:mb-20 items-start">
            <div
              className="nb-wiggle w-full h-[240px] md:h-[300px] overflow-hidden bg-light-blue nb-border nb-shadow rounded-3xl -rotate-2"
              data-glauki-hover="Ja, das ist er. In echt ist er etwas größer. Ich bin kleiner."
            >
              <img src="/images/portrait-ignatios.jpg" alt="Ignatios Waffenschmidt" className="w-full h-full object-cover object-top" />
            </div>
            <div className="nb-intro">
              <SectionLabel>Über mich</SectionLabel>
              <h1 className="text-[30px] md:text-[52px] font-bold tracking-[-0.02em] mb-5 md:mb-7 max-w-[800px]">
                Ignatios Waffenschmidt
              </h1>
              <p className="text-[17px] leading-[1.7] text-body-text m-0 mb-6">
                Ich bin Software-Entwickler aus Freiburg mit griechischen Wurzeln. Zwischen Sprints in Kotlin und PHP verbringe ich meine Sommer im Olivenhain meiner Familie auf Lesbos — daher auch die zwei ziemlich unterschiedlichen Seiten dieser Website.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Freiburg", "Lesbos", "Kotlin", "PHP / Symfony", "React", "Oliven"].map((tag) => (
                  <span
                    key={tag}
                    className="nb-hop bg-background border-2 border-foreground rounded-full font-mono text-[12px] px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Row */}
          <div
            data-reveal
            className="bg-light-blue nb-border nb-shadow rounded-2xl p-7 md:p-10 flex flex-col items-start gap-5 md:flex-row md:justify-between md:items-center md:gap-6 md:flex-wrap"
          >
            <div className="text-[18px] font-bold">Fragen, Projektideen oder einfach Hallo sagen?</div>
            <span data-glauki-hover="Einfach Hallo sagen ist völlig okay. Ich mach das auch ständig.">
              <ObfuscatedEmail className="inline-block font-bold text-[15px] bg-accent text-white nb-border nb-shadow-sm nb-press rounded-xl px-[26px] py-[14px] no-underline hover:text-white" />
            </span>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
