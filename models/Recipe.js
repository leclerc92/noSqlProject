const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  emoji: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  prepTime: {
    type: String,
    required: true
  },
  cookTime: {
    type: String,
    required: true
  },
  servings: {
    type: String,
    required: true
  },
  ingredients: [{
    type: String,
    required: true
  }],
  steps: [{
    type: String,
    required: true
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Recipe', recipeSchema);
