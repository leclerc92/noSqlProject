# Etape 1 : On part de Node
FROM node:20-alpine

WORKDIR /app

# --- INSTALLATION BACKEND ---
COPY package*.json ./
RUN npm install

# --- INSTALLATION FRONTEND ---
# On copie d'abord les fichiers de dépendances du client pour profiter du cache Docker
COPY client/package*.json client/
# On se déplace dans le dossier client, on installe, et on revient
RUN cd client && npm install

# --- BUILD GLOBAL ---
# On copie tout le reste du code (Backend + Frontend)
COPY . .

# On build le React (Cela va créer le dossier /app/client/dist)
# Attention : Ton binôme devra s'assurer que sa commande de build est bien "npm run build"
RUN cd client && npm run build

# --- DEMARRAGE ---
EXPOSE 3000
CMD ["node", "server.js"]