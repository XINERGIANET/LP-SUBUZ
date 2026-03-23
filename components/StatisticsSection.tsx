'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from './AnimatedCounter'

export function StatisticsSection() {
  const stats = [
    {
      value: 2500,
      label: 'Clientes Satisfechos',
      suffix: '+',
      icon: '👥'
    },
    {
      value: 50000,
      label: 'Litros Entregados',
      suffix: 'L',
      icon: '💧'
    },
    {
      value: 99,
      label: 'Pureza Garantizada',
      suffix: '%',
      icon: '✨'
    },
    {
      value: 24,
      label: 'Horas de Servicio',
      suffix: '/7',
      icon: '⏰'
    }
  ]

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none" />
      
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
            <span className="block text-luxury mb-3">Números que hablan</span>
            <span className="text-premium">por nosotros</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Desde nuestro inicio, hemos mantenido estándares de excelencia sin compromisos
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="premium-glow rounded-2xl p-8 text-center hover-luxury"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
              />
              <p className="text-gray-300 mt-4 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="divider-premium my-16 sm:my-20"
        />

        {/* Trust statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Certificado en filtración avanzada, ozonización y estándares internacionales. 
            Cada producto es verificado con rigor científico antes de llegar a tus manos.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
