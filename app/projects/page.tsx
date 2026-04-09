import Image from "next/image";
import type { Metadata } from "next";
import { FolderKanban, FlaskConical, Code } from "lucide-react";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
    title: "Projects | Shane Bunting",
    description: "A selection of apps, course work and software projects built by Shane Bunting.",
    alternates: {
        canonical: `${SITE_URL}/projects`,
    },
};

export default function ProjectsPage() {
    return (

        <main className="mx-auto max-w-6xl px-6 py-10">

            <div className="min-w-0 rounded-2xl border border-neutral-200 p-6 bg-white/90 dark:border-neutral-800 dark:bg-neutral-950">

                <div className="flex items-center gap-3">
                    <FolderKanban className="h-7 w-7 text-black dark:text-white" />
                    <h1 className="text-3xl font-bold">Project Portfolio</h1>
                </div>
                <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                    A selection of apps and software projects that I have built. Mindful Check-In is my latest public release.
                </p>

                <section className="mt-7 space-y-6">

                    <article className="overflow-hidden rounded-3xl border border-black/10 shadow-xl">

                        <div className="bg-gradient-to-br from-[#00fbcf] to-[#73ffff] p-8 md:p-10">

                            <div className="grid gap-8 md:grid-cols-2 md:items-center">

                                <div>
                                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/80">
                                        Featured Project
                                    </p>
                                    <Image
                                        src="/images/textlogo.svg"
                                        alt="Mindful Check-In Logo"
                                        width={180}
                                        height={154}
                                        className="mt-4 h-auto w-auto object-cover"
                                    />
                                    <p className="mt-4 max-w-xl text-base leading-7 text-black/90">
                                        A privacy-focused iPhone app designed to help users reflect on how they feel, notice patterns and build awareness of small daily factors that affect wellbeing.
                                    </p>
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        <span className="rounded-full bg-black/10 hover:bg-black/20 px-3 py-1 text-sm text-black">
                                            Quick check-ins
                                        </span>
                                        <span className="rounded-full bg-black/10 hover:bg-black/20 px-3 py-1 text-sm text-black">
                                            Private on-device data
                                        </span>
                                        <span className="rounded-full bg-black/10 hover:bg-black/20 px-3 py-1 text-sm text-black">
                                            Pattern tracking
                                        </span>
                                        <span className="rounded-full bg-black/10 hover:bg-black/20 px-3 py-1 text-sm text-black">
                                            Exportable history
                                        </span>
                                    </div>


                                    <div className="mt-6 flex flex-wrap gap-2">
                                        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-black">SwiftUI</span>
                                        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-black">Swift</span>
                                        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-black">iOS</span>
                                    </div>

                                    <div className="mt-8 flex flex-wrap gap-3">
                                        <a href="https://apps.apple.com/gb/app/mindful-check-in/id6758107607" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white underline underline-offset-4">
                                            <Image
                                                src="/images/appstoreblack.svg"
                                                alt="Apple App Store"
                                                width={180}
                                                height={154}
                                                className="h-full w-full object-cover block transition hover:opacity-90"
                                            />
                                        </a>

                                        <a href="https://github.com/SB1501/Mindful-CheckIn-iOS-App"
                                            className="inline-flex items-center rounded-md border border-black/40 px-5 py-2.5 text-sm font-semibold text-white transition bg-black hover:bg-black/80">
                                            View Git Repository
                                        </a>
                                    </div>

                                </div>

                                <div className="flex justify-center md:justify-end">
                                    <div className="w-full max-w-[260px] rounded-[2.5rem] border border-black/10 bg-neutral-900 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                                        <div className="aspect-[9/19] overflow-hidden rounded-[2rem] bg-black">
                                            <video
                                                src="/images/mindful-check-in.mp4"
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </article>

                    <div className="grid gap-6 md:grid-cols-2">
                        <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-black to-neutral-800 p-6 shadow-lg">
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                                Earlier Project
                            </p>
                            <div className="flex items-start gap-4 mt-3">

                                <div className="mt-5 h-16 w-16 overflow-hidden rounded-full">
                                    <Image src="/images/8ballwatch-icon.webp" alt="8BallWatch Icon" width={256} height={256} className="object-cover" />
                                </div>

                                <div className="min-w-0 flex-1">

                                    <h2 className="mt-3 text-2xl font-bold text-white">8BallWatch</h2>
                                    <p className="mt-3 text-sm leading-6 text-white/80">
                                        My first ever app project, built as an early step into designing and shipping a complete experience.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 flex flex-wrap gap-2">
                                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">Apple watchOS</span>
                                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">Swift</span>
                                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">SwiftUI</span>
                            </div>
                            <div className="mt-6 flex gap-3">
                                <a href="https://apps.apple.com/gb/app/magic-8-ball-watch/id6744827735" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white underline underline-offset-4">
                                    <Image
                                        src="/images/appstorewhite.svg"
                                        alt="Apple App Store"
                                        width={64}
                                        height={64}
                                        className="h-full w-full object-cover"
                                    />
                                </a>
                            </div>
                        </article>

                        <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-orange-700 to-yellow-500 p-6 shadow-lg">
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                                Earlier Project
                            </p>
                            <div className="flex items-start gap-4 mt-3">

                                <div className="mt-5 h-16 w-16 overflow-hidden rounded-full">
                                    <Image src="/images/wisdom-watch-icon.webp" alt="Wisdom Watch Icon" width={256} height={256} className="object-cover" />
                                </div>

                                <div className="min-w-0 flex-1">

                                    <h2 className="mt-3 text-2xl font-bold text-white">Wisdom Watch</h2>
                                    <p className="mt-3 text-sm leading-6 text-white/80">
                                        Developed alongside 8BallWatch but instead focused on delivering instant mindful quotes on demand.
                                    </p>
                                </div>
                            </div>




                            <div className="mt-5 flex flex-wrap gap-2">
                                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">Apple watchOS</span>
                                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">Swift</span>
                                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">SwiftUI</span>
                            </div>
                            <div className="mt-6 flex gap-3">
                                <a href="https://apps.apple.com/gb/app/wisdom-watch-app/id6744831375" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white underline underline-offset-4">
                                    <Image
                                        src="/images/appstoreblack.svg"
                                        alt="Apple App Store"
                                        width={64}
                                        height={64}
                                        className="h-full w-full object-cover"
                                    />
                                </a>
                            </div>
                        </article>
                    </div>

                </section>

            </div>

            <div className="mt-6 min-w-0 rounded-2xl border border-neutral-200 p-6 bg-white/90 dark:border-neutral-800 dark:bg-neutral-950">
                <div className="flex items-center gap-3">
                    <Code className="h-7 w-7 text-black dark:text-white" />
                    <h1 className="text-3xl font-bold">Academic Projects</h1>
                </div>
                <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                    Here are some projects I&apos;ve worked on during my Software Development HLA that I thought were worth showing on here.
                </p>


                <section className="mt-7 space-y-6">

                    <article className="overflow-hidden rounded-3xl border border-black/10 shadow-xl">

                        <div className="bg-[#0c537f] p-8 md:p-10">

                            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] md:items-start">

                                <div>

                                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/80">
                                        College Project
                                    </p>

                                    <div className="mt-4 inline-grid gap-3 rounded-3xl bg-white px-4 py-3 md:grid-cols-[auto_1fr] md:items-center">

                                        <Image
                                            src="/images/nwvmainlogo.webp"
                                            alt="Northwest Veterinary Logo"
                                            width={100}
                                            height={100}
                                            className="mx-auto h-auto w-auto object-cover md:mx-0"
                                        />


                                        <Image
                                            src="/images/nwvtextlogo.webp"
                                            alt="Northwest Veterinary Text Logo"
                                            width={200}
                                            height={100}
                                            className="h-auto w-auto object-cover justify-self-start"
                                        />

                                    </div>

                                    <p className="mt-4 max-w-xl text-base leading-7 text-white/90">
                                        An information management system for a fictional veterinary practice, co-developed with a classmate as a Windows Forms application in C# using .NET Framework 4.7.2 and SQL Server LocalDB. Built with ADO.NET and a centralized DatabaseHelper, it supports appointment scheduling, customer and pet records, invoicing and payment tracking, inventory and supplier management, and searchable reporting workflows.
                                    </p>
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        <span className="rounded-full border border-[#1b76c6] bg-[#1b76c6] px-3 py-1 text-sm text-white transition hover:bg-[#155f9f]">
                                            Customer Management
                                        </span>
                                        <span className="rounded-full border border-[#1b76c6] bg-[#1b76c6] px-3 py-1 text-sm text-white transition hover:bg-[#155f9f]">
                                            Appointment Scheduling
                                        </span>
                                        <span className="rounded-full border border-[#1b76c6] bg-[#1b76c6] px-3 py-1 text-sm text-white transition hover:bg-[#155f9f]">
                                            Pet Health Records
                                        </span>
                                        <span className="rounded-full border border-[#1b76c6] bg-[#1b76c6] px-3 py-1 text-sm text-white transition hover:bg-[#155f9f]">
                                            Stock & Suppliers
                                        </span>
                                        <span className="rounded-full border border-[#1b76c6] bg-[#1b76c6] px-3 py-1 text-sm text-white transition hover:bg-[#155f9f]">
                                            Invoicing & Payments
                                        </span>
                                        <span className="rounded-full border border-[#1b76c6] bg-[#1b76c6] px-3 py-1 text-sm text-white transition hover:bg-[#155f9f]">
                                            Reporting
                                        </span>
                                        <span className="rounded-full border border-[#1b76c6] bg-[#1b76c6] px-3 py-1 text-sm text-white transition hover:bg-[#155f9f]">
                                            Search, Filter & Sort
                                        </span>
                                    </div>


                                    <div className="mt-6 flex flex-wrap gap-2">
                                        <span className="rounded-full border border-[#a5d0e6] bg-[#a5d0e6] px-3 py-1 text-xs font-medium text-[#0c537f]">C#</span>
                                        <span className="rounded-full border border-[#a5d0e6] bg-[#a5d0e6] px-3 py-1 text-xs font-medium text-[#0c537f]">Windows Forms</span>
                                        <span className="rounded-full border border-[#a5d0e6] bg-[#a5d0e6] px-3 py-1 text-xs font-medium text-[#0c537f]">.NET Framework</span>
                                        <span className="rounded-full border border-[#a5d0e6] bg-[#a5d0e6] px-3 py-1 text-xs font-medium text-[#0c537f]">SQL Database</span>
                                    </div>

                                    <div className="mt-8 flex flex-wrap gap-3">

                                        <Link href="/updates/2026-04-06-nwv-project/"
                                            className="inline-flex items-center rounded-md border border-black/40 px-5 py-2.5 text-sm font-semibold text-white transition bg-black hover:bg-black/80">
                                            Read Project Write-Up
                                        </Link>
                                    </div>


                                </div>

                                <div className="md:mt-[3.25rem]">
                                    <div className="mb-4 flex items-center justify-between gap-3">
                                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/75">
                                            Screenshots
                                        </p>
                                        <p className="text-xs text-white/60">
                                            Hover to pause scrolling
                                        </p>
                                    </div>
                                    <div className="nwv-scroll-mask nwv-scroll-container h-[30rem] overflow-hidden rounded-[1.5rem] bg-white/10 p-2">
                                        <div className="nwv-scroll-track flex flex-col gap-3 motion-reduce:animate-none">
                                            {[
                                                { src: "/images/nwvlogin.webp", alt: "Northwest Veterinary login screen" },
                                                { src: "/images/nwvmain.webp", alt: "Northwest Veterinary main dashboard" },
                                                { src: "/images/nwvmainscreen.webp", alt: "Northwest Veterinary appointment overview" },
                                                { src: "/images/nwvmanagement.webp", alt: "Northwest Veterinary management panel" },
                                                { src: "/images/nwvorderadd.webp", alt: "Northwest Veterinary add order screen" },
                                                { src: "/images/nwvorders.webp", alt: "Northwest Veterinary orders list" },
                                                { src: "/images/nwvordersummary.webp", alt: "Northwest Veterinary order summary" },
                                                { src: "/images/nwvstafflist.webp", alt: "Northwest Veterinary staff list" },
                                                { src: "/images/nwvsupplierlist.webp", alt: "Northwest Veterinary supplier list" },
                                                { src: "/images/nwvtreatmentlist.webp", alt: "Northwest Veterinary treatment list" },
                                                { src: "/images/nwvlogin.webp", alt: "Northwest Veterinary login screen" },
                                                { src: "/images/nwvmain.webp", alt: "Northwest Veterinary main dashboard" },
                                                { src: "/images/nwvmainscreen.webp", alt: "Northwest Veterinary appointment overview" },
                                                { src: "/images/nwvmanagement.webp", alt: "Northwest Veterinary management panel" },
                                                { src: "/images/nwvorderadd.webp", alt: "Northwest Veterinary add order screen" },
                                                { src: "/images/nwvorders.webp", alt: "Northwest Veterinary orders list" },
                                                { src: "/images/nwvordersummary.webp", alt: "Northwest Veterinary order summary" },
                                                { src: "/images/nwvstafflist.webp", alt: "Northwest Veterinary staff list" },
                                                { src: "/images/nwvsupplierlist.webp", alt: "Northwest Veterinary supplier list" },
                                                { src: "/images/nwvtreatmentlist.webp", alt: "Northwest Veterinary treatment list" },
                                            ].map((screenshot, index) => (
                                                <div
                                                    key={`${screenshot.src}-${index}`}
                                                    className="overflow-hidden rounded-2xl border border-white/15 bg-white/80 shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
                                                >
                                                    <Image
                                                        src={screenshot.src}
                                                        alt={screenshot.alt}
                                                        width={1600}
                                                        height={1240}
                                                        className="h-auto w-full object-cover transition duration-300 hover:scale-[1.02]"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </article>

                </section>

            </div>


            <div className="mt-6 min-w-0 rounded-2xl border border-neutral-200 p-6 bg-white/90 dark:border-neutral-800 dark:bg-neutral-950">
                <div className="flex items-center gap-3">
                    <FlaskConical className="h-7 w-7 text-black dark:text-white" />
                    <h1 className="text-3xl font-bold">Future Projects</h1>
                </div>                <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                    Check back here for details on in-progress projects I&apos;m working on or planning.
                </p>
            </div>

        </main>


    );
}
