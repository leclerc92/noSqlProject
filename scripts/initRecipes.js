const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');
const recipes = require('../data/initialRecipes');

async function initRecipes(existingConnection = false) {
  try {
    // Connexion à MongoDB si pas de connexion existante
    if (!existingConnection) {
      await mongoose.connect('mongodb://mongo-db:27017/feedback-app');
      console.log('✅ Connecté à MongoDB');
    }

    // Vérifier si des recettes existent déjà
    const existingRecipesCount = await Recipe.countDocuments();

    if (existingRecipesCount > 0) {
      console.log(`ℹ️  ${existingRecipesCount} recettes déjà présentes, initialisation ignorée`);
      if (!existingConnection) {
        await mongoose.connection.close();
      }
      return;
    }

    // Insérer les nouvelles recettes
    const insertedRecipes = await Recipe.insertMany(recipes);
    console.log(`✅ ${insertedRecipes.length} recettes insérées avec succès`);

    insertedRecipes.forEach((recipe, index) => {
      console.log(`   ${index + 1}. ${recipe.title} (ID: ${recipe._id})`);
    });

    if (!existingConnection) {
      await mongoose.connection.close();
      console.log('👋 Connexion MongoDB fermée');
    }
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation:', error);
    if (!existingConnection) {
      process.exit(1);
    }
  }
}

// Si le script est exécuté directement
if (require.main === module) {
  initRecipes();
}

// Exporter la fonction pour utilisation dans server.js
module.exports = initRecipes;
