# Como Adicionar Fotos e Vídeos aos Serviços

## **OPÇÃO 1: PELO PAINEL ADMINISTRATIVO (RECOMENDADO)**

### Passo a Passo:
1. **Acesse:** `http://localhost:3004/admin`
2. **Clique na aba "Serviços"**
3. **Selecione o serviço** que deseja editar
4. **Use o campo de upload** para adicionar fotos/vídeos
5. **Clique em "Salvar"**

---

## **OPÇÃO 2: DIRETAMENTE NO CÓDIGO**

### Para "Fotos Profissionais":

**Edite o arquivo:** `src/data/content.js`

**Localize o serviço "Fotos Profissionais" e adicione suas fotos:**

```javascript
{
  id: 'fotos',
  name: 'Fotos Profissionais',
  icon: Camera,
  description: 'Sessões fotográficas profissionais para destacar sua marca pessoal ou empresarial.',
  features: ['Equipamentos de ponta', 'Edição e tratamento de imagem', 'Entrega rápida em alta resolução'],
  gallery: [
    // SUAS FOTOS AQUI
    { type: 'image', src: '/fotos/foto1.jpg', alt: 'Descrição da foto 1' },
    { type: 'image', src: '/fotos/foto2.jpg', alt: 'Descrição da foto 2' },
    { type: 'image', src: '/fotos/foto3.jpg', alt: 'Descrição da foto 3' },
    { type: 'image', src: '/fotos/foto4.jpg', alt: 'Descrição da foto 4' },
    { type: 'image', src: '/fotos/foto5.jpg', alt: 'Descrição da foto 5' },
  ]
}
```

### Para Outros Serviços (Fotos + Vídeos):

```javascript
{
  id: 'videos',
  name: 'Vídeos para Reels e YouTube',
  icon: Video,
  description: 'Produção de vídeos dinâmicos e impactantes.',
  features: ['Roteiro e storyboard', 'Captação com qualidade cinematográfica'],
  gallery: [
    // FOTOS
    { type: 'image', src: '/videos/foto1.jpg', alt: 'Bastidores da gravação' },
    { type: 'image', src: '/videos/foto2.jpg', alt: 'Equipamentos de gravação' },
    // VÍDEOS
    { type: 'video', src: '/videos/video1.mp4', alt: 'Exemplo de vídeo para Reels' },
    { type: 'video', src: '/videos/video2.mp4', alt: 'Exemplo de vídeo para YouTube' },
  ]
}
```

---

## **COMO ORGANIZAR OS ARQUIVOS:**

### Estrutura de Pastas:
```
Video One - Para Clientes/
├── public/
│   ├── fotos/
│   │   ├── foto1.jpg
│   │   ├── foto2.jpg
│   │   └── foto3.jpg
│   ├── videos/
│   │   ├── video1.mp4
│   │   ├── video2.mp4
│   │   └── foto1.jpg
│   └── logo-video1.png
```

### Passo a Passo para Adicionar Arquivos:

1. **Crie as pastas na pasta `public/`:**
   - `public/fotos/` (para fotos)
   - `public/videos/` (para vídeos e fotos de vídeos)

2. **Cole suas imagens/vídeos** nas pastas correspondentes

3. **Edite o arquivo `src/data/content.js`** com os caminhos corretos

4. **Formatos suportados:**
   - **Imagens:** JPG, PNG, WebP
   - **Vídeos:** MP4, WebM

---

## **EXEMPLO COMPLETO PARA TODOS OS SERVIÇOS:**

```javascript
export const services = [
  {
    id: 'fotos',
    name: 'Fotos Profissionais',
    gallery: [
      { type: 'image', src: '/fotos/retrato1.jpg', alt: 'Retrato profissional executiva' },
      { type: 'image', src: '/fotos/retrato2.jpg', alt: 'Fotografia de produto' },
      { type: 'image', src: '/fotos/retrato3.jpg', alt: 'Sessão corporativa' },
    ]
  },
  {
    id: 'videos',
    name: 'Vídeos para Reels e YouTube',
    gallery: [
      { type: 'image', src: '/videos/bastidores1.jpg', alt: 'Bastidores gravação' },
      { type: 'video', src: '/videos/reels1.mp4', alt: 'Exemplo Reels' },
      { type: 'video', src: '/videos/youtube1.mp4', alt: 'Exemplo YouTube' },
    ]
  },
  // ... outros serviços
];
```

---

## **DICAS IMPORTANTES:**

1. **Tamanho das imagens:** Use imagens de 800x600px ou 1200x800px
2. **Tamanho dos vídeos:** Mantenha vídeos curtos (15-60 segundos)
3. **Nomes dos arquivos:** Use nomes sem espaços (ex: `foto1.jpg`)
4. **Descrições:** Sempre adicione `alt` descritivo para acessibilidade

---

## **TESTAR:**

1. **Salve o arquivo** `src/data/content.js`
2. **Acesse:** `http://localhost:3004`
3. **Clique em "Ver Galeria"** nos serviços
4. **Suas fotos/vídeos devem aparecer!**

---

**✅ Após seguir estes passos, suas fotos e vídeos aparecerão nas galerias dos serviços!** 