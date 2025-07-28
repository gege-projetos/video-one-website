# Como Adicionar a Logo da Video 1

## Passo a Passo:

### 1. Preparar a Imagem da Logo
- Salve a imagem da logo da Video 1 (a que você mostrou nas fotos)
- Certifique-se que a imagem tem fundo transparente (PNG)
- Redimensione para aproximadamente 120-150px de largura

### 2. Adicionar a Imagem ao Projeto
1. **Copie a imagem da logo** para a pasta `public/` do projeto
2. **Renomeie a imagem** para `logo-video1.png`
3. **Caminho final:** `public/logo-video1.png`

### 3. Estrutura de Pastas
```
Video One - Para Clientes/
├── public/
│   ├── logo-video1.png  ← Coloque a logo aqui
│   └── ...
├── src/
└── ...
```

### 4. Verificar se Funcionou
- A logo deve aparecer automaticamente no header
- Se não aparecer, verifique se o arquivo está na pasta `public/`
- O nome do arquivo deve ser exatamente `logo-video1.png`

### 5. Alternativas de Formato
Se a logo não estiver em PNG, você pode usar:
- `logo-video1.jpg` (se for JPG)
- `logo-video1.svg` (se for SVG)
- `logo-video1.webp` (se for WebP)

**Basta alterar a extensão no arquivo `Header.jsx` na linha:**
```jsx
src="/logo-video1.png"
```

### 6. Tamanho da Logo
A logo está configurada com altura de 32px (`h-8`). Se precisar ajustar:
- **Menor:** `h-6` (24px)
- **Maior:** `h-10` (40px)
- **Muito maior:** `h-12` (48px)

**Exemplo de ajuste no Header.jsx:**
```jsx
className="h-10 w-auto"  // Para logo maior
```

---

**✅ Após seguir estes passos, a logo real da Video 1 aparecerá no header!** 