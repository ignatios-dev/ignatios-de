import { getSortedPosts } from "@/lib/posts";
import { getSiteConfig } from "@/lib/config";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPosts();
  const categories = new Set(posts.map((post) => post.category));

  return Array.from(categories).map((category) => ({
    slug: category,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = getSortedPosts().filter((post) => post.category === slug);
  const config = getSiteConfig();

  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);


  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 text-sm font-bold mb-8 inline-block hover:underline"
        >
          ← {config.category.backToOverview}
        </Link>

        <h1 className="mb-2 text-5xl font-black text-black">{categoryName}</h1>
        <p className="text-gray-700 mb-12 text-lg font-bold">
          {posts.length} {posts.length === 1 ? config.category.postCountSingular : config.category.postCountPlural}
        </p>

        {posts.length === 0 ? (
          <p className="text-gray-700 text-lg">
            {config.category.emptyMessage}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => {
              // Dynamisch laden des HTML um zu überprüfen ob es ein Bild ist
              // (Hinweis: Wir nutzen das post Objekt das bereits das HTML hat)
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  {/* Minimalistisches Kästchen für Beiträge - keine Eckenrundung */}
                  <div className="border-4 border-black p-6 bg-white hover:bg-gray-50 transition-colors cursor-pointer shadow-md hover:shadow-lg min-h-48 flex flex-col justify-between">
                    {/* Beitrag-Titel */}
                    <div>
                      <h2 className="text-xl font-black text-black mb-4 line-clamp-3">
                        {post.title}
                      </h2>
                    </div>

                    {/* Trennlinie */}
                    <div className="border-t-2 border-gray-300 my-4"></div>

                    {/* Datum - unten */}
                    <div className="text-sm text-gray-700 font-bold">
                      {new Date(post.date).toLocaleDateString(
                        config.dateFormat.locale,
                        config.dateFormat.options as Intl.DateTimeFormatOptions
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}


