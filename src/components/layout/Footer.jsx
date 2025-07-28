import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-black/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/7425d1a0-9528-4a72-add2-28088d9f453c/3eac7c9e8e27c5877a490a2d1e839c67.png" 
                alt="Video One Logo" 
                className="h-12 w-auto"
              />
              <div>
                <span className="text-xl font-bold gradient-text">Video One</span>
                <p className="text-sm text-gray-400">Agência e Produtora</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Transformamos sua presença digital com conteúdo visual de alta qualidade que converte.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="icon"
                className="rounded-full"
                onClick={() => window.open('https://wa.me/5534991215989', '_blank')}
              >
                <Phone className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="rounded-full"
                onClick={() => toast({ title: "🚧 Esta funcionalidade ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀" })}
              >
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <span className="font-semibold text-white mb-4 block">Serviços</span>
            <ul className="space-y-2 text-gray-400">
              <li>Fotos Profissionais</li>
              <li>Vídeos para Redes</li>
              <li>Consultoria Digital</li>
              <li>Tráfego Pago</li>
            </ul>
          </div>
          
          <div>
            <span className="font-semibold text-white mb-4 block">Contato</span>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                (34) 9 9121-5989
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                contato@videoone.com.br
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Minas Gerais, Brasil
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Video One. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;