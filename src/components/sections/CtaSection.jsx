import React from 'react';
import { Phone, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaSection = ({ onNavClick }) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Decolar</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Entre em contato agora e vamos criar algo incrível juntos!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/5534991215989', '_blank')}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => onNavClick('packages')}
              className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white text-lg px-8 py-4"
            >
              <Package className="w-5 h-5 mr-2" />
              Ver Pacotes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;