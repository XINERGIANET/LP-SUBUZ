import { Truck, Droplets, Package, Snowflake, ShieldCheck } from 'lucide-react';
import { FullBleedSlide } from '../components/FullBleedSlide';
import { SectionSlide } from '../components/SectionSlide';
import { ServiceIconsStrip } from '../components/ServiceIconsStrip';
import { CtaColorStrip } from '../components/CtaColorStrip';
import { assetUrl } from '../lib/assets';

const fotoProductoAlta = assetUrl('image-7.png');
const fotoProductoAltahielo = assetUrl('image-20-old.png');

const hieloClasico = assetUrl('hielo-clasico.jpg');
const bannerProductos = assetUrl('banner-productos.png');

export function ProductosPage() {
  return (
    <>
      <FullBleedSlide
        headingLevel="h1"
        eyebrow="Línea de producto"
        title="Nuestros productos"
        titleAccent="agua e hielo"
        description={[
          'Agua de mesa ozonizada y osmotizada, y hielo premium para hogares, empresas y eventos.',
          'Cada línea responde a un uso: hogar y oficina, hielo cotidiano o hielo premium para bares y restaurantes.',
        ]}
        image={bannerProductos}
        imageAlt="Bidones de agua e hielo SUBUZ"
        textSide="left"
        imageLoading="eager"
        imageFetchPriority="high"
      />

      <ServiceIconsStrip
        title="Línea clara, mismas reglas en cada entrega"
        body="Hogar, oficina, bar o evento: el hilo conductor es trazabilidad, higiene y el mismo criterio de lote, no ofertas que cambian el producto."
        bodyHighlight="agua, hielo y retorno de envase"
        items={[
          { icon: Droplets, label: 'Agua de mesa de 20 litros' },
          { icon: Snowflake, label: 'Hielo Gourmet' },
          { icon: Package, label: 'Hielo Tradicional' },
          { icon: Truck, label: 'Presentaciones de 2kg, 3kg y 5kg' },
        ]}
      />

      <SectionSlide
        eyebrow="Bidones de agua"
        title="Agua de mesa de 20 Litros"
        titleAccent=""
        description={[
          '“Más que agua, una experiencia de hidratación. Nuestro bidón de 20 litros SUBUZ combina pureza, frescura y calidad para acompañarte todos los días.”',
        ]}
        bullets={[
          'Agua ozonizada y osmotizada.',
          'Ideal para hogares y empresas.',
        ]}
        image={fotoProductoAlta}
        imageObjectPositionClass="object-[58%_42%] md:object-[76%_44%] lg:object-[78%_42%]"
        imageAlt="Bidón SUBUZ de agua de mesa 20 litros"
        textSide="right"
        background="soft"
      />

      <SectionSlide
        eyebrow="Hielo"
        title="Hielo tradicional"
        titleAccent=""
        description={[
          '“El hielo de siempre, con la calidad SUBUZ. Perfecto para reuniones, negocios, eventos y consumo diario.”',
        ]}
        bullets={[
          'Pureza garantizada',
          'Frescura inmediata',
          'Calidad confiable',
          'Perfecto para cualquier ocasión',
        ]}
        image={hieloClasico}
        imageAlt="Bolsa de hielo tradicional SUBUZ"
        textSide="left"
        background="white"
      />

      <SectionSlide
        eyebrow="Gourmet"
        title="Hielo Gourmet"
        titleAccent=""
        description={[
          'Transforma cualquier bebida en una experiencia premium.',
          '“Diseñado para bares, eventos y personas que buscan una experiencia superior en cada bebida.”',
        ]}
        bullets={[
          'Cristalino y elegante',
          'Mayor duración',
          'Cubos de gran tamaño',
        ]}
        image={fotoProductoAltahielo}
        imageObjectPositionClass="object-center"
        imageAlt="Hielo gourmet SUBUZ para coctelería"
        textSide="right"
        background="soft"
      />

      <CtaColorStrip
        title="¿Necesita volumen, ruta fija o un bar nuevo en carta?"
        body="Hablemos con el mismo tono: sin prometer lo que el lote no sostiene."
      />
    </>
  );
}
