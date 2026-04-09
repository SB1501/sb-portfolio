import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { Megaphone } from "lucide-react";
import SidebarCard from "@/components/sidebar-card";
import TagFilter from "@/components/tag-filter";
import UpdateCard from "@/components/update-card";
import { formatTag, getAllTags, getUpdates, getUpdatesByTag } from "@/lib/updates";
import { SITE_URL, UPDATES_PAGE_SIZE } from "@/lib/site";

type UpdatesPageProps = {
  searchParams: Promise<{
    tag?: string | string[];
    page?: string | string[];
  }>;
};

export const metadata: Metadata = {
  title: "Latest Updates | Shane Bunting",
  description: "Notes, progress updates and development logs from Shane Bunting.",
  alternates: {
    canonical: SITE_URL,
  },
};

function getQueryParam(value?: string | string[]) {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value[0];
  return undefined;
}

export default async function UpdatesPage({ searchParams }: UpdatesPageProps) {
  const params = await searchParams;
  const selectedTag = getQueryParam(params.tag);
  const selectedPage = Number(getQueryParam(params.page) ?? "1");
  const currentPage = Number.isFinite(selectedPage) && selectedPage > 0 ? Math.floor(selectedPage) : 1;

  const tags = getAllTags();
  const filteredUpdates = selectedTag ? getUpdatesByTag(selectedTag) : getUpdates();
  const totalPages = Math.max(1, Math.ceil(filteredUpdates.length / UPDATES_PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * UPDATES_PAGE_SIZE;
  const updates = filteredUpdates.slice(startIndex, startIndex + UPDATES_PAGE_SIZE);

  const featuredRepos = [
    {
      name: "Mindful Check-In App",
      description: "iOS wellbeing app with guided check-ins and reflective summaries",
      href: "https://github.com/SB1501/Mindful-CheckIn-iOS-App",
      tech: ["Swift", "SwiftUI", "iOS"],
    },
    {
      name: "Portfolio Website",
      description: "This Next.js portfolio site with updates, projects and more",
      href: "https://github.com/SB1501/sb-portfolio",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Harbour Haven Mall Website",
      description: "A static modern website for a fictional shopping mall / college project",
      href: "https://github.com/SB1501/Harbour-Haven-Mall",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const buildPageHref = (page: number) => {
    const query = new URLSearchParams();
    if (selectedTag) query.set("tag", selectedTag);
    if (page > 1) query.set("page", String(page));
    const search = query.toString();
    return search ? `/?${search}` : "/";
  };

  return (
    <div>
      <main className="relative mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0">
            <div className="min-w-0 rounded-2xl border border-neutral-200 bg-white/90 p-6 dark:border-neutral-800 dark:bg-neutral-950">
              <header className="mb-10">
                <div className="flex items-center gap-3">
                  <Megaphone className="h-7 w-7 text-black dark:text-white" />
                  <h1 className="text-3xl font-bold">Latest Updates</h1>
                </div>

                <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                  Notes, progress updates, and development logs.
                </p>

                {selectedTag && (
                  <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                    Showing updates tagged #{formatTag(selectedTag)}
                  </p>
                )}
              </header>

              <section>
                {updates.length > 0 ? (
                  <ul className="space-y-4">
                    {updates.map((update) => (
                      <li key={update.slug}>
                        <UpdateCard update={update} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="rounded-lg border p-4">
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                      No updates found for <span className="font-medium">{selectedTag ? formatTag(selectedTag) : ""}</span>.
                    </p>
                    <Link
                      href="/"
                      className="mt-2 inline-block text-sm text-neutral-600 hover:underline dark:text-neutral-300"
                    >
                      View all updates
                    </Link>
                  </div>
                )}

                {filteredUpdates.length > UPDATES_PAGE_SIZE && (
                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-neutral-200 pt-6 dark:border-neutral-800">
                    <p className="text-sm text-neutral-600 dark:text-neutral-300">
                      Page {safePage} of {totalPages}
                    </p>

                    <div className="flex gap-2">
                      {safePage > 1 && (
                        <Link
                          href={buildPageHref(safePage - 1)}
                          className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 transition hover:border-neutral-500 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:text-white"
                        >
                          Previous
                        </Link>
                      )}

                      {safePage < totalPages && (
                        <Link
                          href={buildPageHref(safePage + 1)}
                          className="rounded-full border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm text-white transition hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
                        >
                          Next
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </section>
            </div>
          </div>

          <aside className="space-y-6">
            <SidebarCard title="About Me">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl border border-neutral-200">
                  <Image
                    src="/images/profile-photo.webp"
                    alt="Photo of Shane Bunting"
                    width={800}
                    height={1000}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">Shane Bunting</h3>

                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    This is a collection of my personal updates, notes, and development logs. I use it to share progress on projects, jot down thoughts, and document learnings.
                  </p>
                </div>
              </div>
            </SidebarCard>

            <SidebarCard title="Selected Repos">
              <div className="space-y-3">
                {featuredRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-50/60 px-4 py-4 transition hover:border-neutral-300 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
                  >
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      {repo.name}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                      {repo.description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {repo.tech.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-xs font-medium leading-none text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                      View GitHub Repo
                    </p>
                  </a>
                ))}
              </div>
            </SidebarCard>

            <SidebarCard title="Tags">
              <TagFilter selectedTag={selectedTag} tags={tags} />
            </SidebarCard>
          </aside>
        </div>
      </main>
    </div>
  );
}
