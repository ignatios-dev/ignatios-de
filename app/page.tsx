import { getPostCards } from "@/lib/posts";
import { getSiteConfig } from "@/lib/config";
import { Navigation } from "@/components/Navigation";
import { SearchPosts } from "@/components/SearchPosts";
import Link from "next/link";

export default function Home() {
  const allPosts = getPostCards();
  const config = getSiteConfig();

  const projects = allPosts.filter((p) => p.type === "project");
  const blogPosts = allPosts.filter((p) => p.type !== "project");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Hallo, ich bin Ignatios.
          </h1>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            Software-Entwickler aus Freiburg. Ich schreibe hier über
            Technologie, griechische Kultur und was mich sonst bewegt.
          </p>
          <div className="mt-8 w-12 h-px bg-gray-300 mx-auto" />
        </div>
      </section>

      {/* Projekte */}
      {projects.length > 0 && (
        <section className="py-12 px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8 text-center">
              Projekte
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={project.externalUrl || `/blog/${project.slug}`}
                  className="group block rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
                    Projekt
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                      {project.description}
                    </p>
                  )}
                  <div className="mt-4 text-sm font-medium text-gray-400 group-hover:text-gray-900 transition-colors">
                    Ansehen &rarr;
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog */}
      <section className="py-12 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8 text-center">
            Blog
          </h2>
          <SearchPosts posts={blogPosts} config={config} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-gray-100 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <span>
            &copy; {new Date().getFullYear()} Ignatios Waffenschmidt
          </span>
          <div className="flex gap-6">
            <a
              href="/impressum"
              className="hover:text-gray-900 transition-colors"
            >
              Impressum
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
