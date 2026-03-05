export default function CvPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-10">
            <h1 className="text-3xl font-bold">CV</h1>
            <p className="mt-2 text-neutral-600">
                Public CV summary. (Private detailed CV is at /cv-private.)
            </p>

            <section className="mt-8 space-y-2">
                <h2 className="text-xl font-semibold">Skills</h2>
                <ul className="list-disc pl-5 text-neutral-700">
                    <li>TypeScript / JavaScript</li>
                    <li>Next.js / React</li>
                    <li>Django / Python</li>
                    <li>SQL, REST APIs</li>
                </ul>
            </section>
        </main>
    );
}