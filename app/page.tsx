import Image from "next/image";
import Link from "next/link";
import { getAllTags, getUpdates, getUpdatesByTag, formatTag } from "@/lib/updates";
import SidebarCard from "@/components/sidebar-card";
import { Video, FileText, Megaphone, ArrowRight, MessageSquareMore } from "lucide-react";



function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function getUpdateIcon(type: string) {
  if (type === "video") return <Video className="h-4 w-4" />;
  if (type === "status") return <MessageSquareMore className="h-4 w-4"/>;
  return <FileText className="h-4 w-4" />;
}

function getUpdateLabel(type: string) {
  if (type === "video") return "Video";
  if (type === "status") return "Status";
  return "Post";
}



type UpdatesPageProps = {
  searchParams: Promise<{
    tag?: string | string[];
  }>;
};

export default async function UpdatesPage({ searchParams }: UpdatesPageProps) {
  const params = await searchParams;

  const selectedTag =
    typeof params.tag === "string"
      ? params.tag
      : Array.isArray(params.tag)
        ? params.tag[0]
        : undefined;

  const tags = getAllTags();
  const updates = selectedTag ? getUpdatesByTag(selectedTag) : getUpdates();

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
    }
  ];

  return (

    <div>

      <main className="relative mx-auto max-w-6xl px-6 py-10" >

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">


          <div className="min-w-0">
            <div className="min-w-0 rounded-2xl border border-neutral-200 p-6 bg-white/90 dark:border-neutral-800 dark:bg-neutral-950">
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
                    {updates.map((u) => {
                      const isStatus = u.type === "status";

                      const cardContent = (
                        <div className="flex gap-4">
                          {u.coverImage && (
                            <div className="hidden sm:block shrink-0 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
                              <Image
                                src={u.coverImage}
                                alt={u.title}
                                width={160}
                                height={90}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          )}

                          <div className="min-w-0 flex-1">
                            <div className={`flex items-center gap-3 ${isStatus ? "mb-2" : "mb-4"}`}>
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                                {getUpdateIcon(u.type)}
                              </div>
                              <p className="text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                                {getUpdateLabel(u.type)} | {formatDate(u.date)}
                              </p>
                            </div>

                            {u.type === "video" && u.youtubeId && (
                              <div className="mb-4 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
                                <div className="aspect-video">
                                  <iframe
                                    className="h-full w-full"
                                    src={`https://www.youtube.com/embed/${u.youtubeId}`}
                                    title={u.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  />
                                </div>
                              </div>
                            )}

                            {isStatus ? (
                              <p className="mt-1 text-base leading-7 text-neutral-800 dark:text-neutral-200">
                                {u.excerpt}
                              </p>
                            ) : (
                              <>
                                <h2 className="text-base font-medium text-neutral-900 dark:text-neutral-100">
                                  {u.title}
                                </h2>

                                {u.excerpt && (
                                  <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                                    {u.excerpt}
                                  </p>
                                )}

                                {u.tags.length > 0 && (
                                  <div className="mt-3 flex flex-wrap gap-2">
                                    {u.tags.map((tag) => (
                                      <span
                                        key={tag}
                                        className="text-xs text-neutral-500 dark:text-neutral-400"
                                      >
                                        #{formatTag(tag)}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </>
                            )}
                          </div>

                          {!isStatus && (
                            <div className="flex items-center text-neutral-400">
                              <ArrowRight className="h-4 w-4" />
                            </div>
                          )}
                        </div>
                      );

                      return (
                        <li key={u.slug}>
                          {isStatus ? (
                            <div className="rounded-lg border border-neutral-200 bg-neutral-50/70 p-3 dark:border-neutral-800 dark:bg-neutral-900/60">
                              {cardContent}
                            </div>
                          ) : (
                            <Link
                              href={`/updates/${u.slug}`}
                              className="block rounded-lg border p-4 transition hover:border-black hover:bg-neutral-300 dark:hover:border-white dark:hover:bg-neutral-900/90"
                            >
                              {cardContent}
                            </Link>
                          )}
                        </li>
                      );
                    })}

                  </ul>
                ) : (
                  <div className="rounded-lg border p-4">
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">
                      No updates found for <span className="font-medium">{selectedTag ? formatTag(selectedTag) : ""}</span>.
                    </p>
                    <Link
                      href="/"
                      className="mt-2 inline-block text-sm text-neutral-600 dark:text-neutral-300 hover:underline"
                    >
                      View all updates
                    </Link>
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
                          className="inline-flex items-center rounded-full border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-xs leading-none font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
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
              <div className="flex flex-wrap gap-2">
                <Link
                  href="/"
                  className={`rounded-full border px-3 py-1 text-sm transition ${!selectedTag
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-300 text-neutral-700 hover:border-neutral-500 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:text-white"
                    }`}
                >
                  All
                </Link>

                {tags.map((tag) => {
                  const isActive = selectedTag?.toLowerCase() === tag;

                  return (
                    <Link
                      key={tag}
                      href={`/?tag=${encodeURIComponent(tag)}`}
                      className={`rounded-full border px-3 py-1 text-sm transition ${isActive
                        ? "border-neutral-900 bg-neutral-900 text-white"
                        : "border-neutral-300 text-neutral-700 hover:border-neutral-500 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:text-white"
                        }`}
                    >
                      {formatTag(tag)}
                    </Link>
                  );
                })}
              </div>
            </SidebarCard>
          </aside>

        </div >
      </main >
    </div >

  );
}
