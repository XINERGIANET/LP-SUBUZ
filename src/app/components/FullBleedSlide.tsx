import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import type { ReactNode } from 'react';

interface FullBleedSlideProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description: string | string[];
  bullets?: string[];
  image: string;
  imageAlt: string;
  textSide: 'left' | 'right';
  headingLevel?: 'h1' | 'h2';
  compact?: boolean;
  imageObjectPositionClass?: string;
  imageLoading?: 'eager' | 'lazy';
  imageFetchPriority?: 'high' | 'low' | 'auto';
  children?: ReactNode;
}

export function FullBleedSlide({
  eyebrow,
  title,
  titleAccent,
  description,
  bullets,
  image,
  imageAlt,
  textSide,
  headingLevel = 'h2',
  compact = false,
  imageObjectPositionClass = 'object-center',
  imageLoading = 'lazy',
  imageFetchPriority,
  children,
}: FullBleedSlideProps) {
  const paragraphs = Array.isArray(description) ? description : [description];
  const isTextLeft = textSide === 'left';
  const minH = compact
    ? 'min-h-[min(80svh,40rem)] md:min-h-[min(90svh,48rem)]'
    : 'min-h-[min(100svh,52rem)] md:min-h-[min(100vh,880px)]';

  const titleBlock = (
    <>
      {title}
      {titleAccent ? (
        <>
          {' '}
          <span className="text-sky-200">{titleAccent}</span>
        </>
      ) : null}
    </>
  );

  const textBlock = (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className={`flex max-w-lg flex-col justify-center ${
        isTextLeft ? '' : 'lg:ml-auto'
      }`}
    >
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 [text-shadow:0_1px_8px_rgba(0,0,0,0.35)]">
          {eyebrow}
        </p>
      )}
      {headingLevel === 'h1' ? (
        <h1
          className={`text-balance font-extrabold leading-[1.1] tracking-tight text-white ${
            eyebrow ? 'mt-2' : ''
          } text-3xl [text-shadow:0_2px_24px_rgba(0,0,0,0.3)] sm:text-4xl md:text-5xl`}
        >
          {titleBlock}
        </h1>
      ) : (
        <h2
          className={`text-balance font-extrabold leading-[1.1] tracking-tight text-white ${
            eyebrow ? 'mt-3' : ''
          } text-2xl [text-shadow:0_2px_20px_rgba(0,0,0,0.28)] sm:text-3xl md:text-4xl`}
        >
          {titleBlock}
        </h2>
      )}

      {paragraphs.map((p, i) => (
        <p
          key={i}
          className="mt-4 text-pretty text-base leading-relaxed text-white/95 [text-shadow:0_1px_12px_rgba(0,0,0,0.3)] sm:text-lg"
        >
          {p}
        </p>
      ))}

      {bullets && bullets.length > 0 && (
        <ul className="mt-6 space-y-2.5">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-white/95 [text-shadow:0_1px_8px_rgba(0,0,0,0.3)]">
              <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0066FF] text-white shadow-md">
                <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
              <span className="pt-0.5 leading-relaxed sm:text-base">{b}</span>
            </li>
          ))}
        </ul>
      )}

      {children}
    </motion.div>
  );

  return (
    <section
      className={`relative w-full overflow-hidden ${compact ? 'bg-slate-900' : 'bg-slate-950'}`}
    >
      <img
        src={image}
        alt={imageAlt}
        className={`absolute inset-0 h-full w-full object-cover ${imageObjectPositionClass}`}
        loading={imageLoading}
        decoding="async"
        fetchPriority={imageFetchPriority}
        sizes="100vw"
      />
      {isTextLeft ? (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-950/35 to-slate-950/10"
          aria-hidden="true"
        />
      ) : (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-l from-slate-950/65 via-slate-950/35 to-slate-950/10"
          aria-hidden="true"
        />
      )}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent"
        aria-hidden="true"
      />
      <div
        className={`relative z-10 mx-auto flex w-full max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${minH}`}
      >
        <div className="grid w-full grid-cols-1 items-center gap-6 lg:min-h-0 lg:grid-cols-2">
          {isTextLeft ? (
            <>
              {textBlock}
              <div className="hidden min-h-0 lg:block" aria-hidden="true" />
            </>
          ) : (
            <>
              <div className="hidden min-h-0 lg:block" aria-hidden="true" />
              {textBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
