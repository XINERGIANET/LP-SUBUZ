import { Phone, CalendarClock, Truck, ThermometerSnowflake, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';
import { FullBleedSlide } from '../components/FullBleedSlide';
import { ServiceIconsStrip } from '../components/ServiceIconsStrip';
import { SectionSlide } from '../components/SectionSlide';
import { SectionAnchorBar } from '../components/SectionAnchorBar';
import { CtaColorStrip } from '../components/CtaColorStrip';
import bannerServicios from '../../imports/banner-servicios.png';
import imgComoFunciona from '../../imports/servicio-como-funciona.png';
import imgDispensador from '../../imports/servicio-dispensador.png';
import imgCongeladora from '../../imports/servicio-congeladora.png';

const anchorLinks = [
  { id: 'como-funciona', label: 'Cómo funciona' },
  { id: 'dispensador', label: 'Así es tu dispensador' },
  { id: 'congeladora', label: 'Así es tu congeladora' },
];

const pasosResumen = [
  { n: '01', t: 'Pedido', d: 'Indica producto, dirección y franja horaria.' },
  { n: '02', t: 'Confirmación', d: 'Te respondemos con ruta y condiciones de entrega.' },
  { n: '03', t: 'Preparación', d: 'Desde planta, bajo el mismo registro de siempre.' },
  { n: '04', t: 'Entrega', d: 'En sitio, con sellos e higiene visibles.' },
];

export function ServiciosPage() {
  return (
    <>
      <FullBleedSlide
        headingLevel="h1"
        eyebrow="SUBUZ"
        title="Servicios"
        titleAccent="pensados para tu ritmo"
        description={[
          'Además del producto, te explicamos cómo encaja el pedido, el dispensador en tu espacio y el hielo en tu congeladora, con el mismo criterio de planta y registro.',
          'Nada de promesas genéricas: si algo no cuadra con tu local o tu casa, lo vemos antes de cargar el camión.',
        ]}
        image={bannerServicios}
        imageAlt="Agua de mesa e hielo en entorno de trabajo"
        textSide="left"
        imageLoading="eager"
        imageFetchPriority="high"
      />

      <ServiceIconsStrip
        title="Orden en cada paso"
        subtitle="Desde el primer contacto hasta la entrega"
        body="El servicio no es solo «llegar y dejar»: coordinamos"
        bodyHighlight="pedido, ventana y producto bajo la misma ficha"
        items={[
          { icon: Phone, label: 'Pedido por teléfono o WhatsApp' },
          { icon: CalendarClock, label: 'Ventana y ruta acordada' },
          { icon: Truck, label: 'Entrega en Chiclayo' },
          { icon: ThermometerSnowflake, label: 'Hielo y cadena en frío' },
        ]}
      />

      <section className="border-t border-slate-200/80 bg-white py-10 md:py-12">
        <div className="subuz-page mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-lg font-extrabold text-slate-900 sm:text-xl">
            Cómo encaja el servicio
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
          'Usted pide con datos claros: dirección, tipo de producto (agua, hielo o ambos), volumen aproximado y, si aplica, retiro de envase usado.',
          'Nosotros confirmamos ventana de entrega y condiciones. La planta prepara bajo el mismo esquema de lote y registro que ya conoce; en ruta, el reparto prioriza sellos, higiene visible y entrega sin improvisar en la puerta.',
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
          'El bidón de 20 L se apoya en un dispensador manual o de sobremesa, con grifo a altura de uso. La base debe ser estable, lejos de fuentes de calor directo y con acceso fácil para el cambio de botellón.',
          'SUBUZ no sustituye el manual del fabricante, pero sí le orienta para que el cambio sea seguro, sin forzar roscas, y con limpieza periódica de la zona del grifo. En negocios, el criterio es el mismo: orden alrededor del punto de consumo.',
        ]}
        bullets={[
          'Compatibilidad con garrafones estándar de 20 L',
          'Cambio de botellón con el envase boca abajo, sin golpes',
          'Limpieza externa y zona de descarga con paño e higienizante',
          'Ideal para hogar, oficina y pequeño comercio',
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
          'El hielo clásico y gourmet viaja en bolsa sellada; en su congeladora debe ubicarse en estantes limpios, sin aplastar la bolsa de forma que rompa el sellado, y lejos de olores fuertes de otros alimentos.',
          'En bares y cocinas con alto turno, conviene rotar por lote: primero lo que recibió antes, para no mezclar producto viejo con recién ingresado. Ese hábito es el que acompaña a un servicio de hielo serio, no a una carga aislada.',
        ]}
        bullets={[
          'Temperatura estable según su equipo; sin abrir en exceso la puerta',
          'Bolsas enteras, sin triturar sobre superficies no higiénicas',
          'Separación de olores: hielo aparte de pescado u otros productos',
          'Consulte volumen: eventos o picos con anticipación',
        ]}
        image={imgCongeladora}
        imageAlt="Almacenamiento de hielo en congeladora comercial"
        textSide="left"
        background="white"
      />

      <section className="border-t border-slate-200/80 bg-[#0a2540] py-10 md:py-12">
        <div className="subuz-page mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3 text-white">
              <CheckCircle2
                className="mt-0.5 h-6 w-6 flex-shrink-0 text-sky-300"
                strokeWidth={1.8}
              />
              <p className="text-pretty text-sm leading-relaxed text-slate-200 sm:text-base">
                Si su instalación o su congeladora tienen requisitos especiales (rampa, acceso, horario
                nocturno), háganoslo saber al pedido: ajustamos la ventana, no el estándar del
                producto a escondidas.
              </p>
            </div>
            <Link
              to="/contacto"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0a2540] transition hover:bg-slate-100"
            >
              Coordinar detalle
            </Link>
          </div>
        </div>
      </section>

      <CtaColorStrip
        title="¿Dudas sobre ruta, dispensador o hielo en stock?"
        body="Escriba o llame: le respondemos con la misma ficha, sin derivación a otra tanda de números."
      />
    </>
  );
}
