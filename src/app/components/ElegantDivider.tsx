import { motion } from 'motion/react';

export function ElegantDivider() {
  return (
    <div className="relative h-24 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,50 Q360,20 720,50 T1440,50 L1440,100 L0,100 Z"
          fill="url(#gradient1)"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.3, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <motion.path
          d="M0,60 Q360,30 720,60 T1440,60 L1440,100 L0,100 Z"
          fill="url(#gradient2)"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.2, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#0066FF', stopOpacity: 0.1 }} />
            <stop offset="50%" style={{ stopColor: '#3385FF', stopOpacity: 0.2 }} />
            <stop offset="100%" style={{ stopColor: '#0066FF', stopOpacity: 0.1 }} />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#3385FF', stopOpacity: 0.1 }} />
            <stop offset="50%" style={{ stopColor: '#0066FF', stopOpacity: 0.15 }} />
            <stop offset="100%" style={{ stopColor: '#3385FF', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Center ornament */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#0066FF]/20 to-[#3385FF]/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center shadow-lg"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0066FF] to-[#3385FF]" />
      </motion.div>
    </div>
  );
}
