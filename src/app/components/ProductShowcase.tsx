import { motion } from 'motion/react';
import { Droplet, Snowflake, CheckCircle, Sparkles } from 'lucide-react';
import subuzProducts from '../../imports/image-7.png';

export function ProductShowcase() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#E6F2FF] via-white to-[#F5F8FA] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-[#3385FF]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative flex items-center justify-center"
            >
              <img
                src={subuzProducts}
                alt="SUBUZ Agua Purificada y Hielo Gourmet"
                className="w-full max-w-md h-auto object-contain drop-shadow-2xl relative z-10"
              />
            </motion.div>

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring" }}
              className="absolute -top-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-2xl border-2 border-[#0066FF]/20"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="text-[#25D366]" size={32} />
                <div>
                  <div className="text-xl font-black text-[#0066FF]">100%</div>
                  <div className="text-xs text-[#666666] font-bold">Certificado</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring" }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#0066FF] to-[#3385FF] px-6 py-4 rounded-2xl shadow-2xl"
            >
              <div className="text-center">
                <div className="text-2xl font-black text-white">20L + 1.5kg</div>
                <div className="text-xs text-white/90 font-bold">Combo Premium</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#0066FF]/30 rounded-full text-[#0066FF] text-sm font-bold mb-6 shadow-lg">
                <Sparkles size={16} />
                Productos SUBUZ
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-[#1A1A1A] mb-6 leading-tight">
                Agua Pura & <br />
                <span className="text-[#0066FF]">Hielo Gourmet</span>
              </h2>
              
              <p className="text-xl text-[#666666] leading-relaxed">
                Nuestros productos estrella: bidones de <span className="font-bold text-[#0066FF]">20 litros de agua purificada</span> y 
                <span className="font-bold text-[#0066FF]"> hielo gourmet de 1.5kg</span>, listos para tu hogar o negocio.
              </p>
            </motion.div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#0066FF]/10 hover:border-[#0066FF]/30 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#3385FF] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Droplet className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-black text-[#1A1A1A] mb-2">Agua Premium</h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  Purificada 7 veces, ozonizada y con pH balanceado para tu salud.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#0066FF]/10 hover:border-[#0066FF]/30 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#3385FF] rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <Snowflake className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-black text-[#1A1A1A] mb-2">Hielo Gourmet</h3>
                <p className="text-[#666666] text-sm leading-relaxed">
                  Cristalino, puro y sin sabor residual. Perfecto para cualquier bebida.
                </p>
              </motion.div>
            </div>

            {/* Quality badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {[
                '✓ Certificado Sanitario',
                '✓ Delivery GRATIS',
                '✓ Estándares Internacionales',
                '✓ Calidad Garantizada',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-[#0066FF]/10 text-[#0066FF] rounded-full text-sm font-bold border border-[#0066FF]/20"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 102, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#0066FF] text-white rounded-full font-bold text-lg shadow-xl flex items-center gap-2"
              >
                Pedir Combo Ahora
                <CheckCircle size={20} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}