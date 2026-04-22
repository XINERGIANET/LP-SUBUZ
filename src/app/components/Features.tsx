import { Ticket, MapPin, Clock, Wallet, Bell, Shield } from 'lucide-react';

const features = [
  {
    icon: Ticket,
    title: 'Tickets Digitales',
    description: 'Compra y almacena tus tickets de forma segura en tu teléfono. Olvídate del papel.',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: MapPin,
    title: 'Planificador de Rutas',
    description: 'Encuentra la mejor ruta para llegar a tu destino de forma rápida y eficiente.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Clock,
    title: 'Horarios en Tiempo Real',
    description: 'Consulta los horarios actualizados y nunca pierdas tu transporte.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Wallet,
    title: 'Recarga Fácil',
    description: 'Recarga tu saldo desde la app con múltiples métodos de pago disponibles.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Bell,
    title: 'Notificaciones',
    description: 'Recibe alertas sobre retrasos, cambios de ruta y ofertas especiales.',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: Shield,
    title: 'Pago Seguro',
    description: 'Todas tus transacciones están protegidas con la máxima seguridad.',
    color: 'bg-indigo-100 text-indigo-600',
  },
];

export function Features() {
  return (
    <section id="caracteristicas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Características
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Todo lo que necesitas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Una experiencia completa para hacer tus viajes más cómodos y eficientes
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
