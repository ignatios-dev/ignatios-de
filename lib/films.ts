import fs from "fs";
import path from "path";

// Wird von scripts/sync-films.mjs aus dem Letterboxd-Feed und TMDB befüllt
export interface Film {
  id: string;
  slug: string;
  title: string;
  year: number;
  watchedDate: string;
  rating: number | null;
  rewatch: boolean;
  liked: boolean;
  reviewHtml: string | null;
  containsSpoilers: boolean;
  letterboxdUrl: string;
  letterboxdPoster: string | null;
  tmdbId: number | null;
  tmdb: {
    title: string;
    originalTitle: string;
    overview: string | null;
    tagline: string | null;
    runtime: number | null;
    genres: string[];
    directors: string[];
    cast: string[];
    posterPath: string | null;
    backdropPath: string | null;
    voteAverage: number;
    trailerKey: string | null;
  } | null;
}

let cachedFilms: Film[] | undefined = undefined;

export function getFilms(): Film[] {
  if (cachedFilms) {
    return cachedFilms;
  }

  const dataPath = path.join(process.cwd(), "data", "films.json");
  cachedFilms = fs.existsSync(dataPath) ? (JSON.parse(fs.readFileSync(dataPath, "utf8")) as Film[]) : [];

  return cachedFilms;
}

export function getFilmBySlug(slug: string): Film | undefined {
  return getFilms().find((film) => film.slug === slug);
}

export function posterUrl(film: Film): string | null {
  if (film.tmdb?.posterPath) {
    return `https://image.tmdb.org/t/p/w500${film.tmdb.posterPath}`;
  }
  return film.letterboxdPoster;
}

export function backdropUrl(film: Film): string | null {
  return film.tmdb?.backdropPath ? `https://image.tmdb.org/t/p/w1280${film.tmdb.backdropPath}` : null;
}

export function ratingStars(rating: number | null): string {
  if (rating === null) {
    return "";
  }
  return "★".repeat(Math.floor(rating)) + (rating % 1 ? "½" : "");
}

export function formatWatchedDate(date: string): string {
  return new Date(date).toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" });
}
