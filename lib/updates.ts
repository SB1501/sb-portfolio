import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export type UpdateType = "post" | "video";

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


const UPDATES_DIR = path.join(process.cwd(), "content", "updates");

function normalizeTag(tag: string): string {
    return tag.trim().toLowerCase();
}

function getTagLabel(tag: string): string {
    const labels: Record<string, string> = {
        "react": "React",
        "next.js": "Next.js",
        "nextjs": "Next.js",
        "typescript": "TypeScript",
        "aws": "AWS",
        "javascript": "JavaScript",
        "node.js": "Node.js",
        "nodejs": "Node.js",
        "css": "CSS",
        "html": "HTML",
        "dynamodb": "DynamoDB",
        "ios": "iOS",
        "csharp": "C#",
        "dotnet": ".NET",
        "sql": "SQL",
    };

    const normalized = normalizeTag(tag);
    return labels[normalized] ?? tag.trim();

}

export function getUpdates(): Update[] {
    const files = fs.readdirSync(UPDATES_DIR).filter((f) => f.endsWith(".md"));

    const updates = files.map((filename) => {
        const slug = filename.replace(/\.md$/, "");
        const fullPath = path.join(UPDATES_DIR, filename);
        const raw = fs.readFileSync(fullPath, "utf8");
        const parsed = matter(raw);

        const date = String(parsed.data.date ?? "");
        const title = String(parsed.data.title ?? slug);
        const tagsRaw = parsed.data.tags ?? [];

        const tags = Array.isArray(tagsRaw)
            ? tagsRaw.map(String)
            : String(tagsRaw)
                .split(",")
                .map((t) => t.trim())
                .filter(Boolean);

        const normalizedUniqueTags = [...new Set(tags.map(normalizeTag))];

        // simple excerpt: first non-empty line of content
        const excerpt =
            String(parsed.data.excerpt ?? "") ||
            (
                parsed.content
                    .split("\n")
                    .map((l) => l.trim())
                    .filter((l) => l && !l.startsWith("#") && !l.startsWith("!["))[0] ?? ""
            );

        const type: UpdateType = parsed.data.type === "video" ? "video" : "post";
        const youtubeId = parsed.data.youtubeId ? String(parsed.data.youtubeId) : undefined;

        const coverImage = parsed.data.coverImage
            ? String(parsed.data.coverImage)
            : "/images/default-coverimage.webp";
        return { slug, date, title, tags: normalizedUniqueTags, excerpt, type, youtubeId, coverImage };
    });

    // newest first
    return updates.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getAllTags(): string[] {
    const tags = getUpdates().flatMap((update) => update.tags);
    return [...new Set(tags)].sort((a, b) => a.localeCompare(b));
}

export function getUpdatesByTag(tag: string): Update[] {
    const normalizedTag = normalizeTag(tag);

    return getUpdates().filter((update) =>
        update.tags.includes(normalizedTag)
    );
}

export function formatTag(tag: string) {
    return getTagLabel(tag);
}