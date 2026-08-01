import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";
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

      <main className="max-w-[1100px] mx-auto px-6 py-16 md:px-12 md:py-[100px]">
        {/* Portrait + Bio */}
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-14 mb-14 md:mb-20">
          <div className="w-full h-[200px] md:h-[280px] overflow-hidden">
            <img src="/images/portrait-ignatios.jpg" alt="Ignatios Waffenschmidt" className="w-full h-full object-cover object-top" />
          </div>
          <div>
            <div className="font-mono text-[13px] tracking-[0.08em] text-accent uppercase mb-5">Über mich</div>
            <h1 className="text-[30px] md:text-[52px] font-bold tracking-[-0.02em] mb-5 md:mb-7 max-w-[800px]">
              Ignatios Waffenschmidt
            </h1>
            <p className="text-[17px] leading-[1.7] text-secondary m-0">
              Ich bin Software-Entwickler aus Freiburg mit griechischen Wurzeln. Zwischen Sprints in Kotlin und PHP verbringe ich meine Sommer im Olivenhain meiner Familie auf Lesbos — daher auch die zwei ziemlich unterschiedlichen Seiten dieser Website.
            </p>
          </div>
        </div>

        {/* Contact Row */}
        <div className="border border-border p-7 md:p-10 flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center md:gap-6 md:flex-wrap">
          <div className="text-[16px]">Fragen, Projektideen oder einfach Hallo sagen?</div>
          <ObfuscatedEmail className="font-semibold text-[15px] bg-accent text-white px-[26px] py-[14px] no-underline hover:text-white" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
