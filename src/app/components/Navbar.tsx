import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import subuzLogo from '../../imports/image-17.png';
import { Magnetic } from './ui/Magnetic';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Productos', href: '#productos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-elegant-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#inicio"
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Magnetic strength={0.2}>
              <img
                src={subuzLogo}
                alt="SUBUZ - Agua de Mesa y Hielo"
                className="h-10 md:h-12 lg:h-14 w-auto"
              />
            </Magnetic>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-[#1A1A1A] hover:text-[#0066FF] font-bold transition-colors relative group"
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0066FF] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                />
              </motion.a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-3">
            <Magnetic>
              <motion.a
                href="tel:920488526"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2 border-2 border-[#0066FF] text-[#0066FF] rounded-full font-bold hover:bg-[#0066FF]/10 transition-all"
              >
                <Phone size={18} />
                <span className="hidden xl:inline">920 488 526</span>
              </motion.a>
            </Magnetic>
            <Magnetic>
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2 bg-[#0066FF] text-white rounded-full font-bold shadow-lg hover:bg-[#0052CC] transition-all"
              >
                Contáctanos
              </motion.a>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#0066FF]"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t-2 border-[#0066FF]/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-[#1A1A1A] hover:text-[#0066FF] font-bold py-2 border-b border-gray-100 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:920488526"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#0066FF] text-[#0066FF] rounded-full font-bold"
                >
                  <Phone size={18} />
                  920 488 526
                </a>
                <a
                  href="#contacto"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#0066FF] text-white rounded-full font-bold shadow-lg"
                >
                  Contáctanos
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}