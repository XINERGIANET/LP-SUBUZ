import { MessageCircle, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { motion } from 'motion/react';
import subuzLogo from '../../imports/image-17.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] text-white py-8 md:py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0066FF] to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="mb-4">
                <img
                  src={subuzLogo}
                  alt="SUBUZ - Agua de Mesa y Hielo"
                  className="h-10 md:h-12 lg:h-14 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Tu mejor compañía para agua purificada y hielo gourmet en Chiclayo. 
                Calidad garantizada desde 2022.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-[#0066FF]/10 hover:bg-[#0066FF] rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-[#0066FF]/10 hover:bg-[#0066FF] rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-[#25D366]/10 hover:bg-[#25D366] rounded-full flex items-center justify-center transition-colors"
                >
                  <MessageCircle size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-black text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {['Inicio', 'Productos', 'Nosotros', 'Beneficios', 'Contacto'].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#0066FF] transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-[#0066FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-black text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <Phone size={18} className="text-[#0066FF] mt-1 flex-shrink-0" />
                <div>
                  <div className="font-bold text-white">920 488 526</div>
                  <div className="font-bold text-white">920 381 594</div>
                </div>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={18} className="text-[#0066FF] mt-1 flex-shrink-0" />
                <span>Chiclayo, Lambayeque, Perú</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MessageCircle size={18} className="text-[#25D366] mt-1 flex-shrink-0" />
                <span className="font-bold text-white">Delivery GRATIS</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm"
        >
          <p>© {currentYear} <span className="text-[#0066FF] font-bold">SUBUZ</span>. Todos los derechos reservados. | Hecho con ❤️ en Chiclayo</p>
        </motion.div>
      </div>
    </footer>
  );
}
