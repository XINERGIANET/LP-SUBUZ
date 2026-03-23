'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: 'Productos', href: '#productos' },
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Clientes', href: '#clientes' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass-premium backdrop-blur-2xl"
      style={{
        borderBottom: '1px solid rgba(0, 212, 255, 0.2)',
        background: 'rgba(10, 10, 10, 0.5)',
        boxShadow: '0 8px 32px 0 rgba(0, 212, 255, 0.1)'
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tighter hover-luxury">
          <span className="text-premium">
            SUBUZ
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-white hover:text-luxury transition-smooth"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/1234567890?text=Hola%20SUBUZ%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-bold text-sm btn-premium"
          >
            Pedir por WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-smooth"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden border-t border-white/10"
      >
        <div className="px-4 py-4 space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block px-4 py-2 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://wa.me/1234567890?text=Hola%20SUBUZ%20quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-center transition-smooth"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </motion.div>
    </motion.header>
  )
}
