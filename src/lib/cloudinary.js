// Configuração do Cloudinary para upload de mídia
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dvqzyzgbr';
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'video_one_media';
const CLOUDINARY_API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY || '957885256933792';
const CLOUDINARY_API_SECRET = import.meta.env.VITE_CLOUDINARY_API_SECRET || '9K7fC6GqRSNURH20MAVtA8YzDbo';

// Função para fazer upload de imagem para o Cloudinary
export const uploadToCloudinary = async (file) => {
  try {
    console.log('Iniciando upload para Cloudinary:', file.name);
    
    // Criar FormData para enviar o arquivo
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('cloud_name', CLOUDINARY_CLOUD_NAME);
    
    // Fazer upload para o Cloudinary
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`,
      {
        method: 'POST',
        body: formData
      }
    );
    
    if (!response.ok) {
      throw new Error(`Erro no upload: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Upload concluído:', data.secure_url);
    
    return {
      success: true,
      url: data.secure_url,
      publicId: data.public_id,
      format: data.format,
      size: data.bytes
    };
    
  } catch (error) {
    console.error('Erro no upload para Cloudinary:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Função para deletar mídia do Cloudinary (opcional)
export const deleteFromCloudinary = async (publicId) => {
  try {
    const response = await fetch(`/api/cloudinary/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ publicId })
    });
    
    return response.ok;
  } catch (error) {
    console.error('Erro ao deletar do Cloudinary:', error);
    return false;
  }
};

// Função para obter URL otimizada
export const getOptimizedUrl = (url, options = {}) => {
  if (!url || !url.includes('cloudinary.com')) {
    return url;
  }
  
  const { width, height, quality = 'auto', format = 'auto' } = options;
  let optimizedUrl = url;
  
  // Adicionar parâmetros de otimização
  if (width || height) {
    const transform = `w_${width || 'auto'},h_${height || 'auto'},q_${quality},f_${format}`;
    optimizedUrl = url.replace('/upload/', `/upload/${transform}/`);
  }
  
  return optimizedUrl;
}; 