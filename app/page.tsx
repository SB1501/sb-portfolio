import Link from "next/link";
import { getUpdates } from "@/lib/updates";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function Home() {
  const updates = getUpdates();

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Shane Bunting</h1>
        <p className="mt-2 text-neutral-600">
          Portfolio Website — Developer, projects, and updates.
        </p>
      </header>

      <section>
        <h1 className="text-xl font-semibold">Updates</h1>

        <ul className="mt-4 space-y-4">
          {updates.map((u) => (
            <li key={u.slug} className="rounded-lg border p-4">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <Link href={`/updates/${u.slug}`}>
                    <h2 className="font-medium hover:underline">{u.title}</h2>
                  </Link>
                </div>

                <time className="text-xs text-neutral-500 whitespace-nowrap">
                  {formatDate(u.date)}
                </time>
              </div>

              {u.excerpt && (
                <p className="mt-2 text-sm text-neutral-700">{u.excerpt}</p>
              )}

              <Link
                href={`/updates/${u.slug}`}
                className="mt-3 inline-block text-sm text-neutral-600 hover:underline"
              >
                Read more →
              </Link>

              {u.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {u.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}