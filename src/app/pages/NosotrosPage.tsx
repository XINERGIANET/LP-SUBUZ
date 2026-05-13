import { About } from '../components/About';
import { CtaColorStrip } from '../components/CtaColorStrip';
import { FullBleedSlide } from '../components/FullBleedSlide';
import { assetUrl } from '../lib/assets';

const bannerNosotros = assetUrl('banner-home.png');

export function NosotrosPage() {
  return (
    <>
      <FullBleedSlide
        headingLevel="h1"

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
        title="¿Quieres conocer nuestra forma de trabajo?"
        body="Coordinemos una visita y descubre cómo trabajamos junto a negocios, empresas y eventos"
        ctaLabel="Contáctanos"
      />
    </>
  );
}
