# Video One - Site Institucional

Site institucional da Video One, agência de marketing digital especializada em fotos e vídeos profissionais.

## 🚀 Funcionalidades

- **Site Público**: Landing page moderna e responsiva
- **Painel Administrativo**: Gerenciamento de conteúdo sem necessidade de código
- **Upload de Mídia**: Sistema integrado com Cloudinary para fotos e vídeos
- **Conteúdo Dinâmico**: Edição de preços, serviços e depoimentos em tempo real
- **SEO Otimizado**: Meta tags e estrutura para melhor indexação

## 📋 Pré-requisitos

- Node.js 16+ 
- Conta no Cloudinary (gratuita)
- Conta no Vercel/Netlify (gratuita)

## 🛠️ Instalação

1. **Clone o repositório**
```bash
git clone <seu-repositorio>
cd video-one-website
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp env.example .env.local
```

Edite o arquivo `.env.local` com suas credenciais:

```env
# Cloudinary Configuration
VITE_CLOUDINARY_CLOUD_NAME=seu_cloud_name
VITE_CLOUDINARY_API_KEY=sua_api_key
VITE_CLOUDINARY_API_SECRET=seu_api_secret
VITE_CLOUDINARY_UPLOAD_PRESET=seu_upload_preset

# Site Configuration
VITE_SITE_URL=https://seu-dominio.com
VITE_WHATSAPP_NUMBER=5534991215989
```

## 🔧 Configuração do Cloudinary

1. **Crie uma conta gratuita** em [cloudinary.com](https://cloudinary.com)
2. **Obtenha suas credenciais** no Dashboard:
   - Cloud Name
   - API Key
   - API Secret
3. **Configure o Upload Preset**:
   - Vá em Settings > Upload
   - Crie um novo Upload Preset
   - Configure como "Unsigned" para uploads do frontend

## 🚀 Deploy

### Opção 1: Vercel (Recomendado)

1. **Conecte seu repositório** ao Vercel
2. **Configure as variáveis de ambiente** no painel do Vercel
3. **Deploy automático** a cada push

### Opção 2: Netlify

1. **Conecte seu repositório** ao Netlify
2. **Configure as variáveis de ambiente**
3. **Build command**: `npm run build`
4. **Publish directory**: `dist`

### Opção 3: Deploy Manual

```bash
npm run build
# Faça upload da pasta 'dist' para seu servidor
```

## 📱 Como Usar

### Acessando o Painel Administrativo

1. Acesse: `https://seu-dominio.com/admin`
2. Gerencie:
   - **Pacotes**: Preços e características
   - **Serviços**: Descrições e galerias
   - **Depoimentos**: Testimonials dos clientes
   - **Mídia**: Upload de fotos e vídeos

### Upload de Mídia

1. **Acesse a aba "Mídia"** no painel admin
2. **Arraste arquivos** ou clique para selecionar
3. **Formatos suportados**:
   - Imagens: JPG, PNG, GIF, WebP
   - Vídeos: MP4, MOV, AVI, WebM
4. **Os arquivos são otimizados** automaticamente pelo Cloudinary

### Edição de Conteúdo

- **Preços**: Altere valores e características dos pacotes
- **Textos**: Modifique descrições e títulos
- **Depoimentos**: Adicione novos clientes satisfeitos
- **Mídia**: Substitua fotos e vídeos facilmente

## 🎨 Personalização

### Cores e Estilo

Edite `tailwind.config.js` para personalizar:
- Cores da marca
- Tipografia
- Espaçamentos

### Conteúdo Padrão

Modifique `src/data/content.js` para:
- Serviços padrão
- Pacotes iniciais
- Depoimentos base

## 🔒 Segurança

- **Painel Admin**: Protegido por rota específica
- **Uploads**: Validados e otimizados
- **Dados**: Armazenados localmente no navegador

## 📊 Performance

- **Lazy Loading**: Imagens e vídeos carregam sob demanda
- **Otimização**: Cloudinary otimiza automaticamente
- **CDN**: Distribuição global de conteúdo
- **SEO**: Meta tags e estrutura otimizada

## 🆘 Suporte

### Problemas Comuns

1. **Upload não funciona**:
   - Verifique as credenciais do Cloudinary
   - Confirme o Upload Preset está configurado

2. **Site não carrega**:
   - Verifique as variáveis de ambiente
   - Confirme o build foi executado corretamente

3. **Mídia não aparece**:
   - Verifique as URLs do Cloudinary
   - Confirme os arquivos foram enviados

### Contato

Para suporte técnico: [seu-email@dominio.com]

## 📄 Licença

Este projeto é privado e de uso exclusivo da Video One.

---

**Video One** - Transformando presenças digitais desde 2024 