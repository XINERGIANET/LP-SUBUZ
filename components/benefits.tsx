'use client'

import { useState, useEffect } from 'react'
import { Droplet, Zap, Shield, Truck, Clock, Award } from 'lucide-react'

export function Benefits() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const benefits = [
    {
      icon: Droplet,
      title: '100% Filtrado',
      description: 'Agua purificada con filtración avanzada y ozonización para máxima pureza',
      highlight: true
    },
    {
      icon: Zap,
      title: 'Entrega Rápida',
      description: 'Servicio ágil en toda la ciudad de Chiclayo. Llegamos donde tú necesitas',
      highlight: false
    },
    {
      icon: Shield,
      title: 'Registro Sanitario',
      description: 'Cumplimos con todos los estándares de calidad e higiene nacional',
      highlight: false
    },
    {
      icon: Award,
      title: 'Calidad Constante',
      description: 'Proceso de producción controlado para garantizar excelencia',
      highlight: false
    },
    {
      icon: Truck,
      title: 'Entrega Profesional',
      description: 'Personal capacitado y equipamiento especializado para tu servicio',
      highlight: false
    },
    {
      icon: Clock,
      title: 'Atención Diaria',
      description: 'Disponibles todos los días para atender tus necesidades',
      highlight: false
    }
  ]

  return (
    <section id="beneficios" className="relative py-20 sm:py-32 bg-card/30 border-t border-b border-primary/10">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-foreground">Por qué elegir</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mt-2">SUBUZ</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Nos comprometemos con la excelencia en cada aspecto de nuestro servicio
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className={`group transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 h-full flex flex-col ${
                  benefit.highlight
                    ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-primary/50 group-hover:border-primary'
                    : 'bg-background/40 border-primary/10 group-hover:border-primary/30'
                }`}>
                  {/* Icon Container */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    benefit.highlight
                      ? 'bg-primary/20 text-primary group-hover:scale-110 group-hover:bg-primary/30'
                      : 'bg-primary/10 text-primary group-hover:scale-110'
                  }`}>
                    <Icon size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-grow">
                    {benefit.description}
                  </p>

                  {/* Highlight Badge */}
                  {benefit.highlight && (
                    <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      Garantizado
                    </div>
                  )}

                  {/* Border Animation */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none border border-primary/0 group-hover:border-primary/20 transition-all duration-300" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Subtext */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground italic">
            "Pureza, elegancia y calidad premium en cada servicio"
          </p>
        </div>
      </div>
    </section>
  )
}
