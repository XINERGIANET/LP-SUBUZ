import { Users, Droplet, Award, Truck } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const stats = [
  {
    icon: Users,
    value: 2000,
    suffix: '+',
    label: 'Clientes Felices',
  },
  {
    icon: Droplet,
    value: 50000,
    suffix: 'L',
    label: 'Litros Entregados',
  },
  {
    icon: Award,
    value: 100,
    suffix: '%',
    label: 'Pureza Garantizada',
  },
  {
    icon: Truck,
    value: 0,
    suffix: '$',
    label: 'Delivery Gratis',
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      className="text-3xl md:text-4xl font-black leading-none"
    >
      {count.toLocaleString()}{suffix}
    </motion.div>
  );
}

export function Stats() {
  return (
    <section id="clientes" className="py-12 md:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-[#0066FF]/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0066FF]/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A1A1A] mb-4 px-4"
          >
            Números que hablan <span className="text-[#0066FF]">por nosotros</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#666666] max-w-2xl mx-auto"
          >
            Desde nuestro inicio, hemos mantenido los más altos estándares de calidad.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <motion.div
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white p-6 md:p-8 rounded-3xl border-2 border-[#E5E7EB] group-hover:border-[#0066FF]/30 transition-all duration-300 text-center shadow-md hover:shadow-lg"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-[#0066FF] flex items-center justify-center shadow-lg relative"
                >
                  <stat.icon className="text-white" size={28} />
                  
                </motion.div>

                {/* Value with counter animation */}
                <div className="text-[#0066FF] mb-3">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <div className="text-[#666666] text-xs md:text-sm font-bold">
                  {stat.label}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
