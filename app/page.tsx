import Link from "next/link";
import { getUpdates } from "@/lib/updates";

export default function Home() {
  const updates = getUpdates();

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <header className="mb-10">
        <h1 className="text-3xl font-bold">Shane Bunting</h1>
        <p className="mt-2 text-sm text-neutral-600">
          Developer portfolio + micro updates.
        </p>

        <nav className="mt-4 flex gap-4 text-sm">
          <Link className="underline" href="/projects">Projects</Link>
          <Link className="underline" href="/cv">CV</Link>
        </nav>
      </header>

      <section>
        <h2 className="text-xl font-semibold">Updates</h2>

        <ul className="mt-4 space-y-4">
          {updates.map((u) => (
            <li key={u.slug} className="rounded-lg border p-4">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-medium">{u.title}</h3>
                <time className="text-xs text-neutral-500">{u.date}</time>
              </div>

              {u.excerpt && (
                <p className="mt-2 text-sm text-neutral-700">{u.excerpt}</p>
              )}

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