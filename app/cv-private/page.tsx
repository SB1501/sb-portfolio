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
        <main className="mx-auto max-w-3xl px-6 py-10">
            <article
                className="prose prose-neutral"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            <div className="mt-10 border-t pt-6">
                <a
                    href="/cv/shane-bunting-cv.pdf"
                    className="rounded bg-black px-4 py-2 text-white hover:bg-neutral-800"
                >
                    Download PDF Version
                </a>
            </div>
        </main>
    )
}