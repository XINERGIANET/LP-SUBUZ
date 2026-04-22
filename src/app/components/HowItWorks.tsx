import { Download, UserPlus, CreditCard, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Download,
    number: '01',
    title: 'Descarga la App',
    description: 'Disponible en iOS y Android. Descarga gratis desde tu tienda de aplicaciones.',
  },
  {
    icon: UserPlus,
    number: '02',
    title: 'Crea tu Cuenta',
    description: 'Regístrate en segundos con tu email o redes sociales.',
  },
  {
    icon: CreditCard,
    number: '03',
    title: 'Recarga Saldo',
    description: 'Añade saldo a tu cuenta con tu método de pago preferido.',
  },
  {
    icon: Rocket,
    number: '04',
    title: '¡Comienza a Viajar!',
    description: 'Compra tickets, planifica rutas y disfruta de tu viaje.',
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Cómo Funciona
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Empieza en 4 pasos simples
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Es tan fácil que estarás listo en menos de 5 minutos
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line (hidden on mobile, shown on desktop between items) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
              )}
              
              <div className="relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4">
                  <step.icon size={32} className="text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
