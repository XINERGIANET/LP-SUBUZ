import { About } from '../components/About';
import { CtaColorStrip } from '../components/CtaColorStrip';
import { FullBleedSlide } from '../components/FullBleedSlide';
import bannerNosotros from '../../imports/banner-nosotros.jpg';

export function NosotrosPage() {
  return (
    <>
      <FullBleedSlide
        headingLevel="h1"
        eyebrow="Empresa"
        title="¿Quiénes somos?"
        titleAccent="SUBUZ"
        description={[
          'En Subuz, no solo vendemos agua y hielo. Entregamos confianza, calidad y compromiso en cada producto.',
        ]}
        image={bannerNosotros}
        imageAlt="Planta y almacenamiento de agua SUBUZ"
        textSide="left"
        imageLoading="eager"
        imageFetchPriority="high"
      />

      {/* Aquí renderizamos el componente About que tiene toda la información detallada, procesos y valores */}
      <About />

      <CtaColorStrip
        title="¿Quiere conocer planta o equipo?"
        body="Coordine visita o llamada: le explicamos proceso y registro con la misma claridad que al cliente de la barra."
      />
    </>
  );
}
