# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./
COPY prisma ./prisma

# Installer les dépendances (y compris devDependencies pour Prisma)
RUN npm install

# Générer le client Prisma
RUN npm exec prisma generate

# Stage 2: Production
FROM node:20-alpine

WORKDIR /app

# Installer dumb-init pour le signal handling
RUN apk add --no-cache dumb-init

# Copier les fichiers des dépendances du builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma

# Copier le code source
COPY src ./src

# Créer un utilisateur non-root pour la sécurité
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001
USER nodejs

# Exposer le port
EXPOSE 3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)}, (e) => {throw e})"

# Démarrer l'application avec dumb-init pour gérer correctement les signaux
ENTRYPOINT ["dumb-init", "--"]
CMD ["node", "src/server.js"]
