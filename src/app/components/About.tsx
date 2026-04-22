import { motion } from 'motion/react';
import aguaBidon from '../../imports/image-20.png';

const timeline = [
  {
    year: '2022',
    title: 'Fundación de SUBUZ',
    description: 'Iniciamos con la visión de ofrecer la mejor agua y hielo de Chiclayo.',
  },
  {
    year: '2023',
    title: 'Crecimiento Regional',
    description: 'Consolidamos nuestra presencia en bares, restaurantes y eventos.',
  },
  {
    year: '2024',
    title: 'Líderes del Mercado',
    description: 'Más de 2000 clientes confían en nuestra calidad premium.',
  },
];

export function About() {
  return (
    <section id="nosotros" className="py-16 md:py-24 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] mb-4 md:mb-6 px-4"
          >
            ¿Quiénes <span className="text-[#0066FF]">Somos?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed"
          >
            SUBUZ nació en 2022 con una misión clara: elevar el estándar de calidad en agua y hielo
            en Chiclayo. Somos más que un proveedor, somos una empresa comprometida con la excelencia,
            la pureza y el bienestar de nuestra comunidad.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-24">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="relative rounded-3xl overflow-hidden bg-[#F5F8FA] p-8 border-2 border-[#0066FF]/10 shadow-xl flex items-center justify-center min-h-[450px]">
              <img
                src={aguaBidon}
                alt="SUBUZ Agua Purificada 20L"
                className="w-auto max-h-96 object-contain"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white px-8 py-6 rounded-2xl shadow-xl border-2 border-[#0066FF]/10"
            >
              <div className="text-4xl font-black text-[#0066FF]">2000+</div>
              <div className="text-sm text-[#666666] font-bold">Clientes Felices</div>
            </motion.div>
          </motion.div>

          {/* Right - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A1A1A] mb-6 md:mb-8">Nuestra Trayectoria</h3>
            <p className="text-[#666666] text-sm md:text-base lg:text-lg mb-4 leading-relaxed">
              Desde 2022, SUBUZ ha sido sinónimo de calidad y confianza en Chiclayo. Comenzamos con
              un sueño ambicioso: revolucionar la industria del agua y hielo con productos que
              cumplan los más altos estándares internacionales.
            </p>
            <p className="text-[#666666] text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed">
              Hoy, nuestra agua 100% purificada y ozonizada, junto con nuestro hielo gourmet,
              son la elección preferida de restaurantes, bares, eventos y miles de familias que
              confían en nuestra calidad #MásGourmet.
            </p>
            
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex gap-4 group"
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-14 h-14 rounded-full bg-[#0066FF] flex items-center justify-center font-black text-white text-sm shadow-lg"
                    >
                      {item.year}
                    </motion.div>
                    {index < timeline.length - 1 && (
                      <div className="w-1 h-full bg-gradient-to-b from-[#0066FF]/50 to-transparent mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h4 className="text-xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#0066FF] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-[#666666]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}