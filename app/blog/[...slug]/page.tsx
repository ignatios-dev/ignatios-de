import type { Metadata } from "next";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { getSiteConfig } from "@/lib/config";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.split("/"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugString = slug.join("/");
  const post = await getPostBySlug(slugString);

  return {
    title: `${post.title} — ignatios.de`,
    description: post.content.replace(/!\[.*?\]\(.*?\)/g, "").slice(0, 155).trim(),
    alternates: {
      canonical: `/blog/${slugString}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.content.replace(/!\[.*?\]\(.*?\)/g, "").slice(0, 155).trim(),
      url: `https://ignatios.de/blog/${slugString}`,
      publishedTime: post.date,
      locale: "de_DE",
      siteName: "ignatios.de",
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugString = slug.join("/");
  const post = await getPostBySlug(slugString);
  const config = getSiteConfig();

  const categoryDisplay = post.category === "all"
    ? "General"
    : post.category.charAt(0).toUpperCase() + post.category.slice(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Ignatios Waffenschmidt",
      url: "https://ignatios.de/",
    },
    publisher: {
      "@type": "Person",
      name: "Ignatios Waffenschmidt",
    },
    mainEntityOfPage: `https://ignatios.de/blog/${slugString}`,
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div aria-hidden className="nb-progress fixed top-0 left-0 right-0 h-[5px] bg-accent z-[60] origin-left" />

      <main className="max-w-[720px] mx-auto px-6 py-16 md:px-12 md:py-[100px]">
        <div className="nb-intro">
          <Link
            href="/blog/"
            className="group inline-flex items-center gap-2 bg-background border-2 border-foreground rounded-full shadow-[3px_3px_0_0_var(--color-foreground)] font-mono text-[13px] text-foreground px-4 py-1.5 mb-8 no-underline transition-[transform,box-shadow] duration-150 hover:text-foreground hover:-translate-y-0.5 hover:shadow-[4px_5px_0_0_var(--color-foreground)] active:translate-y-0.5 active:shadow-none"
          >
            <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">←</span> Zurück zum Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-4 font-mono text-[12px]">
            <span className="bg-light-blue text-accent border-2 border-foreground rounded-full px-3 py-0.5 uppercase tracking-[0.05em]">
              {categoryDisplay}
            </span>
            <span className="bg-foreground text-background rounded-full px-3 py-0.5">
              {new Date(post.date).toLocaleDateString(
                config.dateFormat.locale,
                config.dateFormat.options as Intl.DateTimeFormatOptions
              )}
            </span>
          </div>

          <h1 className="text-[26px] md:text-[40px] font-bold tracking-[-0.02em] leading-[1.2] md:leading-[1.15] mb-7 md:mb-10">
            {post.title}
          </h1>
        </div>

        <div
          className="text-[17px] leading-[1.8] text-body-text
            [&_h1]:text-[28px] [&_h1]:font-bold [&_h1]:my-8 [&_h1]:text-foreground
            [&_h2]:text-[22px] [&_h2]:font-bold [&_h2]:my-6 [&_h2]:text-foreground
            [&_h3]:text-[18px] [&_h3]:font-bold [&_h3]:my-5 [&_h3]:text-foreground
            [&_p]:my-5
            [&_strong]:font-bold [&_strong]:text-foreground
            [&_em]:italic
            [&_code]:bg-light-blue [&_code]:rounded-md [&_code]:px-2 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[14px]
            [&_pre]:bg-dark [&_pre]:text-white [&_pre]:rounded-2xl [&_pre]:border-[3px] [&_pre]:border-foreground [&_pre]:shadow-[5px_5px_0_0_var(--color-accent)] [&_pre]:p-5 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre]:overflow-x-auto [&_pre]:my-6
            [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:my-4
            [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:my-4
            [&_li]:my-2
            [&_blockquote]:bg-light-blue [&_blockquote]:border-[3px] [&_blockquote]:border-foreground [&_blockquote]:rounded-2xl [&_blockquote]:shadow-[5px_5px_0_0_var(--color-foreground)] [&_blockquote]:px-6 [&_blockquote]:py-1 [&_blockquote]:italic [&_blockquote]:my-8 [&_blockquote]:text-body-text
            [&_a]:text-accent [&_a]:font-semibold [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-4 [&_a]:transition-colors hover:[&_a]:bg-light-blue hover:[&_a]:text-accent-hover
            [&_img]:w-full [&_img]:my-8 [&_img]:rounded-2xl [&_img]:border-[3px] [&_img]:border-foreground [&_img]:shadow-[6px_6px_0_0_var(--color-foreground)]
          "
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </main>

      <Footer />
    </div>
  );
}
