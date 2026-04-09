import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();
const updatesDir = path.join(root, "content", "updates");
const validTypes = new Set(["post", "video", "status"]);

const files = fs.readdirSync(updatesDir).filter((file) => file.endsWith(".md"));

if (files.length === 0) {
  throw new Error("No update files found in content/updates.");
}

for (const file of files) {
  const fullPath = path.join(updatesDir, file);
  const raw = fs.readFileSync(fullPath, "utf8");
  const parsed = matter(raw);
  const date = String(parsed.data.date ?? "").trim();
  const type = String(parsed.data.type ?? "post").trim() || "post";
  const title = String(parsed.data.title ?? "").trim();
  const coverImage = typeof parsed.data.coverImage === "string" ? parsed.data.coverImage.trim() : "";
  const youtubeId = typeof parsed.data.youtubeId === "string" ? parsed.data.youtubeId.trim() : "";

  if (!title) {
    throw new Error(`${file}: title is required.`);
  }

  if (!date || Number.isNaN(new Date(date).getTime())) {
    throw new Error(`${file}: date must be a valid date string.`);
  }

  if (!validTypes.has(type)) {
    throw new Error(`${file}: type must be post, video or status.`);
  }

  if (type === "video" && !youtubeId) {
    throw new Error(`${file}: video updates must include youtubeId.`);
  }

  if (coverImage.startsWith("/")) {
    const assetPath = path.join(root, "public", coverImage.replace(/^\//, ""));
    if (!fs.existsSync(assetPath)) {
      throw new Error(`${file}: cover image does not exist at ${coverImage}.`);
    }
  }
}

console.log(`Validated ${files.length} update files.`);
