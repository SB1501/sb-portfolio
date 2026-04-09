import Image from "next/image";
import type { Metadata } from "next";
import {
    BadgeCheck,
    BookOpen,
    BriefcaseBusiness,
    Building2,
    CalendarDays,
    ExternalLink,
    Flag,
    GraduationCap,
    LayoutGrid,
    Link as LinkIcon,
    Sparkles,
    Star,
    UserRound,
    Wrench,
} from "lucide-react";

import Logo from "@/components/logo";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
    title: "CV | Shane Bunting",
    description: "Public CV and background information for Shane Bunting.",
    alternates: {
        canonical: `${SITE_URL}/cv`,
    },
};

const skills = [
    "JavaScript / TypeScript",
    "React / Next.js",
    "Swift / SwiftUI",
    "AWS Cloud",
    "C# / .NET",
    "Git / GitLab",
    "CI/CD workflows",
    "Application support",
    "Deployments & test environments",
    "Python",
    "SQL / REST APIs",
    "Technical communication",
    "HTML / CSS"
];

const experience = [
    {
        title: "Apprentice Software Support Engineer",
        company: "Fujitsu",
        logoSrc: "/images/fujitsu-logo.svg",
        period: "2023 - Present",
        description:
            "Supporting live and test environments across large-scale enterprise and government-facing work, with experience across AWS cloud services, GitLab, CI/CD processes, messaging middleware, connectivity, deployment support and day-to-day application management.",
        highlights: ["AWS", "GitLab", "CI/CD", "Deployments", "Application Support"],
    },
    {
        title: "Internal Recruiter",
        company: "Fujitsu",
        logoSrc: "/images/fujitsu-logo.svg",
        period: "2022 - 2023",
        description:
            "Partnered with hiring managers across multiple business areas to shape recruitment approaches, screen candidates and manage communication throughout the hiring process.",
        highlights: ["Stakeholder Communication", "Candidate Screening", "Hiring Coordination"],
    },
    {
        title: "Contract Administrator",
        company: "Fujitsu",
        logoSrc: "/images/fujitsu-logo.svg",
        period: "2019 - 2022",
        description:
            "Managed support contract administration and renewals, coordinating across internal systems, stakeholders and external partners to keep services in place.",
        highlights: ["Contracts", "Renewals", "Coordination"],
    },
    {
        title: "Marketing & Communications Development Officer",
        company: "Global Horizon Skills",
        logoSrc: "/images/ghskills-logo.svg",
        period: "2018 - 2019",
        description:
            "Delivered website updates, graphic design, desktop publishing, Office 365 setup, social media support and broader digital business administration.",
        highlights: ["Web Updates", "Design", "Office 365", "Digital Content"],
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
    {
        award: "Higher Level Apprenticeship in Software Development",
        institution: "North West Regional College",
        logoSrc: "/images/nwrc-logo.svg",
        period: "In progress",
        result: "Final year in progress, with earlier years passed at distinction level.",
    },
    {
        award: "BSc (Hons) Business Studies with Marketing",
        institution: "Ulster University",
        logoSrc: "/images/ulster-university-logo.svg",
        period: "Completed",
        result: "First-class honours.",
    },
];

const courses = {
    past: [
        {
            name: "Certified C# Developer",
            source: "W3 Schools",
            date: "April 2023",
            grade: "PASS",
            progress: "Initial self-guided learning in 2023 prior to my HLA at Fujitsu",
        },
    ],
    current: [
        {
            name: "AWS Cloud Practitioner",
            source: "Amazon Web Services",
            date: "Expected by May 2026",
            grade: "In progress",
            progress: "Studying and building small AWS projects alongside the material.",
        },
    ],
    future: [
        {
            name: "Dynatrace Associate",
            source: "Dynatrace University",
            date: "Summer 2026",
            grade: "Future course",
            progress: "Next certification for a tool used at Fujitsu.",
        },
    ],
};

export default function CvPage() {
    return (
        <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-10">
            <div className="space-y-6">
                <section className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-white/90 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:p-6 md:p-8">
                    <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-8">
                        <div className="max-w-2xl">
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                                Public Profile
                            </p>
                            <div className="relative mt-3">
                                <Logo className="pointer-events-none absolute -left-2 -top-8 h-20 w-auto text-black/10 dark:text-white/20 sm:-left-3 sm:-top-10 sm:h-24 md:h-32" />
                                <h1 className="relative text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">
                                    Shane Bunting
                                </h1>
                            </div>
                            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-700 dark:text-neutral-300">
                                Software support apprentice and developer with experience across application support, cloud and deployment environments, technical operations and digital project delivery. I am especially interested in building practical software, developing strong engineering habits and continuing to grow as a software developer across various platforms and technologies.
                            </p>


                            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                                <a
                                    href="https://www.linkedin.com/in/shane-b-9ba978239/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 sm:w-auto dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900"
                                >
                                    <LinkIcon className="h-4 w-4" />
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/SB1501"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 sm:w-auto dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-900"
                                >
                                    <ExternalLink className="h-4 w-4" />
                                    GitHub
                                </a>
                                <a
                                    href="/cv-private"
                                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 sm:w-auto dark:border-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
                                >
                                    <UserRound className="h-4 w-4" />
                                    Private CV
                                </a>
                            </div>
                        </div>

                        <div className="mx-auto shrink-0 self-start md:mx-0 md:pl-6">
                            <Image
                                src="/images/profile-photo.webp"
                                alt="Profile photo of Shane Bunting"
                                width={240}
                                height={280}
                                className="h-56 w-44 rounded-[2rem] object-cover sm:h-64 sm:w-52"
                                priority
                            />
                            <div className="mt-3 px-2 text-right">
                                <Image
                                    src="/images/sb-signature.webp"
                                    alt="Signature of Shane Bunting"
                                    width={160}
                                    height={48}
                                    className="ml-auto h-auto w-28 opacity-70 dark:invert dark:opacity-70 sm:w-32"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-[1.75rem] border border-neutral-200 bg-white/90 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:p-6">
                        <div className="flex items-center gap-3">
                            <Star className="h-6 w-6 text-black dark:text-white sm:h-7 sm:w-7" />
                            <h2 className="text-lg font-semibold sm:text-xl">Current Focus</h2>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                            My current work is centred on software support engineering in structured enterprise environments, while my personal development is focused on modern web technologies, software delivery practices and shipping user-facing iOS products.
                        </p>
                    </div>

                    <div className="rounded-[1.75rem] border border-neutral-200 bg-white/90 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:p-6">
                        <div className="flex items-center gap-3">
                            <LayoutGrid className="h-6 w-6 text-black dark:text-white sm:h-7 sm:w-7" />
                            <h2 className="text-lg font-semibold sm:text-xl">Welcome to my Public CV!</h2>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                            This page is intended as a concise public summary. More detailed career history, fuller context and private information are kept off the public-facing site. Only employers I have applied for a role with will be have the credentials to access this page, or you can request it by contacting me.
                        </p>
                    </div>
                </section>

                <section className="rounded-[1.75rem] border border-neutral-200 bg-white/90 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:p-6">
                    <div className="flex items-center gap-3">
                        <BriefcaseBusiness className="h-6 w-6 text-black dark:text-white sm:h-7 sm:w-7" />
                        <h2 className="text-lg font-semibold sm:text-xl">Selected Experience</h2>
                    </div>
                    <div className="mt-5 space-y-5">
                        {experience.map((item) => (
                            <article
                                key={`${item.company}-${item.title}`}
                                className="rounded-[1.5rem] border border-neutral-200 bg-neutral-50/70 p-4 dark:border-neutral-800 dark:bg-neutral-900/50 sm:p-5"
                            >
                                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                                    <div className="flex gap-4">
                                        <div className="flex h-14 w-16 shrink-0 items-center justify-center rounded-xl bg-black/50 px-2 sm:w-20 sm:justify-start dark:bg-transparent">
                                            <Image
                                                src={item.logoSrc}
                                                alt={`${item.company} logo`}
                                                width={80}
                                                height={56}
                                                className="max-h-11 w-auto object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-base font-semibold text-neutral-950 dark:text-white">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                                {item.company}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                        {item.period}
                                    </p>
                                </div>
                                <p className="mt-4 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                                    {item.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {item.highlights.map((highlight) => (
                                        <span
                                            key={highlight}
                                            className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-300"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="grid gap-6 md:grid-cols-2">
                    <div className="flex flex-col rounded-[1.75rem] border border-neutral-200 bg-white/90 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:p-6">
                        <div className="flex items-center gap-3">
                            <Wrench className="h-6 w-6 text-black dark:text-white sm:h-7 sm:w-7" />
                            <h2 className="text-lg font-semibold sm:text-xl">Selected Projects</h2>
                        </div>
                        <div className="mt-5 space-y-4">
                            {projects.map((project) => (
                                <article
                                    key={project.name}
                                    className="rounded-[1.25rem] border border-neutral-200 p-4 dark:border-neutral-800"
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <h3 className="text-base font-semibold text-neutral-950 dark:text-white">
                                            {project.name}
                                        </h3>
                                        <a
                                            href={project.href}
                                            className="inline-flex items-center gap-1 text-sm font-semibold text-neutral-900 underline underline-offset-4 dark:text-white"
                                        >
                                            View
                                            <ExternalLink className="h-4 w-4" />
                                        </a>
                                    </div>
                                    <p className="mt-2 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                                        {project.summary}
                                    </p>
                                </article>
                            ))}
                        </div>
                        <a
                            href="/projects"
                            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-800 sm:w-fit dark:border-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
                        >
                            Visit Projects Page
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </div>

                    <div className="rounded-[1.75rem] border border-neutral-200 bg-white/90 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:p-6">
                        <div className="flex items-center gap-3">
                            <GraduationCap className="h-6 w-6 text-black dark:text-white sm:h-7 sm:w-7" />
                            <h2 className="text-lg font-semibold sm:text-xl">Education</h2>
                        </div>
                        <div className="mt-5 space-y-4">
                            {education.map((item) => (
                                <article
                                    key={item.institution}
                                    className="rounded-[1.25rem] border border-neutral-200 p-4 dark:border-neutral-800"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-14 w-16 shrink-0 items-center justify-center rounded-xl bg-black/50 px-2 sm:w-20 sm:justify-start dark:bg-transparent">
                                            <Image
                                                src={item.logoSrc}
                                                alt={`${item.institution} logo`}
                                                width={80}
                                                height={56}
                                                className="max-h-11 w-auto object-contain"
                                            />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="text-base font-semibold text-neutral-950 dark:text-white">
                                                {item.award}
                                            </h3>
                                            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                                                <span className="inline-flex items-center gap-1.5 font-semibold text-neutral-900 dark:text-white">
                                                    <Building2 className="h-4 w-4" />
                                                    {item.institution}
                                                </span>
                                                <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
                                                    <CalendarDays className="h-3.5 w-3.5" />
                                                    {item.period}
                                                </span>
                                            </div>
                                            <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                                                {item.result}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="rounded-[1.75rem] border border-neutral-200 bg-white/90 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:p-6">
                    <div className="flex items-center gap-3">
                        <BookOpen className="h-6 w-6 text-black dark:text-white sm:h-7 sm:w-7" />
                        <h2 className="text-lg font-semibold sm:text-xl">Short Courses</h2>
                    </div>

                    <div className="mt-5 grid gap-6 xl:grid-cols-3">


                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-base font-semibold text-neutral-900 dark:text-white">
                                <Star className="h-4 w-4" />
                                Past
                            </div>
                            {courses.past.map((course) => (
                                <article
                                    key={course.name}
                                    className="rounded-[1.25rem] border border-neutral-200 p-4 dark:border-neutral-800 bg-black/10 dark:bg-neutral-900/50"
                                >
                                    <h3 className="text-base font-semibold text-neutral-950 dark:text-white">
                                        {course.name}
                                    </h3>
                                    <div className="mt-2 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                                        <p className="font-semibold text-neutral-900 dark:text-white">{course.source}</p>
                                        <p>{course.date}</p>
                                        <p className="inline-flex rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-200">
                                            {course.grade}
                                        </p>
                                    </div>
                                    <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                                        {course.progress}
                                    </p>
                                </article>
                            ))}
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-base font-semibold text-neutral-900 dark:text-white">
                                <BadgeCheck className="h-4 w-4" />
                                Current
                            </div>
                            {courses.current.map((course) => (
                                <article
                                    key={course.name}
                                    className="rounded-[1.25rem] border border-neutral-200 p-4 dark:border-neutral-800 bg-black/10 dark:bg-neutral-900/50"
                                >
                                    <h3 className="text-base font-semibold text-neutral-950 dark:text-white">
                                        {course.name}
                                    </h3>
                                    <div className="mt-2 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                                        <p className="font-semibold text-neutral-900 dark:text-white">{course.source}</p>
                                        <p>{course.date}</p>
                                        <p className="inline-flex rounded-full border border-amber-300 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-200">
                                            {course.grade}
                                        </p>
                                    </div>
                                    <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                                        {course.progress}
                                    </p>
                                </article>
                            ))}
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-base font-semibold text-neutral-900 dark:text-white">
                                <Flag className="h-4 w-4" />
                                Future
                            </div>
                            {courses.future.map((course) => (
                                <article
                                    key={course.name}
                                    className="rounded-[1.25rem] border border-neutral-200 p-4 dark:border-neutral-800 bg-black/10 dark:bg-neutral-900/50"
                                >
                                    <h3 className="text-base font-semibold text-neutral-950 dark:text-white">
                                        {course.name}
                                    </h3>
                                    <div className="mt-2 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                                        <p className="font-semibold text-neutral-900 dark:text-white">{course.source}</p>
                                        <p>{course.date}</p>
                                        <p className="inline-flex rounded-full border border-neutral-300 bg-neutral-50 px-2.5 py-1 text-xs font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
                                            {course.grade}
                                        </p>
                                    </div>
                                    <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                                        {course.progress}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="rounded-[1.75rem] border border-neutral-200 bg-white/90 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:p-6">
                    <div className="flex items-center gap-3">
                        <Sparkles className="h-6 w-6 text-black dark:text-white sm:h-7 sm:w-7" />
                        <h2 className="text-lg font-semibold sm:text-xl">Skills</h2>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
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
