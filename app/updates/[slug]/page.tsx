import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

const UPDATES_DIR = path.join(process.cwd(), "content", "updates");

export async function generateStaticParams() {
    const files = fs.readdirSync(UPDATES_DIR);

    return files
        .filter((file) => file.endsWith(".md"))
        .map((file) => ({
            slug: file.replace(/\.md$/, ""),
        }));
}

export default async function UpdatePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const fullPath = path.join(UPDATES_DIR, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        notFound();
    }

    const raw = fs.readFileSync(fullPath, "utf8");
    const parsed = matter(raw);

    const processed = await remark().use(html).process(parsed.content);
    const contentHtml = processed.toString();

    return (
        <main className="mx-auto max-w-3xl px-6 py-10">
            <article className="prose prose-neutral max-w-none">
                <h1>{parsed.data.title}</h1>
                <p className="text-sm text-neutral-500">{parsed.data.date}</p>

                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </article>
        </main>
    );
}