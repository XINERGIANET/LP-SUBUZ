import { motion } from 'motion/react';
import { Droplets, Shield, Sparkles, Truck } from 'lucide-react';

const processSteps = [
  {
    icon: Droplets,
    number: '01',
    title: 'Purificación',
    description: 'Proceso de purificación con tecnología de punta que elimina impurezas y garantiza agua cristalina.',
    color: 'from-[#0066FF] to-[#3385FF]',
  },
  {
    icon: Shield,
    number: '02',
    title: 'Ozonización',
    description: 'Tratamiento con ozono que asegura la eliminación de microorganismos y mantiene la frescura.',
    color: 'from-[#3385FF] to-[#0066FF]',
  },
  {
    icon: Sparkles,
    number: '03',
    title: 'Control de Calidad',
    description: 'Rigurosas pruebas de laboratorio y certificación sanitaria en cada lote producido.',
    color: 'from-[#0066FF] to-[#3385FF]',
  },
  {
    icon: Truck,
    number: '04',
    title: 'Entrega',
    description: 'Distribución con delivery gratis, manteniendo la cadena de calidad hasta tu puerta.',
    color: 'from-[#3385FF] to-[#0066FF]',
  },
];

export function OurProcess() {
  return (
    <section id="proceso" className="py-16 md:py-32 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] mb-4 md:mb-6 px-4"
          >
            Nuestro <span className="text-[#0066FF]">Proceso</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed"
          >
            Cada gota de agua y cada cubo de hielo pasa por un meticuloso proceso
            que garantiza la máxima calidad y pureza
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative group"
            >
              {/* Connecting line (except for last item) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-1 bg-gradient-to-r from-[#0066FF]/30 to-transparent -z-10"></div>
              )}

              <div className="relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border-2 border-[#E5E7EB] hover:border-[#0066FF]/30 shadow-md hover:shadow-lg transition-all duration-300">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-[#0066FF] flex items-center justify-center font-black text-white shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 rounded-2xl bg-[#0066FF] flex items-center justify-center mb-6 shadow-lg"
                >
                  <step.icon className="text-white" size={40} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-black text-[#1A1A1A] mb-3 md:mb-4 group-hover:text-[#0066FF] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-[#666666] leading-relaxed">
                  {step.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 rounded-3xl bg-white border-4 border-[#0066FF]/20 shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="text-[#0066FF]" size={32} />
              <h3 className="text-3xl font-black text-[#0066FF]">Certificación Sanitaria</h3>
            </div>
            <p className="text-[#666666] text-lg max-w-2xl">
              Todos nuestros productos cumplen con las normativas sanitarias nacionales
              e internacionales, garantizando seguridad y calidad en cada entrega.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
