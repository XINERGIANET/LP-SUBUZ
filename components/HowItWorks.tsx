'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Clock, Truck, Check } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: MessageCircle,
      title: 'Contacta con SUBUZ',
      description: 'Envía un mensaje por WhatsApp con tu pedido o consulta. Nuestro equipo responde al instante.',
      time: '< 2 min'
    },
    {
      number: '02',
      icon: Clock,
      title: 'Confirmamos tu Orden',
      description: 'Verificamos disponibilidad, cantidad y detalles de entrega en tu ubicación exacta.',
      time: '5 min'
    },
    {
      number: '03',
      icon: Truck,
      title: 'Entrega Express',
      description: 'Nuestro equipo se moviliza para entregar dentro de 2 horas en Chiclayo. Máximo confiable.',
      time: '< 2h'
    },
    {
      number: '04',
      icon: Check,
      title: 'Satisfacción Completa',
      description: 'Recibe tu pedido perfecto. Soporte 24/7 si necesitas algo más. Garantía de calidad.',
      time: 'Garantizado'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black/40 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-luxury">Cómo</span>
            <br />
            <span className="text-premium">Funciona</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proceso sencillo, rápido y 100% confiable. Desde tu pedido hasta tu puerta en minutos.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative group"
              >
                {/* Connector line for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-full w-4 h-1 bg-gradient-to-r from-cyan-400 to-transparent pointer-events-none" />
                )}

                {/* Card */}
                <div className="premium-glow p-8 rounded-2xl h-full flex flex-col hover-luxury">
                  {/* Step number */}
                  <div className="text-5xl font-bold text-cyan-400/30 mb-4">{step.number}</div>

                  {/* Icon */}
                  <div className="p-4 rounded-lg bg-cyan-500/10 w-fit mb-6 group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="w-8 h-8 text-cyan-400 icon-premium" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-6">
                    {step.description}
                  </p>

                  {/* Time badge */}
                  <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-bold">
                    {step.time}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-300 mb-8">Listo para experimentar lo mejor en hielo y agua premium?</p>
          <motion.a
            href="https://wa.me/51912345678?text=Hola%20SUBUZ%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold btn-premium"
          >
            Pedir Ahora por WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export { HowItWorks }
