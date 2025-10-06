# Multi-stage Dockerfile para construir o app com Node e servir com nginx

# Stage 1: build
FROM node:18-alpine AS builder
WORKDIR /app

# Copia package files primeiro para aproveitar cache
COPY package.json package-lock.json* ./

# Instala dependências (inclui dev deps necessários para o build)
RUN npm ci --silent

# Copia o resto do código e roda o build
COPY . .
RUN npm run build

# Stage 2: produção com nginx
FROM nginx:stable-alpine

# Remove configuração default e usa a nossa (serve SPA com fallback)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia build gerado para o diretório público do nginx
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
