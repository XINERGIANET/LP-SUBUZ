'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
}

export function AnimatedCounter({ 
  value, 
  suffix = '', 
  prefix = '',
  duration = 2 
}: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const countRef = useRef(0)

  useEffect(() => {
    if (!isInView) return

    const increment = value / (duration * 60)
    const timer = setInterval(() => {
      countRef.current += increment
      if (countRef.current >= value) {
        countRef.current = value
        clearInterval(timer)
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-premium">
        {prefix}
        <span suppressHydrationWarning>
          {Math.floor(countRef.current).toLocaleString()}
        </span>
        {suffix}
      </div>
    </motion.div>
  )
}
