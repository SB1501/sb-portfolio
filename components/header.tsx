import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur dark:border-neutral-800/80 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">

        <Link
          href="/"
          className="text-sm font-semibold tracking-tight transition hover:opacity-80"
        >
          Shane Bunting
        </Link>

        <nav className="flex items-center gap-2 text-sm">

          <Link
            href="/projects"
            className="rounded-md px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >
            Projects
          </Link>

          <Link
            href="/updates"
            className="rounded-md px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >
            Updates
          </Link>

          <div className="relative group">
            <Link
              href="/cv"
              className="rounded-md px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              CV ▾
            </Link>

            <div className="invisible absolute right-0 mt-2 w-44 rounded-md border border-neutral-200 bg-white p-1 opacity-0 shadow-md transition-all group-hover:visible group-hover:opacity-100 dark:border-neutral-800 dark:bg-neutral-950">

              <Link
                href="/cv"
                className="block rounded px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                Public CV
              </Link>

              <Link
                href="/cv-private"
                className="block rounded px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900"
              >
                Private CV
              </Link>

            </div>
          </div>

        </nav>
      </div>
    </header>
  );
}