'use client'

import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

export function Experience() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const steps = [
    {
      number: '01',
      title: 'El Agua Pura',
      description: 'Comenzamos con agua de la mejor calidad, filtrada y purificada con tecnología avanzada',
      detail: '100% ozonizada para máxima pureza'
    },
    {
      number: '02',
      title: 'Proceso Especial',
      description: 'Aplicamos un proceso único para crear hielo cristalino que mantiene la transparencia',
      detail: 'Temperatura controlada y congelación lenta'
    },
    {
      number: '03',
      title: 'Hielo Premium',
      description: 'Obtenemos el hielo gourmet perfecto, listo para elevar cualquier bebida',
      detail: 'Presentación premium sin compromiso'
    }
  ]

  return (
    <section className="relative py-20 sm:py-32 bg-card/20 border-y border-primary/10">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-foreground">Desde el agua</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mt-2">hasta el hielo perfecto</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Un viaje de transformación que garantiza la excelencia en cada cubo
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="space-y-8 sm:space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="group flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                {/* Step Number */}
                <div className="flex-shrink-0 relative">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border border-primary/30 group-hover:border-primary/60 transition-all duration-300">
                    <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-24 left-10 w-0.5 h-20 bg-gradient-to-b from-primary/60 to-primary/10 hidden sm:block" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-grow pt-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted-foreground mb-4">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/15 group-hover:border-primary/50 transition-all duration-300">
                    <span className="text-sm font-semibold text-primary">
                      {step.detail}
                    </span>
                    <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 sm:mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Cada paso está diseñado con precisión para garantizar que recibas el mejor hielo gourmet de Chiclayo
          </p>
          <a
            href="https://wa.me/51912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 group hover:scale-105"
          >
            Conoce Más Detalles
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  )
}
