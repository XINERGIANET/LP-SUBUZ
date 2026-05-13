import React, { useState, useEffect, type MouseEvent } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { assetUrl } from '../lib/assets';

const repartidorMedio = assetUrl('personaje.png');

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
  const [chatOpen, setChatOpen] = useState(false);

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
      {/* Chat Modal WhatsApp */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, originX: 0, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-32 left-4 z-[60] w-[19rem] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl sm:bottom-40 sm:left-6 sm:w-80"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-[#25D366] p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <WhatsAppMark className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-sm font-bold">SUBUZ</div>
                  <div className="flex items-center gap-1 text-[10px] text-white/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
                    En línea ahora
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setChatOpen(false)}
                className="rounded-full p-1 transition hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="bg-[#e5ddd5] p-5 pb-8 relative">
              <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }}></div>
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative rounded-2xl rounded-tl-none bg-white p-3 text-sm text-slate-800 shadow-sm"
              >
                <p className="font-medium">¡Hola! 👋 Bienvenido a SUBUZ.</p>
                <p className="mt-1">¿En qué podemos ayudarte hoy? Escríbenos y te atenderemos de inmediato.</p>
                <span className="mt-1 block text-[10px] text-slate-400 text-right">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </motion.div>
            </div>

            {/* Footer / CTA */}
            <div className="border-t border-slate-100 bg-white p-4">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setChatOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white transition hover:bg-[#20ba5a] active:scale-95"
              >
                Iniciar chat por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Personaje Flotante (Derecha) */}
      <div className="pointer-events-none fixed bottom-20 right-2 z-[56] sm:bottom-24 sm:right-4">
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

      {/* Botón Flotante WhatsApp (Izquierda) */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        aria-label="Abrir chat de WhatsApp"
        className="pointer-events-auto fixed bottom-16 left-3 z-[56] sm:bottom-20 sm:left-4"
      >
        <motion.div 
          className="relative flex h-[3.65rem] w-[3.65rem] items-center justify-center sm:h-16 sm:w-16"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
        >
          <motion.span
            className="relative flex h-full w-full items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors hover:bg-[#20ba5a]"
          >
            <span className="flex h-[60%] w-[60%] items-center justify-center text-white">
              <WhatsAppMark className="h-full w-full" />
            </span>
          </motion.span>
        </motion.div>
      </button>
    </>
  );
}
