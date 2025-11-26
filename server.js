const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const Feedback = require('./models/Feedback');
const Recipe = require('./models/Recipe');
const initRecipes = require('./scripts/initRecipes');

const app = express();

// Helper pour logs de debug (actifs uniquement en dev)
const DEBUG = process.env.NODE_ENV !== 'production';
const debugLog = (...args) => DEBUG && console.log(...args);

// Middleware
app.use(cors());
app.use(bodyParser.json()); // IMPORTANT : On lit maintenant du JSON
app.use(express.static(path.join(__dirname, 'client/dist'))); // On sert les fichiers du React buildé

const isDocker = process.env.DOCKER === 'true';

const MONGODB_URI = isDocker ? 'mongo-db' : 'localhost';

const REDIS_HOST = isDocker ? 'redis-db' : 'localhost';

// --- 1. CONFIG REDIS (TA PARTIE) ---
const redisClient = redis.createClient({
    url: process.env.REDIS_URL || `redis://${REDIS_HOST}:6379`
});
redisClient.on('error', (err) => console.log('Redis Client Error', err));

(async () => {
    await redisClient.connect();
    console.log("✅ Connecté à Redis");
})();

// --- 2. CONFIG MONGO (PARTIE BINÔME) ---
mongoose.connect('mongodb://${MONGODB_URI}:27017/feedback-app')
  .then(async () => {
    console.log('✅ Connecté à MongoDB');
    // Initialiser les recettes au démarrage si la base est vide
    await initRecipes(true);
  })
  .catch(err => console.error(err));

// --- 3. ROUTES API (C'est là que le React va taper) ---

// Route pour récupérer le compteur (GET)
app.get('/api/stats', async (req, res) => {
    try {
        const { recipeId } = req.query;
        debugLog(`📊 GET /api/stats - recipeId: ${recipeId}`);

        // Si recipeId est fourni, retourner le compteur pour cette recette
        if (recipeId) {
            const redisKey = `counter_feedbacks:${recipeId}`;
            const count = await redisClient.get(redisKey);
            debugLog(`✅ Redis key: ${redisKey}, count: ${count || 0}`);
            return res.json({ counter: parseInt(count || 0) });
        }

        // Sinon, retourner le compteur global depuis Redis
        const globalKey = 'counter_feedbacks_global';
        const totalCount = await redisClient.get(globalKey);
        debugLog(`✅ Redis global key: ${globalKey}, count: ${totalCount || 0}`);
        res.json({ count: parseInt(totalCount || 0) });
    } catch (error) {
        console.error('❌ Erreur /api/stats:', error);
        res.status(500).json({ counter: 0, count: 0 });
    }
});

// Route pour envoyer le formulaire (POST)
app.post('/api/feedback', async (req, res) => {
    const { recipeId, author, content, rating } = req.body;
    debugLog(`💬 POST /api/feedback - recipeId: ${recipeId}, author: ${author}`);

    // Validation des données
    if (!recipeId || !author?.trim() || !content?.trim()) {
        return res.status(400).json({
            success: false,
            error: "recipeId, author et content sont requis"
        });
    }

    try {
        // A. Redis - Incrémenter le compteur spécifique à la recette
        const redisKey = `counter_feedbacks:${recipeId}`;
        const newCount = await redisClient.incr(redisKey);
        debugLog(`✅ Redis incrementé - key: ${redisKey}, newCount: ${newCount}`);

        // A.bis Redis - Incrémenter aussi le compteur global
        const globalKey = 'counter_feedbacks_global';
        const globalCount = await redisClient.incr(globalKey);
        debugLog(`✅ Redis global incrementé - key: ${globalKey}, count: ${globalCount}`);

        // B. Mongo - Sauvegarder le feedback avec recipeId
        const newFeedback = new Feedback({ recipeId, author, content, rating});
        await newFeedback.save();
        debugLog(`✅ Feedback sauvegardé dans MongoDB - id: ${newFeedback._id}`);

        // Réponse JSON obligatoire pour React
        res.json({
            success: true,
            message: "Sauvegardé !",
            newCount: newCount,
            feedback: newFeedback
        });

    } catch (error) {
        console.error('❌ Erreur /api/feedback:', error);
        res.status(500).json({ success: false, error: "Erreur serveur" });
    }
});

// Route pour récupérer tous les avis (GET)
app.get('/api/reviews', async (req, res) => {
    try {
        const { recipeId } = req.query;
        debugLog(`📝 GET /api/reviews - recipeId: ${recipeId}`);

        // Filtrer par recipeId si fourni, sinon récupérer tous les feedbacks
        const filter = recipeId ? { recipeId: recipeId } : {};
        const reviews = await Feedback.find(filter).sort({ createdAt: -1 });
        debugLog(`✅ ${reviews.length} avis trouvés pour recipeId: ${recipeId}`);

        res.json(reviews);
    } catch (error) {
        console.error('❌ Erreur /api/reviews:', error);
        res.status(500).json({ success: false, error: "Erreur serveur" });
    }
});

// Route pour récupérer toutes les recettes (GET)
app.get('/api/recipes', async (req, res) => {
    try {
        debugLog(`📚 GET /api/recipes`);
        const recipes = await Recipe.find().sort({ createdAt: 1 });
        debugLog(`✅ ${recipes.length} recettes trouvées`);
        res.json(recipes);
    } catch (error) {
        console.error('❌ Erreur /api/recipes:', error);
        res.status(500).json({ success: false, error: "Erreur serveur" });
    }
});

// Route pour récupérer une recette par ID (GET)
app.get('/api/recipes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        debugLog(`📚 GET /api/recipes/${id}`);
        const recipe = await Recipe.findById(id);

        if (!recipe) {
            return res.status(404).json({ success: false, error: "Recette non trouvée" });
        }

        debugLog(`✅ Recette trouvée: ${recipe.title}`);
        res.json(recipe);
    } catch (error) {
        console.error('❌ Erreur /api/recipes/:id:', error);
        res.status(500).json({ success: false, error: "Erreur serveur" });
    }
});

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

app.listen(3000, () => {
    console.log('🚀 Serveur API lancé sur le port 3000');
});