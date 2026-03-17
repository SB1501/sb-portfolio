import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-6 text-sm">
        <span>© {new Date().getFullYear()} Shane Bunting</span>
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