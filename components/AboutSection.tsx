'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Shield, Users } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const timeline = [
    {
      year: '2022',
      title: 'Fundación de SUBUZ',
      description: 'Nace la visión de revolucionar el mercado de hielo y agua premium en Chiclayo'
    },
    {
      year: '2023',
      title: 'Expansión Regional',
      description: 'Consolidamos presencia en bares, restaurantes y eventos de toda la región'
    },
    {
      year: '2024',
      title: 'Estándar Premium Global',
      description: 'Alcanzamos certificaciones internacionales de pureza y calidad'
    }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Pureza Garantizada',
      description: 'Filtrado 7 veces y ozonizado. 100% libre de impurezas.'
    },
    {
      icon: Zap,
      title: 'Entrega Rápida',
      description: 'Servicio express dentro de Chiclayo. Máximo 2 horas.'
    },
    {
      icon: Users,
      title: 'Servicio Premium',
      description: 'Atención personalizada disponible 24/7 para tus necesidades.'
    },
    {
      icon: Check,
      title: 'Sustentabilidad',
      description: 'Comprometidos con el cuidado ambiental y prácticas responsables.'
    }
  ]

  return (
    <section id="nosotros" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

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
            <span className="text-luxury">¿Quiénes</span>
            <br />
            <span className="text-premium">Somos?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            SUBUZ es más que un proveedor. Somos guardianes de la pureza, artesanos de la excelencia y partners en cada celebración importante
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden premium-glow"
          >
            <Image
              src="/images/about-journey.jpg"
              alt="SUBUZ Journey"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Nuestra Historia</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Desde 2022, en SUBUZ no solo vendemos hielo y agua. Vendemos la promesa de pureza cristalina, de confianza inquebrantable y de experiencias memorables.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Cada cubo de hielo es resultado de procesos científicos rigurosos. Cada bidón de agua es garantía de salud. Cada entrega es un compromiso con tu exigencia.
              </p>
            </div>

            {/* Timeline Mini */}
            <div className="space-y-4 pt-4 border-t border-cyan-400/20">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 glass-premium-light p-3 rounded-lg"
                >
                  <div className="text-cyan-400 font-bold text-lg min-w-16">{item.year}</div>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, idx) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group premium-glow p-6 rounded-xl text-center hover-luxury"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-cyan-400 icon-premium" />
                  </div>
                </div>
                <h4 className="text-white font-bold mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-20 pt-20 border-t border-cyan-400/20"
        >
          {[
            { number: '2000+', label: 'Clientes Satisfechos' },
            { number: '99.9%', label: 'Pureza Garantizada' },
            { number: '24/7', label: 'Disponibilidad' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileInView={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-premium mb-2">{stat.number}</div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export { About as AboutSection }
