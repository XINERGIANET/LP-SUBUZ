import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Ahorra tiempo en filas y taquillas',
  'Planifica tus viajes con anticipación',
  'Descuentos exclusivos para usuarios',
  'Historial completo de tus viajes',
  'Soporte 24/7 cuando lo necesites',
  'Actualizaciones en tiempo real',
];

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <div className="relative order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1760998805180-749bfcb6673f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjB1c2luZyUyMHNtYXJ0cGhvbmUlMjB0cmFuc3BvcnRhdGlvbnxlbnwxfHx8fDE3NzYzNzU5NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Personas usando smartphone en transporte"
                  className="w-full h-72 object-cover"
                />
              </div>
              
              {/* Two smaller images */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1772961519163-f59e0b5bef35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGlja2V0JTIwbW9iaWxlJTIwYXBwfGVufDF8fHx8MTc3NjM3NTk1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="App móvil de tickets"
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1723811559697-c4ed3a1e2dee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXN0JTIwdHJhbnNpdCUyMG1ldHJvfGVufDF8fHx8MTc3NjM3NTk1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Metro rápido"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-2xl shadow-2xl hidden lg:block">
              <div className="text-4xl font-bold mb-1">98%</div>
              <div className="text-sm opacity-90">Satisfacción</div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Beneficios
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Por qué elegir Subuz
            </h2>
            
            <p className="text-xl text-gray-600">
              Únete a miles de usuarios que ya disfrutan de una forma más inteligente 
              de viajar en transporte público.
            </p>
            
            {/* Benefits List */}
            <div className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            
            <button className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl">
              Conocer Más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
