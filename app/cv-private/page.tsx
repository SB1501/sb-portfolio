import fs from "fs";
import path from "path";
import Image from "next/image";
import { BadgeCheck, Download, Link as LinkIcon, UserRound } from "lucide-react";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

import Logo from "@/components/logo";

export default async function CvPrivatePage() {
    const filePath = path.join(process.cwd(), "content/cv-private.md");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { content } = matter(fileContent);

    const processed = await remark()
        .use(html)
        .process(content);

    const contentHtml = processed.toString();

    return (
        <main className="mx-auto max-w-4xl px-6 py-10">
            <div className="space-y-6">
                <section className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-white/90 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 md:p-8">
                    <div className="relative flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                        <div className="max-w-2xl">
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                                Private CV
                            </p>
                            <div className="relative mt-3">
                                <Logo className="pointer-events-none absolute -left-3 -top-10 h-24 w-auto text-black/10 dark:text-white/20 md:h-32" />
                                <h1 className="relative text-3xl font-bold tracking-tight md:text-5xl">
                                    Private Digital CV
                                </h1>
                            </div>
                            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-700 dark:text-neutral-300">
                                A fuller version of my CV with additional background, career context and supporting detail beyond the public profile page.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-3">
                                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1.5 text-sm text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-300">
                                    <BadgeCheck className="h-4 w-4" />
                                    Sharing of the content of this page is not permitted without prior consent.
                                </span>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <a
                                    href="/cv"
                                    className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900"
                                >
                                    <LinkIcon className="h-4 w-4" />
                                    Public CV
                                </a>
                                <a
                                    href="/cv/shane-bunting-cv.pdf"
                                    className="inline-flex items-center gap-2 rounded-full border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
                                >
                                    <Download className="h-4 w-4" />
                                    Download PDF
                                </a>
                            </div>
                        </div>

                        <div className="shrink-0 self-start md:pl-6">
                            <Image
                                src="/images/profile-photo.webp"
                                alt="Profile photo of Shane Bunting"
                                width={240}
                                height={280}
                                className="h-64 w-52 rounded-[2rem] object-cover"
                                priority
                            />
                            <div className="mt-3 px-2 text-right">
                                <Image
                                    src="/images/sb-signature.webp"
                                    alt="Signature of Shane Bunting"
                                    width={160}
                                    height={48}
                                    className="ml-auto h-auto w-32 opacity-70 dark:invert dark:opacity-70"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="rounded-[1.75rem] border border-neutral-200 bg-white/90 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 md:p-8">
                    <div className="flex items-center gap-3">
                        <UserRound className="h-7 w-7 text-black dark:text-white" />
                        <h2 className="text-xl font-semibold">Full CV</h2>
                    </div>

                    <article
                        className="prose prose-neutral mt-6 max-w-none prose-headings:tracking-tight prose-p:text-neutral-700 prose-li:text-neutral-700 prose-strong:text-neutral-950 prose-a:text-neutral-900 dark:prose-invert dark:prose-p:text-neutral-300 dark:prose-li:text-neutral-300 dark:prose-strong:text-white dark:prose-a:text-white"
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                </section>
            </div>
        </main>
    );
}
