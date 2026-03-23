'use client'

import Link from 'next/link'
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-card/40 border-t border-primary/10">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center font-bold text-foreground text-lg">
                  S
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground">SUBUZ</h3>
                  <p className="text-xs text-muted-foreground">Agua y Hielo</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Hielo gourmet premium para elevar tu experiencia. Servicio confiable desde Chiclayo.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://instagram.com/subuz.aguayhielo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  title="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  title="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            {/* Productos */}
            <div>
              <h4 className="text-sm font-bold text-foreground mb-6">Productos</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#productos" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    Hielo Gourmet Premium
                  </a>
                </li>
                <li>
                  <a href="#productos" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    Agua Purificada
                  </a>
                </li>
                <li>
                  <a href="#productos" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    Servicio Profesional
                  </a>
                </li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="text-sm font-bold text-foreground mb-6">Empresa</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#beneficios" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    Beneficios
                  </a>
                </li>
                <li>
                  <a href="#clientes" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    Clientes
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="text-sm font-bold text-foreground mb-6">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MessageCircleIcon size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">+51 912 345 678</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">+51 74 234 567</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Chiclayo, Perú</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary/10 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} SUBUZ. Todos los derechos reservados.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Privacidad
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Términos
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </footer>
  )
}

function MessageCircleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  )
}
