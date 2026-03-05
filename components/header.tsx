import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <nav className="mx-auto max-w-3xl px-6 py-4 flex gap-6">
        <Link href="/">Updates</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/cv">CV</Link>
      </nav>
    </header>
  );
}