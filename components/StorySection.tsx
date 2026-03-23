'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const steps = [
  {
    number: '01',
    title: 'Agua Pura',
    description: 'Seleccionamos agua de las mejores fuentes con minerales equilibrados',
  },
  {
    number: '02',
    title: 'Filtración Avanzada',
    description: 'Proceso de filtración multinivel que elimina todas las impurezas',
  },
  {
    number: '03',
    title: 'Ozonización',
    description: 'Desinfección natural con ozono para máxima pureza sin químicos',
  },
  {
    number: '04',
    title: 'Congelamiento Perfecto',
    description: 'Técnicas especiales que garantizan hielo cristalino y duradero',
  },
  {
    number: '05',
    title: 'Entrega Inmediata',
    description: 'Desde nuestra planta a tu puerta en tiempo récord',
  },
]

export function StorySection() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Desde el agua...
            </span>
            <br />
            <span className="text-white">hasta el hielo perfecto</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden premium-shadow"
          >
            <Image
              src="/images/product-1.jpg"
              alt="Water purification process"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>

          {/* Right: Steps */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 group"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-bold group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-shadow duration-300">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
