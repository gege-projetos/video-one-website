# 🚀 Guia Completo - Deploy no Vercel

## **📋 PRÉ-REQUISITOS:**
- ✅ Conta no GitHub
- ✅ Conta no Vercel
- ✅ Conta no Cloudinary configurada
- ✅ Upload Preset criado no Cloudinary

---

## **🔧 PASSO 1: PREPARAR REPOSITÓRIO GITHUB**

### **1.1 Criar Repositório:**
1. Acesse: https://github.com
2. Clique em "New repository"
3. Nome: `video-one-website`
4. Público ou Privado (sua escolha)
5. Clique em "Create repository"

### **1.2 Fazer Upload do Código:**
```bash
# No terminal, na pasta do projeto:
git init
git add .
git commit -m "Primeira versão do site Video One"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/video-one-website.git
git push -u origin main
```

---

## **🚀 PASSO 2: DEPLOY NO VERCEL**

### **2.1 Conectar ao Vercel:**
1. Acesse: https://vercel.com
2. Clique em "New Project"
3. Conecte sua conta GitHub
4. Selecione o repositório `video-one-website`

### **2.2 Configurar Projeto:**
- **Framework Preset:** Vite
- **Root Directory:** `./` (deixe em branco)
- **Build Command:** `npm run build` (deve aparecer automaticamente)
- **Output Directory:** `dist` (deve aparecer automaticamente)

### **2.3 Configurar Variáveis de Ambiente:**
Clique em "Environment Variables" e adicione:

| Nome | Valor |
|------|-------|
| `VITE_CLOUDINARY_CLOUD_NAME` | `dvqzyzgbr` |
| `VITE_CLOUDINARY_UPLOAD_PRESET` | `video_one_media` |
| `VITE_SITE_URL` | `https://video-one.vercel.app` |
| `VITE_WHATSAPP_NUMBER` | `5511999999999` |

### **2.4 Fazer Deploy:**
1. Clique em "Deploy"
2. Aguarde 2-3 minutos
3. Seu site estará em: `https://video-one.vercel.app`

---

## **🔗 PASSO 3: CONFIGURAR DOMÍNIO PERSONALIZADO**

### **3.1 Adicionar Domínio:**
1. No Vercel, vá em "Settings" > "Domains"
2. Clique em "Add Domain"
3. Digite seu domínio (ex: `videone.com.br`)
4. Siga as instruções para configurar DNS

### **3.2 Configurar DNS:**
No seu provedor de domínio, adicione:
- **Tipo:** CNAME
- **Nome:** @
- **Valor:** `cname.vercel-dns.com`

---

## **✅ PASSO 4: TESTAR TUDO**

### **4.1 Testar Site Público:**
1. Acesse: `https://video-one.vercel.app`
2. Verifique se todas as seções carregam
3. Teste os botões de contato

### **4.2 Testar Painel Administrativo:**
1. Acesse: `https://video-one.vercel.app/admin`
2. Faça login (se configurado)
3. Teste adicionar uma foto
4. Verifique se aparece no site público

### **4.3 Testar Upload de Mídia:**
1. No painel admin, adicione uma foto
2. Verifique se aparece no Cloudinary
3. Verifique se carrega no site público

---

## **🎯 RESULTADO FINAL:**

### **✅ Site Público:**
- URL: `https://video-one.vercel.app`
- Acessível para todos
- Otimizado para SEO
- Carregamento rápido

### **✅ Painel Administrativo:**
- URL: `https://video-one.vercel.app/admin`
- Upload permanente para Cloudinary
- Edição em tempo real
- Backup automático

### **✅ Armazenamento Permanente:**
- Cloudinary: 25GB grátis
- URLs otimizadas
- Backup automático
- Acesso de qualquer lugar

---

## **🔧 COMANDOS ÚTEIS:**

### **Para Atualizações Futuras:**
```bash
# Fazer alterações no código
git add .
git commit -m "Atualização do site"
git push origin main
# Vercel faz deploy automático!
```

### **Para Ver Logs:**
1. No Vercel, vá em "Functions"
2. Clique em "View Function Logs"

### **Para Rollback:**
1. No Vercel, vá em "Deployments"
2. Clique em um deploy anterior
3. Clique em "Promote to Production"

---

## **📞 SUPORTE:**

### **Se algo der errado:**
1. Verifique os logs no Vercel
2. Teste localmente primeiro
3. Verifique as variáveis de ambiente
4. Confirme se o Cloudinary está configurado

### **Links Úteis:**
- Vercel Dashboard: https://vercel.com/dashboard
- Cloudinary Dashboard: https://cloudinary.com/console
- GitHub: https://github.com

**🎉 Parabéns! Seu site está no ar e funcionando!** 