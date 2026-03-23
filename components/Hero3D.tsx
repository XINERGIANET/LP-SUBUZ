'use client'

import { motion } from 'framer-motion'

const Hero3D = () => {
  return (
    <div className="relative w-full h-96 flex items-center justify-center perspective">
      {/* Background glow */}
      <motion.div
        animate={{ 
          boxShadow: [
            '0 0 40px rgba(0, 212, 255, 0.3)',
            '0 0 80px rgba(0, 212, 255, 0.6)',
            '0 0 40px rgba(0, 212, 255, 0.3)'
          ]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 rounded-2xl blur-3xl"
      />

      {/* 3D-like ice cube using CSS perspective */}
      <motion.div
        animate={{ 
          rotateX: [0, 360],
          rotateY: [0, 360],
          rotateZ: [0, 360]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        className="relative w-48 h-48"
        style={{ perspective: '1200px' }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600 rounded-2xl"
          style={{
            boxShadow: '0 0 60px rgba(0, 212, 255, 0.8), inset -2px -2px 5px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(0, 212, 255, 0.6)',
            transformStyle: 'preserve-3d',
            transform: 'translateZ(50px)'
          }}
        />
      </motion.div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.2
          }}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full blur"
          style={{
            left: `${20 + i * 15}%`,
            top: `${50 + Math.sin(i) * 20}%`
          }}
        />
      ))}
    </div>
  )
}

export default Hero3D
