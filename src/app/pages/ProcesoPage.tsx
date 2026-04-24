import { motion } from 'motion/react';
import { Droplets, Shield, Sparkles, Truck, Play, Beaker, ClipboardCheck, Timer } from 'lucide-react';
import { useState, useRef } from 'react';
import { FullBleedSlide } from '../components/FullBleedSlide';
import { SectionSlide } from '../components/SectionSlide';
import { ServiceIconsStrip } from '../components/ServiceIconsStrip';
import { CtaColorStrip } from '../components/CtaColorStrip';
import plantaProceso from '../../imports/proceso-planta.jpg';
import bidonAltaRes from '../../imports/image-7.png';
import subuzVideo from '../../imports/subuz-video.mp4';
import subuzThumbnail from '../../imports/image-19.png';
import bannerProceso from '../../imports/banner-proceso.jpg';

const pasos = [
  {
    icon: Droplets,
    title: 'Filtración',
    description:
      'Multietapa y ósmosis: partículas, sedimentos y sólidos disueltos en el límite del permiso operativo.',
  },
  {
    icon: Shield,
    title: 'Ozonización',
    description:
      'Tratamiento con ozono para asegurar inocuidad, sin añadir residuos químicos que alteren el sabor del agua.',
  },
  {
    icon: Sparkles,
    title: 'Control de calidad',
    description:
      'Muestreo y registro de lote antes de envasar. Si el resultado no es conforme, el producto no avanza a distribución.',
  },
  {
    icon: Truck,
    title: 'Envasado y entrega',
    description:
      'Envasado bajo techo, sellado, almacenaje ordenado y salida a reparto manteniendo la cadena de frío e higiene.',
  },
];

export function ProcesoPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().then(() => setIsPlaying(true));
        }
      });
    }
  };

  return (
    <>
      <FullBleedSlide
        headingLevel="h1"
        eyebrow="Planta y proceso"
        title="¿Cómo trabajamos?"
        description={[
          'Cada bidón o bolsa sigue un flujo fijo, con muestreo y trazabilidad. La planta no es un decorado: es donde se toman las decisiones de lote, cada día.',
          'Por eso mostramos el proceso, los pasos y un video real de nuestras instalaciones, con la misma luz que usted vería al visitar.',
        ]}
        image={bannerProceso}
        imageAlt="Línea de llenado y agua en planta"
        textSide="left"
        imageLoading="eager"
        imageFetchPriority="high"
      />

      <ServiceIconsStrip
        title="Cada lote, con respaldo y registro"
        body="Muestreo, sellado y reparto: no vendemos el proceso en teoría. Si pregunta, le mostramos"
        bodyHighlight="el criterio real de envasado y lote"
        items={[
          { icon: Beaker, label: 'Muestreo' },
          { icon: ClipboardCheck, label: 'Conformidad' },
          { icon: Timer, label: 'Turno y lote' },
          { icon: Truck, label: 'Salida a ruta' },
        ]}
      />

      <SectionSlide
        eyebrow="Nuestra planta"
        title="Un ambiente"
        titleAccent="ordenado y controlado"
        description={[
          'Áreas separadas por etapa, limpieza programada, equipos calibrados y registro de turnos. El orden no es un cartel: es condición para que el producto sea repetible, lote a lote.',
          'El agua avanza en un solo sentido, desde el tratamiento hasta el envasado, con controles y sin mezclar criterios entre turnos ni improvisar muestreo.',
        ]}
        image={plantaProceso}
        imageAlt="Sala y equipos de planta SUBUZ"
        textSide="right"
        background="soft"
      />

      <section className="border-t border-slate-200/80 bg-white py-16 md:py-24">
        <div className="subuz-page mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <h2 className="text-balance text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Nuestro <span className="text-[#0066FF]">proceso</span>
            </h2>
            <p className="mt-3 text-pretty text-slate-600 sm:text-lg">
              Cuatro etapas que se cumplen en cada lote, sin excepciones.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pasos.map((paso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="subuz-card relative overflow-hidden p-6 md:p-7"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-bold tabular-nums text-slate-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0066FF] text-white">
                  <paso.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                  {paso.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-slate-600">
                  {paso.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionSlide
        eyebrow="Estándar"
        title="No envasamos"
        titleAccent="si el lote no cumple"
        description={[
          'Si un parámetro no está dentro de lo aprobado, el lote no se envasa para venta. El criterio es el mismo con pedidos pequeños o con pedidos de volumen: primero el cumplimiento, después la carga al camión.',
        ]}
        bullets={[
          'Registro sanitario vigente y consultable',
          'Control microbiológico por lote',
          'Envases sellados y trazables',
        ]}
        image={bidonAltaRes}
        imageObjectPositionClass="object-[58%_42%] md:object-[76%_44%] lg:object-[78%_42%]"
        imageAlt="Bidón SUBUZ 20 L con etiqueta"
        textSide="left"
        background="white"
      />

      <section className="border-t border-slate-200/80 bg-gradient-to-b from-slate-900 via-[#0a1a33] to-slate-950 py-16 md:py-24">
        <div className="subuz-page mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Planta
            </p>
            <h2 className="mt-2 text-balance text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
              Conoce nuestra planta
            </h2>
            <p className="mt-3 text-pretty text-slate-300 sm:text-lg">
              Recorrido audiovisual en nuestras instalaciones de Chiclayo.
            </p>
          </div>

          <div
            className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-black ring-1 ring-white/10"
            style={{
              boxShadow:
                '0 0 0 1px rgba(15, 23, 42, 0.5), 0 32px 80px -20px rgba(0,0,0,0.5)',
            }}
          >
            <video
              ref={videoRef}
              src={subuzVideo}
              poster={subuzThumbnail}
              controls={isPlaying}
              playsInline
              className="aspect-video w-full object-cover"
            />
            {!isPlaying && (
              <button
                type="button"
                onClick={handlePlay}
                aria-label="Reproducir video"
                className="absolute inset-0 flex cursor-pointer items-center justify-center bg-slate-950/35 transition hover:bg-slate-950/45"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/95 shadow-xl md:h-20 md:w-20">
                  <Play
                    className="ml-1 h-7 w-7 text-[#0066FF] md:h-8 md:w-8"
                    fill="currentColor"
                  />
                </div>
              </button>
            )}
          </div>
        </div>
      </section>

      <CtaColorStrip
        title="¿Preguntas sobre muestreo o registro?"
        body="Le orientamos con la misma ficha: sin improvisar cifras ni «versión comercial» del proceso."
      />
    </>
  );
}
