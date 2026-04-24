import { useState, useEffect, type MouseEvent } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import subuzLogo from '../../imports/image-17.png';
import repartidorImg from '../../imports/float-repartidor-bidon.png';

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
          aria-label="Promoción de servicios SUBUZ"
          initial={{ x: 120, opacity: 0, rotate: 2 }}
          animate={{ x: 0, opacity: 1, rotate: 0 }}
          exit={{ x: 120, opacity: 0, transition: { duration: 0.25 } }}
          transition={{
            type: 'spring',
            stiffness: 280,
            damping: 22,
            mass: 0.85,
          }}
          className="pointer-events-none fixed bottom-24 right-3 z-[56] w-[min(calc(100vw-1.5rem),19rem)] sm:bottom-28 sm:right-5 md:w-[20.5rem]"
        >
          <div className="pointer-events-auto relative">
            <button
              type="button"
              onClick={dismiss}
              className="absolute -right-1 -top-1 z-20 flex h-7 w-7 items-center justify-center rounded-md bg-red-500 text-white shadow-md transition hover:bg-red-600"
              aria-label="Cerrar aviso"
            >
              <X className="h-4 w-4" strokeWidth={2.5} />
            </button>

            <Link
              to="/servicios"
              className="group block outline-none"
              aria-label="Ir a la página de servicios SUBUZ"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-visible rounded-2xl shadow-[0_12px_40px_rgba(0,30,60,0.35)] ring-2 ring-white/50"
              >
                <div className="flex min-h-[5.5rem] overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-[#0066FF]">
                  <div className="flex flex-1 flex-col justify-center gap-1 px-3 py-3 pr-1 sm:px-4">
                    <img
                      src={subuzLogo}
                      alt=""
                      className="h-5 w-auto brightness-0 invert sm:h-6"
                      width={120}
                      height={24}
                    />
                    <p className="text-[0.7rem] font-extrabold uppercase leading-tight tracking-wide text-white drop-shadow-sm sm:text-xs">
                      Servicios a tu ritmo
                    </p>
                    <p className="text-[0.65rem] font-medium leading-snug text-white/95 sm:text-xs">
                      Reparto, dispensador y congeladora — tocá acá
                    </p>
                  </div>

                  <div className="relative flex w-[42%] max-w-[8.5rem] shrink-0 items-end justify-end pr-0 sm:max-w-[9rem]">
                    <motion.img
                      src={repartidorImg}
                      alt=""
                      className="h-[6.75rem] w-auto max-w-none object-contain object-bottom drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] sm:h-[7.75rem]"
                      width={200}
                      height={280}
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
