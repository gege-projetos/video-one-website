import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { services, packages, testimonials } from '@/data/content';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PackagesSection from '@/components/sections/PackagesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';
import GalleryModal from '@/components/common/GalleryModal';

function PublicSite() {
  const [galleryService, setGalleryService] = useState(null);
  const [dynamicPackages, setDynamicPackages] = useState(packages);
  const [dynamicServices, setDynamicServices] = useState(services);
  const [dynamicTestimonials, setDynamicTestimonials] = useState(testimonials);

  // Carregar dados dinâmicos do localStorage
  useEffect(() => {
    const loadData = () => {
      const savedPackages = localStorage.getItem('videoOnePackages');
      const savedServices = localStorage.getItem('videoOneServices');
      const savedTestimonials = localStorage.getItem('videoOneTestimonials');

      if (savedPackages) {
        setDynamicPackages(JSON.parse(savedPackages));
      }
      if (savedServices) {
        const parsedServices = JSON.parse(savedServices);
        setDynamicServices(parsedServices);
        
        // Debug: verificar dados carregados
        console.log('Serviços carregados:', parsedServices);
        parsedServices.forEach(service => {
          console.log(`${service.name}: ${service.gallery?.length || 0} itens na galeria`);
        });
      }
      if (savedTestimonials) {
        setDynamicTestimonials(JSON.parse(savedTestimonials));
      }
    };

    // Carregar dados iniciais
    loadData();

    // Listener para detectar mudanças no localStorage
    const handleStorageChange = (e) => {
      if (e.key === 'videoOneServices' || e.key === 'videoOnePackages' || e.key === 'videoOneTestimonials') {
        loadData();
      }
    };

    // Adicionar listener para mudanças no localStorage
    window.addEventListener('storage', handleStorageChange);

    // Polling para detectar mudanças (fallback para mesma aba)
    const interval = setInterval(() => {
      loadData();
    }, 2000); // Verificar a cada 2 segundos

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const handlePackageSelect = (packageData) => {
    const message = `Olá! Tenho interesse no ${packageData.name} por ${packageData.price}.

📋 *Detalhes do Pacote:*
${packageData.features.map(feature => `✅ ${feature}`).join('\n')}

Gostaria de mais informações e agendar uma conversa!`;

    const whatsappUrl = `https://wa.me/5534991215989?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Função para forçar atualização dos dados (temporário para teste)
  const forceRefresh = () => {
    const savedServices = localStorage.getItem('videoOneServices');
    if (savedServices) {
      const parsedServices = JSON.parse(savedServices);
      setDynamicServices(parsedServices);
      console.log('Dados forçadamente atualizados:', parsedServices);
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Video One - Agência de Marketing Digital | Fotos e Vídeos Profissionais</title>
        <meta name="description" content="Video One - Sua agência de marketing digital especializada em fotos profissionais, vídeos para redes sociais, consultoria e muito mais. Transforme sua presença digital!" />
        <meta name="keywords" content="agência de marketing, fotos profissionais, vídeos, reels, instagram, consultoria digital" />
        <meta property="og:title" content="Video One - Agência de Marketing Digital" />
        <meta property="og:description" content="Transforme sua presença digital com fotos e vídeos profissionais" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://videoone.com.br" />
        <link rel="canonical" href="https://videoone.com.br" />
      </Helmet>

      <Header onNavClick={handleNavClick} onForceRefresh={forceRefresh} />

      <main>
        <div id="home">
          <HeroSection onNavClick={handleNavClick} />
        </div>
        <div id="services">
          <ServicesSection services={dynamicServices} onGalleryOpen={setGalleryService} />
        </div>
        <div id="packages">
          <PackagesSection packages={dynamicPackages} onPackageSelect={handlePackageSelect} />
        </div>
        <div id="testimonials">
          <TestimonialsSection testimonials={dynamicTestimonials} />
        </div>
        <CtaSection onNavClick={handleNavClick} />
      </main>

      <Footer />

      <GalleryModal service={galleryService} onClose={() => setGalleryService(null)} />
    </div>
  );
}

export default PublicSite; 