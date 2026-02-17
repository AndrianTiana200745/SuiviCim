# Docker - SuiviCim Backend

## 📋 Vue d'ensemble

Ce dossier contient les fichiers nécessaires pour containeriser l'application backend SuiviCim avec Docker.

### Architecture
- **Node.js 20 Alpine** : Image légère et optimisée
- **Multi-stage build** : Séparation build/production pour réduire la taille
- **PostgreSQL 16** : Base de données
- **Docker Compose** : Orchestration des services

---

## 🚀 Démarrage rapide

### Option 1 : Avec Docker Compose (Recommandé)

```bash
# Dans le dossier backend
docker-compose up -d

# Vérifier le statut
docker-compose ps

# Voir les logs
docker-compose logs -f backend
```

L'application sera accessible sur `http://localhost:3000`

### Option 2 : Build manuel

```bash
# Build l'image
docker build -t suivicim-backend:latest .

# Executer le conteneur
docker run -d \
  --name suivicim-backend \
  -p 3000:3000 \
  -e DATABASE_URL="postgresql://cimuser:lolipop@localhost:5432/suivicimdb" \
  -e JWT_SECRET="super_secret_key" \
  suivicim-backend:latest
```

---

## 🛑 Arrêter l'application

```bash
# Avec Docker Compose
docker-compose down

# Arrêter et supprimer les volumes
docker-compose down -v

# Manuellement
docker stop suivicim-backend
docker rm suivicim-backend
```

---

## 📝 Fichiers créés

### 1. **Dockerfile**
- Stage 1 (Builder) : Installe les dépendances et génère le client Prisma
- Stage 2 (Production) : Image légère avec uniquement les dépendances de production
- Utilise un utilisateur non-root pour la sécurité
- Inclut un healthcheck

### 2. **.dockerignore**
- Exclut les fichiers inutiles pour optimiser la build
- Réduit la taille de l'image

### 3. **docker-compose.yml**
Services :
- **db** : PostgreSQL 16 avec données persistantes
- **backend** : Application Node.js

---

## 🔧 Configuration

Les variables d'environnement sont configurées dans `docker-compose.yml` :

```yaml
DATABASE_URL: "postgresql://cimuser:lolipop@db:5432/suivicimdb"
JWT_SECRET: "super_secret_key"
PORT: 3000
```

Pour modifier les identifiants PostgreSQL, éditez le fichier `.env` ou `docker-compose.yml`.

---

## 📊 Vérifier l'application

```bash
# Tester l'endpoint
curl http://localhost:3000

# Voir les logs
docker-compose logs backend

# Accéder à la base de données
docker exec -it suivicim-db psql -U cimuser -d suivicimdb
```

---

## 🧹 Nettoyage

```bash
# Supprimer les conteneurs et réseaux
docker-compose down

# Supprimer les volumes (base de données)
docker-compose down -v

# Supprimer l'image
docker rmi suivicim-backend:latest
```

---

## ⚠️ Notes importantes

1. **Port 5432** : Assurez-vous que PostgreSQL n'est pas déjà en cours d'exécution localement
2. **Variables sensibles** : Ne commitez jamais les `.env` en production, utilisez des secrets Docker
3. **Volumes** : Les données PostgreSQL sont persistantes dans le volume `postgres_data`
4. **Healthcheck** : L'application a un healthcheck intégré accessible toutes les 30s

---

## 🐛 Dépannage

### L'application ne démarre pas
```bash
# Vérifier les logs
docker-compose logs backend

# Redémarrer
docker-compose restart backend
```

### Erreur de connexion à la base de données
```bash
# Vérifier que le service db est healthy
docker-compose ps

# Si db n'est pas ready, attendre quelques secondes et réessayer
```

### Port déjà utilisé
```bash
# Modifier le port dans docker-compose.yml
ports:
  - "3001:3000"  # Utiliser le port 3001
```

---

**Créé le** : 17 février 2026
