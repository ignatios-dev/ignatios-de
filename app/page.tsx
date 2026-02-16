import Link from "next/link";
import { getSortedPosts } from "@/lib/posts";

export default function Home() {
  const posts = getSortedPosts();

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-12 text-4xl font-bold text-gray-900">Blog</h1>

        {posts.length === 0 ? (
          <p className="text-gray-500">No posts found.</p>
        ) : (
          <ul className="space-y-8">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600">
                    {post.title}
                  </h2>
                  <time className="block text-sm text-gray-500 mt-2">
                    {new Date(post.date).toLocaleDateString("de-DE", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
