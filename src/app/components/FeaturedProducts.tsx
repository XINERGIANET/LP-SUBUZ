import { motion } from 'motion/react';
import { Droplet, Snowflake, CheckCircle, Star, Award } from 'lucide-react';
import hieloGourmet from '../../imports/image-8.png';
import aguaBidon from '../../imports/image-21.png';

const features = [
  { icon: CheckCircle, text: '100% Certificado' },
  { icon: Star, text: 'Calidad Premium' },
  { icon: Award, text: 'Delivery GRATIS' },
];

export function FeaturedProducts() {
  return (
    <section id="productos" className="py-16 md:py-32 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="px-6 py-2 bg-gradient-to-r from-[#0066FF]/10 to-[#3385FF]/10 border border-[#0066FF]/20 rounded-full text-[#0066FF] text-sm font-bold uppercase tracking-wider">
              Productos Premium
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] mb-4 md:mb-6 px-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Nuestra <span className="text-transparent bg-gradient-to-r from-[#0066FF] to-[#3385FF] bg-clip-text">Selección</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed"
          >
            Conoce nuestros productos emblemáticos: agua purificada con 7 niveles de filtración
            e hielo gourmet cristalino, elaborados con los más altos estándares de calidad.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Agua Purificada */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <motion.div
              whileHover={{ y: -10 }}
              className="relative bg-white rounded-3xl p-8 border-2 border-[#E5E7EB] hover:border-[#0066FF]/30 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {/* Product Badge */}
              <div className="absolute top-6 right-6 z-10">
                <div className="px-4 py-2 bg-[#0066FF] text-white text-sm font-black rounded-full shadow-lg">
                  PRODUCTO ESTRELLA
                </div>
              </div>

              {/* Product Image */}
              <div className="relative h-96 mb-6 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <img
                    src={aguaBidon}
                    alt="SUBUZ Agua Purificada 20L"
                    className="max-w-full max-h-full object-contain drop-shadow-2xl"
                  />
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF] flex items-center justify-center shadow-lg">
                    <Droplet className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#1A1A1A]">Agua Purificada</h3>
                    <p className="text-[#0066FF] font-bold">SUBUZ Premium</p>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  Bidón de 20 litros de agua purificada, ozonizada y con 7 niveles de filtración. 
                  Sin gas, pH balanceado y certificación sanitaria completa.
                </p>

                <div className="space-y-2">
                  {[
                    '✓ Purificada 7 veces',
                    '✓ Ozonizada para mayor pureza',
                    '✓ pH balanceado',
                    '✓ Certificación sanitaria',
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#666666] text-sm">
                      <div className="w-1.5 h-1.5 bg-[#0066FF] rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Quality badge */}
                <div className="flex items-center gap-2 mt-4 p-4 bg-[#0066FF]/5 rounded-2xl border border-[#0066FF]/10">
                  <CheckCircle className="text-[#0066FF]" size={20} />
                  <span className="text-sm font-bold text-[#0066FF]">Certificado por DIGESA</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hielo Gourmet */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <motion.div
              whileHover={{ y: -10 }}
              className="relative bg-white rounded-3xl p-8 border-2 border-[#E5E7EB] hover:border-[#0066FF]/30 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {/* Product Badge */}
              <div className="absolute top-6 right-6 z-10">
                <div className="px-4 py-2 bg-[#0066FF] text-white text-sm font-black rounded-full shadow-lg">
                  MÁS GOURMET
                </div>
              </div>

              {/* Product Image */}
              <div className="relative h-96 mb-6 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <img
                    src={hieloGourmet}
                    alt="SUBUZ Hielo Gourmet 1.5kg"
                    className="max-w-full max-h-full object-contain drop-shadow-2xl"
                  />
                </motion.div>

                {/* Size Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="absolute bottom-4 left-4 bg-white px-6 py-3 rounded-2xl shadow-xl border-2 border-[#0066FF]/20"
                >
                  <div className="text-3xl font-black text-[#0066FF]">1.5kg</div>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0066FF] flex items-center justify-center shadow-lg">
                    <Snowflake className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-[#1A1A1A]">Hielo Gourmet</h3>
                    <p className="text-[#0066FF] font-bold">SUBUZ Premium</p>
                  </div>
                </div>

                <p className="text-[#666666] leading-relaxed">
                  Bolsa de 1.5 kg de hielo gourmet cristalino. Agua de mesa filtrada y purificada. 
                  Ideal para bebidas premium, cócteles y eventos.
                </p>

                <div className="space-y-2">
                  {[
                    '✓ 100% cristalino',
                    '✓ Sin sabor residual',
                    '✓ Larga duración',
                    '✓ Pureza garantizada',
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[#666666] text-sm">
                      <div className="w-1.5 h-1.5 bg-[#0066FF] rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Quality badge */}
                <div className="flex items-center gap-2 mt-4 p-4 bg-[#0066FF]/5 rounded-2xl border border-[#0066FF]/10">
                  <Star className="text-[#0066FF]" size={20} />
                  <span className="text-sm font-bold text-[#0066FF]">Preferido por restaurantes y bares</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0066FF] to-[#3385FF] rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30"
                >
                  <feature.icon className="text-white" size={32} />
                </motion.div>
                <h4 className="text-xl font-black text-white">{feature.text}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}