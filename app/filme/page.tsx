import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FilmPosterCard } from "@/components/FilmPosterCard";
import { SectionLabel } from "@/components/SectionLabel";
import { getFilms } from "@/lib/films";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filme — ignatios.de",
  description: "Filme, die ich zuletzt gesehen habe — mit Bewertung, Kurzreview und Trailer. Automatisch aus Letterboxd.",
};

export default function Filme() {
  const films = getFilms();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="max-w-[1100px] mx-auto px-6 py-16 md:px-12 md:py-[100px]">
        <div className="nb-intro">
        <SectionLabel>Filme</SectionLabel>
        <h1 className="text-[30px] md:text-[52px] font-bold tracking-[-0.02em] mb-5 md:mb-7">
          Zuletzt gesehen
        </h1>
        <p className="text-[18px] leading-[1.7] text-secondary max-w-[680px] mb-12 md:mb-[60px]">
          Was bei mir über den Bildschirm (oder die Kinoleinwand) läuft — mit Bewertung und ein paar Worten dazu.
          Wird automatisch aus meinem{" "}
          <a href="https://letterboxd.com/grenzdebil/" className="font-semibold underline">
            Letterboxd-Profil
          </a>{" "}
          übernommen.
        </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-9 md:gap-x-7">
          {films.map((film) => (
            <FilmPosterCard key={film.id} film={film} />
          ))}
        </div>

        <p className="font-mono text-[12px] text-secondary mt-16">
          Filminfos und Bilder: <a href="https://www.themoviedb.org/">TMDB</a>. This product uses the TMDB API but is
          not endorsed or certified by TMDB.
        </p>
      </main>

      <Footer />
    </div>
  );
}
