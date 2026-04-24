import { Instagram, Building2, UtensilsCrossed, PartyPopper, Home, Truck, Droplets, Package } from 'lucide-react';
import { FullBleedSlide } from '../components/FullBleedSlide';
import { SectionSlide } from '../components/SectionSlide';
import { ServiceIconsStrip } from '../components/ServiceIconsStrip';
import { CtaColorStrip } from '../components/CtaColorStrip';
import subuzDispenser from '../../imports/image-19.png';
import bannerClientes from '../../imports/banner-clientes.jpg';
import entrega from '../../imports/entrega-domicilio.png';

const tipos = [
  {
    title: 'Bares y lounges',
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
    title: 'Eventos',
    description:
      'Volumen planificado, entregas puntuales y producto homogéneo en toda la jornada.',
    image:
      'https://images.unsplash.com/photo-1758552013326-01b93dd12c3e?w=1200&q=80',
  },
  {
    title: 'Hogares',
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
          'Trabajamos con bares, restaurantes, familias y eventos. El compromiso es el mismo: producto bajo registro y servicio con trazabilidad.',
        ]}
        image={bannerClientes}
        imageAlt="Servicio de bebidas y hielo en bar"
        textSide="left"
        imageLoading="eager"
        imageFetchPriority="high"
      />

      <ServiceIconsStrip
        title="Mismo criterio en cada tipo de local"
        body="Bares, cocinas, salones o casa: el agua e hielo salen de la misma planta, con"
        bodyHighlight="muestra y ficha, no con versión 'especial' según a quién facturamos"
        items={[
          { icon: Building2, label: 'Bares y horeca' },
          { icon: UtensilsCrossed, label: 'Restaurantes' },
          { icon: PartyPopper, label: 'Eventos' },
          { icon: Home, label: 'Hogar' },
        ]}
      />

      <SectionSlide
        eyebrow="Cerca del cliente"
        title="Entrega"
        titleAccent="a domicilio"
        description={[
          'Llevamos bidones y hielo con la misma ficha y el mismo cuidado, ya sea a un hogar o a un local.',
          'Buscamos que la interacción con el cliente se note cercana, puntual y transparente, como en un servicio a domicilio de confianza.',
        ]}
        image={entrega}
        imageAlt="Entrega a domicilio de agua"
        textSide="right"
        background="soft"
        compact
      />

      <SectionSlide
        compact
        eyebrow="Cobertura"
        title="Quiénes"
        titleAccent="nos eligen"
        description={[
          'Muchas relaciones nacen por recomendación. Nos interesa el cliente que repite, con el mismo estándar de agua e hielo en cada entrega.',
        ]}
        image={subuzDispenser}
        imageAlt="Dispensador y agua de mesa SUBUZ"
        textSide="left"
        background="white"
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
        title="Suma su local o su hogar a la ruta"
        body="Coordinación, volumen y ventanas de entrega: hablemos sin prometer lo que el lote no sostiene."
        icons={[Truck, Droplets, Package]}
      />

      <section className="border-t border-slate-200/80 bg-slate-50 py-16 md:py-20">
        <div className="subuz-page mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
            Mira el día a día
          </h2>
          <p className="mt-2 text-pretty text-slate-600 sm:text-base">
            En Instagram compartimos la planta, el equipo y momentos con clientes.
          </p>
          <a
            href="https://www.instagram.com/subuz_agua_y_hielo/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0066FF] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0052CC]"
          >
            <Instagram size={18} />
            @subuz_agua_y_hielo
          </a>
        </div>
      </section>
    </>
  );
}
