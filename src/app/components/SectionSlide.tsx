import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface SectionSlideProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  description: string | string[];
  bullets?: string[];
  image: string | string[];
  imageAlt: string;
  textSide: 'left' | 'right';
  background?: 'white' | 'soft';
  headingLevel?: 'h1' | 'h2';
  /** Diapositiva más baja (listados largos) */
  compact?: boolean;
  /** Encuadre del fondo: p. ej. enfocar bidón o bolsa (misma foto en alta) */
  imageObjectPositionClass?: string;
  imageFit?: 'cover' | 'contain';
  imageLoading?: 'eager' | 'lazy';
  imageFetchPriority?: 'high' | 'low' | 'auto';
  children?: ReactNode;
  /** id para anclas (#) y scroll con navbar fija */
  sectionId?: string;
}

export function SectionSlide({
  eyebrow,
  title,
  titleAccent,
  description,
  bullets,
  image,
  imageAlt,
  textSide,
  background = 'white',
  headingLevel = 'h2',
  compact = false,
  imageObjectPositionClass = 'object-center',
  imageFit = 'cover',
  imageLoading = 'lazy',
  imageFetchPriority,
  children,
  sectionId,
}: SectionSlideProps) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const images = Array.isArray(image) ? image : [image];

  useEffect(() => {
    if (images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImageIdx((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [images.length, currentImageIdx]);

  const paragraphs = Array.isArray(description) ? description : [description];
  const isTextLeft = textSide === 'left';
  const textBg = background === 'soft' ? 'bg-slate-50' : 'bg-white';
  const minH = compact
    ? 'min-h-[min(72vh,44rem)]'
    : 'min-h-[min(92svh,56rem)]';
  const mobileImageMinH = 'min-h-[min(48vh,22rem)]';

  const titleBlock = (
    <>
      {title}
      {titleAccent && (
        <>
          {' '}
          <span className="text-[#0066FF]">{titleAccent}</span>
        </>
      )}
    </>
  );

  return (
    <section
      id={sectionId}
      className={`subuz-page grid w-full grid-cols-1 md:grid-cols-2 ${minH} md:items-stretch ${
        sectionId ? 'scroll-mt-24 md:scroll-mt-28' : ''
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className={`order-2 flex flex-col justify-center ${textBg} px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 ${
          isTextLeft ? 'md:order-1' : 'md:order-2'
        }`}
      >
        {eyebrow && (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0066FF]">
            {eyebrow}
          </span>
        )}
        {headingLevel === 'h1' ? (
          <h1
            className={`text-balance font-extrabold leading-[1.12] tracking-tight text-slate-900 ${
              eyebrow ? 'mt-2' : ''
            } text-3xl sm:text-4xl md:text-5xl`}
          >
            {titleBlock}
          </h1>
        ) : (
          <h2
            className={`text-balance font-extrabold leading-[1.12] tracking-tight text-slate-900 ${
              eyebrow ? 'mt-3' : ''
            } text-2xl sm:text-3xl md:text-4xl`}
          >
            {titleBlock}
          </h2>
        )}

        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="mt-4 text-pretty text-base leading-relaxed text-slate-600 md:text-lg"
          >
            {p}
          </p>
        ))}

        {bullets && bullets.length > 0 && (
          <ul className="mt-6 space-y-2.5">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-800">
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

      <div
        className={`relative order-1 ${mobileImageMinH} w-full overflow-hidden md:min-h-0 bg-slate-100 ${
          isTextLeft ? 'md:order-2' : 'md:order-1'
        }`}
      >
        <AnimatePresence mode="popLayout">
          <motion.img
            key={images[currentImageIdx]}
            src={images[currentImageIdx]}
            alt={imageAlt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className={`absolute inset-0 h-full w-full ${
              imageFit === 'cover' ? 'object-cover' : 'object-contain'
            } ${imageObjectPositionClass}`}
            loading={imageLoading}
            decoding="async"
            fetchPriority={imageFetchPriority}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={() => setCurrentImageIdx((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/60 p-2 text-slate-800 shadow-sm backdrop-blur transition-all hover:bg-white hover:scale-110 focus:outline-none"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setCurrentImageIdx((prev) => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/60 p-2 text-slate-800 shadow-sm backdrop-blur transition-all hover:bg-white hover:scale-110 focus:outline-none"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIdx(idx)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    idx === currentImageIdx ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Ir a la imagen ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
