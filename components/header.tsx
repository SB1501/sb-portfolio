import Link from "next/link";
import Logo from "@/components/logo";

type NavLink = {
  href: string;
  label: string;
  prefetch?: boolean;
};

const navLinks: NavLink[] = [
  { href: "/", label: "Updates" },
  { href: "/projects", label: "Projects" },
  { href: "/cv", label: "Public CV" },
  { href: "/cv-private", label: "Private CV", prefetch: false },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-4 text-white md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="group flex flex-col items-start leading-none transition hover:opacity-80"
        >
          <Logo className="h-8 w-auto text-white transition duration-300 group-hover:-translate-y-0.5 dark:text-white" />
          <span className="mt-1 text-[10px] font-semibold tracking-[0.28em] text-white dark:text-white">
            SHANE BUNTING
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={link.prefetch}
              className="rounded-md px-3 py-2 font-semibold hover:bg-neutral-900 dark:hover:bg-neutral-900"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="https://github.com/SB1501"
            target="_blank"
            rel="noreferrer"
            className="rounded-md px-3 py-2 font-semibold hover:bg-neutral-900 dark:hover:bg-neutral-900"
          >
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  );
}
