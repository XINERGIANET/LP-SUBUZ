import { Phone, MapPin, Clock, Mail } from 'lucide-react';
import { motion } from 'motion/react';

const contactDetails = [
  {
    icon: Phone,
    title: 'Teléfonos',
    details: ['920 488 526', '920 381 594'],
    color: 'from-[#0066FF] to-[#3385FF]',
  },
  {
    icon: MapPin,
    title: 'Ubicación',
    details: ['Chiclayo, Lambayeque', 'Cobertura en toda la ciudad'],
    color: 'from-[#3385FF] to-[#0066FF]',
  },
  {
    icon: Clock,
    title: 'Horario',
    details: ['Lunes a Domingo', 'Servicio disponible'],
    color: 'from-[#0066FF] to-[#3385FF]',
  },
];

export function ContactInfo() {
  return (
    <section id="contacto" className="py-16 md:py-24 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A1A1A] mb-4 px-4"
          >
            Estamos Para <span className="text-[#0066FF]">Servirte</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#666666] max-w-2xl mx-auto"
          >
            Contáctanos y conoce más sobre nuestros productos y servicios
          </motion.p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group p-8 rounded-3xl bg-white border-2 border-[#E5E7EB] hover:border-[#0066FF]/30 shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-2xl bg-[#0066FF] flex items-center justify-center mb-6 shadow-lg"
              >
                <item.icon className="text-white" size={32} />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-black text-[#1A1A1A] mb-4">{item.title}</h3>

              {/* Details */}
              <div className="space-y-2">
                {item.details.map((detail, i) => (
                  <p key={i} className="text-[#666666] leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#0066FF] to-[#3385FF] p-8 md:p-12 shadow-2xl">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center space-y-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white">
                #MásGourmet
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Pureza y calidad en cada producto que ofrecemos
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-6 text-white/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Agua Purificada</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Hielo Gourmet</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Delivery Gratis</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
