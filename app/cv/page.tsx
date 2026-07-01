import Image from "next/image";
import type { Metadata } from "next";
import {
    BadgeCheck,
    BookOpen,
    BriefcaseBusiness,
    Building2,
    CalendarDays,
    ExternalLink,
    GraduationCap,
    LayoutGrid,
    Link as LinkIcon,
    MapPin,
    Sparkles,
    Star,
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

const skills = {
    technical: [
        { category: "Cloud & Infrastructure", items: "AWS (Lambda, DynamoDB, EventBridge, SNS), CI/CD pipelines, Docker" },
        { category: "Middleware & Connectivity", items: "IBM MQ configuration, SFTP, message format validation, queue monitoring" },
        { category: "Version Control & Deployment", items: "Git, GitLab, VS Code" },
        { category: "Languages", items: "Swift / SwiftUI, Python, C#, Java, TypeScript, JavaScript" },
        { category: "Web Development", items: "React, Next.js, Node.js, Tailwind CSS, WordPress, HTML/CSS" },
        { category: "Microsoft 365", items: "Administration, deployment, end-user support" },
        { category: "Databases", items: "SQL, DynamoDB, Microsoft Access, SwiftData" },
        { category: "Operating Systems & Devices", items: "Windows configuration & upgrade, Linux WSL, macOS / Apple ecosystem" },
        { category: "iOS Development (Hobbyist)", items: "Published apps on the App Store, SwiftUI, SwiftData" },
    ],
    professional: [
        "Agile working practices including daily stand-ups and task management via Trello / Jira",
        "Direct client and stakeholder liaison",
        "Technical documentation and IT policy writing",
        "Recruitment and candidate management",
        "Mental Health First Aider",
        "Full UK Driving Licence",
        "Emergency First Aid at Work certified",
    ],
};

const experience = [
    {
        title: "Application Support Engineer",
        company: "Fujitsu",
        logoSrc: "/images/fujitsu-logo.svg",
        period: "Sep 2023 – Present",
        description:
            "Working within a connectivity team on a critical public sector account, onboarding external operators onto a messaging and data exchange infrastructure system. Responsibilities include configuring MQ and SFTP connections, validating message formats against specification documents, monitoring messages on pods, and reporting on rejected messages. Liaised directly with client contacts to guide them through the onboarding process and resolve configuration issues. Coordinated with IBM networking teams and managed deployments by creating configuration files, pushing to GitLab and refreshing environments via CI/CD pipelines. Previously on the O2/Virgin Media account, resolving point-of-sale system issues and contributing to a major store migration project as O2 transitioned from franchise to company-owned stores.",
        highlights: ["MQ / SFTP", "GitLab CI/CD", "Deployments", "Application Support", "Public Sector"],
    },
    {
        title: "Internal Recruiter",
        company: "Fujitsu",
        logoSrc: "/images/fujitsu-logo.svg",
        period: "Jun 2022 – Sep 2023",
        description:
            "Worked with internal hiring managers to determine the most effective recruitment routes for vacancies across key business areas including core technology roles. Responsible for posting, promoting and processing applicants, screening candidates and maintaining relationships with both applicants and internal stakeholders throughout the recruitment process.",
        highlights: ["Stakeholder Communication", "Candidate Screening", "Hiring Coordination"],
    },
    {
        title: "Contract Administrator",
        company: "Fujitsu",
        logoSrc: "/images/fujitsu-logo.svg",
        period: "Aug 2019 – Apr 2022",
        description:
            "Managed the implementation and renewal of support contracts across various internal accounts using internal systems and databases to track opportunities. Communicated with internal managers and external partners to understand requirements and ensure timely support coverage.",
        highlights: ["Contracts", "Renewals", "Coordination"],
    },
    {
        title: "Freelance IT & Business Consultant",
        company: "Global Horizon Skills",
        logoSrc: "/images/ghskills-logo.svg",
        period: "2023 – Present",
        description:
            "Retained on an ongoing basis to provide regular IT consultancy, administration and business support. Responsibilities have included end-user IT support, document template design, business administration, IT policy writing and marketing assistance. Project work has included supporting a cyber security audit involving MFA implementation, Microsoft 365 administration and the configuration and upgrade of on-site Windows machines.",
        highlights: ["IT Consultancy", "Microsoft 365", "Cyber Security", "MFA"],
    },
    {
        title: "IT, Marketing & Communications Development Officer",
        company: "Global Horizon Skills",
        logoSrc: "/images/ghskills-logo.svg",
        period: "Jun 2018 – Jul 2019",
        description:
            "Developed two company websites during tenure, produced graphic design and desktop publishing materials, managed social media accounts and email marketing campaigns. Led the organisation-wide setup and deployment of Microsoft Office 365.",
        highlights: ["Web Development", "Design", "Office 365", "Digital Content"],
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
        award: "Software Development Foundation Degree (Part Time)",
        institution: "North West Regional College",
        institutionNote: "Validated by Ulster University",
        logoSrc: "/images/nwrc-logo.svg",
        dateRange: "Sep 2023 – May 2026",
        result: "Distinction. Completed alongside full-time employment at Fujitsu.",
    },
    {
        award: "BSc (Hons) Business Studies with Marketing",
        institution: "Ulster University, Derry~Londonderry",
        institutionNote: "",
        logoSrc: "/images/ulster-university-logo.svg",
        dateRange: "Sep 2016 – Jul 2019",
        result: "First-class honours (1:1).",
    },
];

const earlierQualifications = [
    { label: "A-Levels", detail: "ICT (A), Business Studies (B), Applied Science (B)" },
    { label: "GCSEs / BTECs", detail: "GCSE English & Mathematics, Level 2 BTECs in Science, ICT and Art" },
];

const courses = [
    {
        name: "AWS Cloud Practitioner",
        source: "Amazon Web Services",
        date: "April 2026",
        grade: "PASS",
        progress: "Studied alongside building small AWS projects to apply the material in practice.",
    },
    {
        name: "Certified C# Developer",
        source: "W3 Schools",
        date: "April 2023",
        grade: "PASS",
        progress: "Initial self-guided learning in 2023 prior to my Foundation Degree at Fujitsu.",
    },
];

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
                                Technically qualified professional with a distinction-grade HLA in Software Development and a 1:1 degree in Business Studies with Marketing. Experienced across application support, technical administration and commercial roles within large enterprise environments including a critical public-sector infrastructure project. Bringing a practical understanding of both technical and business operations with a self-motivated approach to learning and development. Seeking a remote-first or Northern Ireland-based role where there is genuine opportunity to grow, contribute and specialise over time.
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
                                    <MapPin className="h-3.5 w-3.5" />
                                    Derry~Londonderry, Northern Ireland
                                </span>
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
                                    <BadgeCheck className="h-3.5 w-3.5" />
                                    SC Cleared
                                </span>
                            </div>

                            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
                            <h2 className="text-lg font-semibold sm:text-xl">Open to Opportunities</h2>
                        </div>
                        <p className="mt-4 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                            I am actively looking for a remote-first or Northern Ireland-based role in software development or support engineering. If you would like to get in touch, please reach out via LinkedIn or email at <a href="mailto:sabunting@icloud.com" className="font-semibold underline underline-offset-4">sabunting@icloud.com</a>.
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
                                    key={item.award}
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
                                                {item.institutionNote && (
                                                    <span className="text-xs text-neutral-500 dark:text-neutral-400">{item.institutionNote}</span>
                                                )}
                                                <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
                                                    <CalendarDays className="h-3.5 w-3.5" />
                                                    {item.dateRange}
                                                </span>
                                            </div>
                                            <p className="mt-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                                                {item.result}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                            <div className="mt-2 rounded-[1.25rem] border border-neutral-200 p-4 dark:border-neutral-800">
                                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Earlier Qualifications</p>
                                <div className="mt-3 space-y-2">
                                    {earlierQualifications.map((q) => (
                                        <div key={q.label} className="flex flex-wrap gap-x-2 text-sm">
                                            <span className="font-semibold text-neutral-900 dark:text-white">{q.label}</span>
                                            <span className="text-neutral-600 dark:text-neutral-400">{q.detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="rounded-[1.75rem] border border-neutral-200 bg-white/90 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:p-6">
                    <div className="flex items-center gap-3">
                        <BookOpen className="h-6 w-6 text-black dark:text-white sm:h-7 sm:w-7" />
                        <h2 className="text-lg font-semibold sm:text-xl">Short Courses</h2>
                    </div>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                        {courses.map((course) => (
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
                </section>

                <section className="rounded-[1.75rem] border border-neutral-200 bg-white/90 p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 sm:p-6">
                    <div className="flex items-center gap-3">
                        <Sparkles className="h-6 w-6 text-black dark:text-white sm:h-7 sm:w-7" />
                        <h2 className="text-lg font-semibold sm:text-xl">Skills</h2>
                    </div>
                    <div className="mt-5 grid gap-6 md:grid-cols-2">
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Technical</p>
                            <div className="mt-3 space-y-3">
                                {skills.technical.map((row) => (
                                    <div key={row.category}>
                                        <p className="text-sm font-semibold text-neutral-900 dark:text-white">{row.category}</p>
                                        <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">{row.items}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">Professional</p>
                            <ul className="mt-3 space-y-2">
                                {skills.professional.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
