import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import Link from "next/link";

export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.split("/"),
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugString = slug.join("/");
  const post = await getPostBySlug(slugString);

  // Überprüfe ob der Beitrag nur aus einem Bild besteht
  const htmlContent = post.html.trim();
  const isImageOnlyPost = htmlContent.startsWith('<img') &&
                          htmlContent.split('<img').length - 1 === 1 &&
                          htmlContent.split('</p>').length <= 2;

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href={`/blog/category/${post.category}`}
          className="text-blue-600 hover:text-blue-800 text-sm font-bold mb-8 inline-block"
        >
          ← Zurück
        </Link>

        {isImageOnlyPost ? (
          // Bild-Beitrag: Nur das Bild mit Rahmen und Titel
          <article className="border-4 border-black bg-white shadow-lg">
            {/* Header mit Titel */}
            <header className="p-6 border-b-4 border-black">
              <h1 className="text-4xl md:text-5xl font-black text-black mb-3">
                {post.title}
              </h1>
              <time className="text-lg font-bold text-gray-700">
                {new Date(post.date).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </header>

            {/* Bild */}
            <div className="overflow-hidden">
              <div
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
          </article>
        ) : (
          // Text-Beitrag: Minimalistisches Kästchen mit fetten Linien
          <article className="border-4 border-black p-8 md:p-12 bg-white shadow-lg">
            {/* Header */}
            <header className="mb-12 pb-8 border-b-4 border-black">
              <h1 className="text-4xl md:text-5xl font-black text-black mb-6">
                {post.title}
              </h1>
              <time className="text-lg font-bold text-gray-700">
                {new Date(post.date).toLocaleDateString("de-DE", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </header>

            {/* Blog-Inhalt */}
            <div className="text-gray-800 leading-relaxed text-lg space-y-6">
              <div
                className="
                  [&_h1]:text-3xl [&_h1]:font-black [&_h1]:my-6 [&_h1]:border-b-2 [&_h1]:border-black [&_h1]:pb-2
                  [&_h2]:text-2xl [&_h2]:font-black [&_h2]:my-5 [&_h2]:border-b-2 [&_h2]:border-gray-400 [&_h2]:pb-2
                  [&_h3]:text-xl [&_h3]:font-bold [&_h3]:my-4 [&_h3]:text-gray-800
                  [&_p]:my-4 [&_p]:text-gray-800
                  [&_strong]:font-black [&_strong]:text-black
                  [&_em]:italic [&_em]:text-gray-700
                  [&_code]:bg-gray-200 [&_code]:px-2 [&_code]:py-1 [&_code]:font-mono [&_code]:text-sm [&_code]:text-gray-900
                  [&_pre]:bg-gray-900 [&_pre]:text-white [&_pre]:p-4 [&_pre]:border-2 [&_pre]:border-black [&_pre]:overflow-x-auto [&_pre]:my-6
                  [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:my-4
                  [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:my-4
                  [&_li]:my-2 [&_li]:text-gray-800
                  [&_blockquote]:border-l-4 [&_blockquote]:border-black [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-4 [&_blockquote]:text-gray-700
                  [&_a]:text-blue-600 [&_a]:font-bold [&_a]:underline hover:[&_a]:text-blue-800
                "
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </div>
          </article>
        )}
      </div>
    </div>
  );
}

