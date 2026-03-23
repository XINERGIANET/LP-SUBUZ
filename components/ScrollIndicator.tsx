'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrollTop = window.scrollY
      const scrollProgress = windowHeight > 0 ? (scrollTop / windowHeight) * 100 : 0
      setScrollProgress(scrollProgress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 origin-left z-50"
      style={{ scaleX: scrollProgress / 100 }}
      initial={{ scaleX: 0 }}
    />
  )
}
