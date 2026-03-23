'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Wine, UtensilsCrossed, Sparkles, Home } from 'lucide-react'

const clients = [
  {
    icon: Wine,
    title: 'Bares y Lounges',
    description: 'Hielo premium que complementa cada bebida con elegancia',
    image: '/images/client-bar.jpg',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurantes',
    description: 'Servicio confiable para eventos y servicio diario',
    image: '/images/client-restaurant.jpg',
  },
  {
    icon: Sparkles,
    title: 'Eventos Corporativos',
    description: 'Soluciones personalizadas para tus eventos especiales',
    image: '/images/client-event.jpg',
  },
  {
    icon: Home,
    title: 'Hogares Premium',
    description: 'Para aquellos que aprecian la calidad en todos los detalles',
    image: '/images/client-home.jpg',
  },
]

export function ClientsSection() {
  return (
    <section id="clientes" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
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
            <span className="text-white">Clientes que</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              confían en nosotros
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Desde bares hasta hogares premium, SUBUZ es la elección de los que exigen lo mejor
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => {
            const Icon = client.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className="group relative overflow-hidden rounded-2xl h-72 cursor-pointer"
              >
                {/* Image Background */}
                <Image
                  src={client.image}
                  alt={client.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="mb-3 inline-flex p-2 rounded-lg bg-cyan-500/20 w-fit group-hover:bg-cyan-500/30 transition-colors">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {client.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {client.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
