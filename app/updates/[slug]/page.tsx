import type { Metadata } from "next";
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";
import { FileText, Video, ArrowLeft, MessageSquareMore } from "lucide-react";
import Link from "next/link";
import { formatUpdateDate, getUpdateBySlug, getUpdateSlugs } from "@/lib/updates";
import { SITE_URL } from "@/lib/site";

export async function generateStaticParams() {
  return getUpdateSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const update = getUpdateBySlug(slug);

  if (!update) {
    return {
      title: "Update Not Found | Shane Bunting",
    };
  }

  return {
    title: `${update.title} | Shane Bunting`,
    description: update.excerpt,
    alternates: {
      canonical: `${SITE_URL}/updates/${update.slug}`,
    },
  };
}

function getUpdateIcon(type: string) {
  if (type === "video") return <Video className="h-4 w-4" />;
  if (type === "status") return <MessageSquareMore className="h-4 w-4" />;
  return <FileText className="h-4 w-4" />;
}

function getUpdateLabel(type: string) {
  if (type === "video") return "Video";
  if (type === "status") return "Status";
  return "Post";
}

export default async function UpdatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const update = getUpdateBySlug(slug);

  if (!update) {
    notFound();
  }

  const processed = await remark().use(html).process(update.content);
  const contentHtml = processed.toString();
  const date = update.date ? formatUpdateDate(update.date) : "";

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <div className="min-w-0 rounded-2xl border border-neutral-200 bg-white/90 p-6 dark:border-neutral-800 dark:bg-neutral-950">
        {update.type === "video" && update.youtubeId && (
          <div className="mb-6 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${update.youtubeId}`}
                title={update.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        <article className="prose prose-neutral mx-auto max-w-2xl">
          <div className="mb-3 flex items-center gap-4 not-prose">
            <Link
              href="/"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition hover:bg-neutral-700 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              aria-label="Back to Updates"
            >
              <ArrowLeft className="h-7 w-7" />
            </Link>

            <h1 className="m-0 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              {update.title}
            </h1>
          </div>

          <div className="mb-6 flex items-center gap-3 not-prose">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
              {getUpdateIcon(update.type)}
            </div>
            <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
              {getUpdateLabel(update.type)} {date && `| ${date}`}
            </p>
          </div>

          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
      </div>
    </main>
  );
}
