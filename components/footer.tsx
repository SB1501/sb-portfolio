import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/80 bg-neutral-950/80 text-neutral-100 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-6 text-sm text-white">
        <span>© {new Date().getFullYear()} Shane Bunting</span>

        <div className="rounded-full bg-white border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 dark:border-neutral-800 dark:text-black"
        ><a href="mailto:sabunting@icloud.com" className="hover:underline">
            sabunting@icloud.com
          </a>
        </div>


        <Link
          href="https://buymeacoffee.com/shanebunting"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          Buy me a coffee?
        </Link>
      </div>
    </footer>
  );
}