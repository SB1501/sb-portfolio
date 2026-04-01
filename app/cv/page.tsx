const skills = [
    "JavaScript / TypeScript",
    "React / Next.js",
    "Swift / SwiftUI",
    "AWS Cloud",
    "Git / GitLab",
    "CI/CD workflows",
    "Application support",
    "Deployments & test environments",
    "Python",
    "SQL / REST APIs",
    "Technical communication",
];

const experience = [
    {
        title: "Apprentice Software Support Engineer",
        company: "Fujitsu",
        period: "2023 - Present",
        description:
            "Supporting live and test environments across large-scale enterprise and government-facing work, with experience across AWS cloud services, GitLab, CI/CD processes, messaging middleware, connectivity, deployment support and day-to-day application management.",
    },
    {
        title: "Internal Recruiter",
        company: "Fujitsu",
        period: "2022 - 2023",
        description:
            "Partnered with hiring managers across multiple business areas to shape recruitment approaches, screen candidates and manage communication throughout the hiring process.",
    },
    {
        title: "Contract Administrator",
        company: "Fujitsu",
        period: "2019 - 2022",
        description:
            "Managed support contract administration and renewals, coordinating across internal systems, stakeholders and external partners to keep services in place.",
    },
    {
        title: "Marketing & Communications Development Officer",
        company: "Global Horizon Skills",
        period: "2018 - 2019",
        description:
            "Delivered website updates, graphic design, desktop publishing, Office 365 setup, social media support and broader digital business administration.",
    },
];

const projects = [
    {
        name: "Mindful Check-In",
        summary:
            "A privacy-focused iPhone app designed to help users reflect on how they feel, notice patterns and build awareness over time.",
        href: "/projects",
    },
    {
        name: "Apple Watch Apps",
        summary:
            "Published Apple Watch projects including Wisdom Watch and 8 Ball Watch as part of ongoing iOS development and product learning.",
        href: "/projects",
    },
];

const education = [
    "Higher Level Apprenticeship in Software Development, North West Regional College. Final year in progress, with earlier years passed at distinction level.",
    "BSc (Hons) Business Studies with Marketing, Ulster University. First-class honours.",
];

export default function CvPage() {
    return (
        <main className="mx-auto max-w-4xl px-6 py-10">
            <div className="min-w-0 rounded-2xl border border-neutral-200 bg-white/90 p-6 dark:border-neutral-800 dark:bg-neutral-950 md:p-8">
                <div className="flex flex-col gap-6 border-b border-neutral-200 pb-8 dark:border-neutral-800 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                            Public Profile
                        </p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight">Shane Bunting</h1>
                        <p className="mt-4 text-base leading-7 text-neutral-700 dark:text-neutral-300">
                            Software support apprentice and developer with experience across application support, cloud and deployment environments, technical operations and digital project delivery. I am especially interested in building practical software, developing strong engineering habits and continuing to grow as an iOS developer.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href="https://www.linkedin.com/in/shane-b-9ba978239/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/SB1501"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900"
                        >
                            GitHub
                        </a>
                        <a
                            href="/cv-private"
                            className="inline-flex items-center rounded-full border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
                        >
                            Private CV
                        </a>
                    </div>
                </div>

                <section className="mt-8 grid gap-6 md:grid-cols-[1.3fr_0.9fr]">
                    <div className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
                        <h2 className="text-xl font-semibold">Current Focus</h2>
                        <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                            My current work is centred on software support engineering in structured enterprise environments, while my personal development is focused on modern web technologies, software delivery practices and shipping user-facing iOS products.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
                        <h2 className="text-xl font-semibold">Public Page Intent</h2>
                        <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                            This page is intended as a concise public summary. More detailed career history, fuller context and private information are kept off the public-facing site.
                        </p>
                    </div>
                </section>

                <section className="mt-8">
                    <h2 className="text-xl font-semibold">Selected Experience</h2>
                    <div className="mt-4 space-y-4">
                        {experience.map((item) => (
                            <article
                                key={`${item.company}-${item.title}`}
                                className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800"
                            >
                                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                                    <div>
                                        <h3 className="text-base font-semibold text-neutral-950 dark:text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                            {item.company}
                                        </p>
                                    </div>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                        {item.period}
                                    </p>
                                </div>
                                <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="mt-8 grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
                        <h2 className="text-xl font-semibold">Selected Projects</h2>
                        <div className="mt-4 space-y-4">
                            {projects.map((project) => (
                                <article key={project.name}>
                                    <div className="flex items-center justify-between gap-3">
                                        <h3 className="text-base font-semibold text-neutral-950 dark:text-white">
                                            {project.name}
                                        </h3>
                                        <a
                                            href={project.href}
                                            className="text-sm font-semibold text-neutral-900 underline underline-offset-4 dark:text-white"
                                        >
                                            View
                                        </a>
                                    </div>
                                    <p className="mt-2 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                                        {project.summary}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-neutral-200 p-5 dark:border-neutral-800">
                        <h2 className="text-xl font-semibold">Education</h2>
                        <div className="mt-4 space-y-3">
                            {education.map((item) => (
                                <p key={item} className="text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mt-8">
                    <h2 className="text-xl font-semibold">Skills</h2>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
