import Image from "next/image";
import { FolderKanban, FlaskConical } from "lucide-react";


export default function ProjectsPage() {
    return (

        <main className="mx-auto max-w-6xl px-6 py-10">

            <div className="min-w-0 rounded-2xl border border-neutral-200 p-6 bg-white/90 dark:border-neutral-800 dark:bg-neutral-950">

                <div className="flex items-center gap-3">
                    <FolderKanban className="h-7 w-7 text-black dark:text-white" />
                    <h1 className="text-3xl font-bold">Project Portfolio</h1>
                </div>
                <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-300">
                    A selection of apps and software projects that I have built. Mindful Check-In is my latest public release.
                </p>

                <section className="mt-10 space-y-6">

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
                                        My first ever app project, built as an early step into designing and shipping a complete mobile experience.
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

                                    <h2 className="mt-3 text-2xl font-bold text-white">8BallWatch</h2>
                                    <p className="mt-3 text-sm leading-6 text-white/80">
                                        My first ever app project, built as an early step into designing and shipping a complete mobile experience.
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
                    <FlaskConical className="h-7 w-7 text-black dark:text-white" />
                    <h1 className="text-3xl font-bold">Future Projects</h1>
                </div>                <p className="mt-2 max-w-2xl text-neutral-700 dark:text-neutral-300">
                    Check back here for details on in-progress projects I%apos;m working on or planning.
                </p>
            </div>

        </main>


    );
}
