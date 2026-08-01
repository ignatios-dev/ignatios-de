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

      <main className="max-w-[720px] mx-auto px-6 py-16 md:px-12 md:py-[100px]">
        <Link
          href="/blog/"
          className="font-mono text-[13px] text-accent mb-6 inline-block no-underline"
        >
          ← Zurück zum Blog
        </Link>

        <div className="font-mono text-[13px] text-secondary mb-3">
          {categoryDisplay} · {new Date(post.date).toLocaleDateString(
            config.dateFormat.locale,
            config.dateFormat.options as Intl.DateTimeFormatOptions
          )}
        </div>

        <h1 className="text-[26px] md:text-[40px] font-bold tracking-[-0.02em] leading-[1.2] md:leading-[1.15] mb-7 md:mb-10">
          {post.title}
        </h1>

        <div
          className="text-[17px] leading-[1.8] text-body-text
            [&_h1]:text-[28px] [&_h1]:font-bold [&_h1]:my-8 [&_h1]:text-foreground
            [&_h2]:text-[22px] [&_h2]:font-bold [&_h2]:my-6 [&_h2]:text-foreground
            [&_h3]:text-[18px] [&_h3]:font-bold [&_h3]:my-5 [&_h3]:text-foreground
            [&_p]:my-5
            [&_strong]:font-bold [&_strong]:text-foreground
            [&_em]:italic
            [&_code]:bg-light-blue [&_code]:px-2 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[14px]
            [&_pre]:bg-dark [&_pre]:text-white [&_pre]:p-5 [&_pre]:overflow-x-auto [&_pre]:my-6
            [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:my-4
            [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:my-4
            [&_li]:my-2
            [&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:my-6 [&_blockquote]:text-secondary
            [&_a]:text-accent [&_a]:font-semibold [&_a]:underline hover:[&_a]:text-accent-hover
            [&_img]:w-full [&_img]:my-8
          "
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </main>

      <Footer />
    </div>
  );
}
