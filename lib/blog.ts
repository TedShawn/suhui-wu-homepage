import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "content", "blog");
const supportedExtensions = [".md", ".mdx"];

export type BlogFrontmatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  slug: string;
};

export type BlogPost = BlogFrontmatter & {
  content: string;
  readingTime: string;
};

function isBlogFile(fileName: string) {
  return supportedExtensions.includes(path.extname(fileName));
}

function assertFrontmatter(data: Record<string, unknown>, fileName: string): BlogFrontmatter {
  const requiredStringFields = ["title", "date", "description", "slug"] as const;

  for (const field of requiredStringFields) {
    if (typeof data[field] !== "string" || data[field].trim() === "") {
      throw new Error(`Missing or invalid "${field}" frontmatter in ${fileName}`);
    }
  }

  if (!Array.isArray(data.tags) || data.tags.some((tag) => typeof tag !== "string")) {
    throw new Error(`Missing or invalid "tags" frontmatter in ${fileName}`);
  }

  return {
    title: data.title as string,
    date: data.date as string,
    description: data.description as string,
    slug: data.slug as string,
    tags: data.tags as string[],
  };
}

function estimateReadingTime(content: string) {
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 220));
  return `${minutes} min read`;
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogDirectory)
    .filter(isBlogFile)
    .map((fileName) => {
      const fullPath = path.join(blogDirectory, fileName);
      const fileContent = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContent);
      const frontmatter = assertFrontmatter(data, fileName);

      return {
        ...frontmatter,
        content,
        readingTime: estimateReadingTime(content),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((post) => post.slug === slug);
}

export function getBlogSlugs() {
  return getAllBlogPosts().map((post) => post.slug);
}

export function formatPostDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(date));
}
