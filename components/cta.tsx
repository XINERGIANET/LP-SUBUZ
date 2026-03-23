'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, Phone } from 'lucide-react'

export function CTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="contacto" className="relative py-20 sm:py-32 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-foreground">Haz tu pedido</span>
          <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mt-2">en minutos</span>
        </h2>

        {/* Subheading */}
        <p className={`text-lg text-muted-foreground max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Contacta con nosotros por WhatsApp o teléfono. Nuestro equipo está disponible para atenderte y procesar tu pedido.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/51912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            <MessageCircle size={20} />
            <span>Contactar por WhatsApp</span>
          </a>

          {/* Phone Button */}
          <a
            href="tel:+51912345678"
            className="group px-8 py-4 border-2 border-primary text-primary rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-primary/10 transition-all duration-300"
          >
            <Phone size={20} />
            <span>Llamar Ahora</span>
          </a>
        </div>

        {/* Info Box */}
        <div className={`p-8 rounded-2xl bg-card/40 border border-primary/20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-sm text-muted-foreground mb-2">WhatsApp</p>
              <p className="text-2xl font-bold text-primary">+51 912 345 678</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Teléfono</p>
              <p className="text-2xl font-bold text-primary">+51 74 234 567</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Ubicación</p>
              <p className="text-2xl font-bold text-foreground">Chiclayo, Perú</p>
            </div>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/51912345678"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-40 animate-bounce"
          style={{
            boxShadow: '0 20px 25px -5px rgba(34, 197, 94, 0.4), 0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}
          title="Enviar WhatsApp"
        >
          <MessageCircle size={28} />
        </a>
      </div>
    </section>
  )
}
