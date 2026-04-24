import { useState, useEffect, type MouseEvent } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import repartidorSubuz from '../../imports/repartidor-subuz-solo.png';

const STORAGE_KEY = 'subuz-float-servicios-dismissed-at';
const SHOW_AGAIN_MS = 7 * 24 * 60 * 60 * 1000;

export function FloatingServiciosPromo() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname === '/servicios') {
      setVisible(false);
      return;
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setVisible(true);
        return;
      }
      const t = parseInt(raw, 10);
      if (Number.isNaN(t) || Date.now() - t > SHOW_AGAIN_MS) {
        setVisible(true);
        return;
      }
    } catch {
      setVisible(true);
    }
  }, [pathname]);

  const dismiss = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && pathname !== '/servicios' && (
        <motion.div
          role="complementary"
          aria-label="Ir a servicios SUBUZ"
          initial={{ x: 80, opacity: 0, y: 20 }}
          animate={{ x: 0, opacity: 1, y: 0 }}
          exit={{ x: 80, opacity: 0, transition: { duration: 0.22 } }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            mass: 0.9,
          }}
          className="pointer-events-none fixed bottom-24 right-2 z-[56] sm:bottom-28 sm:right-4"
        >
          <div className="pointer-events-auto relative w-[9.5rem] pb-5 sm:w-[11rem] sm:pb-6">
            <button
              type="button"
              onClick={dismiss}
              className="absolute -right-0.5 -top-1 z-20 flex h-7 w-7 items-center justify-center rounded-md bg-red-500 text-white shadow-md transition hover:bg-red-600"
              aria-label="Cerrar"
            >
              <X className="h-4 w-4" strokeWidth={2.5} />
            </button>

            <Link
              to="/servicios"
              className="group relative block outline-none"
              aria-label="Ver servicios SUBUZ: reparto, dispensador y congeladora"
            >
              <motion.div
                whileHover={{ scale: 1.06, rotate: -1 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                className="relative"
              >
                <motion.img
                  src={repartidorSubuz}
                  alt=""
                  width={280}
                  height={420}
                  className="h-auto w-full max-h-[min(42vh,17.5rem)] object-contain object-bottom drop-shadow-[0_14px_28px_rgba(15,23,42,0.35)] sm:max-h-[min(44vh,19rem)]"
                  animate={{
                    y: [0, -7, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                />

                <span className="pointer-events-none absolute bottom-0 left-1/2 z-10 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#0066FF] px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white shadow-lg ring-2 ring-white/90 sm:text-xs">
                  Servicios
                </span>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
