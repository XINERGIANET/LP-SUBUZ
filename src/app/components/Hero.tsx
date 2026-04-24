import { ArrowDown, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import subuzProducts from '../../imports/image-15.png';
import { WordReveal } from './ui/WordReveal';
import { Magnetic } from './ui/Magnetic';

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-[#E6F2FF]">
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-2 bg-white border-2 border-[#0066FF]/30 rounded-full text-[#0066FF] text-xs sm:text-sm font-bold shadow-lg"
            >
              <Sparkles size={16} />
              ¡Tu Mejor Compañía desde 2022!
            </motion.div>
 
            {/* Main Heading */}
            <h1 className="w-full flex flex-col items-center lg:items-start space-y-1 md:space-y-3">
              <WordReveal 
                text="AGUA" 
                className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-tight justify-center lg:justify-start w-full text-center"
                delay={0.2}
              />
              <WordReveal 
                text="PURIFICADA" 
                className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-[#0066FF] justify-center lg:justify-start w-full text-center"
                delay={0.4}
              />
              <WordReveal 
                text="& HIELO GOURMET" 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] leading-tight justify-center lg:justify-start w-full text-center"
                delay={0.6}
              />
            </h1>

            {/* Hashtag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl font-bold text-[#0066FF]"
            >
              #MásGourmet
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-base sm:text-lg md:text-xl text-[#666666] leading-relaxed"
            >
              Purificada, ozonizada y con estándares internacionales.
              <br />
              <span className="font-bold text-[#0066FF]">Delivery GRATIS</span> en Chiclayo.
            </motion.p>

            {/* Subtitle - More institutional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col gap-4 pt-4"
            >
              <div className="text-base md:text-lg text-[#666666] leading-relaxed max-w-2xl">
                Desde 2022, nos dedicamos a ofrecer agua y hielo de la más alta calidad,
                con procesos certificados y un compromiso genuino con nuestros clientes.
              </div>
            </motion.div>

            {/* Brand Values */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 text-[#666666]"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#0066FF] rounded-full"></div>
                <span className="text-sm font-bold text-[#1A1A1A]">100% Purificada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#0066FF] rounded-full"></div>
                <span className="text-sm font-bold text-[#1A1A1A]">Calidad Certificada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#0066FF] rounded-full"></div>
                <span className="text-sm font-bold text-[#1A1A1A]">Chiclayo</span>
              </div>
            </motion.div>
          </div>

          {/* Right - Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative z-0 mt-8 lg:mt-0"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex items-center justify-center"
            >
              <img
                src={subuzProducts}
                alt="SUBUZ Agua Purificada y Hielo Gourmet"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl rounded-3xl mx-auto"
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="absolute top-1/4 left-2 sm:-left-4 lg:left-0 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl border-2 border-[#0066FF]/20 z-10"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#0066FF] leading-none">100%</div>
              <div className="text-xs sm:text-sm text-[#666666] font-bold mt-1">Purificada</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="absolute bottom-1/4 right-2 sm:-right-4 lg:right-0 bg-[#0066FF] px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl z-10"
            >
              <div className="text-2xl sm:text-3xl font-black text-white leading-none">1.5kg</div>
              <div className="text-xs sm:text-sm text-white/90 font-bold mt-1">Hielo</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 pt-12 md:pt-20 max-w-3xl mx-auto"
        >
          {[
            { value: "2000+", label: "Clientes Felices" },
            { value: "Delivery", label: "GRATIS" },
            { value: "24/7", label: "Disponible" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center bg-white p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl shadow-lg border-2 border-[#0066FF]/10"
            >
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#0066FF] leading-none mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm text-[#666666] font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA link to Productos */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Magnetic>
          <Link to="/productos" aria-label="Ver productos" className="p-4 cursor-pointer inline-flex">
            <ArrowDown className="text-[#0066FF]" size={32} />
          </Link>
        </Magnetic>
      </motion.div>
    </section>
  );
}