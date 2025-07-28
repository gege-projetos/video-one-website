import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const HeroSection = ({ onNavClick }) => {
  const stats = [
    { value: '200+', label: 'Clientes Atendidos' },
    { value: '2M+', label: 'Visualizações' },
    { value: '99%', label: 'Satisfação' },
    { value: '24h', label: 'Resposta para seu Orçamento' },
  ];

  return (
    <section className="pt-20 pb-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto animate-in fade-in duration-1000">
          {/* Logo centralizada */}
          <div className="mb-0 flex justify-center">
            <img 
              src="/logo-video1.png" 
              alt="Video 1 Logo" 
              className="h-40 w-auto"
              onError={(e) => {
                // Fallback se a imagem não carregar
                e.target.style.display = 'none';
              }}
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Transforme sua
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent block">Presença Digital</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Somos especialistas em criar conteúdo visual impactante que converte seguidores em clientes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => onNavClick('packages')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center justify-center shadow-lg"
            >
              Ver Pacotes
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button 
              onClick={() => window.open('https://wa.me/5534991215989', '_blank')}
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white text-lg px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center"
            >
              Falar no WhatsApp
              <Phone className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-in fade-in duration-1000 delay-300">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;