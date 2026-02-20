import Link from "next/link";
import { getPostCards } from "@/lib/posts";
import { getSiteConfig } from "@/lib/config";
import { LinkThumbnail } from "@/components/LinkThumbnail";
import { YouTubeVideo } from "@/components/YouTubeVideo";

export default function Home() {
  const posts = getPostCards();
  const config = getSiteConfig();

  // Flaches Array aller Kacheln (Posts + Links)
  const tiles: Array<{
    key: string;
    type: "post" | "link" | "youtube";
    post?: (typeof posts)[0];
    link?: { url: string; title: string; date?: string };
  }> = [];

  posts.forEach((post) => {
    if (post.links && post.links.length > 0) {
      // Links von diesem Post hinzufügen
      post.links.forEach((link, idx) => {
        const isYouTube = link.url.includes("youtube.com") || link.url.includes("youtu.be");
        tiles.push({
          key: `${post.slug}-link-${idx}`,
          type: isYouTube ? "youtube" : "link",
          link: {
            url: link.url,
            title: link.title,
            date: post.date,
          },
        });
      });
    } else {
      // Post hinzufügen
      tiles.push({
        key: post.slug,
        type: "post",
        post,
      });
    }
  });

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-16 text-5xl font-black text-black text-center">{config.home.heading}</h1>

        {tiles.length === 0 ? (
          <p className="text-gray-700 text-lg text-center">{config.home.emptyMessage}</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max">
            {tiles.map((tile) => {
              if (tile.type === "youtube") {
                return (
                  <YouTubeVideo
                    key={tile.key}
                    url={tile.link!.url}
                    title={tile.link!.title}
                    date={tile.link!.date}
                  />
                );
              }

              if (tile.type === "link") {
                return (
                  <LinkThumbnail
                    key={tile.key}
                    link={{
                      url: tile.link!.url,
                      title: tile.link!.title,
                      type: "generic",
                      date: tile.link!.date,
                    }}
                  />
                );
              }

              // Post rendern
              const post = tile.post!;
              const hasImage = !!post.image;
              const categoryDisplay = post.category === "__root__"
                ? "Allgemein"
                : post.category.charAt(0).toUpperCase() + post.category.slice(1);

              return (
                <Link
                  key={tile.key}
                  href={`/blog/${post.slug}`}
                  className={`group ${hasImage ? "lg:col-span-2 lg:row-span-2" : ""}`}
                >
                  {hasImage ? (
                    // Große Karte mit Bild
                    <div className="relative border-4 border-black overflow-hidden bg-gray-100 hover:shadow-lg transition-shadow cursor-pointer h-96 lg:h-full flex flex-col justify-between">
                      {/* Bild als Hintergrund */}
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${post.image})` }}
                      />

                      {/* Dunkler Overlay */}
                      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80" />

                      {/* Inhalt */}
                      <div className="relative p-4 flex flex-col justify-between h-full">
                        {/* Kategorie oben */}
                        <div className="text-xs font-bold text-white uppercase tracking-wider">
                          {categoryDisplay}
                        </div>

                        {/* Titel und Datum unten */}
                        <div className="space-y-2">
                          <h2 className="text-xl lg:text-2xl font-black text-white leading-tight">
                            {post.title}
                          </h2>
                          <div className="text-xs text-gray-200 font-semibold">
                            {new Date(post.date).toLocaleDateString(
                              config.dateFormatShort.locale,
                              config.dateFormatShort.options as Intl.DateTimeFormatOptions
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Normale Karte ohne Bild
                    <div className="border-4 border-black p-4 bg-white hover:bg-gray-50 transition-colors cursor-pointer shadow-md hover:shadow-lg h-64 flex flex-col justify-between">
                      {/* Kategorie */}
                      <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-2">
                        {categoryDisplay}
                      </div>

                      {/* Titel - zentral & bold */}
                      <div className="flex items-center justify-center flex-1">
                        <h2 className="text-lg font-black text-black text-center">
                          {post.title}
                        </h2>
                      </div>

                      {/* Trennlinie */}
                      <div className="border-t-2 border-black my-4"></div>

                      {/* Datum - unten */}
                      <div className="text-xs text-gray-700 font-semibold text-center">
                        {new Date(post.date).toLocaleDateString(
                          config.dateFormatShort.locale,
                          config.dateFormatShort.options as Intl.DateTimeFormatOptions
                        )}
                      </div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
