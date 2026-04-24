import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const galleryItems = [
  {
    image: 'https://images.unsplash.com/photo-1774978236731-ce63c58f1264?w=800&q=80',
    title: 'Restaurantes',
    description: 'La elección de los mejores chefs',
  },
  {
    image: 'https://images.unsplash.com/photo-1770670644206-608a83cdc343?w=800&q=80',
    title: 'Bares Premium',
    description: 'Hielo gourmet para cócteles de calidad',
  },
  {
    image: 'https://images.unsplash.com/photo-1758552013326-01b93dd12c3e?w=800&q=80',
    title: 'Eventos Corporativos',
    description: 'Agua purificada para tus reuniones',
  },
  {
    image: 'https://images.unsplash.com/photo-1765099271664-614c541196ef?w=800&q=80',
    title: 'Hoteles Premium',
    description: 'Servicio de excelencia garantizado',
  },
];

export function ClientsGallery() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A1A1A] mb-4 px-4"
          >
            Clientes que <span className="text-[#0066FF]">Confían en Nosotros</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#666666] max-w-2xl mx-auto"
          >
            Desde bares hasta hogares, nuestro compromiso con la calidad nos ha convertido en la elección preferida
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl aspect-square cursor-pointer"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-3 md:p-6 z-10">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <h3 className="text-base md:text-xl font-black text-white mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-white/90 leading-relaxed hidden sm:block">{item.description}</p>
                </motion.div>
              </div>

              {/* Hover Icon */}
              <motion.div
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Instagram className="text-white" size={20} />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <a
            href="https://www.instagram.com/subuz_agua_y_hielo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#0066FF] text-white rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Instagram size={20} className="md:w-6 md:h-6" />
            Síguenos en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
