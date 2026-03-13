import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Update = {
    slug: string;
    date: string;
    title: string;
    tags: string[];
    excerpt: string;
};

const UPDATES_DIR = path.join(process.cwd(), "content", "updates");

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

        // simple excerpt: first non-empty line of content
        const excerpt =
            parsed.content
                .split("\n")
                .map((l) => l.trim())
                .filter(Boolean)[0] ?? "";

        return { slug, date, title, tags, excerpt };
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
    const normalisedTag = tag.toLowerCase();

    return getUpdates().filter((update) =>
        update.tags.some((t) => t.toLowerCase() === normalisedTag)
    );
}