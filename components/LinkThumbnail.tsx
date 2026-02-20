import Link from "next/link";

export interface LinkTile {
  url: string;
  title: string;
  type: "youtube" | "instagram" | "wikipedia" | "generic";
  date?: string;
}

function getThumbnailFromUrl(url: string): string | null {
  // YouTube-Thumbnail
  const youtubeMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/
  );
  if (youtubeMatch && youtubeMatch[1]) {
    return `https://img.youtube.com/vi/${youtubeMatch[1]}/maxresdefault.jpg`;
  }
  return null;
}

function getLinkType(url: string): LinkTile["type"] {
  if (url.includes("youtube.com") || url.includes("youtu.be")) return "youtube";
  if (url.includes("instagram.com")) return "instagram";
  if (url.includes("wikipedia.org")) return "wikipedia";
  return "generic";
}

function getDisplayIcon(type: LinkTile["type"]): React.ReactNode {
  switch (type) {
    case "youtube":
      return (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "instagram":
      return (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm5.838 7.15a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8zm-4.838-2.587a4.119 4.119 0 1 0 0 8.238 4.119 4.119 0 0 0 0-8.238zm0 6.789a2.67 2.67 0 1 1 0-5.338 2.67 2.67 0 0 1 0 5.338z" />
        </svg>
      );
    case "wikipedia":
      return (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm.68-16.6h-.68c-1.05 0-2.04.51-2.64 1.36-.6.85-.6 1.99.01 2.84L8.96 9.88c.45.6 1.16.96 1.89.96.73 0 1.44-.36 1.89-.96l3.52-4.4c.61-.85.61-1.99.01-2.84-.6-.85-1.59-1.36-2.64-1.36zm.68 15.68h.68c1.05 0 2.04-.51 2.64-1.36.6-.85.6-1.99-.01-2.84l-3.52-4.4c-.45-.6-1.16-.96-1.89-.96-.73 0-1.44.36-1.89.96l-3.52 4.4c-.61.85-.61 1.99-.01 2.84.6.85 1.59 1.36 2.64 1.36z" />
        </svg>
      );
    case "generic":
    default:
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      );
  }
}

export function LinkThumbnail({ link }: { link: LinkTile }) {
  const thumbnail = getThumbnailFromUrl(link.url);
  const icon = getDisplayIcon(link.type);

  if (thumbnail) {
    // Thumbnail mit Hintergrund (z.B. YouTube)
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative border-4 border-black overflow-hidden bg-gray-100 hover:shadow-lg transition-shadow cursor-pointer h-64 flex flex-col justify-between"
      >
        {/* Bild als Hintergrund */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${thumbnail})` }}
        />

        {/* Dunkler Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Icon und Titel */}
        <div className="relative p-4 flex flex-col justify-center items-center h-full">
          <div className="text-white mb-4">{icon}</div>
          <h3 className="text-xl font-black text-white text-center leading-tight">
            {link.title}
          </h3>
        </div>
      </a>
    );
  }

  // Einfache Karte ohne Bild (für generische Links)
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-4 border-black p-4 bg-white hover:bg-gray-50 transition-colors cursor-pointer shadow-md hover:shadow-lg h-64 flex flex-col justify-between"
    >
      {/* Icon oben */}
      <div className="text-black mb-2">{icon}</div>

      {/* Titel - zentral */}
      <div className="flex items-center justify-center flex-1">
        <h3 className="text-lg font-black text-black text-center">
          {link.title}
        </h3>
      </div>

      {/* Trennlinie */}
      <div className="border-t-2 border-black my-4"></div>

      {/* URL - unten */}
      <div className="text-xs text-gray-600 font-semibold text-center truncate">
        {new URL(link.url).hostname}
      </div>
    </a>
  );
}






