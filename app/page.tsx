import { getPostCards } from "@/lib/posts";
import { getSiteConfig } from "@/lib/config";
import { SearchPosts } from "@/components/SearchPosts";

export default function Home() {
  const allPosts = getPostCards();
  const config = getSiteConfig();

  return (
    <div className="min-h-screen bg-white text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-5xl font-black text-black text-center">{config.home.heading}</h1>

        <SearchPosts posts={allPosts} config={config} />
      </div>
    </div>
  );
}
