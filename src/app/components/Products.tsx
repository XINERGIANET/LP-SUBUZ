import { Check, Sparkles, Snowflake, Droplet } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useState } from 'react';
import subuzProducts from '../../imports/image-7.png';

const iceProducts = [
  {
    name: 'Hielo Gourmet',
    subtitle: 'Cristalino y puro',
    features: ['100% Filtrado', 'Transparencia total', 'Ideal para cócteles'],
    badge: 'Más Popular',
    badgeColor: 'bg-[#0066FF]',
    image: subuzProducts,
  },
  {
    name: 'Hielo en Cubo',
    subtitle: 'Para bebidas premium',
    features: ['Cubos perfectos', 'Larga duración', 'Sin sabor residual'],
    badge: 'Premium',
    badgeColor: 'bg-[#0066FF]',
    image: subuzProducts,
  },
  {
    name: 'Hielo Triturado',
    subtitle: 'Textura perfecta',
    features: ['Triturado fino', 'Enfriamiento rápido', 'Para smoothies'],
    badge: 'Nuevo',
    badgeColor: 'bg-[#25D366]',
    image: subuzProducts,
  },
];

const waterProducts = [
  {
    name: 'Bidón 20 Litros',
    subtitle: 'Agua purificada premium',
    features: ['Ozonizada', '7 niveles de filtración', 'pH balanceado'],
    size: '20L',
    image: subuzProducts,
  },
  {
    name: 'Con Dispensador',
    subtitle: 'Solución completa',
    features: ['Dispensador incluido', 'Fácil uso', 'Dispensador gratis'],
    size: '20L',
    badge: 'Oferta',
    image: subuzProducts,
  },
  {
    name: 'Para Negocios',
    subtitle: 'Solución empresarial',
    features: ['Volumen mayorista', 'Servicio prioritario', 'Facturación'],
    size: '20L',
    badge: 'Empresas',
    image: subuzProducts,
  },
];

function ProductCard({ product, index, isWater = false }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white rounded-3xl overflow-hidden border-2 border-[#0066FF]/10 hover:border-[#0066FF]/30 transition-all duration-300 shadow-lg hover:shadow-2xl"
    >
      {/* Badge */}
      {product.badge && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          className={`absolute top-4 right-4 z-10 px-4 py-1 ${product.badgeColor || 'bg-[#0066FF]'} text-white text-xs font-bold rounded-full shadow-lg`}
        >
          {product.badge}
        </motion.div>
      )}

      {/* Image Container */}
      <div className="relative h-64 bg-gradient-to-br from-[#E6F2FF] to-white overflow-hidden">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full flex items-center justify-center p-6"
        >
          <img
            src={product.image}
            alt={product.name}
            className={`max-w-full max-h-full object-contain ${
              isWater ? 'object-right' : 'object-left'
            }`}
          />
        </motion.div>
        
        {/* Size badge for water */}
        {isWater && (
          <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-sm text-[#0066FF] text-lg font-black rounded-full border-2 border-[#0066FF]/30 shadow-lg">
            {product.size}
          </div>
        )}

        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative p-6">
        <motion.h4
          animate={{ color: isHovered ? '#0066FF' : '#1A1A1A' }}
          className="text-2xl font-black mb-2"
        >
          {product.name}
        </motion.h4>
        <p className="text-[#0066FF] text-sm font-bold mb-4">{product.subtitle}</p>
        
        <ul className="space-y-3 mb-6">
          {product.features.map((feature: string, idx: number) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
              className="flex items-center gap-2 text-[#666666] text-sm"
            >
              <div className="w-5 h-5 rounded-full bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0">
                <Check size={14} className="text-[#0066FF]" />
              </div>
              {feature}
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0, 102, 255, 0.3)" }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-[#0066FF] text-white rounded-full font-bold transition-all shadow-lg"
        >
          Solicitar Ahora
        </motion.button>
      </div>
    </motion.div>
  );
}

export function Products() {
  return (
    <section id="productos" className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern - Más elegante */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-[#0066FF]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-[#3385FF]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
          >
            <div className="px-6 py-2 bg-gradient-to-r from-[#0066FF]/10 to-[#3385FF]/10 border border-[#0066FF]/20 rounded-full text-[#0066FF] text-sm font-bold uppercase tracking-wider">
              Catálogo Completo
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-[#1A1A1A] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Nuestros <span className="text-[#0066FF]">Productos</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed"
          >
            Agua purificada y hielo gourmet en todas sus presentaciones para cada ocasión.
          </motion.p>
        </div>

        {/* Ice Products */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF] flex items-center justify-center shadow-lg">
              <Snowflake className="text-white" size={28} />
            </div>
            <h3 className="text-4xl font-black text-[#1A1A1A]">Hielo <span className="text-[#0066FF]">Gourmet</span></h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#666666] mb-8 text-lg"
          >
            Hielo cristalino de máxima pureza. Ideal para restaurantes, bares y eventos.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {iceProducts.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>
        </div>

        {/* Water Products */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#0066FF] flex items-center justify-center shadow-lg">
              <Droplet className="text-white" size={28} />
            </div>
            <h3 className="text-4xl font-black text-[#1A1A1A]">Agua <span className="text-[#0066FF]">Purificada</span></h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#666666] mb-8 text-lg"
          >
            Purificada, ozonizada y lista para tu tranquilidad. Delivery GRATIS.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {waterProducts.map((product, index) => (
              <ProductCard key={index} product={product} index={index} isWater />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}