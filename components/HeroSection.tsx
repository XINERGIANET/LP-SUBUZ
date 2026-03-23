'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: 'easeOut'
      }
    })
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20" />

      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-ice.jpg"
          alt="Premium ice background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
      </motion.div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-8xl font-black tracking-tight sm:tracking-tighter mb-8 leading-tight">
            <motion.span
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="block text-luxury mb-3"
            >
              PUREZA
            </motion.span>
            <motion.span
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-premium block mb-3"
            >
              CRISTALINA
            </motion.span>
            <motion.span
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="block text-white"
            >
              EN CADA SORBO
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          custom={3}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-base sm:text-lg lg:text-xl text-gray-300 mb-12 max-w-3xl mx-auto px-2 leading-relaxed"
        >
          Desde 2022, SUBUZ es sinónimo de excelencia. Hielo gourmet ozonizado, agua purificada con estándares internacionales. 
          <br className="hidden sm:block" />
          La elección de bares, restaurantes y eventos premium en Chiclayo.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={4}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4"
        >
          <motion.a
            href="https://wa.me/51912345678?text=Hola%20SUBUZ%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 sm:px-12 py-4 sm:py-5 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300 text-black font-black text-base sm:text-lg btn-premium shadow-lg"
          >
            Pedir Ahora
          </motion.a>
          <motion.button
            onClick={() => {
              document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.08, borderColor: '#00d4ff' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 sm:px-12 py-4 sm:py-5 rounded-full border-2 border-cyan-400/60 hover:border-cyan-400 text-white hover:bg-cyan-400/15 font-bold text-base sm:text-lg transition-smooth btn-premium"
          >
            Conoce Más
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-gray-400 text-sm mb-2">Desplázate para más</span>
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
