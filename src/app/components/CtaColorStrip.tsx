import { Link } from 'react-router';
import { type LucideIcon, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

type CtaColorStripProps = {
  title: string;
  body: string;
  icons?: [LucideIcon, LucideIcon, LucideIcon];
  to?: string;
  ctaLabel?: string;
  href?: string;
};

export function CtaColorStrip({
  title,
  body,
  icons: Icons,
  to = '/contacto',
  ctaLabel = 'Hablemos',
  href,
}: CtaColorStripProps) {
  return (
    <section className="border-t border-amber-200/80 bg-[#ffe566] py-12 md:py-16">
      <div className="subuz-page mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          {Icons && (
            <div className="flex items-center gap-3 text-[#0a2540]">
              {Icons.map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#0a2540]/15 bg-white/60"
                >
                  <Icon className="h-7 w-7" strokeWidth={1.5} />
                </motion.div>
              ))}
            </div>
          )}
          <div className="max-w-2xl flex-1">
            <h2 className="text-xl font-extrabold text-[#0a2540] sm:text-2xl md:text-3xl">
              {title}
            </h2>
            <p className="mt-2 text-pretty text-sm leading-relaxed text-[#0a2540]/90 sm:text-base">
              {body}
            </p>
          </div>
          {href ? (
            <a
              href={href}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0a2540] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#152a45]"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
          ) : (
            <Link
              to={to}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0a2540] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#152a45]"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
