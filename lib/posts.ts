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


export interface PostCard {
  slug: string;
  title: string;
  date: string;
  category: string;
  image?: string; // URL zum Bild, falls vorhanden
  links?: Array<{
    url: string;
    title: string;
  }>;
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


// Neue Funktion: Alle Beiträge als einzelne Karten mit Bildinformationen
export function getPostCards(): PostCard[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const cards: PostCard[] = [];
  const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });

  // Funktionshilfe: Bilder aus Markdown-Content extrahieren
  function extractImageFromContent(content: string): string | undefined {
    // Suche nach Markdown-Bildern: ![alt](path)
    const markdownImageRegex = /!\[.*?]\((.*?)\)/;
    const match = content.match(markdownImageRegex);
    if (match && match[1]) {
      return match[1];
    }
    return undefined;
  }

  entries.forEach((entry) => {
    if (entry.isDirectory()) {
      // Verarbeite Dateien im Ordner
      const categoryPath = path.join(postsDirectory, entry.name);
      const fileNames = fs.readdirSync(categoryPath);

      fileNames.forEach((fileName) => {
        if (fileName.endsWith(".md")) {
          const fullPath = path.join(categoryPath, fileName);
          const fileContents = fs.readFileSync(fullPath, "utf8");
          const { data, content } = matter(fileContents);

          const image = extractImageFromContent(content);
          const links = data.links || undefined;

          cards.push({
            slug: `${entry.name}/${fileName.replace(/\.md$/, "")}`,
            title: data.title,
            date: data.date,
            category: entry.name,
            image,
            links,
          });
        }
      });
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      // Dateien direkt im posts-Ordner (Root-Ebene)
      const fullPath = path.join(postsDirectory, entry.name);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      const image = extractImageFromContent(content);
      const links = data.links || undefined;

      cards.push({
        slug: entry.name.replace(/\.md$/, ""),
        title: data.title,
        date: data.date,
        category: "__root__", // Spezielle Kategorie für Root-Dateien
        image,
        links,
      });
    }
  });

  return cards.sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

