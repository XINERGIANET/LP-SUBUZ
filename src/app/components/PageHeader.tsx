import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
  align?: 'left' | 'center';
  overlay?: 'light' | 'dark' | 'none';
  eyebrow?: string;
}

export function PageHeader({
  title,
  subtitle,
  image,
  align = 'left',
  overlay = 'dark',
  eyebrow,
}: PageHeaderProps) {
  const isCenter = align === 'center';
  const textAlign = isCenter ? 'text-center' : 'text-left';
  const maxWidth = isCenter ? 'max-w-4xl mx-auto' : 'max-w-3xl';

  const showOverlay = image && overlay !== 'none';
  // Gradiente que oscurece más a la izquierda (título) y deja aire a la imagen
  const layerOverlay =
    overlay === 'light'
      ? 'bg-gradient-to-b from-slate-900/20 via-slate-900/5 to-slate-900/20'
      : 'bg-gradient-to-r from-slate-950/92 via-slate-950/55 to-slate-950/15';

  return (
    <section
      className={`relative overflow-hidden ${
        image
          ? 'min-h-[300px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[440px]'
          : 'min-h-0 border-b border-slate-200/90 bg-slate-50'
      }`}
    >
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          {showOverlay && (
            <>
              <div
                className={`pointer-events-none absolute inset-0 ${layerOverlay}`}
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-slate-950/25"
                aria-hidden="true"
              />
            </>
          )}
        </>
      )}

      {!image && (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_20%_0%,rgba(0,102,255,0.08),transparent_55%)]"
          aria-hidden="true"
        />
      )}

      <div
        className={`relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-col gap-0 px-4 sm:px-6 lg:px-8 ${
          image
            ? 'min-h-[300px] justify-end pt-32 pb-10 sm:min-h-[360px] sm:pt-40 md:min-h-[400px] md:pb-14 md:pt-44 lg:min-h-[440px]'
            : 'justify-center py-16 md:py-20'
        } ${isCenter ? 'items-center' : 'items-start'}`}
      >
        <div
          className={`w-full ${maxWidth} ${isCenter ? 'mx-auto' : ''} ${textAlign} subuz-page`}
        >
          {eyebrow && image && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
              {eyebrow}
            </p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-balance font-extrabold leading-[1.08] ${
              image
                ? 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow'
                : 'text-3xl sm:text-4xl md:text-5xl text-slate-900'
            }`}
          >
            {title}
          </motion.h1>
          {!image && (
            <span className="mt-4 block h-1 w-14 rounded-full bg-[#0066FF] md:mt-5" />
          )}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12 }}
              className={`mt-4 text-pretty text-base font-normal leading-relaxed md:mt-5 md:text-lg ${
                image ? 'text-white/90' : 'text-slate-600'
              }`}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
