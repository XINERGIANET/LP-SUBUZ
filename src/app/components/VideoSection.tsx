import { motion } from 'motion/react';
import { Play, X } from 'lucide-react';
import { useState, useRef } from 'react';
import { assetUrl } from '../lib/assets';

const subuzVideo = assetUrl('subuz-video.mp4');
const subuzThumbnail = assetUrl('image-19.png');

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error("Video play failed, trying muted:", error);
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().then(() => {
            setIsPlaying(true);
          });
        }
      });
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section id="esencia" className="py-20 md:py-32 relative overflow-hidden scroll-mt-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-[#0066FF]/3 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left - Video Container */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Video Frame */}
            <div className="relative aspect-auto max-h-[60vh] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,102,255,0.15)] border-2 border-[#0066FF]/10 bg-black">
              {/* Play Button Overlay (Thumbnail) */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-cover bg-center z-20"
                  style={{ backgroundImage: `url(${subuzThumbnail})` }}
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  
                  <motion.button
                    onClick={handlePlay}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative z-30"
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#0066FF]/30"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 0, 0.6],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:bg-[#0066FF] transition-all duration-300">
                      <Play className="text-[#0066FF] group-hover:text-white transition-colors" size={40} fill="currentColor" />
                    </div>
                  </motion.button>

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                    <h3 className="text-lg md:text-xl font-black text-white">
                      SUBUZ #MásGourmet
                    </h3>
                  </div>
                </div>
              )}

              <video
                ref={videoRef}
                className="w-full h-full max-h-[60vh] object-contain"
                src={subuzVideo}
                poster={subuzThumbnail}
                controls={isPlaying}
                playsInline
                webkitPlaysInline
                preload="auto"
              />

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

          {/* Right - Content Section */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] mb-6 leading-[1.1]">
                Conoce Nuestra <br />
                <span className="text-[#0066FF]">Esencia</span>
              </h2>
              <p className="text-lg md:text-xl text-[#666666] leading-relaxed mb-8">
                Descubre cómo SUBUZ se ha convertido en sinónimo de calidad, pureza y confianza en cada gota. Nuestra pasión es servirte lo mejor de Chiclayo.
              </p>
              
              {/* Optional brand accent */}
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="h-1 w-12 bg-[#0066FF] rounded-full"></div>
                <span className="text-sm font-black uppercase tracking-widest text-[#0066FF]">Desde 2021</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
