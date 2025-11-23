const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors'); // npm install cors (Recommandé pour éviter les bugs en dev)

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json()); // IMPORTANT : On lit maintenant du JSON
app.use(express.static(path.join(__dirname, 'client/dist'))); // On sert les fichiers du React buildé

// --- 1. CONFIG REDIS (TA PARTIE) ---
const redisClient = redis.createClient({
    url: process.env.REDIS_URL || 'redis://redis-db:6379'
});
redisClient.on('error', (err) => console.log('Redis Client Error', err));

(async () => {
    await redisClient.connect();
    console.log("✅ Connecté à Redis");
})();

// --- 2. CONFIG MONGO (PARTIE BINÔME) ---
// TODO: Ton binôme décommente ça
/*
mongoose.connect('mongodb://mongo-db:27017/feedback-app')
  .then(() => console.log('✅ Connecté à MongoDB'))
  .catch(err => console.error(err));
*/

// --- 3. ROUTES API (C'est là que le React va taper) ---

// Route pour récupérer le compteur (GET)
app.get('/api/stats', async (req, res) => {
    const count = await redisClient.get('counter_feedbacks') || 0;
    res.json({ count: parseInt(count) });
});

// Route pour envoyer le formulaire (POST)
app.post('/api/feedback', async (req, res) => {
    const { author, content } = req.body; // Le React enverra du JSON { "author": "...", "content": "..." }

    try {
        // A. Redis
        const newCount = await redisClient.incr('counter_feedbacks');

        // B. Mongo (TODO Binôme)
        // const newFeedback = new FeedbackModel({ author, content });
        // await newFeedback.save();

        // Réponse JSON obligatoire pour React
        res.json({
            success: true,
            message: "Sauvegardé !",
            newCount: newCount
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: "Erreur serveur" });
    }
});

// --- 4. GESTION DU FRONTEND ---
// Toutes les autres requêtes renvoient l'app React (pour gérer le routing React)
// Express 5 nécessite une approche différente pour les routes catch-all
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

app.listen(3000, () => {
    console.log('🚀 Serveur API lancé sur le port 3000');
});