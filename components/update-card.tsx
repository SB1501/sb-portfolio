import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, MessageSquareMore, Video } from "lucide-react";
import type { Update } from "@/lib/updates";
import { formatTag, formatUpdateDate } from "@/lib/updates";

function getUpdateIcon(type: Update["type"]) {
  if (type === "video") return <Video className="h-4 w-4" />;
  if (type === "status") return <MessageSquareMore className="h-4 w-4" />;
  return <FileText className="h-4 w-4" />;
}

function getUpdateLabel(type: Update["type"]) {
  if (type === "video") return "Video";
  if (type === "status") return "Status update";
  return "Post";
}

type UpdateCardProps = {
  update: Update;
};

export default function UpdateCard({ update }: UpdateCardProps) {
  const isStatus = update.type === "status";
  const coverImage = update.type !== "video" ? update.coverImage : undefined;

  const cardContent = isStatus ? (
    <div className="flex min-h-[5rem] flex-col justify-between gap-4">
      <p className="text-lg leading-8 text-neutral-800 dark:text-neutral-200 sm:text-xl">
        {update.excerpt}
      </p>

      <div className="flex items-center gap-3 border-t border-neutral-200 pt-2 dark:border-neutral-800">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-neutral-300 dark:bg-neutral-100 dark:text-neutral-600">
          {getUpdateIcon(update.type)}
        </div>
        <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          {getUpdateLabel(update.type)} | {formatUpdateDate(update.date)}
        </p>
      </div>
    </div>
  ) : (
    <div className="flex gap-4">
      {coverImage && (
        <div className="hidden shrink-0 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 sm:block">
          <Image
            src={coverImage}
            alt={update.title}
            width={160}
            height={90}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="min-w-0 flex-1">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-neutral-300 dark:bg-neutral-100 dark:text-neutral-600">
            {getUpdateIcon(update.type)}
          </div>
          <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
            {getUpdateLabel(update.type)} | {formatUpdateDate(update.date)}
          </p>
        </div>

        {update.type === "video" && update.youtubeId && (
          <div className="mb-4 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
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

        <h2 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
          {update.title}
        </h2>

        {update.excerpt && (
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            {update.excerpt}
          </p>
        )}

        {update.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {update.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-neutral-500 dark:text-neutral-400"
              >
                #{formatTag(tag)}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center text-neutral-400">
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  );

  if (isStatus) {
    return (
      <div className="rounded-lg border border-neutral-200 bg-neutral-50/70 p-3 dark:border-neutral-800 dark:bg-neutral-900/60">
        {cardContent}
      </div>
    );
  }

  return (
    <Link
      href={`/updates/${update.slug}`}
      className="block rounded-lg border p-4 transition hover:border-black hover:bg-neutral-300 dark:hover:border-white dark:hover:bg-neutral-900/90"
    >
      {cardContent}
    </Link>
  );
}
