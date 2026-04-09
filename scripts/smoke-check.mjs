import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const requiredPaths = [
  "app/page.tsx",
  "app/projects/page.tsx",
  "app/cv/page.tsx",
  "app/updates/[slug]/page.tsx",
  "app/sitemap.ts",
  "lib/updates.ts",
  "middleware.ts",
  "content/updates",
];

for (const relativePath of requiredPaths) {
  const fullPath = path.join(root, relativePath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Missing required file or directory: ${relativePath}`);
  }
}

if (fs.existsSync(path.join(root, "app", "middleware.ts"))) {
  throw new Error("Duplicate app/middleware.ts found.");
}

const updateFiles = fs
  .readdirSync(path.join(root, "content", "updates"))
  .filter((file) => file.endsWith(".md"));

if (updateFiles.length === 0) {
  throw new Error("No update posts found.");
}

console.log("Smoke checks passed.");
