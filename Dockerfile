# Etape 1 : On part de Node
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY client/package*.json client/
RUN cd client && npm install

# --- BUILD GLOBAL ---
COPY . .

RUN cd client && npm run build

# --- DEMARRAGE ---
EXPOSE 3000
CMD ["node", "server.js"]