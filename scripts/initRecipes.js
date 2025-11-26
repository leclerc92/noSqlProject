const mongoose = require('mongoose');
const Recipe = require('../models/Recipe');

const recipes = [
  {
    title: "Cookies au Chocolat Classiques",
    emoji: "🍪",
    description: "Des cookies moelleux et croustillants avec des pépites de chocolat fondantes, la recette incontournable.",
    prepTime: "15 min",
    cookTime: "12 min",
    servings: "24 cookies",
    ingredients: [
      "200g de beurre ramolli",
      "150g de sucre blanc",
      "100g de sucre roux",
      "2 œufs",
      "1 cuillère à café d'extrait de vanille",
      "280g de farine",
      "1 cuillère à café de bicarbonate de soude",
      "1/2 cuillère à café de sel",
      "300g de pépites de chocolat noir"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Dans un bol, mélangez le beurre ramolli avec les deux sucres jusqu'à obtenir une texture crémeuse.",
      "Ajoutez les œufs un par un, puis l'extrait de vanille.",
      "Dans un autre bol, mélangez la farine, le bicarbonate et le sel.",
      "Incorporez progressivement le mélange sec au mélange humide.",
      "Ajoutez les pépites de chocolat et mélangez délicatement.",
      "Formez des boules de pâte et disposez-les sur une plaque recouverte de papier cuisson.",
      "Enfournez pour 10-12 minutes jusqu'à ce qu'ils soient dorés.",
      "Laissez refroidir 5 minutes avant de déguster."
    ]
  },
  {
    title: "Cookies Double Chocolat",
    emoji: "🍪",
    description: "Des cookies ultra chocolatés avec du cacao et des chunks de chocolat noir, un délice pour les amateurs de chocolat.",
    prepTime: "20 min",
    cookTime: "10 min",
    servings: "18 cookies",
    ingredients: [
      "170g de beurre ramolli",
      "180g de sucre",
      "80g de sucre roux",
      "2 œufs",
      "1 cuillère à café d'extrait de vanille",
      "220g de farine",
      "50g de cacao en poudre non sucré",
      "1 cuillère à café de bicarbonate de soude",
      "1/2 cuillère à café de sel",
      "250g de chunks de chocolat noir 70%"
    ],
    steps: [
      "Préchauffez le four à 180°C.",
      "Fouettez le beurre avec les deux sucres jusqu'à obtenir un mélange crémeux.",
      "Incorporez les œufs un par un, puis la vanille.",
      "Dans un autre bol, mélangez la farine, le cacao, le bicarbonate et le sel.",
      "Ajoutez progressivement les ingrédients secs aux ingrédients humides.",
      "Incorporez les chunks de chocolat noir.",
      "Formez des boules généreuses et disposez-les sur une plaque.",
      "Enfournez 10 minutes (le centre doit rester légèrement mou).",
      "Laissez refroidir sur la plaque 10 minutes avant de servir."
    ]
  },
  {
    title: "Cookies au Beurre de Cacahuète",
    emoji: "🍪",
    description: "Des cookies fondants au beurre de cacahuète avec leur motif de fourchette caractéristique.",
    prepTime: "15 min",
    cookTime: "11 min",
    servings: "20 cookies",
    ingredients: [
      "250g de beurre de cacahuète crémeux",
      "150g de beurre ramolli",
      "200g de sucre roux",
      "100g de sucre blanc",
      "2 œufs",
      "300g de farine",
      "1 cuillère à café de bicarbonate de soude",
      "1/2 cuillère à café de sel",
      "150g de pépites de chocolat au lait (optionnel)"
    ],
    steps: [
      "Préchauffez le four à 175°C.",
      "Mélangez le beurre de cacahuète, le beurre et les sucres jusqu'à obtenir une texture lisse.",
      "Ajoutez les œufs un par un en mélangeant bien.",
      "Dans un bol séparé, combinez la farine, le bicarbonate et le sel.",
      "Incorporez les ingrédients secs au mélange de beurre de cacahuète.",
      "Ajoutez les pépites de chocolat si désiré.",
      "Formez des boules et disposez-les sur une plaque.",
      "Aplatissez légèrement avec une fourchette en créant un motif croisé.",
      "Enfournez 11 minutes jusqu'à ce que les bords soient dorés.",
      "Laissez refroidir complètement sur une grille."
    ]
  },
  {
    title: "Cookies Avoine et Raisins Secs",
    emoji: "🍪",
    description: "Des cookies healthy et gourmands avec des flocons d'avoine et des raisins secs moelleux.",
    prepTime: "15 min",
    cookTime: "13 min",
    servings: "22 cookies",
    ingredients: [
      "180g de beurre ramolli",
      "200g de sucre roux",
      "1 œuf",
      "1 cuillère à café d'extrait de vanille",
      "150g de farine",
      "200g de flocons d'avoine",
      "1 cuillère à café de cannelle",
      "1/2 cuillère à café de bicarbonate de soude",
      "1/2 cuillère à café de sel",
      "150g de raisins secs"
    ],
    steps: [
      "Préchauffez le four à 175°C.",
      "Battez le beurre avec le sucre roux jusqu'à obtenir un mélange léger.",
      "Ajoutez l'œuf et la vanille, mélangez bien.",
      "Dans un autre bol, mélangez la farine, l'avoine, la cannelle, le bicarbonate et le sel.",
      "Incorporez les ingrédients secs au mélange de beurre.",
      "Ajoutez les raisins secs et mélangez délicatement.",
      "Formez des boules de pâte et aplatissez-les légèrement.",
      "Disposez-les sur une plaque en les espaçant bien.",
      "Enfournez 13 minutes jusqu'à ce qu'ils soient dorés.",
      "Laissez refroidir 5 minutes avant de transférer sur une grille."
    ]
  },
  {
    title: "Cookies Chocolat Blanc Cranberries",
    emoji: "🍪",
    description: "Des cookies originaux associant la douceur du chocolat blanc et l'acidité des cranberries séchées.",
    prepTime: "15 min",
    cookTime: "12 min",
    servings: "20 cookies",
    ingredients: [
      "180g de beurre ramolli",
      "150g de sucre blanc",
      "100g de sucre roux",
      "1 œuf",
      "1 cuillère à café d'extrait de vanille",
      "250g de farine",
      "1 cuillère à café de levure chimique",
      "1/2 cuillère à café de sel",
      "200g de pépites de chocolat blanc",
      "100g de cranberries séchées",
      "50g de noix de macadamia concassées"
    ],
    steps: [
      "Préchauffez le four à 175°C.",
      "Battez le beurre avec les deux sucres jusqu'à obtenir un mélange mousseux.",
      "Ajoutez l'œuf et la vanille, mélangez bien.",
      "Tamisez la farine, la levure et le sel, puis incorporez au mélange.",
      "Ajoutez les pépites de chocolat blanc, les cranberries et les noix.",
      "Mélangez délicatement pour bien répartir les ingrédients.",
      "Formez des boules de pâte et espacez-les sur une plaque.",
      "Enfournez 12 minutes jusqu'à ce que les bords soient dorés.",
      "Laissez refroidir sur la plaque 5 minutes.",
      "Transférez sur une grille et laissez refroidir complètement."
    ]
  }
];

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
