import Image from "next/image";

export default function ProjectsPage() {
    return (

        <main className="mx-auto max-w-6xl px-6 py-10">

            <h1 className="text-3xl font-bold">Projects</h1>

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
                                <h2 className="mt-3 text-3xl font-bold tracking-tight text-black md:text-4xl">
                                    Mindful Check-In
                                </h2>
                                <p className="mt-4 max-w-xl text-base leading-7 text-black/90">
                                    A privacy-focused iPhone app designed to help users reflect on how they feel, notice patterns and build awareness of small daily factors that affect wellbeing.
                                </p>
                                <ul className="mt-6 space-y-3 text-sm text-black/90">
                                    <li>- Quick Mindful Check-In Surveys</li>
                                    <li>- Privacy-friendly on device approach</li>
                                    <li>- Trend pattern and awareness over time</li>
                                    <li>- Exportable history for user control</li>
                                </ul>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-black">SwiftUI</span>
                                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-black">Swift</span>
                                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-black">iOS</span>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-3">
                                    <a href="https://apps.apple.com/gb/app/mindful-check-in/id6758107607"
                                        className="inline-flex items-center rounded-full border border-black/40 px-5 py-2.5 text-sm font-semibold text-white transition bg-black hover:bg-black/50">
                                        Download on the App Store
                                    </a>

                                    <a href="https://github.com/SB1501/Mindful-CheckIn-iOS-App"
                                        className="inline-flex items-center rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-black transition bg-white hover:bg-white/50">
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
                        <h2 className="mt-3 text-2xl font-bold text-white">8BallWatch</h2>
                        <p className="mt-3 text-sm leading-6 text-white/80">
                            My first ever app project, built as an early step into designing and shipping a complete mobile experience.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">Watch App</span>
                            <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">Swift</span>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <a href="https://apps.apple.com/gb/app/magic-8-ball-watch/id6744827735" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-black underline underline-offset-4">
                                View on the App Store
                            </a>
                        </div>
                    </article>

                    <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-orange-700 to-yellow-500 p-6 shadow-lg">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                            Earlier Project
                        </p>
                        <h2 className="mt-3 text-2xl font-bold text-white">Wisdom Watch</h2>
                        <p className="mt-3 text-sm leading-6 text-white/90">
                            A simple Watch experience with some Buddhist wisdom quotes to get you through your day.
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            <span className="rounded-full bg-white/15 px-3 py-1 text-xs text-white">Watch App</span>
                            <span className="rounded-full bg-white/15 px-3 py-1 text-xs text-white">Swift</span>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <a href="https://apps.apple.com/gb/app/wisdom-watch-app/id6744831375" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-black underline underline-offset-4">
                                View on the App Store
                            </a>
                        </div>
                    </article>
                </div>

            </section>


        </main>

    );
}
