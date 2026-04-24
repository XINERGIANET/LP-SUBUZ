import { MessageCircle, Phone, MapPin, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import subuzLogo from '../../imports/image-17.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={subuzLogo}
                alt="SUBUZ - Agua de Mesa y Hielo"
                className="h-9 w-auto md:h-10"
              />
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
                Planta y distribución de agua de mesa e hielo en Chiclayo. Proceso
                ordenado, registro sanitario y foco en calidad, no en la venta
                a cualquier costo.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href="https://www.instagram.com/subuz_agua_y_hielo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 text-slate-200 transition hover:border-[#0066FF] hover:bg-[#0066FF]/20 hover:text-white"
                >
                  <Instagram size={17} />
                </a>
                <a
                  href="https://wa.me/51920488526"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/80 text-slate-200 transition hover:border-[#25D366] hover:bg-[#25D366]/20 hover:text-white"
                >
                  <MessageCircle size={17} />
                </a>
              </div>
            </motion.div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Enlaces
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { label: 'Inicio', to: '/' },
                { label: '¿Quiénes Somos?', to: '/nosotros' },
                { label: 'Productos', to: '/productos' },
                { label: '¿Cómo trabajamos?', to: '/proceso' },
                { label: 'Clientes', to: '/clientes' },
                { label: 'Contacto', to: '/contacto' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-slate-400 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0066FF]" />
                <div>
                  <p className="text-white">920 488 526</p>
                  <p className="text-white">920 381 594</p>
                </div>
              </li>
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#0066FF]" />
                <span>Chiclayo, Lambayeque, Perú</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800/90 pt-8 text-center text-xs text-slate-500 sm:text-sm">
          © {currentYear}{' '}
          <span className="font-semibold text-slate-300">SUBUZ</span>. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}
