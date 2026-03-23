'use client'

import { motion } from 'framer-motion'
import { Sparkles, Shield, Zap, Crown, Leaf, Award } from 'lucide-react'

export function PrestigeSection() {
  const features = [
    {
      icon: Crown,
      title: 'Calidad Suprema',
      description: 'Filtración de 7 capas y ozonización completa para pureza excepcional'
    },
    {
      icon: Sparkles,
      title: 'Claridad Cristalina',
      description: 'Transparencia perfecta sin impurezas, ideal para cócteles premium'
    },
    {
      icon: Shield,
      title: 'Garantía Premium',
      description: 'Garantía de satisfacción 100% y servicio de atención prioritario'
    },
    {
      icon: Zap,
      title: 'Entrega Veloz',
      description: 'Servicio express en Chiclayo, disponible 24/7 para tus eventos'
    },
    {
      icon: Award,
      title: 'Reconocimiento',
      description: 'Elegido por los mejores bares, restaurantes y chefs de Perú'
    },
    {
      icon: Leaf,
      title: 'Eco-Responsable',
      description: 'Proceso amigable con el ambiente, sostenible y ético'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-premium-gradient overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full h-96 bg-gradient-to-b from-cyan-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300">LUJO Y EXCELENCIA</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            <span className="text-luxury">Lo que nos hace</span>
            <br />
            <span className="text-premium block mt-2">el Mejor en Perú</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Cada aspecto de SUBUZ está diseñado con perfección obsesiva. Desde la pureza del agua hasta el servicio personalizado, no hay compromiso.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group premium-glow rounded-2xl p-8 hover-luxury cursor-pointer"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6 inline-flex w-fit">
                    <div className="p-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 group-hover:from-cyan-500/30 group-hover:to-cyan-500/10 transition-all duration-300">
                      <Icon className="w-6 h-6 text-cyan-400 icon-premium" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed flex-grow">
                    {feature.description}
                  </p>

                  <div className="mt-6 pt-4 divider-premium opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="text-xs text-cyan-400 font-semibold mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    ESTÁNDAR PREMIUM
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 text-center"
        >
          <p className="text-gray-400 mb-6">
            Experiencia Premium disponible exclusivamente en Chiclayo
          </p>
          <a
            href="https://wa.me/1234567890?text=Hola%20SUBUZ%20quiero%20conocer%20m%C3%A1s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold btn-premium"
          >
            <Crown className="w-5 h-5" />
            Acceso Premium
          </a>
        </motion.div>
      </div>
    </section>
  )
}
