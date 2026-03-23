'use client'

import { motion } from 'framer-motion'
import { Sparkles, Zap, Award, TrendingUp } from 'lucide-react'

export function PremiumFeaturesShowcase() {
  const features = [
    {
      icon: Sparkles,
      title: 'Filtración Avanzada',
      description: '7 capas de filtración + ozonización elimina 99.99% de impurezas',
      color: 'from-cyan-500/20 to-cyan-600/20'
    },
    {
      icon: Zap,
      title: 'Tecnología Última Generación',
      description: 'Equipos de purificación de última generación importados',
      color: 'from-blue-500/20 to-blue-600/20'
    },
    {
      icon: Award,
      title: 'Certificaciones Internacionales',
      description: 'Cumple ISO 9001, HACCP y estándares de calidad global',
      color: 'from-violet-500/20 to-violet-600/20'
    },
    {
      icon: TrendingUp,
      title: 'Crecimiento Sostenible',
      description: 'Comprometidos con prácticas ecológicas y responsables',
      color: 'from-green-500/20 to-green-600/20'
    }
  ]

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-6">
            <span className="block text-luxury mb-3">¿Por qué SUBUZ</span>
            <span className="text-premium">es la opción premium?</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              {/* Content */}
              <div className="relative p-8 rounded-2xl border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-sm">
                {/* Icon */}
                <div className="mb-4 inline-flex p-3 rounded-xl bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 text-center p-8 rounded-2xl glass-premium border border-cyan-500/20"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Cada vaso de agua, cada copa con hielo de SUBUZ garantiza que experimentes calidad de nivel internacional. 
            No es solo un producto, es un <span className="text-cyan-400 font-semibold">compromiso con tu satisfacción</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
