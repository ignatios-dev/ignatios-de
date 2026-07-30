'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { PostCard } from '@/lib/posts';
import { YouTubeVideo } from './YouTubeVideo';
import { LinkThumbnail } from './LinkThumbnail';

interface SiteConfig {
  dateFormatShort: {
    locale: string;
    options: {
      year: string;
      month: string;
      day: string;
    };
  };
  home: {
    emptyMessage: string;
  };
}

interface SearchPostsProps {
  posts: PostCard[];
  config: SiteConfig;
}

export function SearchPosts({ posts: allPosts, config }: SearchPostsProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Tiles für Posts + Links - mit Filterung
  const tiles = useMemo(() => {
    const result: Array<{
      key: string;
      type: 'post' | 'link' | 'youtube';
      post?: PostCard;
      link?: { url: string; title: string; date?: string };
    }> = [];

    const lowerQuery = searchQuery.toLowerCase();

    allPosts.forEach((post) => {
      if (post.links && post.links.length > 0) {
        // Verarbeite Links/Videos
        post.links.forEach((link, idx) => {
          // Wenn Suche aktiv: nur Links anzeigen die passen
          if (searchQuery.trim()) {
            if (!link.title.toLowerCase().includes(lowerQuery)) {
              return; // Überspringen wenn nicht passt
            }
          }

          const isYouTube = link.url.includes('youtube.com') || link.url.includes('youtu.be');
          result.push({
            key: `${post.slug}-link-${idx}`,
            type: isYouTube ? 'youtube' : 'link',
            link: {
              url: link.url,
              title: link.title,
              date: post.date,
            },
          });
        });
      } else {
        // Verarbeite Posts
        // Wenn Suche aktiv: nur Posts anzeigen die passen
        if (searchQuery.trim()) {
          if (!post.title.toLowerCase().includes(lowerQuery) &&
              !post.category.toLowerCase().includes(lowerQuery)) {
            return; // Überspringen wenn nicht passt
          }
        }

        result.push({
          key: post.slug,
          type: 'post',
          post,
        });
      }
    });

    return result;
  }, [searchQuery, allPosts]);

  return (
    <>
      {/* Suchfeld */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Beiträge durchsuchen..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 border border-gray-200 rounded-xl text-base
                       bg-gray-50 text-gray-900 placeholder-gray-400
                       focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent focus:bg-white
                       transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black
                         transition-colors text-sm font-semibold"
            >
              ✕
            </button>
          )}
        </div>
        {searchQuery && (
          <p className="text-sm text-gray-600 mt-2">
            {tiles.length} {tiles.length === 1 ? 'Ergebnis' : 'Ergebnisse'}
          </p>
        )}
      </div>

      {/* Posts Grid */}
      {tiles.length === 0 && searchQuery ? (
        <p className="text-gray-700 text-lg text-center">
          Keine Ergebnisse gefunden
        </p>
      ) : tiles.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300 text-lg text-center">
          {config.home.emptyMessage}
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max">
          {tiles.map((tile) => {
            if (tile.type === 'youtube') {
              return (
                <YouTubeVideo
                  key={tile.key}
                  url={tile.link!.url}
                  title={tile.link!.title}
                  date={tile.link!.date}
                />
              );
            }

            if (tile.type === 'link') {
              return (
                <LinkThumbnail
                  key={tile.key}
                  link={{
                    url: tile.link!.url,
                    title: tile.link!.title,
                    type: 'generic',
                    date: tile.link!.date,
                  }}
                />
              );
            }

            const post = tile.post!;
            const hasImage = !!post.image;
            const postHref = post.externalUrl || `/blog/${post.slug}`;
            const categoryDisplay =
              post.category === '__root__'
                ? 'General'
                : post.category.charAt(0).toUpperCase() + post.category.slice(1);

            return (
              <Link
                key={tile.key}
                href={postHref}
                className={`group ${hasImage ? 'lg:col-span-2 lg:row-span-2' : ''}`}
              >
                {hasImage ? (
                  <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-96 lg:h-full flex flex-col justify-between">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${post.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
                    <div className="relative p-5 flex flex-col justify-between h-full">
                      <div className="text-[11px] font-semibold text-white/80 uppercase tracking-widest">
                        {categoryDisplay}
                      </div>
                      <div className="space-y-2">
                        <h2 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                          {post.title}
                        </h2>
                        <div className="text-xs text-white/60">
                          {new Date(post.date).toLocaleDateString(
                            config.dateFormatShort.locale,
                            config.dateFormatShort.options as Intl.DateTimeFormatOptions
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl p-5 bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer h-64 flex flex-col justify-between">
                    <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                      {categoryDisplay}
                    </div>
                    <div className="flex items-center justify-center flex-1">
                      <h2 className="text-lg font-bold text-gray-900 text-center leading-snug">
                        {post.title}
                      </h2>
                    </div>
                    <div className="text-xs text-gray-400 text-center pt-4 border-t border-gray-100">
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
    </>
  );
}

