import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

type Item = {
  icon: LucideIcon;
  label: string;
};

type ServiceIconsStripProps = {
  title: string;
  subtitle?: string;
  body?: string;
  bodyHighlight?: string;
  items: [Item, Item, Item, Item];
};

export function ServiceIconsStrip({
  title,
  subtitle,
  body,
  bodyHighlight,
  items,
}: ServiceIconsStripProps) {
  return (
    <section className="border-t border-slate-200/80 bg-[#c8f2ea] py-16 md:py-24">
      <div className="subuz-page mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center rounded-2xl border border-slate-900/8 bg-white/70 p-5 text-center shadow-sm backdrop-blur-sm sm:p-6"
              >
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0a2540] text-white">
                  <it.icon className="h-7 w-7" strokeWidth={1.6} />
                </div>
                <p className="text-sm font-semibold leading-snug text-[#0a2540] sm:text-base">
                  {it.label}
                </p>
              </motion.div>
            ))}
          </div>
          <div>
            <h2
              className="text-2xl font-extrabold leading-tight tracking-tight text-[#0a2540] sm:text-3xl md:text-4xl"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-pretty text-sm text-slate-700 sm:text-base">
                {subtitle}
              </p>
            )}
            {body && (
              <p className="mt-4 text-pretty text-base leading-relaxed text-slate-800 sm:text-lg">
                {body}
                {bodyHighlight && (
                  <>
                    {' '}
                    <span className="font-semibold text-[#0066FF]">
                      {bodyHighlight}
                    </span>
                  </>
                )}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
