# 🚀 Guia de Configuração Rápida - Video One

## ✅ O que foi implementado

✅ **Site independente** - Removido dependências da Hostinger Horizons  
✅ **Painel administrativo** - Acesse em `/admin` para gerenciar conteúdo  
✅ **Sistema de upload** - Integração com Cloudinary para fotos e vídeos  
✅ **Conteúdo dinâmico** - Edite preços, textos e depoimentos sem código  
✅ **Deploy independente** - Configure para Vercel, Netlify ou seu servidor  

## 🔧 Passos para Configurar

### 1. Configurar Cloudinary (Gratuito)

1. **Crie conta** em [cloudinary.com](https://cloudinary.com)
2. **Pegue suas credenciais** no Dashboard:
   - Cloud Name
   - API Key  
   - API Secret
3. **Configure Upload Preset**:
   - Settings → Upload
   - Crie novo preset
   - Marque como "Unsigned"

### 2. Configurar Variáveis de Ambiente

Crie arquivo `.env.local` na raiz do projeto:

```env
VITE_CLOUDINARY_CLOUD_NAME=seu_cloud_name
VITE_CLOUDINARY_API_KEY=sua_api_key  
VITE_CLOUDINARY_API_SECRET=seu_api_secret
VITE_CLOUDINARY_UPLOAD_PRESET=seu_upload_preset
VITE_SITE_URL=https://seu-dominio.com
VITE_WHATSAPP_NUMBER=5534991215989
```

### 3. Instalar Dependências

```bash
npm install
```

### 4. Testar Localmente

```bash
npm run dev
```

Acesse: `http://localhost:3000`

## 🌐 Deploy no Vercel (Recomendado)

### Opção 1: Deploy Automático

1. **Conecte seu GitHub** ao Vercel
2. **Configure variáveis** no painel do Vercel
3. **Deploy automático** a cada push

### Opção 2: Deploy Manual

```bash
npm run build
# Faça upload da pasta 'dist' para o Vercel
```

## 📱 Como Usar o Painel Admin

### Acessar
- URL: `https://seu-dominio.com/admin`
- Sem senha (proteção básica por rota)

### Funcionalidades

#### 📦 Gerenciar Pacotes
- Altere preços
- Modifique características
- Adicione/remova pacotes

#### ⚙️ Gerenciar Serviços  
- Edite descrições
- Adicione galerias de fotos/vídeos
- Modifique features

#### 💬 Gerenciar Depoimentos
- Adicione novos clientes
- Edite textos
- Controle avaliações

#### 🖼️ Upload de Mídia
- Arraste fotos/vídeos
- Otimização automática
- URLs prontas para usar

## 🎯 Próximos Passos

1. **Configure o Cloudinary** (15 min)
2. **Teste localmente** (5 min)  
3. **Deploy no Vercel** (10 min)
4. **Personalize conteúdo** (30 min)
5. **Configure domínio** (opcional)

## 🔍 Estrutura do Projeto

```
src/
├── components/
│   ├── admin/          # Painel administrativo
│   ├── site/           # Site público
│   ├── layout/         # Header, Footer
│   ├── sections/       # Seções do site
│   └── ui/             # Componentes base
├── data/
│   └── content.js      # Conteúdo padrão
└── lib/
    └── cloudinary.js   # Configuração de mídia
```

## 💡 Dicas Importantes

- **Backup**: Os dados ficam no navegador (localStorage)
- **Mídia**: Cloudinary otimiza automaticamente
- **SEO**: Meta tags já configuradas
- **Performance**: Lazy loading implementado

## 🆘 Suporte

**Problema**: Upload não funciona  
**Solução**: Verifique credenciais do Cloudinary

**Problema**: Site não carrega  
**Solução**: Confirme variáveis de ambiente

**Problema**: Mídia não aparece  
**Solução**: Verifique URLs do Cloudinary

---

**🎉 Seu site está pronto para ser independente e profissional!** 