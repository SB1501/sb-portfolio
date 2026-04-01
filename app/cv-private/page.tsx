import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

export default async function CvPrivatePage() {

    const filePath = path.join(process.cwd(), "content/cv-private.md")
    const fileContent = fs.readFileSync(filePath, "utf8")

    const { content } = matter(fileContent)

    const processed = await remark()
        .use(html)
        .process(content)

    const contentHtml = processed.toString()

    return (
        <main className="mx-auto max-w-4xl px-6 py-10">
            <div className="min-w-0 rounded-2xl border border-neutral-200 bg-white/90 p-6 dark:border-neutral-800 dark:bg-neutral-950 md:p-8">
                <div className="flex flex-col gap-6 border-b border-neutral-200 pb-8 dark:border-neutral-800 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                            Private CV
                        </p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight">Detailed Career History</h1>
                        <p className="mt-4 text-base leading-7 text-neutral-700 dark:text-neutral-300">
                            A fuller version of my CV with additional background, career context and supporting detail beyond the public profile page.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href="/cv"
                            className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900"
                        >
                            Public CV
                        </a>
                        <a
                            href="/cv/shane-bunting-cv.pdf"
                            className="inline-flex items-center rounded-full border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
                        >
                            Download PDF
                        </a>
                    </div>
                </div>

                <article
                    className="prose prose-neutral mt-8 max-w-none prose-headings:tracking-tight prose-p:text-neutral-700 prose-li:text-neutral-700 prose-strong:text-neutral-950 prose-a:text-neutral-900 dark:prose-invert dark:prose-p:text-neutral-300 dark:prose-li:text-neutral-300 dark:prose-strong:text-white dark:prose-a:text-white"
                    dangerouslySetInnerHTML={{ __html: contentHtml }}
                />
            </div>
        </main>
    )
}
