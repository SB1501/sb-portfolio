import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
    return (
        <main className="mx-auto max-w-4xl px-6 py-16">
            <div className="mx-auto max-w-xl rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 md:p-8">
                <div className="flex items-center gap-3">
                    <SearchX className="h-7 w-7 text-black dark:text-white" />
                    <h1 className="text-3xl font-bold">Page Not Found</h1>
                </div>

                <p className="mt-3 text-neutral-700 dark:text-neutral-300">
                    The page you were looking for does not exist or may have been moved.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                        href="/"
                        className="inline-flex items-center rounded-full border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
