import { useState, useEffect, type MouseEvent } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle } from 'lucide-react';
import repartidorMedio from '../../imports/repartidor-subuz-medio.png';

const STORAGE_SERVICIOS = 'subuz-float-servicios-dismissed-at';
const SHOW_AGAIN_MS = 7 * 24 * 60 * 60 * 1000;
const WHATSAPP_HREF = 'https://wa.me/51920488526';

export function FloatingPageCorner() {
  const { pathname } = useLocation();
  const [serviciosVisible, setServiciosVisible] = useState(false);

  useEffect(() => {
    if (pathname === '/servicios') {
      setServiciosVisible(false);
      return;
    }
    try {
      const raw = localStorage.getItem(STORAGE_SERVICIOS);
      if (!raw) {
        setServiciosVisible(true);
        return;
      }
      const t = parseInt(raw, 10);
      if (Number.isNaN(t) || Date.now() - t > SHOW_AGAIN_MS) {
        setServiciosVisible(true);
        return;
      }
    } catch {
      setServiciosVisible(true);
    }
  }, [pathname]);

  const dismissServicios = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      localStorage.setItem(STORAGE_SERVICIOS, String(Date.now()));
    } catch {
      /* ignore */
    }
    setServiciosVisible(false);
  };

  return (
    <div className="pointer-events-none fixed bottom-32 right-2 z-[56] flex flex-col items-end gap-3 sm:bottom-36 sm:right-4">
      <AnimatePresence>
        {serviciosVisible && pathname !== '/servicios' && (
          <motion.div
            key="servicios-float"
            role="complementary"
            aria-label="Ir a servicios SUBUZ"
            initial={{ x: 72, opacity: 0, y: 16 }}
            animate={{ x: 0, opacity: 1, y: 0 }}
            exit={{ x: 72, opacity: 0, transition: { duration: 0.2 } }}
            transition={{
              type: 'spring',
              stiffness: 280,
              damping: 20,
              mass: 0.88,
            }}
            className="pointer-events-auto relative w-[12.5rem] sm:w-[14.5rem]"
          >
            <button
              type="button"
              onClick={dismissServicios}
              className="absolute -right-0.5 -top-1 z-20 flex h-7 w-7 items-center justify-center rounded-md bg-red-500 text-white shadow-md transition hover:bg-red-600"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" strokeWidth={2.5} />
            </button>

            <Link
              to="/servicios"
              className="relative block outline-none"
              aria-label="Ver servicios SUBUZ"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: -0.8 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 420, damping: 17 }}
              >
                <motion.img
                  src={repartidorMedio}
                  alt=""
                  width={320}
                  height={380}
                  className="h-auto w-full max-h-[min(38vh,19rem)] object-contain object-bottom [filter:drop-shadow(0_16px_28px_rgba(15,23,42,0.38))] sm:max-h-[min(50vh,25rem)] md:max-h-[min(52vh,26rem)]"
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp a SUBUZ"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 320, damping: 18, delay: 0.15 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] ring-2 ring-white/90 transition hover:bg-[#1ebe5b] sm:h-[3.75rem] sm:w-[3.75rem]"
      >
        <motion.span
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex items-center justify-center"
        >
          <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2} />
        </motion.span>
      </motion.a>
    </div>
  );
}
