import Link from "next/link";
import { getUpdates } from "@/lib/updates";

function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
}

export default function Home() {
    const updates = getUpdates().slice(0, 3);

    return (
        <main className="mx-auto max-w-3xl px-6 py-10">
            <header className="mb-10">
                <h1 className="text-3xl font-bold">Shane Bunting</h1>
                <p className="mt-2 text-neutral-600">
                    Portfolio website — developer, projects, and technical updates.
                </p>
            </header>

            <section>
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Latest Updates</h2>
                    <Link href="/updates" className="text-sm text-neutral-600 hover:underline">
                        View all updates →
                    </Link>
                </div>

                <ul className="mt-4 space-y-4">
                    {updates.map((u) => (
                        <li key={u.slug} className="rounded-lg border p-4">
                            <div className="flex items-baseline justify-between gap-4">
                                <div>
                                    <Link href={`/updates/${u.slug}`}>
                                        <h3 className="font-medium hover:underline">{u.title}</h3>
                                    </Link>
                                </div>

                                <time className="text-xs text-neutral-500 whitespace-nowrap">
                                    {formatDate(u.date)}
                                </time>
                            </div>

                            {u.excerpt && (
                                <p className="mt-2 text-sm text-neutral-700">{u.excerpt}</p>
                            )}
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}