'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProductCardProps {
  title: string
  description: string
  image: string
  features: string[]
  delay?: number
}

export function ProductCard({
  title,
  description,
  image,
  features,
  delay = 0,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: '-100px' }}
      className="group relative overflow-hidden rounded-2xl hover-luxury"
    >
      <div className="relative h-96 w-full overflow-hidden rounded-2xl premium-glow">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:via-black/40 transition-all duration-500" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div></div>
          <div>
            <h3 className="text-2xl font-bold text-luxury mb-2">{title}</h3>
            <p className="text-gray-300 text-sm mb-4 group-hover:text-gray-200 transition-colors">{description}</p>
            <div className="flex flex-wrap gap-2">
              {features.map((feature, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/30 text-cyan-200 border border-cyan-400/50"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
