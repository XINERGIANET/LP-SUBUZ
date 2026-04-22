import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import subuzLogo from '../../../imports/image-17.png';

interface PreloaderProps {
  onLoadingComplete?: () => void;
}

export function Preloader({ onLoadingComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulamos un tiempo de carga para la animación
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 2800); // 2.8 segundos de elegancia

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="relative flex flex-col items-center">
            {/* Círculo de fondo decorativo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute w-64 h-64 bg-[#0066FF]/5 rounded-full blur-3xl"
            />

            {/* Logo de SUBUZ */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ 
                scale: [0.5, 1.1, 1],
                opacity: 1 
              }}
              transition={{ 
                duration: 1.2, 
                ease: [0.34, 1.56, 0.64, 1], // Efecto elástico premium
                delay: 0.2
              }}
              className="relative z-10"
            >
              <img
                src={subuzLogo}
                alt="SUBUZ Logo"
                className="h-20 md:h-28 w-auto"
              />
              
              {/* Brillo que pasa por el logo */}
              <motion.div
                initial={{ left: '-100%' }}
                animate={{ left: '100%' }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatDelay: 0.5,
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full h-full skew-x-12"
              />
            </motion.div>

            {/* Barra de carga minimalista */}
            <div className="mt-8 w-48 h-[2px] bg-gray-100 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-full bg-[#0066FF]"
              />
            </div>

            {/* Texto de carga sutil */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-4 text-[#0066FF] font-bold text-xs tracking-[0.2em] uppercase"
            >
              Purificando tu experiencia
            </motion.p>
          </div>

          {/* Efectos de gotas decorativas en el preloader */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -20, opacity: 0 }}
                animate={{ 
                  y: '110vh',
                  opacity: [0, 0.5, 0] 
                }}
                transition={{ 
                  duration: 2 + Math.random() * 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-1 h-3 bg-[#0066FF]/20 rounded-full"
                style={{ left: `${Math.random() * 100}%` }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
