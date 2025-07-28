import React from 'react';
import { Eye, Play, TrendingUp, Cloud, ShoppingCart, DollarSign, Instagram, FileText, Globe } from 'lucide-react';

const ServicesSection = ({ services, onGalleryOpen }) => {
  const icons = {
    'Fotos Profissionais': Eye,
    'Vídeos para Reels e YouTube': Play,
    'Consultoria de Posicionamento': TrendingUp,
    'Gravação de Cursos (Nuvem)': Cloud,
    'Cursos na Plataforma de Vendas': ShoppingCart,
    'Tráfego Pago': DollarSign,
    'Administração de Instagram': Instagram,
    'Criação de Landing Page': FileText,
    'Sites Funcionais WordPress': Globe,
  };

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-purple-400">Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Oferecemos soluções completas para transformar sua presença digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = icons[service.name] || Eye;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 animate-in fade-in duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <button
                  onClick={() => onGalleryOpen(service)}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-full font-semibold transition-colors"
                >
                  Ver Galeria
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;