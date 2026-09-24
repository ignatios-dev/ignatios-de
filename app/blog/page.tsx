import { getPostCards } from "@/lib/posts";
import { getSiteConfig } from "@/lib/config";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionLabel } from "@/components/SectionLabel";
import { PostListItem } from "@/components/PostListItem";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Ignatios Waffenschmidt",
  description: "Technologie, Griechenland und mehr. Artikel von Ignatios Waffenschmidt.",
};

export default function Blog() {
  const allPosts = getPostCards();
  const config = getSiteConfig();
  const blogPosts = allPosts.filter((p) => p.type !== "project");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <header className="nb-dots border-b-[3px] border-foreground">
        <div className="nb-intro max-w-[900px] mx-auto px-6 pt-16 pb-12 md:px-12 md:pt-[100px] md:pb-16">
          <SectionLabel>Blog</SectionLabel>
          <h1 className="text-[30px] md:text-[52px] font-bold tracking-[-0.02em] m-0 max-w-[800px]">
            Technologie,{" "}
            <span className="nb-wiggle inline-block bg-accent text-white nb-border nb-shadow-sm rounded-2xl px-3 rotate-1 cursor-default">
              Griechenland
            </span>{" "}
            & mehr.
          </h1>
        </div>
      </header>

      <main className="max-w-[900px] mx-auto px-6 py-14 md:px-12 md:py-20">
        <div className="flex flex-col gap-7">
          {blogPosts.map((post) => (
            <PostListItem
              key={post.slug}
              post={post}
              dateLabel={new Date(post.date).toLocaleDateString(
                config.dateFormat.locale,
                config.dateFormat.options as Intl.DateTimeFormatOptions
              )}
            />
          ))}
        </div>

        {blogPosts.length === 0 && (
          <p className="text-secondary text-[17px]">Noch keine Beiträge vorhanden.</p>
        )}
      </main>

      <Footer />
    </div>
  );
}
