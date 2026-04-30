import { motion } from 'motion/react';
import { Target, Eye, Star, Users, Droplets, Snowflake, Truck, PackageCheck } from 'lucide-react';
import aguaBidon from '../../imports/image-20.png';

const procesos = [
  {
    title: 'Producción controlada',
    description: 'Iniciamos con un proceso de producción bajo estándares estrictos de calidad e higiene, garantizando nuestros productos, limpios y confiables.',
    icon: <Droplets className="w-8 h-8 text-[#0066FF]" strokeWidth={2} />
  },
  {
    title: 'Almacenamiento adecuado',
    description: 'Conservamos nuestros productos en condiciones óptimas para mantener su pureza, frescura y calidad hasta el momento de la distribución.',
    icon: <Snowflake className="w-8 h-8 text-[#0066FF]" strokeWidth={2} />
  },
  {
    title: 'Distribución eficiente',
    description: 'Contamos con una logística organizada que nos permite entregar a tiempo, asegurando rapidez y cumplimiento en cada pedido.',
    icon: <Truck className="w-8 h-8 text-[#0066FF]" strokeWidth={2} />
  },
  {
    title: 'Entrega y consumo final',
    description: 'Llegamos directamente a restaurantes, supermercados, minimarket, distribuidores y todos nuestros puntos de venta, garantizando que el producto llegue en perfectas condiciones al consumidor final.',
    icon: <PackageCheck className="w-8 h-8 text-[#0066FF]" strokeWidth={2} />
  }
];

export function About() {
  return (
    <section id="nosotros" className="py-16 md:py-24 relative overflow-hidden bg-white">
      
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
            className="text-xl text-[#666666] max-w-4xl mx-auto leading-relaxed font-medium px-4"
          >
            En Subuz, no solo vendemos agua y hielo. <span className="text-[#0066FF] font-bold">Entregamos confianza, calidad y compromiso en cada producto.</span>
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-24">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group h-full flex flex-col"
          >
            <div className="relative rounded-3xl overflow-hidden bg-[#F5F8FA] p-8 border-2 border-[#0066FF]/10 shadow-xl flex items-center justify-center min-h-[450px] flex-1">
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
              className="absolute -bottom-6 -right-2 md:-right-6 bg-white px-6 md:px-8 py-4 md:py-6 rounded-2xl shadow-xl border-2 border-[#0066FF]/10 z-20"
            >
              <div className="text-xl md:text-3xl font-black text-[#0066FF]">Resultados</div>
              <div className="text-sm md:text-base text-[#666666] font-bold">Visibles</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed">
              Somos una empresa construida con disciplina, enfoque y estándares altos. Sabemos que nuestros clientes no buscan solo un proveedor, buscan <strong className="text-[#1A1A1A]">seguridad, puntualidad y excelencia</strong>. Por eso trabajamos cada día para garantizar procesos limpios, productos seguros y un servicio que cumple —o supera— lo prometido.
            </p>
            
            <p className="text-[#4A4A4A] text-base md:text-lg leading-relaxed">
              Creemos en hacer las cosas bien desde la raíz. <span className="text-[#0066FF] font-bold">Sin excusas. Sin atajos.</span>
            </p>

            <div className="bg-[#F5F8FA] p-6 rounded-2xl border-l-4 border-[#0066FF] my-6">
              <p className="text-lg md:text-xl font-bold text-[#1A1A1A]">
                Calidad garantizada. Compromiso real. Resultados visibles.
              </p>
            </div>

            <div className="grid gap-6 mt-8">
              {/* Mission */}
              <motion.div 
                whileHover={{ x: 10 }}
                className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-[#0066FF]"></div>
                <h4 className="text-xl font-black text-[#1A1A1A] mb-2 flex items-center gap-3">
                  <Target className="w-6 h-6 text-[#0066FF]" /> Nuestra Misión
                </h4>
                <p className="text-[#666666] leading-relaxed">
                  Ofrecer productos de calidad constante, con un servicio eficiente que impulse a nuestros clientes a seguir creciendo.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div 
                whileHover={{ x: 10 }}
                className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-[#00B4D8]"></div>
                <h4 className="text-xl font-black text-[#1A1A1A] mb-2 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-[#00B4D8]" /> Nuestra Visión
                </h4>
                <p className="text-[#666666] leading-relaxed">
                  Ser un referente en la industria de agua y bebidas, destacando por nuestra capacidad operativa, cobertura y crecimiento sostenido.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Equipo y Valores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0066FF] to-[#004CBE] rounded-3xl p-8 md:p-12 mb-16 md:mb-24 text-white shadow-2xl relative overflow-hidden"
        >
          {/* Decoración de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
          <Users className="absolute -right-10 -bottom-10 w-64 h-64 text-white/5" />
          
          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 flex items-center gap-3">
                <Users className="w-10 h-10 text-white" /> Nuestro Equipo
              </h3>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                <strong className="text-white">Somos personas trabajando para personas.</strong> Nos esforzamos para que nuestro desempeño diario sea comodidad para nuestros clientes.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Star className="w-8 h-8 text-white fill-white" /> Valores Culturales
              </h4>
              <p className="text-white/90 text-lg leading-relaxed italic font-medium">
                “Superación, eficiencia, innovación, familia, equipo y actitud”
              </p>
            </div>
          </div>
        </motion.div>

        {/* Nuestros Procesos */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-4"
            >
              Nuestros <span className="text-[#0066FF]">Procesos</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#666666] text-lg max-w-2xl mx-auto"
            >
              Cuidamos cada detalle desde el origen hasta que llega a tus manos.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {procesos.map((proceso, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-[#F5F8FA] rounded-2xl p-6 md:p-8 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-[#0066FF]/10 group relative"
              >
                {/* Connector line for desktop */}
                {index < procesos.length - 1 && (
                  <div className="hidden lg:block absolute top-1/4 right-0 w-full h-[2px] bg-gradient-to-r from-[#0066FF]/20 to-transparent translate-x-1/2 z-0" />
                )}
                
                <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform">
                  {proceso.icon}
                </div>
                
                <h4 className="text-xl font-bold text-[#1A1A1A] mb-4 flex items-start gap-2">
                  <span className="text-[#0066FF] text-sm mt-1">{index + 1}.</span> 
                  {proceso.title}
                </h4>
                
                <p className="text-[#666666] leading-relaxed text-sm">
                  {proceso.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}