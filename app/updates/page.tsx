import Link from "next/link";
import { getAllTags, getUpdates, getUpdatesByTag } from "@/lib/updates";

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

type UpdatesPageProps = {
    searchParams: Promise<{
        tag?: string | string[];
    }>;
};

export default async function UpdatesPage({ searchParams }: UpdatesPageProps) {
    const params = await searchParams;

    const selectedTag =
        typeof params.tag === "string"
            ? params.tag
            : Array.isArray(params.tag)
                ? params.tag[0]
                : undefined;

    const tags = getAllTags();
    const updates = selectedTag ? getUpdatesByTag(selectedTag) : getUpdates();

    return (
        <main className="mx-auto max-w-3xl px-6 py-10">
            <header className="mb-10">
                <h1 className="text-3xl font-bold">Updates</h1>
                <p className="mt-2 text-neutral-600">
                    Notes, progress updates, and development logs.
                </p>
            </header>

            <section className="mb-8">
                <div className="flex flex-wrap gap-2">
                    <Link
                        href="/updates"
                        className={`rounded-full border px-3 py-1 text-sm transition ${!selectedTag
                                ? "border-neutral-900 bg-neutral-900 text-white"
                                : "border-neutral-300 text-neutral-700 hover:border-neutral-500 hover:text-neutral-900"
                            }`}
                    >
                        All
                    </Link>

                    {tags.map((tag) => {
                        const isActive = selectedTag?.toLowerCase() === tag.toLowerCase();

                        return (
                            <Link
                                key={tag}
                                href={`/updates?tag=${encodeURIComponent(tag)}`}
                                className={`rounded-full border px-3 py-1 text-sm transition ${isActive
                                        ? "border-neutral-900 bg-neutral-900 text-white"
                                        : "border-neutral-300 text-neutral-700 hover:border-neutral-500 hover:text-neutral-900"
                                    }`}
                            >
                                {tag}
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section>
                {updates.length > 0 ? (
                    <ul className="space-y-4">
                        {updates.map((u) => (
                            <li key={u.slug} className="rounded-lg border p-4">
                                <div className="flex items-baseline justify-between gap-4">
                                    <div>
                                        <Link href={`/updates/${u.slug}`}>
                                            <h2 className="font-medium hover:underline">
                                                {u.title}
                                            </h2>
                                        </Link>
                                    </div>

                                    <time className="whitespace-nowrap text-xs text-neutral-500">
                                        {formatDate(u.date)}
                                    </time>
                                </div>

                                {u.excerpt && (
                                    <p className="mt-2 text-sm text-neutral-700">{u.excerpt}</p>
                                )}

                                {u.tags.length > 0 && (
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {u.tags.map((tag) => (
                                            <Link
                                                key={tag}
                                                href={`/updates?tag=${encodeURIComponent(tag)}`}
                                                className="text-xs text-neutral-500 hover:text-neutral-900 hover:underline"
                                            >
                                                #{tag}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="rounded-lg border p-4">
                        <p className="text-sm text-neutral-700">
                            No updates found for{" "}
                            <span className="font-medium">{selectedTag}</span>.
                        </p>
                        <Link
                            href="/updates"
                            className="mt-2 inline-block text-sm text-neutral-600 hover:underline"
                        >
                            View all updates
                        </Link>
                    </div>
                )}
            </section>
        </main>
    );
}