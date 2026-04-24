import React, { useState, useEffect, type MouseEvent } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import repartidorMedio from '../../imports/repartidor-subuz-medio.png';

const STORAGE_SERVICIOS = 'subuz-float-servicios-dismissed-at';
const SHOW_AGAIN_MS = 7 * 24 * 60 * 60 * 1000;
const WHATSAPP_HREF = 'https://wa.me/51920488526';

/** Marca WhatsApp® (silueta reconocible sobre botón verde oficial #25D366) */
function WhatsAppMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

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
    <>
      <div className="pointer-events-none fixed bottom-32 right-2 z-[56] sm:bottom-36 sm:right-4">
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
      </div>

      <motion.a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp a SUBUZ"
        initial={{ x: -88, opacity: 0, rotate: -12 }}
        animate={{ x: 0, opacity: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 18,
          delay: 0.2,
        }}
        whileHover={{
          scale: 1.08,
          rotate: 2,
          transition: { type: 'spring', stiffness: 400, damping: 12 },
        }}
        whileTap={{ scale: 0.94 }}
        className="pointer-events-auto fixed bottom-16 left-3 z-[56] sm:bottom-20 sm:left-4"
      >
        <div className="relative flex h-[3.65rem] w-[3.65rem] items-center justify-center sm:h-16 sm:w-16">
          <motion.span
            className="absolute inset-0 rounded-full bg-[#25D366]"
            animate={{
              scale: [1, 1.22, 1],
              opacity: [0.55, 0, 0.55],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.span
            className="absolute inset-0 rounded-full bg-[#25D366]"
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.35, 0.12, 0.35],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.35,
            }}
          />
          <motion.span
            className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#2fe066] via-[#25D366] to-[#128C7E] text-white shadow-[0_12px_36px_rgba(18,140,126,0.45)] ring-[3px] ring-white/95"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.span
              className="flex h-[62%] w-[62%] items-center justify-center text-white drop-shadow-sm"
              animate={{
                scale: [1, 1.06, 1],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <WhatsAppMark className="h-full w-full" />
            </motion.span>
          </motion.span>
        </div>
      </motion.a>
    </>
  );
}
