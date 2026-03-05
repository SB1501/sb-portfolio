export default function CvPrivatePage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-10">
            <h1 className="text-3xl font-bold">CV (Private)</h1>
            <p className="mt-2 text-neutral-600">
                Detailed CV and references — shared by password on request.
            </p>

            <section className="mt-8 space-y-3 text-neutral-800">
                <h2 className="text-xl font-semibold">Details</h2>
                <ul className="list-disc pl-5">
                    <li>Full work history</li>
                    <li>References (names/contact details)</li>
                    <li>Private notes for employers</li>
                </ul>
            </section>
        </main>
    );
}