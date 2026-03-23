'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Roberto García',
      role: 'Propietario de Bar Elegancia',
      text: 'SUBUZ cambió completamente nuestra propuesta. El hielo es tan puro que nuestros clientes notaron la diferencia de inmediato. Imprescindible.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'María Fernández',
      role: 'Gerenta de Restaurante Premium',
      text: 'La puntualidad y calidad de SUBUZ es incomparable. Nuestros huéspedes ahora eligen nuestro lugar por la experiencia completa que ofrecemos.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Carlos Mendez',
      role: 'Event Manager',
      text: 'Para eventos premium, SUBUZ es la única opción. Su profesionalismo y entrega puntual nos hace verse perfectos siempre.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Ana López',
      role: 'Gerenta de Hogar Ejecutivo',
      text: 'El agua purificada de SUBUZ es lo que buscábamos. Pureza garantizada, entrega confiable y atención al detalle excepcional.',
      rating: 5,
      image: '👩‍💼'
    }
  ]

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-luxury">Lo Que Dicen</span>
            <br />
            <span className="text-premium">Nuestros Clientes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Testimonios de empresarios y clientes que confían en SUBUZ
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="premium-glow p-8 rounded-2xl h-full hover-luxury">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-200 text-lg mb-8 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-cyan-400/20">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export { Testimonials as TestimonialSection }
