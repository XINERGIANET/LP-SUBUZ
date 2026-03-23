'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Wine, UtensilsCrossed, Sparkles } from 'lucide-react'

export function Clients() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const clientTypes = [
    {
      id: 1,
      title: 'Bares Premium',
      description: 'Nuestro hielo gourmet es la opción predilecta de los bartenders profesionales. Eleva la presentación de cada coctel con hielo cristalino.',
      image: '/bar-ambiance.jpg',
      icon: Wine,
      stats: '50+ bares en Chiclayo'
    },
    {
      id: 2,
      title: 'Restaurantes',
      description: 'Complementa tu servicio de agua purificada con hielo premium. Satisface a tus clientes más exigentes con calidad garantizada.',
      image: '/restaurant-fine-dining.jpg',
      icon: UtensilsCrossed,
      stats: '30+ restaurantes'
    },
    {
      id: 3,
      title: 'Eventos y Catering',
      description: 'Eventos corporativos, bodas y reuniones de alto nivel. Proporciona la elegancia que tu evento merece con nuestro hielo premium.',
      image: '/event-premium.jpg',
      icon: Sparkles,
      stats: '100+ eventos anuales'
    }
  ]

  return (
    <section id="clientes" className="relative py-20 sm:py-32 bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-foreground">Clientes </span>
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Ideales</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Empresas de todos los sectores confían en SUBUZ para elevar sus bebidas
          </p>
        </div>

        {/* Client Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientTypes.map((client, index) => {
            const Icon = client.icon
            return (
              <div
                key={client.id}
                className={`group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Card Container */}
                <div className="relative h-full rounded-2xl overflow-hidden border border-primary/10 group-hover:border-primary/50 transition-all duration-300 bg-card/20 backdrop-blur-sm hover:bg-card/40">
                  {/* Image Section */}
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    <Image
                      src={client.image}
                      alt={client.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card" />
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/80 text-foreground flex items-center justify-center backdrop-blur-sm group-hover:bg-primary transition-all duration-300">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 sm:p-8 flex flex-col">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {client.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                      {client.description}
                    </p>
                    
                    {/* Stats */}
                    <div className="pt-6 border-t border-primary/10">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {client.stats}
                      </p>
                    </div>
                  </div>

                  {/* Border Animation */}
                  <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-2xl pointer-events-none transition-all duration-300" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Message */}
        <div className={`mt-16 sm:mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Únete a cientos de negocios que ya confían en SUBUZ
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
