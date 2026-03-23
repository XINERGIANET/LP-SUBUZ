'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Phone, MapPin } from 'lucide-react'

export function CTASection() {
  return (
    <section id="contacto" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            <span className="text-white">Haz tu pedido</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              ahora mismo
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            No esperes más. Contáctanos hoy y experimenta la diferencia que hace el hielo premium
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-6 mb-12"
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/51912345678?text=Hola%20SUBUZ%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl glass-effect hover:glass-effect-dark hover:border-cyan-400/50 transition-all duration-300 flex flex-col items-center"
          >
            <div className="p-3 rounded-xl bg-green-500/20 group-hover:bg-green-500/30 transition-colors mb-4">
              <MessageCircle className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-400 text-sm">Mensaje instantáneo</p>
          </a>

          {/* Phone */}
          <a
            href="tel:+51912345678"
            className="group p-6 rounded-2xl glass-effect hover:glass-effect-dark hover:border-cyan-400/50 transition-all duration-300 flex flex-col items-center"
          >
            <div className="p-3 rounded-xl bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors mb-4">
              <Phone className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Llamada</h3>
            <p className="text-gray-400 text-sm">+51 912 345 678</p>
          </a>

          {/* Location */}
          <div className="group p-6 rounded-2xl glass-effect hover:glass-effect-dark transition-all duration-300 flex flex-col items-center">
            <div className="p-3 rounded-xl bg-red-500/20 group-hover:bg-red-500/30 transition-colors mb-4">
              <MapPin className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="font-semibold text-white mb-2">Ubicación</h3>
            <p className="text-gray-400 text-sm">Chiclayo, Perú</p>
          </div>
        </motion.div>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.me/51912345678?text=Hola%20SUBUZ%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-semibold transition-all duration-300 transform hover:scale-105 glow-ice"
          >
            Envíame un mensaje por WhatsApp
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-gray-500 text-sm"
        >
          Respuesta garantizada en menos de 30 minutos • Disponible 24/7
        </motion.p>
      </div>
    </section>
  )
}
