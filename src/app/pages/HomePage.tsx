import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, Truck, Droplets, Package, Snowflake, Heart, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { SectionSlide } from '../components/SectionSlide';
import { ServiceIconsStrip } from '../components/ServiceIconsStrip';
import { CtaColorStrip } from '../components/CtaColorStrip';
import { SubuzFaqSection } from '../components/SubuzFaqSection';
import { subuzFaqItems } from '../data/subuzFaq';
import { VideoSection } from '../components/VideoSection';
import { assetUrl } from '../lib/assets';

const plantaProceso = assetUrl('proceso-planta.jpg');
const subuzDispenser = assetUrl('image-19.png');
const bannerHome = assetUrl('banner-nosotros.png');
const imageProductosHielo = assetUrl('image-7.png');
const hieloClasicoFoto = assetUrl('hielo-clasico.jpg');
const entrega = assetUrl('entrega-domicilio.png');

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
                Desde 2021 — Chiclayo
              </p>
              <h1 className="mt-3 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-[2.75rem] lg:text-6xl [text-shadow:0_2px_24px_rgba(0,0,0,0.2)]">
                Somos SUBUZ
              </h1>
              <p className="mt-4 text-pretty text-base leading-relaxed text-white sm:text-lg [text-shadow:0_1px_12px_rgba(0,0,0,0.25)]">
                Agua de mesa ozonizada y osmotizada, y hielo premium para hogares, empresas y eventos.
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

      <VideoSection />

      <ServiceIconsStrip
        title="Cada entrega, con el mismo criterio"
        subtitle="Agua, hielo y ruta, en una sola lógica"
        body="Organizamos reparto, envases retornables y documentación para que usted tenga claro de dónde sale el producto. Si necesita"
        bodyHighlight="bidón, bolsa o seguimiento de lote"
        items={[
          { icon: ShieldCheck, label: 'Procesos controlados' },
          { icon: Droplets, label: 'Agua de mesa de 20 litros' },
          { icon: Snowflake, label: 'Hielo tradicional y Gourmet' },
          { icon: Truck, label: 'Logística adecuada' },
        ]}
      />





      <section className="bg-[#F0F7FF] py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-[#0066FF] mb-6 leading-tight">
              SUBUZ a domicilio
            </h2>
            <p className="text-lg md:text-xl text-slate-700 max-w-2xl leading-relaxed font-medium">
              Para ti. Para tu familia. Para tu equipo. Con SUBUZ no tendrás que preocuparte de nada.
              Llevamos pureza y frescura directamente a tu puerta. Tú, simplemente, disfruta.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Hogar Card */}
            <motion.div
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white"
            >
              <img
                src={assetUrl('hogar-subuz.png')}
                alt="SUBUZ para el hogar"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0066FF]/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex items-center justify-between">
                <h3 className="text-3xl md:text-4xl font-black text-white">Para hogar</h3>
                <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center text-[#0066FF] shadow-lg group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300">
                  <ArrowRight size={28} />
                </div>
              </div>
            </motion.div>

            {/* Empresa Card */}
            <motion.div
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white"
            >
              <img
                src={assetUrl('empresa-subuz.png')}
                alt="SUBUZ para empresas"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0066FF]/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-8 flex items-center justify-between">
                <h3 className="text-3xl md:text-4xl font-black text-white">Para empresas</h3>
                <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center text-[#0066FF] shadow-lg group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300">
                  <ArrowRight size={28} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#0066FF] py-10 md:py-14 px-4 relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-2xl bg-white/20"
            >
              <Droplets className="text-white h-10 w-10 md:h-12 md:w-12" />
            </motion.div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                Reparto GRATIS <br className="hidden md:block" /> para siempre
              </h2>
            </div>
          </div>
          <Link
            to="/contacto"
            className="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-black text-[#0066FF] transition hover:bg-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.15)] group"
          >
            Pídelo ahora
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>



      <SubuzFaqSection title="Preguntas frecuentes" items={subuzFaqItems} />
    </>
  );
}
