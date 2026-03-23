'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'

const ServiceCoverage = () => {
  const zones = [
    { name: 'Centro Chiclayo', coverage: '100%', delivery: '< 30 min' },
    { name: 'Urbanizaciones', coverage: '100%', delivery: '< 45 min' },
    { name: 'Áreas Periféricas', coverage: '95%', delivery: '< 60 min' },
    { name: 'Eventos Especiales', coverage: 'Consultar', delivery: 'Flexible' }
  ]

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-luxury">Cobertura</span>
            <br />
            <span className="text-premium">en Toda la Ciudad</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Estamos presentes en todas las zonas de Chiclayo con entrega rápida y confiable
          </p>
        </motion.div>

        {/* Coverage Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {zones.map((zone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="premium-glow p-6 rounded-xl text-center hover-luxury h-full">
                <div className="flex justify-center mb-4">
                  <MapPin className="w-8 h-8 text-cyan-400 icon-premium" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{zone.name}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">COBERTURA</p>
                    <p className="text-2xl font-bold text-cyan-400">{zone.coverage}</p>
                  </div>
                  <div className="pt-3 border-t border-cyan-400/20">
                    <p className="text-xs text-gray-400 mb-1">ENTREGA PROMEDIO</p>
                    <p className="text-sm font-semibold text-gray-200">{zone.delivery}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-premium p-8 rounded-2xl"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: 'Teléfono',
                value: '+51 912 345 678',
                action: 'Llamar'
              },
              {
                icon: Clock,
                title: 'Horario',
                value: 'Disponible 24/7',
                action: 'Consultar'
              },
              {
                icon: MapPin,
                title: 'Ubicación',
                value: 'Chiclayo, Perú',
                action: 'Ver Mapa'
              }
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3 icon-premium" />
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.value}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-400 font-semibold text-sm hover:bg-cyan-500/30 transition-colors"
                  >
                    {item.action}
                  </motion.button>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export { ServiceCoverage }
