import { motion } from 'motion/react';
import { Target, Eye, Heart, Truck, Droplets, Package, Snowflake } from 'lucide-react';
import { FullBleedSlide } from '../components/FullBleedSlide';
import { SectionSlide } from '../components/SectionSlide';
import { ServiceIconsStrip } from '../components/ServiceIconsStrip';
import { CtaColorStrip } from '../components/CtaColorStrip';
import subuzProductos from '../../imports/image-7.png';
import subuzEsencia from '../../imports/image-19.png';
import bannerNosotros from '../../imports/banner-nosotros.jpg';

const valores = [
  {
    icon: Target,
    title: 'Nuestra Misión',
    description:
      'Abastecer a Chiclayo con agua de mesa e hielo bajo las normas sanitarias, con procesos ordenados y servicio cercano.',
  },
  {
    icon: Eye,
    title: 'Nuestra Visión',
    description:
      'Ser referencia regional de responsabilidad y calidad, sin medir el éxito solo en volumen de venta.',
  },
  {
    icon: Heart,
    title: 'Nuestros Valores',
    description:
      'Transparencia, exigencia con el producto y trato humano. Servimos, no apuramos cierres.',
  },
];

export function NosotrosPage() {
  return (
    <>
      <FullBleedSlide
        headingLevel="h1"
        eyebrow="Empresa"
        title="¿Quiénes somos?"
        titleAccent="SUBUZ"
        description={[
          'Empresa chiclayana, en marcha desde 2022, con el mismo criterio: lo que no cumple calidad, no se despacha.',
          'Somos un equipo pequeño con planta, logística y atención en la misma lógica: orden, trazabilidad y respeto al cliente.',
        ]}
        image={bannerNosotros}
        imageAlt="Planta y almacenamiento de agua SUBUZ"
        textSide="left"
        imageLoading="eager"
        imageFetchPriority="high"
      />

      <ServiceIconsStrip
        title="De la planta a la puerta, sin saltar pasos"
        subtitle="Chiclayo y alrededores"
        body="SUBUZ no es un catálogo: es agua e hielo con"
        bodyHighlight="proceso auditable y registro a la vista"
        items={[
          { icon: Truck, label: 'Rutas y reparto' },
          { icon: Droplets, label: 'Tratamiento y envasado' },
          { icon: Package, label: 'Producto y retorno' },
          { icon: Snowflake, label: 'Hielo bajo control' },
        ]}
      />

      <SectionSlide
        eyebrow="Nuestra historia"
        title="Desde 2022,"
        titleAccent="haciendo las cosas bien"
        description={[
          'Nacimos con la idea de que el agua e hielo que toman familias y negocios en Chiclayo merecían producción seria y trazable.',
          'Crecimos con bares, restaurantes, eventos y hogares que hoy sostienen un estándar claro: constancia, no sorpresas en el sabor del agua o la forma del hielo.',
        ]}
        image={subuzProductos}
        imageAlt="Productos SUBUZ sobre hielo"
        textSide="right"
        background="soft"
      />

      <SectionSlide
        eyebrow="Nuestro propósito"
        title="Más que vender,"
        titleAccent="queremos aportar"
        description={[
          'Aportar producto fiable, planta cuidada y gente responde cuando hay duda. El precio acompaña, no manda la conversación.',
          'Cada entrega con bidón o bolsa reforzó que la confianza se gana con hechos, no con eslóganes.',
        ]}
        bullets={[
          'Responsabilidad en planta e higiene',
          'Estándar de calidad estable',
          'Cercanía, sin forzar cierre de venta',
          'Aporte a la dinámica de Chiclayo',
        ]}
        image={subuzEsencia}
        imageAlt="Dispensador y bidón SUBUZ"
        textSide="left"
        background="white"
      />

      <section className="border-t border-slate-200/80 bg-slate-50 py-16 md:py-24">
        <div className="subuz-page mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <h2 className="text-balance text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Lo que nos <span className="text-[#0066FF]">mueve</span>
            </h2>
            <p className="mt-3 text-pretty text-slate-600 sm:text-lg">
              Misión, visión y valores en una sola hoja, sin humo.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3 md:gap-6">
            {valores.map((v, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="subuz-card-muted rounded-2xl p-7 md:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0066FF] text-white">
                  <v.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                  {v.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-slate-600 sm:text-base">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaColorStrip
        title="¿Quiere conocer planta o equipo?"
        body="Coordine visita o llamada: le explicamos proceso y registro con la misma claridad que al cliente de la barra."
      />
    </>
  );
}
