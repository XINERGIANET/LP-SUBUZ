import { motion } from 'motion/react';
import { Target, Eye, Heart } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Misión',
    description:
      'Proveer a las familias y negocios de Chiclayo agua y hielo de la más alta calidad, elaborados con tecnología de punta y procesos certificados que garanticen pureza, frescura y confianza en cada entrega.',
    gradient: 'from-[#0066FF] to-[#3385FF]',
  },
  {
    icon: Eye,
    title: 'Visión',
    description:
      'Ser la empresa líder en la región, reconocida por nuestra excelencia en calidad, innovación continua y compromiso con el bienestar de nuestra comunidad, estableciendo el estándar más alto en la industria del agua y hielo gourmet.',
    gradient: 'from-[#3385FF] to-[#0066FF]',
  },
  {
    icon: Heart,
    title: 'Valores',
    description:
      'Calidad sin compromisos, transparencia en nuestros procesos, responsabilidad social con Chiclayo, innovación constante y un servicio excepcional que nos convierte en tu mejor compañía.',
    gradient: 'from-[#0066FF] to-[#3385FF]',
  },
];

export function OurMission() {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] mb-4 md:mb-6 px-4"
          >
            Nuestro <span className="text-[#0066FF]">Propósito</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed"
          >
            Más allá de ser proveedores, somos una empresa con valores claros y un compromiso
            profundo con la calidad y nuestra comunidad
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="h-full p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-white border-2 border-[#E5E7EB] hover:border-[#0066FF]/30 shadow-md hover:shadow-lg transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 rounded-2xl bg-[#0066FF] flex items-center justify-center mb-6 shadow-lg"
                >
                  <pillar.icon className="text-white" size={40} />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-black text-[#1A1A1A] mb-3 md:mb-4 group-hover:text-[#0066FF] transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-[#666666] leading-relaxed text-sm md:text-base lg:text-lg">
                  {pillar.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
