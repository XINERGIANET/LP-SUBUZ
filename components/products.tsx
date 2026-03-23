'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export function Products() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const products = [
    {
      id: 1,
      name: 'Hielo Gourmet Premium',
      description: 'Cristalino y puro. Nuestro hielo de lujo con pureza garantizada.',
      image: '/ice-premium.jpg',
      features: ['100% Cristalino', 'Sin impurezas', 'Larga duración']
    },
    {
      id: 2,
      name: 'Para Bebidas Premium',
      description: 'Perfecto para whisky, licores y bebidas finas que requieren elegancia.',
      image: '/whiskey-ice.jpg',
      features: ['No altera sabor', 'Derrite lentamente', 'Aspecto premium']
    },
    {
      id: 3,
      name: 'Para Eventos y Bares',
      description: 'La opción ideal para coctelería profesional y eventos de alto nivel.',
      image: '/cocktail-premium.jpg',
      features: ['Presentación premium', 'Formato profesional', 'Entrega rápida']
    }
  ]

  return (
    <section id="productos" className="relative py-20 sm:py-32 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-foreground">Hielo </span>
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Gourmet</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Pureza que se nota. Calidad que se distingue.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group cursor-pointer transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative bg-card/40 border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 flex-grow">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-2xl pointer-events-none transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground mb-6">Selecciona tu producto y realiza tu pedido en minutos</p>
          <a
            href="https://wa.me/51912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
