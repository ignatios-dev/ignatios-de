import { getPostCards } from "@/lib/posts";
import { getSiteConfig } from "@/lib/config";
import { projects } from "@/lib/projects";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionLabel } from "@/components/SectionLabel";
import { PostListItem } from "@/components/PostListItem";
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
      <section className="nb-dots border-b-[3px] border-foreground">
        <div className="nb-intro px-6 pt-[72px] pb-16 md:px-12 md:pt-[120px] md:pb-[110px] max-w-[1100px] mx-auto">
          <div className="inline-block bg-foreground text-background rounded-full font-mono text-[12px] md:text-[13px] tracking-[0.08em] uppercase px-4 py-1.5 mb-6 -rotate-1">
            {"// Software-Entwickler — Freiburg, DE"}
          </div>
          <h1 className="text-[40px] md:text-[76px] leading-[1.08] md:leading-[1.02] font-bold tracking-[-0.02em] md:tracking-[-0.03em] mb-5 md:mb-7">
            Hallo, ich bin<br />
            <span className="nb-wiggle inline-block bg-accent text-white nb-border nb-shadow rounded-2xl md:rounded-3xl px-3 md:px-5 mt-2 rotate-1 cursor-default">
              Ignatios.
            </span>
          </h1>
          <p className="text-[16px] md:text-[20px] leading-[1.6] text-body-text max-w-[620px] mt-8 mb-8 md:mb-10">
            Ich entwickle seit über 10 Jahren individuelle Softwarelösungen für kleine Unternehmen — mit Kotlin, PHP/Symfony und React. Hier schreibe ich außerdem über Technologie, griechische Kultur und was mich sonst bewegt.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/software/"
              data-glauki-hover="Na los, klick schon! Ich hab gehört, der Typ antwortet echt schnell."
              className="group bg-accent text-white nb-border nb-shadow nb-press rounded-xl px-7 py-4 font-bold text-[15px] no-underline hover:text-white"
            >
              Projekt anfragen <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">→</span>
            </Link>
            <Link
              href="/blog/"
              className="bg-background nb-border nb-shadow nb-press rounded-xl px-7 py-4 font-bold text-[15px] text-foreground no-underline hover:text-foreground"
            >
              Blog lesen
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="border-b-[3px] border-foreground bg-light-blue">
        <div className="max-w-[1100px] mx-auto px-6 py-10 md:px-12 md:py-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div data-reveal className="bg-background nb-border nb-shadow nb-press rounded-2xl p-6">
            <div className="font-mono text-[34px] font-semibold text-accent">10+</div>
            <div className="text-[14px] text-secondary mt-[6px]">Jahre Erfahrung</div>
          </div>
          <div data-reveal className="bg-background nb-border nb-shadow nb-press rounded-2xl p-6">
            <div className="font-mono text-[26px] md:text-[28px] leading-[1.25] font-semibold text-accent">Kotlin / PHP / React</div>
            <div className="text-[14px] text-secondary mt-[6px]">Kernstack</div>
          </div>
          <a
            href="/apartments/index.html"
            data-reveal
            data-glauki-hover="Oliven, Meer, Sonne. Ich würde da ja hinfliegen. Moment … ich KANN fliegen!"
            className="bg-accent text-white nb-border nb-shadow nb-press rounded-2xl p-6 flex items-center gap-[14px] no-underline hover:text-white"
          >
            <div className="flex items-center">
              <div className="w-[22px] h-[3px] rounded-full bg-white" />
              <div className="nb-pulse w-[10px] h-[10px] rounded-full bg-white -ml-[2px]" />
              <div className="nb-pulse w-[10px] h-[10px] rounded-full bg-white ml-[6px] [animation-delay:0.4s]" />
            </div>
            <div>
              <div className="text-[18px] font-bold">3 Apartments</div>
              <div className="text-[14px] text-light-blue">im Olivenhain, Lesbos</div>
            </div>
          </a>
        </div>
      </section>

      {/* Projekte */}
      <section className="max-w-[1100px] mx-auto px-6 py-16 md:px-12 md:py-[100px]">
        <SectionLabel>Projekte</SectionLabel>
        <h2 className="text-[26px] md:text-[38px] font-bold tracking-[-0.02em] mb-7 md:mb-12">
          Dinge, an denen ich arbeite
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-9">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Blog Teaser */}
      {latestPost && (
        <section className="border-t-[3px] border-foreground bg-light-blue px-6 py-16 md:px-12 md:py-[100px]">
          <div className="max-w-[1100px] mx-auto">
            <SectionLabel>Blog</SectionLabel>
            <h2 className="text-[26px] md:text-[38px] font-bold tracking-[-0.02em] mb-7 md:mb-12">
              Neuestes zuerst
            </h2>
            <PostListItem
              post={latestPost}
              dateLabel={new Date(latestPost.date).toLocaleDateString(
                config.dateFormat.locale,
                config.dateFormat.options as Intl.DateTimeFormatOptions
              )}
            />
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
