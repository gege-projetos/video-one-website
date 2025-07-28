import React from 'react';
import { Phone } from 'lucide-react';

const Header = ({ onNavClick, onForceRefresh }) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Nome da empresa */}
            <div>
              <h1 className="text-2xl font-bold text-white" translate="no" lang="en">Video One</h1>
              <p className="text-sm text-gray-300">Agência e Produtora</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => onNavClick('home')} className="text-white hover:text-purple-400 transition-colors">Início</button>
            <button onClick={() => onNavClick('services')} className="text-white hover:text-purple-400 transition-colors">Serviços</button>
            <button onClick={() => onNavClick('packages')} className="text-white hover:text-purple-400 transition-colors">Pacotes</button>
            <button onClick={() => onNavClick('testimonials')} className="text-white hover:text-purple-400 transition-colors">Depoimentos</button>
          </nav>
          <div className="flex items-center space-x-3">
            {/* Botão de teste temporário */}
            {onForceRefresh && (
              <button 
                onClick={onForceRefresh}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded text-xs"
                title="Forçar atualização (teste)"
              >
                🔄
              </button>
            )}
            <button 
              onClick={() => window.open('https://wa.me/5534991215989', '_blank')}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center shadow-lg"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contato
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;