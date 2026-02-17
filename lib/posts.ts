import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
  html: string;
  category: string;
}

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  category: string;
}

export interface CategoryInfo {
  name: string;
  slug: string;
  postCount: number;
  latestDate: string;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  // slug kann "category/post-name" oder "post-name" sein
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const processedContent = await remark()
    .use(remarkHtml)
    .process(content);

  const html = processedContent.toString();

  // Extrahiere Kategorie aus slug oder setze auf "all"
  const category = slug.includes("/") ? slug.split("/")[0] : "all";

  return {
    slug,
    title: data.title,
    date: data.date,
    content,
    html,
    category,
  };
}

export function getSortedPosts(): PostMetadata[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const posts: PostMetadata[] = [];
  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });

  entries.forEach((entry) => {
    if (entry.isDirectory()) {
      // Es ist ein Kategorieordner
      const categoryPath = path.join(postsDirectory, entry.name);
      const fileNames = fs.readdirSync(categoryPath);

      fileNames.forEach((fileName) => {
        if (fileName.endsWith(".md")) {
          const slug = `${entry.name}/${fileName.replace(/\.md$/, "")}`;
          const fullPath = path.join(categoryPath, fileName);
          const fileContents = fs.readFileSync(fullPath, "utf8");
          const { data } = matter(fileContents);

          posts.push({
            slug,
            title: data.title,
            date: data.date,
            category: entry.name,
          });
        }
      });
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      // Datei direkt im posts Ordner (legacy support)
      const slug = entry.name.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, entry.name);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      posts.push({
        slug,
        title: data.title,
        date: data.date,
        category: "all",
      });
    }
  });

  return posts.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const slugs: string[] = [];
  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });

  entries.forEach((entry) => {
    if (entry.isDirectory()) {
      const categoryPath = path.join(postsDirectory, entry.name);
      const fileNames = fs.readdirSync(categoryPath);

      fileNames.forEach((fileName) => {
        if (fileName.endsWith(".md")) {
          slugs.push(`${entry.name}/${fileName.replace(/\.md$/, "")}`);
        }
      });
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      slugs.push(entry.name.replace(/\.md$/, ""));
    }
  });

  return slugs;
}

export function getCategories(): CategoryInfo[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const categories: CategoryInfo[] = [];
  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });

  entries.forEach((entry) => {
    if (entry.isDirectory()) {
      const categoryPath = path.join(postsDirectory, entry.name);
      const fileNames = fs.readdirSync(categoryPath);
      const categoryPosts: PostMetadata[] = [];

      fileNames.forEach((fileName) => {
        if (fileName.endsWith(".md")) {
          const fullPath = path.join(categoryPath, fileName);
          const fileContents = fs.readFileSync(fullPath, "utf8");
          const { data } = matter(fileContents);

          categoryPosts.push({
            slug: `${entry.name}/${fileName.replace(/\.md$/, "")}`,
            title: data.title,
            date: data.date,
            category: entry.name,
          });
        }
      });

      if (categoryPosts.length > 0) {
        const sortedPosts = categoryPosts.sort((a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        categories.push({
          name: entry.name.charAt(0).toUpperCase() + entry.name.slice(1),
          slug: entry.name,
          postCount: categoryPosts.length,
          latestDate: sortedPosts[0].date,
        });
      }
    }
  });

  return categories.sort((a, b) =>
    new Date(b.latestDate).getTime() - new Date(a.latestDate).getTime()
  );
}
