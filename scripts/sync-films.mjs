// Holt neue Diary-Einträge aus dem Letterboxd-RSS-Feed, reichert sie mit TMDB-Daten
// an und ergänzt sie in data/films.json. Bestehende Einträge bleiben erhalten, weil
// der Feed nur die letzten ~50 Einträge enthält.
//
// Aufruf: TMDB_API_KEY=... node scripts/sync-films.mjs
// Ohne TMDB_API_KEY werden nur die Letterboxd-Daten übernommen; die TMDB-Anreicherung
// wird beim nächsten Lauf mit Key nachgeholt.

import fs from "fs";
import path from "path";

const LETTERBOXD_USER = "grenzdebil";
const FEED_URL = `https://letterboxd.com/${LETTERBOXD_USER}/rss/`;
const DATA_PATH = path.join(process.cwd(), "data", "films.json");
const TMDB_KEY = process.env.TMDB_API_KEY;

function decodeEntities(str) {
  return str
    .replace(/&#0*39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&amp;/g, "&");
}

function tag(item, name) {
  const match = item.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`));
  return match ? decodeEntities(match[1].trim()) : null;
}

function parseFeed(xml) {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

  return items
    .filter((item) => item.includes("<letterboxd:filmTitle>"))
    .map((item) => {
      const description = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1] ?? "";
      const posterUrl = description.match(/<img src="([^"]+)"/)?.[1] ?? null;
      const containsSpoilers = description.includes("This review may contain spoilers.");
      const reviewHtml = description
        .replace(/<p><img[^>]*\/?><\/p>/g, "")
        .replace(/<p><em>This review may contain spoilers\.<\/em><\/p>/g, "")
        .trim();
      const link = tag(item, "link");
      const filmSlug = link.match(/\/film\/([^/]+)\//)?.[1] ?? "film";
      const watchedDate = tag(item, "letterboxd:watchedDate");
      const rating = tag(item, "letterboxd:memberRating");
      const tmdbId = tag(item, "tmdb:movieId");

      // Letterboxd setzt ohne Review-Text nur "Watched on ..." als Beschreibung
      const hasReview = reviewHtml !== "" && !/^<p>Watched on /.test(reviewHtml);

      return {
        id: tag(item, "guid"),
        slug: `${filmSlug}-${watchedDate}`,
        title: tag(item, "letterboxd:filmTitle"),
        year: Number(tag(item, "letterboxd:filmYear")),
        watchedDate,
        rating: rating ? Number(rating) : null,
        rewatch: tag(item, "letterboxd:rewatch") === "Yes",
        liked: tag(item, "letterboxd:memberLike") === "Yes",
        reviewHtml: hasReview ? reviewHtml : null,
        containsSpoilers,
        letterboxdUrl: link,
        letterboxdPoster: posterUrl,
        tmdbId: tmdbId ? Number(tmdbId) : null,
        tmdb: null,
      };
    });
}

async function tmdbFetch(endpoint, params = {}) {
  const url = new URL(`https://api.themoviedb.org/3${endpoint}`);
  const headers = { accept: "application/json" };

  // Unterstützt sowohl den v3-API-Key als auch das v4-Read-Access-Token
  if (TMDB_KEY.startsWith("eyJ")) {
    headers.Authorization = `Bearer ${TMDB_KEY}`;
  } else {
    url.searchParams.set("api_key", TMDB_KEY);
  }
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  const res = await fetch(url, { headers });
  if (!res.ok) {
    throw new Error(`TMDB ${endpoint}: HTTP ${res.status}`);
  }
  return res.json();
}

function pickTrailer(videos) {
  const youtube = videos.filter((v) => v.site === "YouTube" && v.type === "Trailer");
  const rank = (v) => (v.iso_639_1 === "de" ? 0 : v.iso_639_1 === "en" ? 1 : 2) + (v.official ? 0 : 0.5);
  return youtube.sort((a, b) => rank(a) - rank(b))[0]?.key ?? null;
}

async function loadTmdb(tmdbId) {
  const de = await tmdbFetch(`/movie/${tmdbId}`, {
    language: "de-DE",
    append_to_response: "videos,credits",
    include_video_language: "de,en,null",
  });

  let overview = de.overview;
  let tagline = de.tagline;
  if (!overview) {
    const en = await tmdbFetch(`/movie/${tmdbId}`, { language: "en-US" });
    overview = en.overview;
    tagline = tagline || en.tagline;
  }

  return {
    title: de.title,
    originalTitle: de.original_title,
    overview: overview || null,
    tagline: tagline || null,
    runtime: de.runtime || null,
    genres: de.genres.map((g) => g.name),
    directors: de.credits.crew.filter((c) => c.job === "Director").map((c) => c.name),
    cast: de.credits.cast.slice(0, 6).map((c) => c.name),
    posterPath: de.poster_path,
    backdropPath: de.backdrop_path,
    voteAverage: de.vote_average,
    trailerKey: pickTrailer(de.videos.results),
  };
}

async function main() {
  const existing = fs.existsSync(DATA_PATH) ? JSON.parse(fs.readFileSync(DATA_PATH, "utf8")) : [];
  const byId = new Map(existing.map((film) => [film.id, film]));

  const res = await fetch(FEED_URL, { headers: { "user-agent": "ignatios.de film sync" } });
  if (!res.ok) {
    throw new Error(`Letterboxd-Feed: HTTP ${res.status}`);
  }
  const fromFeed = parseFeed(await res.text());

  let added = 0;
  for (const film of fromFeed) {
    const known = byId.get(film.id);
    // Feed-Daten aktualisieren (Review/Bewertung können nachträglich geändert werden),
    // bereits geladene TMDB-Daten behalten
    byId.set(film.id, { ...film, tmdb: known?.tmdb ?? null });
    if (!known) added++;
  }

  let enriched = 0;
  if (TMDB_KEY) {
    for (const film of byId.values()) {
      if (film.tmdb || !film.tmdbId) continue;
      try {
        film.tmdb = await loadTmdb(film.tmdbId);
        enriched++;
      } catch (err) {
        console.warn(`TMDB fehlgeschlagen für ${film.title}: ${err.message}`);
      }
    }
  } else {
    console.warn("TMDB_API_KEY nicht gesetzt — TMDB-Anreicherung übersprungen.");
  }

  const films = [...byId.values()].sort((a, b) =>
    b.watchedDate === a.watchedDate ? b.id.localeCompare(a.id) : b.watchedDate.localeCompare(a.watchedDate)
  );

  fs.mkdirSync(path.dirname(DATA_PATH), { recursive: true });
  fs.writeFileSync(DATA_PATH, JSON.stringify(films, null, 2) + "\n");
  console.log(`${films.length} Filme gespeichert (${added} neu, ${enriched} mit TMDB angereichert).`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
