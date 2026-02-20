import Link from "next/link";
import { getCategories } from "@/lib/posts";
import { getSiteConfig } from "@/lib/config";

export default function Home() {
  const categories = getCategories();
  const config = getSiteConfig();

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-16 text-5xl font-black text-black text-center">{config.home.heading}</h1>

        {categories.length === 0 ? (
          <p className="text-gray-700 text-lg text-center">{config.home.emptyMessage}</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="group"
              >
                {/* Minimalistisches Kästchen mit fetten Linien - keine Eckenrundung */}
                <div className="border-4 border-black p-6 bg-white hover:bg-gray-50 transition-colors cursor-pointer shadow-md hover:shadow-lg h-64 flex flex-col justify-between">
                  {/* Kategorie-Name - zentral & bold */}
                  <div className="flex items-center justify-center flex-1">
                    <h2 className="text-3xl font-black text-black text-center">
                      {category.name}
                    </h2>
                  </div>

                  {/* Trennlinie */}
                  <div className="border-t-2 border-black my-4"></div>

                  {/* Metadaten - unten */}
                  <div className="space-y-2 text-center">
                    <div className="text-sm font-bold text-black">
                      {category.postCount}{" "}
                      {category.postCount === 1 ? config.category.postCountSingular : config.category.postCountPlural}
                    </div>
                    <div className="text-xs text-gray-700 font-semibold">
                      {new Date(category.latestDate).toLocaleDateString(
                        config.dateFormatShort.locale,
                        config.dateFormatShort.options as Intl.DateTimeFormatOptions
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
