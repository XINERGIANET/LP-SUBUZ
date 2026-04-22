import { MessageCircle, Phone, ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function CTA() {
  return (
    <section id="contacto" className="py-32 relative overflow-hidden">
      {/* Elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF] via-[#0066FF] to-[#3385FF]">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE2YzAgMi4yMDktMS43OTEgNC00IDRzLTQtMS43OTEtNC00IDEuNzkxLTQgNC00IDQgMS43OTEgNCA0em0wIDI0YzAgMi4yMDktMS43OTEgNC00IDRzLTQtMS43OTEtNC00IDEuNzkxLTQgNC00IDQgMS43OTEgNCA0eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        </div>
      </div>

      {/* Animated circles */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"
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
        className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-2xl relative"
          >
            <MessageCircle size={48} className="text-[#0066FF]" />
            
            {/* Pulse rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-white"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-white"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>

          {/* Heading */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black text-white leading-tight"
            >
              ¡Tu Mejor Compañía!
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-black text-white/90 mt-4"
            >
              #MásGourmet
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Haz tu pedido ahora y recíbelo con <span className="font-black">Delivery GRATIS</span> en toda la ciudad de Chiclayo.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 bg-white text-[#0066FF] rounded-full font-black text-lg flex items-center gap-3 shadow-2xl relative overflow-hidden"
            >
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0066FF]/10 to-transparent"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              
              <MessageCircle size={24} />
              <span className="relative z-10">Pedir por WhatsApp</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform relative z-10" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 border-4 border-white text-white rounded-full font-black text-lg flex items-center gap-3 backdrop-blur-sm"
            >
              <Phone size={24} />
              Llamar Ahora
            </motion.button>
          </motion.div>

          {/* Contact Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="pt-8 space-y-4"
          >
            <div className="flex flex-wrap justify-center gap-6 text-white">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/30"
              >
                <div className="w-3 h-3 bg-[#25D366] rounded-full animate-pulse"></div>
                <Phone size={20} />
                <span className="font-black text-lg">920 488 526</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border-2 border-white/30"
              >
                <div className="w-3 h-3 bg-[#25D366] rounded-full animate-pulse"></div>
                <Phone size={20} />
                <span className="font-black text-lg">920 381 594</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { title: 'Delivery Gratis', subtitle: 'En toda la ciudad', icon: MapPin },
              { title: '100% Purificada', subtitle: 'Calidad garantizada', icon: MessageCircle },
              { title: 'Servicio Rápido', subtitle: 'Atención inmediata', icon: Phone },
            ].map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                className="flex flex-col items-center gap-2 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/30 relative overflow-hidden group"
              >
                <badge.icon className="text-white mb-2" size={32} />
                <div className="text-white font-black text-lg">{badge.title}</div>
                <div className="text-white/80 text-sm">{badge.subtitle}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4 }}
            className="pt-8 text-white/80"
          >
            <p className="text-sm">
              Atendemos toda la ciudad de Chiclayo y alrededores
              <br />
              Pagos en efectivo, transferencia o Yape
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}