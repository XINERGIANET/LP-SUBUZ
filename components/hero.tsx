'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/80 z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Accent badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-primary">Hielo Premium Made in Chiclayo</span>
        </div>

        {/* Main Heading */}
        <h1 className={`text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="block text-foreground">El Hielo que Eleva</span>
          <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mt-2">Tu Experiencia</span>
        </h1>

        {/* Subheading */}
        <p className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Pureza, elegancia y calidad premium para tus bebidas. Hielo gourmet cristalino, sin alterar sabores, ideal para bares, eventos y restaurantes.
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            href="https://wa.me/51912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            Pedir Ahora
          </Link>
          <Link
            href="#productos"
            className="px-8 py-4 border border-primary/50 text-primary rounded-full font-bold text-lg hover:bg-primary/5 transition-all duration-300"
          >
            Ver Productos
          </Link>
        </div>
      </div>

      {/* Floating ice visual element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
