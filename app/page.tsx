import { getPostCards } from "@/lib/posts";
import { getSiteConfig } from "@/lib/config";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  const allPosts = getPostCards();
  const config = getSiteConfig();

  const blogPosts = allPosts.filter((p) => p.type !== "project");
  const latestPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="px-6 pt-[72px] pb-12 md:px-12 md:pt-[120px] md:pb-[100px] max-w-[1100px] mx-auto">
        <div className="font-mono text-[13px] tracking-[0.08em] text-accent uppercase mb-5">
          // Software-Entwickler — Freiburg, DE
        </div>
        <h1 className="text-[40px] md:text-[76px] leading-[1.08] md:leading-[1.02] font-bold tracking-[-0.02em] md:tracking-[-0.03em] mb-5 md:mb-7">
          Hallo, ich bin<br />Ignatios.
        </h1>
        <p className="text-[16px] md:text-[20px] leading-[1.6] text-secondary max-w-[620px] mb-7 md:mb-10">
          Ich entwickle seit über 10 Jahren individuelle Softwarelösungen für kleine Unternehmen — mit Kotlin, PHP/Symfony und React. Hier schreibe ich außerdem über Technologie, griechische Kultur und was mich sonst bewegt.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            href="/software/"
            className="bg-accent text-white px-7 py-4 font-semibold text-[15px] no-underline hover:bg-accent-hover hover:text-white"
          >
            Projekt anfragen →
          </Link>
          <Link
            href="/blog/"
            className="border border-border px-7 py-4 font-semibold text-[15px] text-foreground no-underline hover:text-foreground"
          >
            Blog lesen
          </Link>
        </div>
      </section>

      {/* Stats Band */}
      <section className="border-t border-b border-border bg-light-blue">
        <div className="max-w-[1100px] mx-auto px-6 py-7 md:px-12 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <div className="font-mono text-[34px] font-semibold text-accent">10+</div>
            <div className="text-[14px] text-secondary mt-[6px]">Jahre Erfahrung</div>
          </div>
          <div>
            <div className="font-mono text-[34px] font-semibold text-accent">Kotlin / PHP / React</div>
            <div className="text-[14px] text-secondary mt-[6px]">Kernstack</div>
          </div>
          <div className="flex items-center gap-[14px]">
            <div className="flex items-center">
              <div className="w-[22px] h-[2px] bg-accent" />
              <div className="w-[9px] h-[9px] rounded-full bg-accent -ml-[2px]" />
              <div className="w-[9px] h-[9px] rounded-full bg-accent ml-[6px]" />
            </div>
            <div>
              <div className="text-[15px] font-semibold">3 Apartments</div>
              <div className="text-[13px] text-secondary">im Olivenhain, Lesbos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projekte */}
      <section className="max-w-[1100px] mx-auto px-6 py-16 md:px-12 md:py-[100px]">
        <div className="font-mono text-[13px] tracking-[0.08em] text-accent uppercase mb-[14px]">Projekte</div>
        <h2 className="text-[26px] md:text-[38px] font-bold tracking-[-0.02em] mb-7 md:mb-12">
          Dinge, an denen ich arbeite
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          {/* Vokabeltrainer */}
          <Link href="/vocab/" className="border border-border p-9 flex flex-col gap-4 no-underline text-foreground hover:text-foreground">
            <div className="w-full h-[160px] overflow-hidden">
              <img src="/images/vokabeltrainer-screenshot.png" alt="Griechisch Vokabeltrainer App" className="w-full h-full object-cover object-top" />
            </div>
            <div className="font-mono text-[12px] text-accent uppercase tracking-[0.05em]">Web-App</div>
            <h3 className="text-[22px] font-bold m-0">Griechisch Vokabeltrainer</h3>
            <p className="text-[15px] text-secondary leading-[1.6] m-0">Lerne die wichtigsten griechischen Vokabeln mit Aussprache — direkt im Browser.</p>
            <span className="font-semibold text-[14px] text-foreground">Ansehen →</span>
          </Link>

          {/* Oleander Apartments */}
          <a href="/apartments/index.html" className="border border-border p-9 flex flex-col gap-4 no-underline text-foreground hover:text-foreground">
            <div className="w-full h-[160px] overflow-hidden">
              <img src="/images/oleander.jpg" alt="Oleander Apartments — Sonnenuntergang über Olivenhain" className="w-full h-full object-cover" />
            </div>
            <div className="font-mono text-[12px] text-accent uppercase tracking-[0.05em]">Ferienwohnungen</div>
            <h3 className="text-[22px] font-bold m-0">Oleander Apartments</h3>
            <p className="text-[15px] text-secondary leading-[1.6] m-0">Unsere Familienanlage im Bergdorf Vafios auf Lesbos — drei Apartments zwischen Olivenhainen.</p>
            <span className="font-semibold text-[14px] text-foreground">Ansehen →</span>
          </a>
        </div>
      </section>

      {/* Blog Teaser */}
      {latestPost && (
        <section className="border-t border-border px-6 py-16 md:px-12 md:py-[100px]">
          <div className="max-w-[1100px] mx-auto">
            <div className="font-mono text-[13px] tracking-[0.08em] text-accent uppercase mb-[14px]">Blog</div>
            <h2 className="text-[26px] md:text-[38px] font-bold tracking-[-0.02em] mb-7 md:mb-12">
              Neuestes zuerst
            </h2>
            <Link
              href={`/blog/${latestPost.slug}/`}
              className="flex flex-col gap-[10px] md:flex-row md:gap-8 md:items-start border border-border p-6 md:p-8 no-underline text-foreground hover:text-foreground"
            >
              <div className="font-mono text-[13px] text-secondary whitespace-nowrap pt-1">
                {new Date(latestPost.date).toLocaleDateString(
                  config.dateFormat.locale,
                  config.dateFormat.options as Intl.DateTimeFormatOptions
                )}
              </div>
              <div>
                <div className="font-mono text-[12px] text-accent uppercase tracking-[0.05em] mb-2">
                  {latestPost.category === '__root__' ? 'General' : latestPost.category.charAt(0).toUpperCase() + latestPost.category.slice(1)}
                </div>
                <h3 className="text-[22px] font-bold m-0 mb-[10px]">{latestPost.title}</h3>
                <span className="font-semibold text-[14px]">Weiterlesen →</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
