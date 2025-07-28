import React from 'react';
import { Upload } from 'lucide-react';

const MediaUploader = ({ onUploadComplete, folder = 'video-one' }) => {
  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // Simular upload por enquanto
      const results = Array.from(files).map(file => ({
        url: URL.createObjectURL(file),
        name: file.name,
        size: file.size,
        type: file.type
      }));
      
      if (onUploadComplete) {
        onUploadComplete(results);
      }
    }
  };

  return (
    <div className="w-full">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer transition-colors hover:border-gray-400">
        <input 
          type="file" 
          multiple 
          accept="image/*,video/*"
          onChange={handleFileUpload}
          className="hidden"
          id="file-upload"
        />
        <label htmlFor="file-upload" className="cursor-pointer">
          <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <div>
            <p className="text-lg font-medium text-gray-700 mb-2">
              Clique para selecionar arquivos
            </p>
            <p className="text-sm text-gray-500">
              Suporta imagens (JPG, PNG, GIF, WebP) e vídeos (MP4, MOV, AVI, WebM)
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default MediaUploader; 