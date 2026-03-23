'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center font-bold text-foreground text-lg group-hover:scale-110 transition-transform duration-300">
            S
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm font-bold text-foreground">SUBUZ</span>
            <span className="text-xs text-muted-foreground">Agua y Hielo</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#productos" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200">
            Productos
          </Link>
          <Link href="#beneficios" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200">
            Beneficios
          </Link>
          <Link href="#clientes" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200">
            Clientes
          </Link>
          <Link href="#contacto" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200">
            Contacto
          </Link>
        </div>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link
            href="https://wa.me/51912345678"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            Pedir Ahora
          </Link>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card/95 border-b border-border">
          <div className="px-4 py-4 space-y-4">
            <Link href="#productos" className="block text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              Productos
            </Link>
            <Link href="#beneficios" className="block text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              Beneficios
            </Link>
            <Link href="#clientes" className="block text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              Clientes
            </Link>
            <Link href="#contacto" className="block text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
              Contacto
            </Link>
            <Link
              href="https://wa.me/51912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium text-sm text-center hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            >
              Pedir Ahora
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
