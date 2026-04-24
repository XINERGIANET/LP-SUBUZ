import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import type { ReactNode } from 'react';

interface InfoSectionProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description: string | string[];
  bullets?: string[];
  image: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  background?: 'white' | 'soft';
  children?: ReactNode;
}

export function InfoSection({
  eyebrow,
  title,
  titleAccent,
  description,
  bullets,
  image,
  imageAlt,
  imagePosition = 'right',
  background = 'white',
  children,
}: InfoSectionProps) {
  const paragraphs = Array.isArray(description) ? description : [description];
  const bgClass = background === 'soft' ? 'bg-slate-50' : 'bg-white';
  const imageOrder = imagePosition === 'right' ? 'md:order-2' : 'md:order-1';
  const textOrder = imagePosition === 'right' ? 'md:order-1' : 'md:order-2';

  return (
    <section className={`${bgClass} py-16 md:py-20 lg:py-24`}>
      <div className="subuz-page mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className={`${imageOrder} relative`}
          >
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-slate-200/90 md:aspect-[5/4]"
              style={{
                boxShadow:
                  '0 0 0 1px rgba(15, 23, 42, 0.04), 0 20px 50px -12px rgba(15, 23, 42, 0.12)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-100/40 to-transparent" />
              <img
                src={image}
                alt={imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className={`${textOrder} max-w-prose space-y-5 md:max-w-none`}
          >
            {eyebrow && (
              <span className="inline-flex items-center rounded-full border border-[#0066FF]/20 bg-[#0066FF]/[0.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0066FF]">
                {eyebrow}
              </span>
            )}
            <h2 className="text-balance text-2xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              {title}
              {titleAccent && (
                <>
                  {' '}
                  <span className="text-[#0066FF]">{titleAccent}</span>
                </>
              )}
            </h2>

            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-pretty text-base leading-relaxed text-slate-600 md:text-lg"
              >
                {p}
              </p>
            ))}

            {bullets && bullets.length > 0 && (
              <ul className="space-y-2.5 pt-1">
                {bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-800"
                  >
                    <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0066FF] text-white">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="pt-0.5 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
