import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

export type FaqItem = { q: string; a: string };

type SubuzFaqSectionProps = {
  title?: string;
  items: FaqItem[];
};

export function SubuzFaqSection({
  title = 'Preguntas frecuentes',
  items,
}: SubuzFaqSectionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-slate-800 bg-[#0a2540] py-16 md:py-24">
      <div className="subuz-page mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr,1.4fr] lg:items-start">
          <h2
            className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            {title}
          </h2>
          <div>
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className="border-b border-white/20 last:border-0"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-4 py-4 text-left text-sm font-medium text-white transition hover:text-sky-100 sm:text-base"
                  >
                    <span className="pr-2">{item.q}</span>
                    <span
                      className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/30 transition ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pr-10 text-pretty text-sm leading-relaxed text-slate-200 sm:text-base">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
