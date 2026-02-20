'use client';

import { useState } from 'react';

interface YouTubeVideoProps {
  url: string;
  title: string;
  date?: string;
}

function extractYouTubeId(url: string): string | null {
  const youtubeMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/
  );
  return youtubeMatch?.[1] || null;
}

function getThumbnailUrl(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

export function YouTubeVideo({ url, title, date }: YouTubeVideoProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const videoId = extractYouTubeId(url);

  if (!videoId) {
    return null;
  }

  const thumbnailUrl = getThumbnailUrl(videoId);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  // Modal/Lightbox View
  if (isExpanded) {
    return (
      <>
        {/* Dunkler Hintergrund */}
        <div
          className="fixed inset-0 bg-black/80 z-40 cursor-pointer"
          onClick={() => setIsExpanded(false)}
          aria-label="Close video"
        />

        {/* Modal */}
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black border-4 border-black">
            {/* Close Button */}
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-60"
              aria-label="Close video"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                width="100%"
                height="100%"
                src={embedUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>

            {/* Video Title */}
            <div className="bg-black p-4 border-t-4 border-black">
              <h2 className="text-white font-black text-lg">{title}</h2>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Thumbnail View
  return (
    <div className="group relative border-4 border-black overflow-hidden bg-gray-100 hover:shadow-lg transition-shadow cursor-pointer h-64 flex flex-col justify-between">
      {/* Thumbnail Bild */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${thumbnailUrl})` }}
      />

      {/* Dunkler Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Play-Button und Titel */}
      <div
        className="relative p-4 flex flex-col justify-center items-center h-full cursor-pointer"
        onClick={() => setIsExpanded(true)}
      >
        <button
          className="text-white mb-4 hover:scale-110 transition-transform"
          aria-label="Play video"
        >
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
        <h3 className="text-xl font-black text-white text-center leading-tight">
          {title}
        </h3>
      </div>
    </div>
  );
}


