import { Phone, CalendarClock, Truck, ThermometerSnowflake, CheckCircle2, Droplets } from 'lucide-react';
import { Link } from 'react-router';
import { FullBleedSlide } from '../components/FullBleedSlide';
import { ServiceIconsStrip } from '../components/ServiceIconsStrip';
import { SectionSlide } from '../components/SectionSlide';
import { SectionAnchorBar } from '../components/SectionAnchorBar';
import { CtaColorStrip } from '../components/CtaColorStrip';
import { assetUrl } from '../lib/assets';

const bannerServicios = assetUrl('banner-servicios.png');
const imgComoFunciona = assetUrl('servicio-como-funciona.png');
const imgDispensador = assetUrl('servicio-dispensador.png');
const imgCongeladora1 = assetUrl('IMG_0004.PNG');
const imgCongeladora2 = assetUrl('IMG_0005.PNG');
const imgCongeladora3 = assetUrl('IMG_0006.PNG');
const imgExhibidores = assetUrl('exhibidores.jpeg');


const anchorLinks = [
  { id: 'como-funciona', label: 'Cómo funciona' },
  { id: 'dispensador', label: 'Así es tu dispensador' },
  { id: 'congeladora', label: 'Así es tu congeladora' },
  { id: 'exhibidores', label: 'Exhibidores' },
];

const pasosResumen = [
  { n: '1', t: 'Contáctanos', d: 'Cuéntanos qué necesita tu negocio y te ayudaremos a encontrar la mejor solución.' },
  { n: '2', t: 'Evaluamos tu espacio', d: 'Analizamos el área y recomendamos el dispensador o equipo de frío ideal para tu operación.' },
  { n: '3', t: 'Instalamos el equipo', d: 'Realizamos la entrega e instalación de manera rápida, segura y profesional.' },
  { n: '4', t: 'Empieza a disfrutar el servicio', d: 'Tu negocio queda listo para ofrecer una experiencia más profesional, moderna y eficiente en cada detalle.' },
];

export function ServiciosPage() {
  return (
    <>
      <FullBleedSlide
        headingLevel="h1"
        eyebrow="SUBUZ"
        title="Equipamos negocios"
        titleAccent="para ofrecer una mejor experiencia"
        description={[
          '“Desde congeladoras hasta dispensadores de agua, en SUBUZ brindamos soluciones prácticas, modernas y confiables para negocios que buscan crecer.”',
        ]}
        image={bannerServicios}
        imageAlt="Agua de mesa e hielo en entorno de trabajo"
        textSide="left"
        imageLoading="eager"
        imageFetchPriority="high"
      />

      <ServiceIconsStrip
        title="Servicios que impulsan tu negocio"
        subtitle="Calidad y compromiso en cada entrega"
        body="En SUBUZ trabajamos para que tu negocio siempre esté listo para ofrecer"
        bodyHighlight="frescura, calidad y una mejor experiencia"
        items={[
          { icon: ThermometerSnowflake, label: 'Equipos de Frío' },
          { icon: Droplets, label: 'Dispensadores de agua' },
          { icon: Truck, label: 'Distribución y reparto' },
          { icon: CheckCircle2, label: 'Soluciones para negocios' },
        ]}
      />

      <section className="border-t border-slate-200/80 bg-white py-10 md:py-12">
        <div className="subuz-page mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-extrabold text-slate-900 sm:text-xl">
            Sencillo y Profesional
          </h2>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pasosResumen.map((p) => (
              <li
                key={p.n}
                className="flex flex-col rounded-2xl border border-slate-200/90 bg-slate-50/80 p-4 text-center sm:text-left"
              >
                <span className="text-xs font-bold tabular-nums text-[#0066FF]">{p.n}</span>
                <span className="mt-1 text-sm font-bold text-slate-900">{p.t}</span>
                <span className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {p.d}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SectionAnchorBar links={anchorLinks} />

      <SectionSlide
        sectionId="como-funciona"
        eyebrow="Paso a paso"
        title="Cómo funciona"
        titleAccent="el servicio SUBUZ"
        description={[
          'Haz tu pedido, coordinamos la entrega y nosotros nos encargamos del resto. Rápido, práctico y confiable.',
          'Nos enfocamos en brindar una atención rápida, organizada y puntual en cada entrega.',
        ]}
        bullets={[
          'Pedido por canales fijos (teléfono / WhatsApp)',
          'Confirmación de ruta y responsable de recepción',
          'Producto con trazabilidad coherente con lo ofrecido',
          'Reclamo o duda: misma línea, mismo criterio',
        ]}
        image={imgComoFunciona}
        imageAlt="Entrega coordinada de agua a domicilio"
        textSide="left"
        background="white"
      />

      <SectionSlide
        sectionId="dispensador"
        eyebrow="En tu espacio"
        title="Así es tu"
        titleAccent="dispensador"
        description={[
          'Instalamos dispensadores de agua ideales para empresas y negocios que buscan ofrecer una experiencia más profesional, práctica y moderna.',
        ]}
        bullets={[
          'Agua siempre disponible',
          'Ideal para oficinas y negocios',
          'Práctico y funcional',
          'Diseño moderno y elegante',
        ]}
        image={imgDispensador}
        imageAlt="Dispensador con bidón de agua"
        textSide="right"
        background="soft"
      />

      <SectionSlide
        sectionId="congeladora"
        eyebrow="Conservación"
        title="Así es tu"
        titleAccent="congeladora"
        description={[
          'Brindamos soluciones de frío diseñadas para negocios que buscan mejorar la conservación, presentación y experiencia de sus clientes.',
        ]}
        bullets={[
          'Conservación eficiente',
          'Equipos modernos y funcionales',
          'Ideal para negocios y eventos',
          'Mejor presentación para tu negocio',
        ]}
        image={[imgCongeladora1, imgCongeladora2, imgCongeladora3]}
        imageAlt="Almacenamiento de hielo en congeladora comercial"
        textSide="left"
        background="white"
      />

      <SectionSlide
        sectionId="exhibidores"
        eyebrow="Presentación"
        title="Modernos"
        titleAccent="exhibidores"
        description={[
          'Ofrecemos exhibidores modernos y funcionales que permiten mantener tus productos visibles, organizados y en óptimas condiciones para una mejor experiencia de compra.',
          'La mejor presentación también impulsa las ventas.',
        ]}
        bullets={[
          'Mejor presentación de productos',
          'Conservación eficiente',
          'Ideal para negocios y tiendas',
          'Mayor visibilidad para tus productos',
        ]}
        image={imgExhibidores}
        imageAlt="Exhibidores modernos para negocios"
        textSide="right"
        background="soft"
      />


      <CtaColorStrip
        title="¿Dudas sobre ruta, dispensador o hielo en stock?"
        body="Escriba o llame: le respondemos con la misma ficha, sin derivación a otra tanda de números."
      />
    </>
  );
}
