import { getPostCards } from "@/lib/posts";
import { getSiteConfig } from "@/lib/config";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
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

      <main className="max-w-[900px] mx-auto px-6 py-16 md:px-12 md:py-[100px]">
        <div className="font-mono text-[13px] tracking-[0.08em] text-accent uppercase mb-5">Blog</div>
        <h1 className="text-[30px] md:text-[52px] font-bold tracking-[-0.02em] mb-5 md:mb-7 max-w-[800px]">
          Technologie, Griechenland & mehr.
        </h1>

        <div className="flex flex-col gap-0">
          {blogPosts.map((post) => {
            const categoryDisplay =
              post.category === '__root__'
                ? 'General'
                : post.category.charAt(0).toUpperCase() + post.category.slice(1);

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="flex flex-col gap-[10px] md:flex-row md:gap-8 md:items-start border border-border p-6 md:p-8 no-underline text-foreground hover:text-foreground -mt-px"
              >
                <div className="font-mono text-[13px] text-secondary whitespace-nowrap pt-1">
                  {new Date(post.date).toLocaleDateString(
                    config.dateFormat.locale,
                    config.dateFormat.options as Intl.DateTimeFormatOptions
                  )}
                </div>
                <div>
                  <div className="font-mono text-[12px] text-accent uppercase tracking-[0.05em] mb-2">
                    {categoryDisplay}
                  </div>
                  <h3 className="text-[24px] font-bold m-0 mb-[10px]">{post.title}</h3>
                  <span className="font-semibold text-[14px]">Weiterlesen →</span>
                </div>
              </Link>
            );
          })}
        </div>

        {blogPosts.length === 0 && (
          <p className="text-secondary text-[17px]">Noch keine Beiträge vorhanden.</p>
        )}
      </main>

      <Footer />
    </div>
  );
}
