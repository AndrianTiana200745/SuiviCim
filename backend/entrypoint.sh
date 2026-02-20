#!/bin/sh
set -e

echo "🚀 Starting backend container..."

# 🔹 Attendre que la DB PostgreSQL soit prête
echo "⏳ Waiting for database to be ready..."
until nc -z -v -w30 ${DB_HOST:-db} ${DB_PORT:-5432}; do
  echo "Database is unavailable - sleeping 1s"
  sleep 1
done

echo "✅ Database is ready!"

# 🔹 Déployer les migrations Prisma
echo "💾 Running Prisma migrations..."
npx prisma migrate deploy

# 🔹 Exécuter le seed Prisma
echo "🌱 Running Prisma seed..."
npx prisma db seed

# 🔹 Démarrer le serveur
echo "🎯 Starting Node.js server..."
exec node src/server.js