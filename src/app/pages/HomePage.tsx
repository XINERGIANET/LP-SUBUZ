import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Truck, Droplets, Package, Snowflake, Heart, MessageCircle, Sparkles } from 'lucide-react';
import { SectionSlide } from '../components/SectionSlide';
import { ServiceIconsStrip } from '../components/ServiceIconsStrip';
import { CtaColorStrip } from '../components/CtaColorStrip';
import { SubuzFaqSection } from '../components/SubuzFaqSection';
import { subuzFaqItems } from '../data/subuzFaq';
import plantaProceso from '../../imports/proceso-planta.jpg';
import subuzDispenser from '../../imports/image-19.png';
import bannerHome from '../../imports/banner-home.jpg';
import imageProductosHielo from '../../imports/image-7.png';
import hieloClasicoFoto from '../../imports/hielo-clasico.jpg';
import entrega from '../../imports/entrega-domicilio.png';

const principios = [
  {
    title: 'Existencia',
    description:
      'Empresa viva, con gente, planta y registro. Lo que ofrecemos existe y se ve.',
    image: imageProductosHielo,
    alt: 'Línea de productos SUBUZ',
    textSide: 'left' as const,
    bg: 'white' as const,
  },
  {
    title: 'Calidad y orden',
    description:
      'Lotes auditables, envasado controlado, entrega con la misma ficha sanitaria que en laboratorio de planta.',
    image: entrega,
    alt: 'Entrega de agua a domicilio',
    textSide: 'right' as const,
    bg: 'soft' as const,
  },
  {
    title: 'Más que un producto',
    description:
      'El vínculo con bares, restaurantes y familias es de confianza diaria, no de una sola factura.',
    image: hieloClasicoFoto,
    alt: 'Hielo clásico SUBUZ',
    textSide: 'left' as const,
    bg: 'white' as const,
  },
];

export function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#0066FF] md:min-h-[min(100vh,820px)]">
        <img
          src={bannerHome}
          alt="Instalación y servicio de agua SUBUZ"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
          decoding="async"
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl items-center px-4 py-20 sm:px-6 sm:py-24 lg:px-8 md:min-h-[min(100vh,820px)]">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:min-h-[min(64vh,560px)] lg:grid-cols-2">
            <div className="hidden min-h-0 lg:block" aria-hidden="true" />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex max-w-lg flex-col justify-center lg:ml-auto lg:pl-4"
            >
              <p className="text-sm font-medium text-white/95 [text-shadow:0_1px_8px_rgba(0,0,0,0.25)]">
                Desde 2022 — Chiclayo
              </p>
              <h1 className="mt-3 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-[2.75rem] lg:text-6xl [text-shadow:0_2px_24px_rgba(0,0,0,0.2)]">
                Somos SUBUZ
              </h1>
              <p className="mt-4 text-pretty text-base leading-relaxed text-white sm:text-lg [text-shadow:0_1px_12px_rgba(0,0,0,0.25)]">
                Agua de mesa e hielo para consumo humano, con planta y procesos
                bajo registro sanitario. Priorizamos calidad, orden y servicio.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/nosotros"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Conócenos
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
                <Link
                  to="/proceso"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Cómo trabajamos
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ServiceIconsStrip
        title="Cada entrega, con el mismo criterio"
        subtitle="Agua, hielo y ruta, en una sola lógica"
        body="Organizamos reparto, envases retornables y documentación para que usted tenga claro de dónde sale el producto. Si necesita"
        bodyHighlight="bidón, bolsa o seguimiento de lote"
        items={[
          { icon: Truck, label: 'Reparto a domicilio' },
          { icon: Droplets, label: 'Bidones y agua de mesa' },
          { icon: Package, label: 'Hielo clásico y gourmet' },
          { icon: Snowflake, label: 'Mismo registro, mismo criterio' },
        ]}
      />

      {principios.map((p, index) => (
        <SectionSlide
          key={index}
          compact
          eyebrow={String(index + 1).padStart(2, '0') + ' — idea'}
          title={p.title}
          description={[p.description]}
          image={p.image}
          imageAlt={p.alt}
          textSide={p.textSide}
          background={p.bg}
        />
      ))}

      <div className="h-px w-full bg-slate-200/80" aria-hidden="true" />

      <SectionSlide
        eyebrow="Qué hacemos"
        title="Agua e hielo"
        titleAccent="con criterio"
        description={[
          'Distribuimos bidones de 20 L y bolsas de hielo clásico y gourmet. El criterio no es llenar camiones: es dejar claro de dónde sale el producto y cómo vuelve el envase.',
        ]}
        image={subuzDispenser}
        imageAlt="Dispensador, bidón e hielo SUBUZ"
        textSide="left"
        background="soft"
      />

      <SectionSlide
        eyebrow="Cómo lo hacemos"
        title="Planta y muestreo"
        titleAccent="cada lote"
        description={[
          'Filtración, ozonización, envasado mínimo bajo riesgo y muestreo. Si el lote se cae, no se discute con marketing: se descarta.',
        ]}
        bullets={[
          'Filtración multietapa y ósmosis inversa',
          'Ozonización y muestreo microbiológico',
          'Registro sanitario a la vista',
          'Trazabilidad por lote y turno',
        ]}
        image={plantaProceso}
        imageAlt="Proceso en planta SUBUZ"
        textSide="right"
        background="white"
      />

      <CtaColorStrip
        title="Cambiamos hielo y agua, no criterio"
        body="Actuamos con orden y cercanía. Si tiene dudas, un evento o un local nuevo, hablemos con tiempo."
        icons={[Heart, MessageCircle, Sparkles]}
      />

      <SubuzFaqSection title="Preguntas frecuentes" items={subuzFaqItems} />
    </>
  );
}
