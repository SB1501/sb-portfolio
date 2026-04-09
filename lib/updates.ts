import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type UpdateType = "post" | "video" | "status";

export type Update = {
  slug: string;
  date: string;
  title: string;
  tags: string[];
  excerpt: string;
  type: UpdateType;
  youtubeId?: string;
  coverImage?: string;
};

export type UpdateFile = Update & {
  content: string;
};

const DEFAULT_COVER_IMAGE = "/images/default-coverimage.webp";
const VALID_UPDATE_TYPES: UpdateType[] = ["post", "video", "status"];
export const UPDATES_DIR = path.join(process.cwd(), "content", "updates");

function normalizeTag(tag: string): string {
  return tag.trim().toLowerCase();
}

function getTagLabel(tag: string): string {
  const labels: Record<string, string> = {
    react: "React",
    "next.js": "Next.js",
    nextjs: "Next.js",
    typescript: "TypeScript",
    aws: "AWS",
    javascript: "JavaScript",
    "node.js": "Node.js",
    nodejs: "Node.js",
    css: "CSS",
    html: "HTML",
    dynamodb: "DynamoDB",
    ios: "iOS",
    csharp: "C#",
    dotnet: ".NET",
    sql: "SQL",
  };

  const normalized = normalizeTag(tag);
  return labels[normalized] ?? tag.trim();
}

function getStringValue(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;

  const trimmed = value.trim();
  return trimmed ? trimmed : undefined;
}

function isValidDate(value: string): boolean {
  return !Number.isNaN(new Date(value).getTime());
}

function getTags(value: unknown): string[] {
  const rawTags = Array.isArray(value)
    ? value.map((tag) => String(tag))
    : getStringValue(value)
      ? String(value)
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean)
      : [];

  return [...new Set(rawTags.map(normalizeTag))];
}

function getExcerpt(content: string, excerpt?: string): string {
  if (excerpt) return excerpt;

  return (
    content
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#") && !line.startsWith("!["))[0] ?? ""
  );
}

function getUpdateType(value: unknown): UpdateType {
  if (typeof value === "string" && VALID_UPDATE_TYPES.includes(value as UpdateType)) {
    return value as UpdateType;
  }

  return "post";
}

function validateUpdate(slug: string, update: Update): Update {
  if (!update.date || !isValidDate(update.date)) {
    throw new Error(`Invalid or missing date in content/updates/${slug}.md`);
  }

  if (update.type === "video" && !update.youtubeId) {
    throw new Error(`Video update is missing youtubeId in content/updates/${slug}.md`);
  }

  if (update.coverImage && update.coverImage.startsWith("/")) {
    const assetPath = path.join(process.cwd(), "public", update.coverImage.replace(/^\//, ""));
    if (!fs.existsSync(assetPath)) {
      throw new Error(`Missing cover image for content/updates/${slug}.md: ${update.coverImage}`);
    }
  }

  return update;
}

function parseUpdateFile(slug: string, raw: string): UpdateFile {
  const parsed = matter(raw);
  const title = getStringValue(parsed.data.title) ?? slug;
  const date = String(parsed.data.date ?? "").trim();
  const type = getUpdateType(parsed.data.type);
  const excerpt = getExcerpt(parsed.content, getStringValue(parsed.data.excerpt));
  const youtubeId = getStringValue(parsed.data.youtubeId);
  const coverImage =
    getStringValue(parsed.data.coverImage) ?? (type === "status" ? undefined : DEFAULT_COVER_IMAGE);

  return {
    ...validateUpdate(slug, {
      slug,
      date,
      title,
      tags: getTags(parsed.data.tags),
      excerpt,
      type,
      youtubeId,
      coverImage,
    }),
    content: parsed.content,
  };
}

function readUpdateFile(filename: string): UpdateFile {
  const slug = filename.replace(/\.md$/, "");
  const fullPath = path.join(UPDATES_DIR, filename);
  const raw = fs.readFileSync(fullPath, "utf8");

  return parseUpdateFile(slug, raw);
}

export function formatUpdateDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function getUpdateSlugs(): string[] {
  return fs
    .readdirSync(UPDATES_DIR)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => filename.replace(/\.md$/, ""));
}

export function getUpdateBySlug(slug: string): UpdateFile | null {
  const fullPath = path.join(UPDATES_DIR, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  return readUpdateFile(`${slug}.md`);
}

export function getUpdates(): Update[] {
  return fs
    .readdirSync(UPDATES_DIR)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const updateFile = readUpdateFile(filename);

      return {
        slug: updateFile.slug,
        date: updateFile.date,
        title: updateFile.title,
        tags: updateFile.tags,
        excerpt: updateFile.excerpt,
        type: updateFile.type,
        youtubeId: updateFile.youtubeId,
        coverImage: updateFile.coverImage,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getAllTags(): string[] {
  const tags = getUpdates().flatMap((update) => update.tags);
  return [...new Set(tags)].sort((a, b) => a.localeCompare(b));
}

export function getUpdatesByTag(tag: string): Update[] {
  const normalizedTag = normalizeTag(tag);
  return getUpdates().filter((update) => update.tags.includes(normalizedTag));
}

export function formatTag(tag: string): string {
  return getTagLabel(tag);
}
