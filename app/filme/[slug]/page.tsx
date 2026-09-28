import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { YouTubeVideo } from "@/components/YouTubeVideo";
import { backdropUrl, formatWatchedDate, getFilmBySlug, getFilms, posterUrl, ratingStars } from "@/lib/films";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getFilms().map((film) => ({ slug: film.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const film = getFilmBySlug(slug);
  if (!film) {
    return {};
  }

  const description = `${film.title} (${film.year}) — ${ratingStars(film.rating)} gesehen am ${formatWatchedDate(film.watchedDate)}.`;
  return {
    title: `${film.title} (${film.year}) — Filme — ignatios.de`,
    description,
    alternates: { canonical: `/filme/${slug}` },
    openGraph: {
      title: `${film.title} (${film.year})`,
      description,
      url: `https://ignatios.de/filme/${slug}`,
      images: posterUrl(film) ? [posterUrl(film)!] : undefined,
      locale: "de_DE",
      siteName: "ignatios.de",
    },
  };
}

export default async function FilmPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const film = getFilmBySlug(slug);
  if (!film) {
    notFound();
  }

  const poster = posterUrl(film);
  const backdrop = backdropUrl(film);
  const tmdb = film.tmdb;

  const facts = [
    tmdb?.directors.length ? { label: "Regie", value: tmdb.directors.join(", ") } : null,
    tmdb?.cast.length ? { label: "Mit", value: tmdb.cast.join(", ") } : null,
    tmdb?.genres.length ? { label: "Genre", value: tmdb.genres.join(", ") } : null,
    tmdb?.runtime ? { label: "Laufzeit", value: `${tmdb.runtime} Min.` } : null,
  ].filter((fact) => fact !== null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {backdrop && (
        <div className="relative h-[220px] md:h-[380px] overflow-hidden bg-dark border-b-[3px] border-foreground">
          <img src={backdrop} alt="" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        </div>
      )}

      <main className={`max-w-[1100px] mx-auto px-6 md:px-12 pb-16 md:pb-[100px] ${backdrop ? "-mt-24 md:-mt-40 relative" : "pt-16 md:pt-[100px]"}`}>
        <Link
          href="/filme/"
          className="group inline-flex items-center gap-2 bg-background border-2 border-foreground rounded-full shadow-[3px_3px_0_0_var(--color-foreground)] font-mono text-[13px] text-foreground px-4 py-1.5 mb-8 no-underline transition-[transform,box-shadow] duration-150 hover:text-foreground hover:-translate-y-0.5 hover:shadow-[4px_5px_0_0_var(--color-foreground)] active:translate-y-0.5 active:shadow-none"
        >
          <span className="inline-block transition-transform duration-200 group-hover:-translate-x-1">←</span> Alle Filme
        </Link>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {poster && (
            <img
              src={poster}
              alt={`Poster: ${film.title}`}
              className="w-[160px] md:w-[260px] aspect-[2/3] object-cover nb-border nb-shadow rounded-2xl -rotate-1 shrink-0"
            />
          )}

          <div className="min-w-0 flex-1">
            <h1 className="text-[30px] md:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] mb-2">
              {film.title} <span className="text-secondary font-normal">{film.year}</span>
            </h1>
            {tmdb && tmdb.title !== film.title && (
              <div className="text-[16px] text-secondary mb-2">{tmdb.title}</div>
            )}
            {tmdb?.tagline && <p className="text-[17px] italic text-secondary mb-4">{tmdb.tagline}</p>}

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-5 mb-8">
              <span className="bg-foreground text-background rounded-lg font-mono text-[20px] tracking-[0.05em] px-3 py-0.5">{ratingStars(film.rating)}</span>
              {film.liked && <span className="bg-light-blue text-accent border-2 border-foreground rounded-full font-mono text-[12px] px-3 py-0.5">♥ Gefällt mir</span>}
              {film.rewatch && (
                <span className="bg-light-blue text-accent border-2 border-foreground rounded-full font-mono text-[12px] uppercase tracking-[0.05em] px-3 py-0.5">
                  Rewatch
                </span>
              )}
              <span className="font-mono text-[13px] text-secondary">
                Gesehen am {formatWatchedDate(film.watchedDate)}
              </span>
            </div>

            {film.reviewHtml &&
              (film.containsSpoilers ? (
                <details className="bg-light-blue nb-border nb-shadow-sm rounded-2xl px-5 py-4 mb-10">
                  <summary className="cursor-pointer font-mono text-[13px] text-accent">
                    Meine Meinung (enthält Spoiler) — aufklappen
                  </summary>
                  <div
                    className="text-[19px] leading-[1.7] text-body-text mt-3 [&_p]:my-2"
                    dangerouslySetInnerHTML={{ __html: film.reviewHtml }}
                  />
                </details>
              ) : (
                <blockquote
                  className="bg-light-blue nb-border nb-shadow-sm rounded-2xl px-5 py-4 mb-10 text-[19px] leading-[1.7] text-body-text [&_p]:my-2"
                  dangerouslySetInnerHTML={{ __html: film.reviewHtml }}
                />
              ))}

            {tmdb?.overview && (
              <section className="mb-8">
                <h2 className="inline-block bg-light-blue border-2 border-foreground rounded-full font-mono text-[12px] tracking-[0.08em] text-accent uppercase px-3 py-0.5 mb-4">Handlung</h2>
                <p className="text-[17px] leading-[1.8] text-body-text m-0">{tmdb.overview}</p>
              </section>
            )}

            {facts.length > 0 && (
              <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-[15px] mb-10">
                {facts.map((fact) => (
                  <div key={fact.label} className="contents">
                    <dt className="font-mono text-[13px] text-secondary uppercase tracking-[0.05em] pt-0.5">{fact.label}</dt>
                    <dd className="m-0">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {tmdb?.trailerKey && (
              <section className="mb-10">
                <h2 className="inline-block bg-light-blue border-2 border-foreground rounded-full font-mono text-[12px] tracking-[0.08em] text-accent uppercase px-3 py-0.5 mb-4">Trailer</h2>
                <YouTubeVideo url={`https://www.youtube.com/watch?v=${tmdb.trailerKey}`} title={`${film.title} — Trailer`} />
              </section>
            )}

            <div className="flex flex-wrap gap-4 font-mono text-[13px]">
              <a href={film.letterboxdUrl} className="bg-foreground text-background rounded-lg font-bold px-3 py-1.5 hover:bg-accent hover:text-background">
                Auf Letterboxd →
              </a>
              {film.tmdbId && (
                <a href={`https://www.themoviedb.org/movie/${film.tmdbId}`} className="bg-foreground text-background rounded-lg font-bold px-3 py-1.5 hover:bg-accent hover:text-background">
                  Auf TMDB →
                </a>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
