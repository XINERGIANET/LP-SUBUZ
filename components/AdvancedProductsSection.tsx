'use client'

import { motion } from 'framer-motion'
import { Droplets, Box, Sparkles } from 'lucide-react'
import Image from 'next/image'

const AdvancedProducts = () => {
  const categories = [
    {
      id: 'ice',
      title: 'Hielo Premium',
      icon: Box,
      description: 'Cristales de hielo puro, creados a través de procesos científicos avanzados',
      variants: [
        {
          name: 'Crystal Ice',
          subtitle: 'Hielo cristalino perfecto',
          image: '/images/product-1.jpg',
          features: ['100% Filtrado', 'Transparencia total', 'Derretimiento lento'],
          specs: 'Cubos de 2cm x 2cm x 2cm'
        },
        {
          name: 'Artisan Ice',
          subtitle: 'Para los más exigentes',
          image: '/images/whiskey-ice.jpg',
          features: ['Grandes cubos', 'Ideal para whisky', 'Premium absoluto'],
          specs: 'Cubos de 4cm x 4cm'
        },
        {
          name: 'Crushed Pearl',
          subtitle: 'Para cócteles sofisticados',
          image: '/images/cocktail-premium.jpg',
          features: ['Molido fino', 'Frío intenso', 'Presentación impactante'],
          specs: 'Granulado fino de 0.5cm'
        }
      ],
      color: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'cyan'
    },
    {
      id: 'water',
      title: 'Agua Purificada',
      icon: Droplets,
      description: 'Bidones de agua de pureza garantizada para tu tranquilidad',
      variants: [
        {
          name: 'Pure Essence',
          subtitle: 'Agua filtrada 7 veces',
          image: '/images/water-bidon.jpg',
          features: ['Filtración 7 veces', 'Ozonización', 'pH balanceado'],
          specs: 'Bidones de 20L'
        },
        {
          name: 'Mineral Balance',
          subtitle: 'Con minerales beneficiosos',
          image: '/images/water-bidon.jpg',
          features: ['Minerales añadidos', 'Sabor natural', 'Hidratación premium'],
          specs: 'Bidones de 20L'
        },
        {
          name: 'Premium Pro',
          subtitle: 'Para negocios exigentes',
          image: '/images/water-bidon.jpg',
          features: ['Suministro mensual', 'Servicio de entrega', 'Dispensador incluido'],
          specs: 'Bidones de 20L - Suscripción'
        }
      ],
      color: 'from-blue-500/20 to-indigo-500/20',
      borderColor: 'blue'
    }
  ]

  return (
    <section id="productos" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black/60">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

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
            <span className="text-luxury">Nuestra</span>
            <br />
            <span className="text-premium">Colección Premium</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada producto es una manifestación de excelencia y dedicación al perfeccionamiento
          </p>
        </motion.div>

        {/* Products by Category */}
        <div className="space-y-32">
          {categories.map((category, catIdx) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: catIdx * 0.2 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-12">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} border border-${category.borderColor}-400/30`}>
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-400">{category.description}</p>
                  </div>
                </div>

                {/* Product Grid */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                  {category.variants.map((variant, varIdx) => (
                    <motion.div
                      key={varIdx}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: varIdx * 0.15 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      {/* Card */}
                      <div className={`relative overflow-hidden rounded-2xl h-full premium-glow hover-luxury transition-all`}>
                        {/* Image Container */}
                        <div className="relative h-64 overflow-hidden bg-gray-900">
                          <Image
                            src={variant.image}
                            alt={variant.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:via-black/30 transition-all" />

                          {/* Badge */}
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="absolute top-4 right-4"
                          >
                            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-black text-xs font-bold">
                              PREMIUM
                            </div>
                          </motion.div>
                        </div>

                        {/* Content */}
                        <div className="p-6 bg-gradient-to-b from-gray-900 to-black/80">
                          <h4 className="text-2xl font-bold text-white mb-1">{variant.name}</h4>
                          <p className="text-cyan-400 text-sm font-semibold mb-4">{variant.subtitle}</p>

                          {/* Features */}
                          <div className="space-y-2 mb-6 pb-6 border-b border-cyan-400/20">
                            {variant.features.map((feature, fIdx) => (
                              <motion.div
                                key={fIdx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: fIdx * 0.05 }}
                                className="flex items-center gap-2 text-gray-300 text-sm"
                              >
                                <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                                {feature}
                              </motion.div>
                            ))}
                          </div>

                          {/* Specs */}
                          <div className="text-gray-400 text-xs mb-6">{variant.specs}</div>

                          {/* CTA */}
                          <motion.a
                            href={`https://wa.me/51912345678?text=Me%20interesa%20${encodeURIComponent(variant.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="block w-full py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold text-center btn-premium cursor-pointer"
                          >
                            Solicitar Ahora
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export { AdvancedProducts as AdvancedProductsSection }
