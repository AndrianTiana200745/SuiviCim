# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma

RUN npm install
RUN npm exec prisma generate


# Stage 2: Production
FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache dumb-init netcat-openbsd

# Créer utilisateur AVANT copie
RUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001 -G nodejs

# Copier avec bon ownership
COPY --from=builder --chown=nodejs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nodejs:nodejs /app/package*.json ./
COPY --from=builder --chown=nodejs:nodejs /app/prisma ./prisma
COPY --chown=nodejs:nodejs src ./src
COPY --chown=nodejs:nodejs entrypoint.sh ./

RUN chmod +x entrypoint.sh

USER nodejs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)}, (e) => {throw e})"

ENTRYPOINT ["dumb-init", "--", "sh", "./entrypoint.sh"]