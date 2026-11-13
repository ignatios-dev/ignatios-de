import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionLabel } from "@/components/SectionLabel";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — Ignatios Waffenschmidt",
  description: "Impressum von ignatios.de",
  alternates: { canonical: "/impressum/" },
  robots: { index: true, follow: true },
};

const h2 = "text-[22px] md:text-[26px] font-bold mt-10 mb-3";
const p = "text-[16px] leading-[1.7] text-body-text m-0 mb-3";

export default function Impressum() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="nb-dots">
        <article className="max-w-[820px] mx-auto px-6 py-16 md:px-12 md:py-[100px]">
          <SectionLabel>Rechtliches</SectionLabel>
          <h1 className="text-[30px] md:text-[46px] font-bold tracking-[-0.02em] mb-8">Impressum</h1>

          <h2 className={h2}>Angaben gemäß § 5 DDG</h2>
          <p className={p}>
            Ignatios Waffenschmidt
            <br />
            Friedrichstraße 50
            <br />
            79098 Freiburg im Breisgau
            <br />
            Deutschland
          </p>

          <h2 className={h2}>Kontakt</h2>
          <p className={p}>
            E-Mail: <ObfuscatedEmail className="nb-underline" />
          </p>

          <h2 className={h2}>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p className={p}>Ignatios Waffenschmidt, Anschrift wie oben</p>

          <h2 className={h2}>Verbraucherstreitbeilegung</h2>
          <p className={p}>
            Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <h2 className={h2}>Haftung für Inhalte und Links</h2>
          <p className={p}>
            Die Inhalte dieser Seiten wurden mit Sorgfalt erstellt. Für Richtigkeit, Vollständigkeit und Aktualität
            kann ich jedoch keine Gewähr übernehmen. Diese Website enthält Links zu externen Seiten, auf deren Inhalte
            ich keinen Einfluss habe; dafür ist der jeweilige Anbieter verantwortlich. Bei Bekanntwerden von
            Rechtsverletzungen entferne ich entsprechende Inhalte oder Links umgehend.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
}
