import Link from "next/link";
import { getUpdates } from "@/lib/updates";

function formatDate(date: string) {
    return new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

export default function UpdatesPage() {
    const updates = getUpdates();

    return (
        <main className="mx-auto max-w-3xl px-6 py-10">
            <h1 className="text-xl font-semibold">All Updates</h1>

            <ul className="mt-6 space-y-4">
                {updates.map((u) => (
                    <li key={u.slug} className="border rounded-lg p-4">
                        <div className="flex justify-between gap-4">
                            <div>
                                <Link href={`/updates/${u.slug}`}>
                                    <h2 className="font-medium hover:underline">{u.title}</h2>
                                </Link>

                                {u.excerpt && (
                                    <p className="mt-2 text-sm text-neutral-700">{u.excerpt}</p>
                                )}

                                <Link
                                    href={`/updates/${u.slug}`}
                                    className="mt-3 inline-block text-sm text-neutral-600 hover:underline"
                                >
                                    Read more →
                                </Link>
                            </div>

                            <time className="text-xs text-neutral-500 whitespace-nowrap">
                                {formatDate(u.date)}
                            </time>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
}