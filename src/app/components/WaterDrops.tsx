import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Drop {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export function WaterDrops() {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    // Generar gotas de agua - menos cantidad para más elegancia
    const newDrops: Drop[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      size: 6 + Math.random() * 6,
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: '100vh',
            opacity: [0, 0.6, 0.8, 0.6, 0],
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: `${drop.left}%`,
            width: drop.size,
            height: drop.size * 1.5,
          }}
          className="drop"
        >
          {/* Gota principal */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-b from-[#0066FF]/30 to-[#3385FF]/40 backdrop-blur-sm"
            style={{
              boxShadow: '0 4px 12px rgba(0, 102, 255, 0.3)',
            }}
          />
          
          {/* Reflejo de luz en la gota */}
          <div
            className="absolute top-0 left-1/4 w-1/2 h-1/3 rounded-full bg-white/60 blur-[1px]"
          />
          
          {/* Cola de la gota */}
          <div
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-[2px] h-2 bg-gradient-to-b from-[#0066FF]/20 to-transparent"
          />
        </motion.div>
      ))}
    </div>
  );
}