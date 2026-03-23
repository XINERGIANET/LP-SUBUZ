'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollAnimationWrapperProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function FadeInUp({ children, delay = 0, className = '' }: ScrollAnimationWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeInDown({ children, delay = 0, className = '' }: ScrollAnimationWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeInLeft({ children, delay = 0, className = '' }: ScrollAnimationWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeInRight({ children, delay = 0, className = '' }: ScrollAnimationWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({ children, delay = 0, className = '' }: ScrollAnimationWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
