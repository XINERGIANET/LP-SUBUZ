'use client'

import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
  className?: string
}

export function MagneticButton({ 
  children, 
  onClick, 
  href,
  target,
  rel,
  className = '' 
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = clientX - (left + width / 2)
    const y = clientY - (top + height / 2)

    setPosition({ x: x * 0.2, y: y * 0.2 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const content = (
    <motion.div
      ref={ref}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target={target} rel={rel}>
        {content}
      </a>
    )
  }

  return (
    <button onClick={onClick}>
      {content}
    </button>
  )
}
