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

const DEBUG = process.env.NODE_ENV !== 'production';
const debugLog = (...args) => DEBUG && console.log(...args);

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/dist')));

const isDocker = process.env.DOCKER === 'true';

const MONGODB_URI =  'mongo-db'

const REDIS_HOST = 'redis-db'

// --- 1. CONFIG REDIS (TA PARTIE) ---
const redisClient = redis.createClient({
    url: process.env.REDIS_URL || `redis://${REDIS_HOST}:6379`
});
redisClient.on('error', (err) => console.log('Redis Client Error', err));

(async () => {
    await redisClient.connect();
    console.log(" Connecté à Redis");
})();

// --- 2. CONFIG MONGO (PARTIE BINÔME) ---
mongoose.connect(`mongodb://${MONGODB_URI}:27017/feedback-app`)
  .then(async () => {
    console.log(' Connecté à MongoDB');
    // Initialiser les recettes au démarrage si la base est vide
    await initRecipes(true);
  })
  .catch(err => console.error(err));


app.get('/api/stats', async (req, res) => {
    try {
        const { recipeId } = req.query;
        debugLog(` GET /api/stats - recipeId: ${recipeId}`);

        if (recipeId) {
            const counterKey = `counter_feedbacks:${recipeId}`;
            const sumKey = `sum_ratings:${recipeId}`;
            const count = await redisClient.get(counterKey);
            const sum = await redisClient.get(sumKey);

            const reviewCount = parseInt(count || 0);
            const sumRatings = parseInt(sum || 0);
            const averageRating = reviewCount > 0 ? sumRatings / reviewCount : 0;

            debugLog(` Redis recette - count: ${reviewCount}, average: ${averageRating}`);
            return res.json({
                counter: reviewCount,
                averageRating: Math.round(averageRating * 10) / 10
            });
        }

        // Stats globales
        const globalCountKey = 'counter_feedbacks_global';
        const globalSumKey = 'sum_ratings_global';
        const totalCount = await redisClient.get(globalCountKey);
        const totalSum = await redisClient.get(globalSumKey);

        const count = parseInt(totalCount || 0);
        const sum = parseInt(totalSum || 0);
        const averageRating = count > 0 ? sum / count : 0;

        debugLog(` Redis global - count: ${count}, average: ${averageRating}`);
        res.json({
            count: count,
            averageRating: Math.round(averageRating * 10) / 10
        });
    } catch (error) {
        console.error(' Erreur /api/stats:', error);
        res.status(500).json({ counter: 0, count: 0, averageRating: 0 });
    }
});

app.post('/api/feedback', async (req, res) => {
    const { recipeId, author, content, rating } = req.body;
    debugLog(`💬 POST /api/feedback - recipeId: ${recipeId}, author: ${author}, rating: ${rating}`);

    if (!recipeId || !author?.trim() || !content?.trim() || !rating) {
        return res.status(400).json({
            success: false,
            error: "recipeId, author, content et rating sont requis"
        });
    }

    try {
        // Redis - Incrémenter le compteur de feedbacks pour cette recette
        const redisKey = `counter_feedbacks:${recipeId}`;
        const newCount = await redisClient.incr(redisKey);
        debugLog(` Redis incrementé - key: ${redisKey}, newCount: ${newCount}`);

        // Redis - Ajouter la note à la somme pour cette recette
        const sumRatingsKey = `sum_ratings:${recipeId}`;
        const newSum = await redisClient.incrBy(sumRatingsKey, rating);
        debugLog(` Redis somme ratings - key: ${sumRatingsKey}, newSum: ${newSum}`);

        // Redis - Incrémenter le compteur global
        const globalKey = 'counter_feedbacks_global';
        const globalCount = await redisClient.incr(globalKey);
        debugLog(` Redis global incrementé - key: ${globalKey}, count: ${globalCount}`);

        // Redis - Ajouter la note à la somme globale
        const globalSumKey = 'sum_ratings_global';
        const globalSum = await redisClient.incrBy(globalSumKey, rating);
        debugLog(` Redis somme globale - key: ${globalSumKey}, sum: ${globalSum}`);

        // MongoDB - Sauvegarder le feedback avec recipeId
        const newFeedback = new Feedback({ recipeId, author, content, rating});
        await newFeedback.save();
        debugLog(` Feedback sauvegardé dans MongoDB - id: ${newFeedback._id}`);

        res.json({
            success: true,
            message: "Sauvegardé !",
            newCount: newCount,
            feedback: newFeedback
        });

    } catch (error) {
        console.error(' Erreur /api/feedback:', error);
        res.status(500).json({ success: false, error: "Erreur serveur" });
    }
});

app.get('/api/reviews', async (req, res) => {
    try {
        const { recipeId } = req.query;
        debugLog(` GET /api/reviews - recipeId: ${recipeId}`);

        const filter = recipeId ? { recipeId: recipeId } : {};
        const reviews = await Feedback.find(filter).sort({ createdAt: -1 });
        debugLog(` ${reviews.length} avis trouvés pour recipeId: ${recipeId}`);

        res.json(reviews);
    } catch (error) {
        console.error('Erreur /api/reviews:', error);
        res.status(500).json({ success: false, error: "Erreur serveur" });
    }
});

app.get('/api/recipes', async (req, res) => {
    try {
        debugLog(` GET /api/recipes`);
        const recipes = await Recipe.find().sort({ createdAt: 1 });
        debugLog(` ${recipes.length} recettes trouvées`);
        res.json(recipes);
    } catch (error) {
        console.error('Erreur /api/recipes:', error);
        res.status(500).json({ success: false, error: "Erreur serveur" });
    }
});

app.get('/api/recipes-stats', async (req, res) => {
    try {
        debugLog(`📊 GET /api/recipes-stats`);
        const recipes = await Recipe.find().sort({ createdAt: 1 });

        // Pour chaque recette, récupérer les stats depuis Redis
        const recipesWithStats = await Promise.all(recipes.map(async (recipe) => {
            const recipeId = recipe._id.toString();
            const counterKey = `counter_feedbacks:${recipeId}`;
            const sumKey = `sum_ratings:${recipeId}`;

            const count = await redisClient.get(counterKey);
            const sum = await redisClient.get(sumKey);

            const reviewCount = parseInt(count || 0);
            const sumRatings = parseInt(sum || 0);
            const averageRating = reviewCount > 0 ? sumRatings / reviewCount : 0;

            return {
                ...recipe.toObject(),
                reviewCount,
                averageRating: Math.round(averageRating * 10) / 10 // Arrondi à 1 décimale
            };
        }));

        debugLog(`✅ ${recipesWithStats.length} recettes avec statistiques depuis Redis`);
        res.json(recipesWithStats);
    } catch (error) {
        console.error('Erreur /api/recipes-stats:', error);
        res.status(500).json({ success: false, error: "Erreur serveur" });
    }
});

app.get('/api/recipes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        debugLog(` GET /api/recipes/${id}`);
        const recipe = await Recipe.findById(id);

        if (!recipe) {
            return res.status(404).json({ success: false, error: "Recette non trouvée" });
        }

        debugLog(`Recette trouvée: ${recipe.title}`);
        res.json(recipe);
    } catch (error) {
        console.error('Erreur /api/recipes/:id:', error);
        res.status(500).json({ success: false, error: "Erreur serveur" });
    }
});

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

app.listen(3000, () => {
    console.log(' Serveur API lancé sur le port 3000');
});