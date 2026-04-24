import { motion } from 'motion/react';
import { Phone, MapPin, Clock, MessageCircle, Instagram, Headphones, Send } from 'lucide-react';
import { FullBleedSlide } from '../components/FullBleedSlide';
import { ServiceIconsStrip } from '../components/ServiceIconsStrip';
import { SubuzFaqSection } from '../components/SubuzFaqSection';
import { subuzFaqItems } from '../data/subuzFaq';
import bannerContacto from '../../imports/banner-contacto.jpg';

const detalles = [
  {
    icon: Phone,
    title: 'Teléfonos',
    lines: ['920 488 526', '920 381 594'],
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    lines: ['Chiclayo, Lambayeque', 'Atención en toda la ciudad'],
  },
  {
    icon: Clock,
    title: 'Horario',
    lines: ['Lunes a domingo', 'Servicio según ruta y pedido'],
  },
];

export function ContactoPage() {
  return (
    <>
      <FullBleedSlide
        headingLevel="h1"
        eyebrow="Atención"
        title="Contacto"
        titleAccent="SUBUZ"
        description={[
          'Puede contactarnos para consultar por producto, ruta de entrega, planta o registro sanitario. Atendemos con información clara y canales fijos de comunicación.',
        ]}
        image={bannerContacto}
        imageAlt="Equipo de atención"
        textSide="left"
        imageLoading="eager"
        imageFetchPriority="high"
      />

      <ServiceIconsStrip
        title="Canales abiertos, respuesta con criterio"
        body="Llamada, WhatsApp o Instagram: le orientamos con la misma ficha, sin derivar a un número distinto según el día."
        bodyHighlight="920 488 526"
        items={[
          { icon: Phone, label: 'Línea fija' },
          { icon: MessageCircle, label: 'WhatsApp' },
          { icon: Headphones, label: 'Seguimiento' },
          { icon: Send, label: 'Pedidos' },
        ]}
      />

      <section className="border-t border-slate-200/80 bg-slate-50 py-16 md:py-24">
        <div className="subuz-page mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {detalles.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="subuz-card rounded-2xl p-7"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0066FF] text-white">
                  <item.icon className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <h2 className="text-lg font-bold text-slate-900">{item.title}</h2>
                <div className="mt-2 space-y-1 text-sm text-slate-600">
                  {item.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="tel:920488526"
              className="inline-flex items-center gap-2 rounded-full bg-[#0066FF] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0052CC]"
            >
              <Phone className="h-4 w-4" />
              Llamar
            </a>
            <a
              href="https://wa.me/51920488526"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1ca855]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/subuz_agua_y_hielo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[#0066FF] bg-white px-5 py-2.5 text-sm font-semibold text-[#0066FF] transition hover:bg-[#0066FF] hover:text-white"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>
      </section>

      <SubuzFaqSection title="Preguntas frecuentes" items={subuzFaqItems} />
    </>
  );
}
