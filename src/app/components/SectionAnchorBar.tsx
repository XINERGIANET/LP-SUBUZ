type AnchorLink = { id: string; label: string };

type SectionAnchorBarProps = {
  title?: string;
  links: AnchorLink[];
};

export function SectionAnchorBar({ title = 'En esta página', links }: SectionAnchorBarProps) {
  return (
    <nav
      className="sticky top-16 z-30 border-b border-slate-200/90 bg-white/90 backdrop-blur-md"
      aria-label="Secciones de la página"
    >
      <div className="subuz-page mx-auto max-w-7xl px-4 py-2.5 sm:px-6">
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
          {title}
        </p>
        <ul className="flex flex-wrap gap-2 sm:gap-2.5">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50/80 px-3 py-1.5 text-xs font-medium text-slate-800 transition hover:border-[#0066FF] hover:bg-white hover:text-[#0066FF] sm:text-sm"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
