import { Truck, Droplets, Package, Snowflake } from 'lucide-react';
import { FullBleedSlide } from '../components/FullBleedSlide';
import { SectionSlide } from '../components/SectionSlide';
import { ServiceIconsStrip } from '../components/ServiceIconsStrip';
import { CtaColorStrip } from '../components/CtaColorStrip';
import fotoProductoAlta from '../../imports/image-7.png';
import hieloClasico from '../../imports/hielo-clasico.jpg';
import bannerProductos from '../../imports/banner-productos.jpg';

export function ProductosPage() {
  return (
    <>
      <FullBleedSlide
        headingLevel="h1"
        eyebrow="Línea de producto"
        title="Nuestros productos"
        titleAccent="agua e hielo"
        description={[
          'Producimos en Chiclayo agua de mesa e hielo para consumo humano, con estándares sanitarios y planta bajo registro.',
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
          { icon: Truck, label: 'Reparto y coordinación' },
          { icon: Droplets, label: 'Agua 20 L retornable' },
          { icon: Package, label: 'Hielo 5 kg' },
          { icon: Snowflake, label: 'Hielo gourmet 1,5 kg' },
        ]}
      />

      <SectionSlide
        eyebrow="Bidones de agua"
        title="Agua de mesa"
        titleAccent="SUBUZ · 20 L"
        description={[
          'Nuestro bidón de 20 litros es el pilar del servicio SUBUZ. Lo entregamos en hogares, oficinas y negocios que buscan un agua confiable para consumo diario.',
          'Cada bidón pasa por un proceso de purificación multietapa, ozonización y control de calidad, y se distribuye en envases retornables en condiciones higiénicas.',
        ]}
        bullets={[
          'Envase retornable de 20 litros',
          'Agua purificada y ozonizada',
          'Registro sanitario vigente',
          'Ideal para hogares, oficinas y negocios',
        ]}
        image={fotoProductoAlta}
        imageObjectPositionClass="object-[58%_42%] md:object-[76%_44%] lg:object-[78%_42%]"
        imageAlt="Bidón SUBUZ de agua de mesa 20 litros"
        textSide="right"
        background="soft"
      />

      <SectionSlide
        eyebrow="Hielo clásico"
        title="Hielo clásico"
        titleAccent="para el día a día"
        description={[
          'Pensado para uso cotidiano: negocios, reuniones, bodegas, juguerías y cualquier lugar donde se necesite hielo limpio y constante.',
          'Producido con agua purificada, en entorno controlado, en bolsas selladas e higiénicas.',
        ]}
        bullets={[
          'Cubitos de forma estándar',
          'Elaborado con agua purificada',
          'Bolsa sellada y rotulada',
          'Presentación de 5 kg',
        ]}
        image={hieloClasico}
        imageAlt="Bolsa de hielo clásico SUBUZ 5 kg"
        textSide="left"
        background="white"
      />

      <SectionSlide
        eyebrow="Hielo gourmet"
        title="Hielo gourmet"
        titleAccent="para bares y restaurantes"
        description={[
          'Línea premium para cocteleras, restaurantes y eventos donde el hielo es parte visible de la experiencia.',
          'Más denso y transparente, derretimiento más lento, sin alterar el sabor de las bebidas.',
        ]}
        bullets={[
          'Cristalino, transparente y denso',
          'Derretimiento más lento',
          'No altera el sabor',
          'Coctelería y alta cocina',
        ]}
        image={fotoProductoAlta}
        imageObjectPositionClass="object-[42%_42%] md:object-[24%_44%] lg:object-[22%_42%]"
        imageAlt="Bolsa de hielo gourmet SUBUZ 1,5 kg"
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
