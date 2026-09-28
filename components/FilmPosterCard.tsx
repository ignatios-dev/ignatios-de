import Link from "next/link";
import { type Film, posterUrl, ratingStars } from "@/lib/films";

export function FilmPosterCard({ film }: { film: Film }) {
  const poster = posterUrl(film);

  return (
    <Link
      href={`/filme/${film.slug}/`}
      data-reveal
      className="group flex flex-col gap-2.5 no-underline text-foreground hover:text-foreground"
    >
      <div className="aspect-[2/3] w-full overflow-hidden nb-border nb-shadow-sm nb-press rounded-xl bg-light-blue">
        {poster ? (
          <img
            src={poster}
            alt={`Poster: ${film.title}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-3 text-center font-bold">{film.title}</div>
        )}
      </div>
      <div className="self-start bg-foreground text-background rounded-lg font-mono text-[12px] tracking-[0.05em] px-2 py-0.5 mt-1 transition-transform duration-200 group-hover:-rotate-3">
        {ratingStars(film.rating)}
        {film.liked && <span className="ml-1.5 text-[oklch(0.7_0.18_20)]" aria-label="Gefällt mir">♥</span>}
      </div>
      <div className="text-[15px] font-semibold leading-[1.3]">
        {film.title} <span className="text-secondary font-normal">{film.year}</span>
      </div>
    </Link>
  );
}
