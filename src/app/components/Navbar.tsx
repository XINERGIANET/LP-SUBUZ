import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, NavLink } from 'react-router';
import subuzLogo from '../../imports/image-17.png';
import { Magnetic } from './ui/Magnetic';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 6);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', to: '/' },
    { label: '¿Quiénes Somos?', to: '/nosotros' },
    { label: 'Productos', to: '/productos' },
    { label: '¿Cómo trabajamos?', to: '/proceso' },
    { label: 'Clientes', to: '/clientes' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 transition-shadow duration-300 ${
        isScrolled
          ? 'bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center">
            <Link to="/" className="flex items-center">
              <Magnetic strength={0.12}>
                <img
                  src={subuzLogo}
                  alt="SUBUZ - Agua de Mesa y Hielo"
                  className="h-7 w-auto md:h-9"
                />
              </Magnetic>
            </Link>
          </motion.div>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `group relative rounded-lg px-2.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#0066FF]'
                      : 'text-slate-700 hover:text-slate-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute bottom-1 left-2.5 right-2.5 h-0.5 rounded-full bg-[#0066FF] transition-transform duration-200 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-2.5 lg:flex">
            <Magnetic>
              <motion.a
                href="tel:920488526"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-9 items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 text-sm font-medium text-slate-800 shadow-sm transition hover:border-slate-300"
              >
                <Phone className="h-3.5 w-3.5 text-[#0066FF]" strokeWidth={2} />
                <span className="hidden xl:inline">920 488 526</span>
              </motion.a>
            </Magnetic>
            <Link to="/contacto" className="inline-flex h-9 items-center justify-center rounded-full bg-[#0066FF] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0052CC]">
              Contáctanos
            </Link>
          </div>

          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-slate-800 md:hidden"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200/90 bg-white md:hidden"
          >
            <div className="space-y-0.5 px-4 py-4">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2.5 text-sm font-medium ${
                      isActive
                        ? 'bg-slate-50 text-[#0066FF]'
                        : 'text-slate-800 hover:bg-slate-50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-3 space-y-2 border-t border-slate-200 pt-3">
                <a
                  href="tel:920488526"
                  className="flex h-10 items-center justify-center gap-2 rounded-full border border-slate-200 text-sm font-semibold text-slate-900"
                >
                  <Phone className="h-4 w-4 text-[#0066FF]" />
                  920 488 526
                </a>
                <Link
                  to="/contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-10 items-center justify-center rounded-full bg-[#0066FF] text-sm font-semibold text-white"
                >
                  Contáctanos
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
