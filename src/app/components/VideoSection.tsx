import { motion } from 'motion/react';
import { Play, X } from 'lucide-react';
import { useState, useRef } from 'react';
import subuzVideo from '../../imports/subuz-video.mp4';
import subuzThumbnail from '../../imports/image-19.png';

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 100);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="py-16 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-[#0066FF]/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] mb-4 md:mb-6 px-4"
          >
            Conoce Nuestra <span className="text-[#0066FF]">Esencia</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed"
          >
            Descubre cómo SUBUZ se ha convertido en sinónimo de calidad, pureza y confianza en cada gota
          </motion.p>
        </div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Video Frame */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-2 border-[#0066FF]/10 bg-[#1A1A1A]">
            {/* Play Button Overlay (Thumbnail) */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-cover bg-center z-20"
                style={{ backgroundImage: `url(${subuzThumbnail})` }}
              >
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                
                {/* Play Button */}
                <motion.button
                  onClick={handlePlay}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  {/* Pulse rings */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#0066FF]/30"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Play button */}
                  <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:bg-[#0066FF] transition-all duration-300">
                    <Play className="text-[#0066FF] group-hover:text-white transition-colors" size={48} fill="currentColor" />
                  </div>
                </motion.button>

                {/* Video Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-2xl md:text-3xl font-black text-white">
                    SUBUZ: Tu Mejor Compañía #MásGourmet
                  </h3>
                </div>
              </div>
            )}

            {/* Actual Video Tag */}
            <video
              ref={videoRef}
              className={`w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
              src={subuzVideo}
              controls={isPlaying}
              playsInline
            />

            {/* Close button when playing */}
            {isPlaying && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleClose}
                className="absolute top-4 right-4 z-30 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <X size={24} />
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Bottom Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto"
        >
          {[
            {
              title: 'Proceso de Purificación',
              description: 'Tecnología de punta para garantizar la máxima pureza',
            },
            {
              title: 'Certificación Sanitaria',
              description: 'Cumplimos con los más altos estándares de calidad',
            },
            {
              title: 'Compromiso con Chiclayo',
              description: 'Orgullosamente chiclayanos, sirviendo a nuestra ciudad',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl bg-white border-2 border-[#0066FF]/10 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-lg font-black text-[#0066FF] mb-2">{item.title}</h4>
              <p className="text-[#666666] text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
