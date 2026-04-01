type SidebarCardProps = {
    title?: string;
    children: React.ReactNode;
};

export default function SidebarCard({ title, children }: SidebarCardProps) {
    return (
        <section className="rounded-xl border border-neutral-200 bg-white/90 p-5 dark:border-neutral-800 dark:bg-neutral-950/90">
            {title ? (
                <>
                    <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        {title}
                    </h2>
                    <div className="mt-3">{children}</div>
                </>
            ) : (
                children
            )}
        </section>
    );
}