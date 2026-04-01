import Link from "next/link";
import Logo from "@/components/logo";


export default function Header() {
  return (
    <header className="sticky top-0 z-50  bg-neutral-950/80 backdrop-blur border-b border-neutral-800/80 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 text-white">

        <Link
          href="/" className="group flex flex-col items-start leading-none transition hover:opacity-80"
        >
          <Logo className="h-8 w-auto text-white transition duration-300 group-hover:-translate-y-0.5 dark:text-white" />
          <span className="mt-1 text-[10px] font-semibold tracking-[0.28em] text-white dark:text-white">
            SHANE BUNTING
          </span>
        </Link>

        <nav className="flex items-center gap-2 text-sm">

          <Link
            href="/"
            className="rounded-md px-3 py-2 hover:bg-neutral-900 dark:hover:bg-neutral-900"
          >
            Updates
          </Link>

          <Link
            href="/projects"
            className="rounded-md px-3 py-2 hover:bg-neutral-900 dark:hover:bg-neutral-900"
          >
            Projects
          </Link>

          <Link
            href="https://github.com/SB1501"
            className="rounded-md px-3 py-2 hover:bg-neutral-900 dark:hover:bg-neutral-900"
          >
            GitHub
          </Link>

          <div className="relative group">
            <Link
              href="/cv"
              className="rounded-md px-3 py-2 hover:bg-neutral-900 dark:hover:bg-neutral-900"
            >
              CV ▾
            </Link>

            <div className="invisible absolute right-0 mt-2 w-44 rounded-md border border-neutral-800 bg-neutral-950 p-1 text-white opacity-0 shadow-md transition-all group-hover:visible group-hover:opacity-100 dark:border-neutral-800 dark:bg-neutral-950">

              <Link
                href="/cv"
                className="block rounded px-3 py-2 text-white text-sm hover:bg-neutral-900 dark:hover:bg-neutral-900"
              >
                Public CV
              </Link>

              <Link
                href="/cv-private"
                prefetch={false}
                className="block rounded px-3 py-2 text-sm text-white hover:bg-neutral-900 dark:hover:bg-neutral-900"
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
