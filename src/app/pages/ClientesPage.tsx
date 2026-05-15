import { Building2, UtensilsCrossed, PartyPopper, Home, Truck, Droplets, Package } from 'lucide-react';

import { FullBleedSlide } from '../components/FullBleedSlide';
import { SectionSlide } from '../components/SectionSlide';
import { ServiceIconsStrip } from '../components/ServiceIconsStrip';
import { CtaColorStrip } from '../components/CtaColorStrip';
import { assetUrl } from '../lib/assets';

const bannerClientes = assetUrl('banner-clientes.jpg');



const tipos = [
  {
    title: 'Bares y coctelería',
    description:
      'Hielo gourmet con piezas consistentes, adecuado para coctelería y servicio al bar.',
    image:
      'https://images.unsplash.com/photo-1770670644206-608a83cdc343?w=1200&q=80',
  },
  {
    title: 'Restaurantes',
    description:
      'Agua e hielo con estándar estable para servicio diario en cocina y comedor.',
    image:
      'https://images.unsplash.com/photo-1774978236731-ce63c58f1264?w=1200&q=80',
  },
  {
    title: 'Eventos y activaciones',
    description:
      'Volumen planificado, entregas puntuales y producto homogéneo en toda la jornada.',
    image:
      'https://images.unsplash.com/photo-1758552013326-01b93dd12c3e?w=1200&q=80',
  },
  {
    title: 'Empresas y hogar',
    description:
      'Bidones de 20 L con envase retornable, entrega a domicilio y el mismo cuidado de higiene y plazo.',
    image:
      'https://images.unsplash.com/photo-1765099271664-614c541196ef?w=1200&q=80',
  },
];

export function ClientesPage() {
  return (
    <>
      <FullBleedSlide
        headingLevel="h1"
        eyebrow="Relaciones"
        title="Nuestros clientes"
        titleAccent="en Chiclayo"
        description={[
          'Trabajamos junto a bares, restaurantes, eventos y negocios que buscan calidad, presentación y una experiencia superior.',
        ]}
        image={bannerClientes}
        imageAlt="Servicio de bebidas y hielo en bar"
        textSide="left"
        imageLoading="eager"
        imageFetchPriority="high"
      />

      <ServiceIconsStrip
        title="Mismo criterio en cada tipo de local"
        body="Cada cliente recibe el mismo nivel de compromiso, calidad y atención que representa a SUBUZ"
        bodyHighlight=""
        items={[
          { icon: Building2, label: 'Bares y coctelería' },
          { icon: UtensilsCrossed, label: 'Restaurantes' },
          { icon: PartyPopper, label: 'Eventos y activaciones' },
          { icon: Home, label: 'Empresas y hogar' },
        ]}
      />



      {tipos.map((tipo, index) => (
        <SectionSlide
          key={tipo.title}
          compact
          eyebrow="Perfil de cliente"
          title={tipo.title}
          description={[tipo.description]}
          image={tipo.image}
          imageAlt={tipo.title}
          textSide={index % 2 === 0 ? 'right' : 'left'}
          background={index % 2 === 0 ? 'soft' : 'white'}
        />
      ))}

      <CtaColorStrip
        title="¿Listo para trabajar con SUBUZ?"
        body="“Te ayudamos a encontrar la mejor solución para tu hogar, negocio o evento.”"
        ctaLabel="Hablar con un asesor"
        icons={[Truck, Droplets, Package]}
      />

    </>
  );
}
