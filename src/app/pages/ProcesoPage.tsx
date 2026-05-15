import { motion } from 'motion/react';
import { Droplets, Shield, Sparkles, Truck, Beaker, ClipboardCheck, Timer } from 'lucide-react';



import { FullBleedSlide } from '../components/FullBleedSlide';

import { ServiceIconsStrip } from '../components/ServiceIconsStrip';
import { CtaColorStrip } from '../components/CtaColorStrip';
import { assetUrl } from '../lib/assets';

const bannerProceso = assetUrl('banner-proceso.png');

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


  return (
    <>
      <FullBleedSlide
        headingLevel="h1"
        eyebrow="Planta y proceso"
        title="Detrás de cada entrega, hay un proceso de calidad"
        description={[
          'Trabajamos con organización, control y compromiso para ofrecer productos y soluciones que cumplen los más altos estándares.',
        ]}
        image={bannerProceso}
        imageAlt="Línea de llenado y agua en planta"
        textSide="left"
        imageLoading="eager"
        imageFetchPriority="high"
      />

      <ServiceIconsStrip
        title="Cada lote, con respaldo y registro"
        body="Desde el lote de producción hasta la entrega final, en SUBUZ seguimos procesos organizados y controles de calidad que garantizan"
        bodyHighlight="frescura, conservación y confianza en cada producto"
        items={[
          { icon: Beaker, label: 'Producción y control de calidad' },
          { icon: ClipboardCheck, label: 'conservación y almacenamiento' },
          { icon: Timer, label: 'preparación y despacho' },
          { icon: Truck, label: 'entrega y atención al cliente' },
        ]}
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






      <CtaColorStrip
        title="¿Preguntas sobre muestreo o registro?"
        body="Le orientamos con la misma ficha: sin improvisar cifras ni «versión comercial» del proceso."
      />
    </>
  );
}
