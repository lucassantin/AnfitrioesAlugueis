# Usar a imagem oficial do Node.js
FROM node:18-alpine

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o código fonte
COPY . .

# Construir a aplicação para produção
RUN npm run build

# Expor a porta que o app vai rodar
EXPOSE 5173

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]
