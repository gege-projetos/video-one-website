import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { services, packages, testimonials } from '@/data/content';

// Componentes do site público
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PackagesSection from '@/components/sections/PackagesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';
import GalleryModal from '@/components/common/GalleryModal';

// Componente do painel administrativo
import AdminPanel from '@/components/admin/AdminPanel';

// Página principal do site
const PublicSite = () => {
  const [galleryService, setGalleryService] = useState(null);
  const [dynamicPackages, setDynamicPackages] = useState(packages);
  const [dynamicServices, setDynamicServices] = useState(services);
  const [dynamicTestimonials, setDynamicTestimonials] = useState(testimonials);

  // Carregar dados dinâmicos do localStorage
  useEffect(() => {
    const savedPackages = localStorage.getItem('videoOnePackages');
    const savedServices = localStorage.getItem('videoOneServices');
    const savedTestimonials = localStorage.getItem('videoOneTestimonials');

    if (savedPackages) {
      setDynamicPackages(JSON.parse(savedPackages));
    }
    if (savedServices) {
      setDynamicServices(JSON.parse(savedServices));
    }
    if (savedTestimonials) {
      setDynamicTestimonials(JSON.parse(savedTestimonials));
    }
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

      <Header onNavClick={handleNavClick} />

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
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicSite />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;