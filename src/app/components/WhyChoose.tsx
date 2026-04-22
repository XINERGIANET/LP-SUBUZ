import { Shield, Zap, Droplet, MessageCircle, Award, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';

const reasons = [
  {
    icon: Shield,
    title: '100% Purificada',
    description: 'Agua filtrada 7 veces y ozonizada. Pureza absoluta garantizada con certificación sanitaria.',
  },
  {
    icon: Zap,
    title: 'Delivery GRATIS',
    description: 'Entrega gratuita en toda la ciudad de Chiclayo. Rápido y sin costos adicionales.',
  },
  {
    icon: Droplet,
    title: 'Hielo Gourmet',
    description: 'Hielo cristalino que no altera el sabor. Ideal para cócteles y bebidas premium.',
  },
  {
    icon: MessageCircle,
    title: 'Atención Personalizada',
    description: 'Servicio amable y profesional. Disponible para resolver todas tus consultas.',
  },
  {
    icon: Award,
    title: 'Calidad Premium',
    description: 'Estándares internacionales de calidad. La elección de restaurantes y bares.',
  },
  {
    icon: CheckCircle,
    title: 'Servicio 24/7',
    description: 'Disponible todos los días para tus necesidades. Siempre listos para atenderte.',
  },
];

export function WhyChoose() {
  return (
    <section id="beneficios" className="py-16 md:py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] mb-4 md:mb-6 px-4"
          >
            ¿Por qué elegir <span className="text-[#0066FF]">SUBUZ?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#666666] max-w-3xl mx-auto"
          >
            Somos la mejor compañía para tu hidratación y frescura.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white p-8 rounded-3xl border-2 border-[#E5E7EB] hover:border-[#0066FF]/30 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 rounded-2xl bg-[#0066FF] flex items-center justify-center mb-4 shadow-lg"
              >
                <reason.icon className="text-white" size={32} />
              </motion.div>
              <h3 className="text-2xl font-black text-[#1A1A1A] mb-3 group-hover:text-[#0066FF] transition-colors">
                {reason.title}
              </h3>
              <p className="text-[#666666] leading-relaxed">
                {reason.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0066FF]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Feature Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-[#0066FF] to-[#3385FF] rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
              #MásGourmet
            </h3>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Certificados en filtración avanzada, ozonización y estándares internacionales. 
              Cada producto es un compromiso de calidad que llega a tu hogar o negocio.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
