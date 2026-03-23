'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Zap, Award, Heart, Clock } from 'lucide-react'

const benefits = [
  {
    icon: CheckCircle2,
    title: '100% Filtrado y Ozonizado',
    description: 'Pureza absoluta con los estándares más altos de calidad',
  },
  {
    icon: Zap,
    title: 'Entrega Rápida en Chiclayo',
    description: 'Servicio mismo día en toda la zona urbana',
  },
  {
    icon: Award,
    title: 'Registro Sanitario Certificado',
    description: 'Cumple con todas las normas de salud y seguridad',
  },
  {
    icon: Heart,
    title: 'Calidad Constante',
    description: 'Hielo cristalino que no altera el sabor de tus bebidas',
  },
  {
    icon: Clock,
    title: 'Atención Diaria',
    description: 'Disponible 7 días a la semana para tus necesidades',
  },
]

export function BenefitsSection() {
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="beneficios" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
            <span className="text-white">¿Por qué elegir</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              SUBUZ?
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Somos más que hielo. Somos la garantía de experiencias premium
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group rounded-2xl p-6 glass-effect hover:glass-effect-dark transition-all duration-300 hover:border-cyan-400/50"
              >
                <div className="mb-4 inline-block p-3 rounded-xl bg-cyan-500/20 group-hover:bg-cyan-500/30 transition-colors">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
