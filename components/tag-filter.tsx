import Link from "next/link";
import { formatTag } from "@/lib/updates";

type TagFilterProps = {
  selectedTag?: string;
  tags: string[];
};

export default function TagFilter({ selectedTag, tags }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/"
        className={`rounded-full border px-3 py-1 text-sm transition ${
          !selectedTag
            ? "border-neutral-900 bg-neutral-900 text-white"
            : "border-neutral-300 text-neutral-700 hover:border-neutral-500 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:text-white"
        }`}
      >
        All
      </Link>

      {tags.map((tag) => {
        const isActive = selectedTag?.toLowerCase() === tag;

        return (
          <Link
            key={tag}
            href={`/?tag=${encodeURIComponent(tag)}`}
            className={`rounded-full border px-3 py-1 text-sm transition ${
              isActive
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-300 text-neutral-700 hover:border-neutral-500 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:text-white"
            }`}
          >
            {formatTag(tag)}
          </Link>
        );
      })}
    </div>
  );
}
