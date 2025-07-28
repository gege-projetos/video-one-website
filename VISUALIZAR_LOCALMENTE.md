# 🖥️ Como Visualizar o Aplicativo Localmente

## 📋 Pré-requisitos

Certifique-se de ter instalado:
- **Node.js** (versão 16 ou superior)
- **npm** (vem com o Node.js)

## 🚀 Passos para Visualizar

### 1. Abrir o Terminal/Prompt de Comando

- **Windows**: Pressione `Win + R`, digite `cmd` e pressione Enter
- **Ou**: Abra o PowerShell
- **Mac/Linux**: Abra o Terminal

### 2. Navegar até a Pasta do Projeto

```bash
cd "D:\VIDEO ONE\Código Fonte\Video One - Para Clientes"
```

### 3. Instalar Dependências

```bash
npm install
```

**Se der erro, tente:**
```bash
npm install --legacy-peer-deps
```

### 4. Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
```

### 5. Acessar o Aplicativo

Após executar `npm run dev`, você verá algo como:

```
  VITE v4.4.5  ready in 1234 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.1.100:3000/
```

**Acesse no navegador:**
- **Site principal**: `http://localhost:3000`
- **Painel admin**: `http://localhost:3000/admin`

## 🎯 O que Você Verá

### Site Principal (`http://localhost:3000`)
- ✅ Header com logo e navegação
- ✅ Seção Hero com call-to-action
- ✅ Seção de Serviços
- ✅ Seção de Pacotes
- ✅ Seção de Depoimentos
- ✅ Footer

### Painel Administrativo (`http://localhost:3000/admin`)
- ✅ Aba de Pacotes (gerenciar preços)
- ✅ Aba de Serviços (editar descrições)
- ✅ Aba de Depoimentos (adicionar clientes)
- ✅ Aba de Mídia (upload de fotos/vídeos)

## 🔧 Configuração do Cloudinary (Opcional para Teste)

Para testar o upload de mídia, você precisa:

1. **Criar conta** em [cloudinary.com](https://cloudinary.com)
2. **Criar arquivo** `.env.local` na raiz do projeto:

```env
VITE_CLOUDINARY_CLOUD_NAME=seu_cloud_name
VITE_CLOUDINARY_API_KEY=sua_api_key
VITE_CLOUDINARY_API_SECRET=sua_api_secret
VITE_CLOUDINARY_UPLOAD_PRESET=seu_upload_preset
VITE_SITE_URL=http://localhost:3000
VITE_WHATSAPP_NUMBER=5534991215989
```

## 🛑 Parar o Servidor

Para parar o servidor, pressione `Ctrl + C` no terminal.

## 🔄 Recarregar Alterações

O Vite tem **hot reload**, então qualquer alteração no código será refletida automaticamente no navegador.

## 🆘 Problemas Comuns

### Erro: "npm não é reconhecido"
**Solução**: Instale o Node.js em [nodejs.org](https://nodejs.org)

### Erro: "Porta 3000 já está em uso"
**Solução**: 
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Erro: "Módulo não encontrado"
**Solução**: 
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📱 Testar Responsividade

1. Abra o DevTools (F12)
2. Clique no ícone de dispositivo móvel
3. Teste diferentes tamanhos de tela

---

**🎉 Agora você pode ver seu site funcionando localmente antes do deploy!** 