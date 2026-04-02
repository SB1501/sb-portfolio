import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";
import { FileText, Video, ArrowLeft } from "lucide-react";
import Link from "next/link";

const UPDATES_DIR = path.join(process.cwd(), "content", "updates");

export async function generateStaticParams() {
    const files = fs.readdirSync(UPDATES_DIR);

    return files
        .filter((file) => file.endsWith(".md"))
        .map((file) => ({
            slug: file.replace(/\.md$/, ""),
        }));
}

export function getUpdateIcon(type: string) {
    if (type === "video") return Video;
    return FileText;
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

    const title = String(parsed.data.title ?? slug);
    const date = parsed.data.date
        ? new Date(parsed.data.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        })
        : "";

    const processed = await remark().use(html).process(parsed.content);
    const contentHtml = processed.toString();

    const type = parsed.data.type === "video" ? "video" : "post";
    const youtubeId = parsed.data.youtubeId ? String(parsed.data.youtubeId) : undefined;

    return (

        <main className="mx-auto max-w-3xl px-6 py-10">



            <div className="min-w-0 rounded-2xl border border-neutral-200 p-6 bg-white/90 dark:border-neutral-800 dark:bg-neutral-950">

                {type === "video" && youtubeId && (
                    <div className="mb-6 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
                        <div className="aspect-video">
                            <iframe
                                className="h-full w-full"
                                src={`https://www.youtube.com/embed/${youtubeId}`}
                                title={title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}

                <article className="prose prose-neutral mx-auto max-w-2xl ...">

                    <div className="mb-3 flex items-center gap-4 not-prose">
                        <Link
                            href="/"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:bg-neutral-700 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
                            aria-label="Back to Updates"
                        >
                            <ArrowLeft className="h-7 w-7" />
                        </Link>

                        <h1 className="m-0 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                            {title}
                        </h1>
                    </div>

                    <div className="mb-6 flex items-center gap-3 not-prose">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                            {type === "video" ? <Video className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                        </div>
                        <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                            {type === "video" ? "Video" : "Post"} {date && `| ${date}`}
                        </p>
                    </div>

                    <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
                </article>





            </div>
        </main>
    );
}