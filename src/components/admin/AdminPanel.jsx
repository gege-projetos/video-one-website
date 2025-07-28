import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Settings, 
  Package, 
  Users, 
  Image, 
  Save, 
  Plus, 
  Trash2,
  Edit,
  Eye
} from 'lucide-react';
import MediaUploader from './MediaUploader';
import { useToast } from '@/components/ui/use-toast';
import { services as originalServices, packages as originalPackages, testimonials as originalTestimonials } from '@/data/content';
import { uploadToCloudinary } from '@/lib/cloudinary';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('packages');
  const [packages, setPackages] = useState([]);
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [editingService, setEditingService] = useState(null);
  const { toast } = useToast();

  // Carregar dados do localStorage ou usar dados originais
  useEffect(() => {
    const savedPackages = localStorage.getItem('videoOnePackages');
    const savedServices = localStorage.getItem('videoOneServices');
    const savedTestimonials = localStorage.getItem('videoOneTestimonials');

    // Usar dados salvos ou dados originais
    setPackages(savedPackages ? JSON.parse(savedPackages) : originalPackages);
    
    if (savedServices) {
      const parsedServices = JSON.parse(savedServices);
      console.log('Dados carregados do localStorage:', parsedServices);
      
      // Verificar se há dados antigos (com src sendo nome do arquivo)
      const hasOldData = parsedServices.some(service => 
        service.gallery?.some(item => 
          item.src && !item.src.startsWith('data:')
        )
      );
      
      if (hasOldData) {
        console.log('Dados antigos detectados! Limpando...');
        // Limpar dados antigos e usar dados originais
        localStorage.removeItem('videoOneServices');
        setServices(originalServices);
      } else {
        setServices(parsedServices);
      }
    } else {
      setServices(originalServices);
    }
    
    setTestimonials(savedTestimonials ? JSON.parse(savedTestimonials) : originalTestimonials);
  }, []);

  // Salvar dados no localStorage
  const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
    toast({
      title: "Salvo com sucesso!",
      description: "As alterações foram salvas.",
    });
  };

  // Gerenciar Pacotes
  const handlePackageSave = (packageData) => {
    if (editingItem) {
      const updated = packages.map(p => p.id === editingItem.id ? packageData : p);
      setPackages(updated);
      saveData('videoOnePackages', updated);
    } else {
      const newPackage = { ...packageData, id: Date.now().toString() };
      setPackages([...packages, newPackage]);
      saveData('videoOnePackages', [...packages, newPackage]);
    }
    setEditingItem(null);
  };

  const handlePackageDelete = (id) => {
    const updated = packages.filter(p => p.id !== id);
    setPackages(updated);
    saveData('videoOnePackages', updated);
  };

  // Gerenciar Serviços
  const handleServiceSave = (serviceData) => {
    if (editingService) {
      const updated = services.map(s => s.id === editingService.id ? serviceData : s);
      setServices(updated);
      saveData('videoOneServices', updated);
    } else {
      const newService = { ...serviceData, id: Date.now().toString() };
      setServices([...services, newService]);
      saveData('videoOneServices', [...services, newService]);
    }
    setEditingService(null);
  };

  const handleServiceDelete = (id) => {
    const updated = services.filter(s => s.id !== id);
    setServices(updated);
    saveData('videoOneServices', updated);
  };

  // Adicionar mídia ao serviço com upload para Cloudinary
  const handleAddMediaToService = async (serviceId, file) => {
    try {
      console.log('Iniciando upload para Cloudinary:', file.name, 'Tipo:', file.type);
      
      // Mostrar toast de carregamento
      toast({
        title: "Fazendo upload...",
        description: `${file.name} está sendo enviado para o servidor.`,
      });
      
      // Fazer upload para Cloudinary
      const result = await uploadToCloudinary(file);
      
      if (!result.success) {
        throw new Error(result.error);
      }
      
      const mediaItem = {
        type: file.type.startsWith('image/') ? 'image' : 'video',
        src: result.url, // URL permanente do Cloudinary
        alt: file.name,
        publicId: result.publicId // Para possível remoção futura
      };

      console.log('Item de mídia criado:', mediaItem);

      const updated = services.map(service => {
        if (service.id === serviceId) {
          return {
            ...service,
            gallery: [...(service.gallery || []), mediaItem]
          };
        }
        return service;
      });
      setServices(updated);
      saveData('videoOneServices', updated);
      
      // Debug: verificar o que foi salvo
      console.log('Serviço atualizado:', updated.find(s => s.id === serviceId));
      console.log('Total de itens na galeria:', updated.find(s => s.id === serviceId)?.gallery?.length);
      
      toast({
        title: "Mídia adicionada permanentemente!",
        description: `${file.name} foi salva no servidor e adicionada à galeria.`,
      });
    } catch (error) {
      console.error('Erro ao adicionar mídia:', error);
      toast({
        title: "Erro ao adicionar mídia",
        description: "Não foi possível fazer upload do arquivo. Verifique sua conexão.",
      });
    }
  };

  // Remover mídia do serviço
  const handleRemoveMediaFromService = (serviceId, mediaIndex) => {
    const updated = services.map(service => {
      if (service.id === serviceId) {
        const newGallery = service.gallery.filter((_, index) => index !== mediaIndex);
        return {
          ...service,
          gallery: newGallery
        };
      }
      return service;
    });
    setServices(updated);
    saveData('videoOneServices', updated);
    toast({
      title: "Mídia removida!",
      description: "A foto/vídeo foi removida da galeria.",
    });
  };

  // Gerenciar Depoimentos
  const handleTestimonialSave = (testimonialData) => {
    if (editingItem) {
      const updated = testimonials.map(t => t.id === editingItem.id ? testimonialData : t);
      setTestimonials(updated);
      saveData('videoOneTestimonials', updated);
    } else {
      const newTestimonial = { ...testimonialData, id: Date.now().toString() };
      setTestimonials([...testimonials, newTestimonial]);
      saveData('videoOneTestimonials', [...testimonials, newTestimonial]);
    }
    setEditingItem(null);
  };

  const handleTestimonialDelete = (id) => {
    const updated = testimonials.filter(t => t.id !== id);
    setTestimonials(updated);
    saveData('videoOneTestimonials', updated);
  };

  // Função para limpar dados antigos
  const clearOldData = () => {
    localStorage.removeItem('videoOneServices');
    localStorage.removeItem('videoOnePackages');
    localStorage.removeItem('videoOneTestimonials');
    setServices(originalServices);
    setPackages(originalPackages);
    setTestimonials(originalTestimonials);
    toast({
      title: "Dados limpos!",
      description: "Todos os dados antigos foram removidos.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Painel Administrativo</h1>
              <p className="text-gray-600">Gerencie o conteúdo do seu site</p>
            </div>
            <button
              onClick={clearOldData}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm"
              title="Limpar dados antigos"
            >
              🗑️ Limpar Dados Antigos
            </button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="packages" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Pacotes
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Serviços
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Depoimentos
            </TabsTrigger>
            <TabsTrigger value="media" className="flex items-center gap-2">
              <Image className="w-4 h-4" />
              Mídia
            </TabsTrigger>
          </TabsList>

          {/* Aba de Pacotes */}
          <TabsContent value="packages" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Gerenciar Pacotes</CardTitle>
                  <Button onClick={() => setEditingItem({})}>
                    <Plus className="w-4 h-4 mr-2" />
                    Novo Pacote
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {packages.map((pkg) => (
                    <div key={pkg.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{pkg.name}</h3>
                        <p className="text-sm text-gray-600">{pkg.price}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => setEditingItem(pkg)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handlePackageDelete(pkg.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Aba de Serviços */}
          <TabsContent value="services" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Gerenciar Serviços</CardTitle>
                  <Button onClick={() => setEditingService({})}>
                    <Plus className="w-4 h-4 mr-2" />
                    Novo Serviço
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {services.map((service) => (
                    <div key={service.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-medium text-lg">{service.name}</h3>
                          <p className="text-sm text-gray-600">{service.description}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" onClick={() => setEditingService(service)}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm" onClick={() => handleServiceDelete(service.id)}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      {/* Galeria do serviço */}
                      <div className="mt-4">
                        <h4 className="font-medium mb-2">Galeria ({service.gallery?.length || 0} itens)</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                          {service.gallery?.map((item, index) => (
                            <div key={index} className="bg-gray-100 rounded p-2 text-xs relative group">
                              <div className="flex items-center justify-between">
                                <span>
                                  {item.type === 'image' ? '📷' : '🎥'} {item.alt || 'Sem descrição'}
                                </span>
                                <button
                                  onClick={() => handleRemoveMediaFromService(service.id, index)}
                                  className="text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity"
                                  title="Remover"
                                >
                                  <Trash2 className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                                                 {/* Botão para adicionar mídia */}
                         <Button 
                           variant="outline" 
                           size="sm"
                           onClick={() => {
                             const fileInput = document.createElement('input');
                             fileInput.type = 'file';
                             fileInput.accept = 'image/*,video/*';
                             fileInput.multiple = false;
                             fileInput.onchange = async (e) => {
                               const file = e.target.files[0];
                               if (file) {
                                 await handleAddMediaToService(service.id, file);
                               }
                             };
                             fileInput.click();
                           }}
                         >
                           <Plus className="w-4 h-4 mr-2" />
                           Adicionar Foto/Vídeo
                         </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Aba de Depoimentos */}
          <TabsContent value="testimonials" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Gerenciar Depoimentos</CardTitle>
                  <Button onClick={() => setEditingItem({})}>
                    <Plus className="w-4 h-4 mr-2" />
                    Novo Depoimento
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.profession}</p>
                        <p className="text-sm mt-1">{testimonial.text}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => setEditingItem(testimonial)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => handleTestimonialDelete(testimonial.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Aba de Mídia */}
          <TabsContent value="media" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Gerenciar Mídia</CardTitle>
              </CardHeader>
              <CardContent>
                <MediaUploader 
                  onUploadComplete={(results) => {
                    toast({
                      title: "Upload concluído!",
                      description: `${results.length} arquivo(s) enviado(s) com sucesso.`,
                    });
                  }}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel; 