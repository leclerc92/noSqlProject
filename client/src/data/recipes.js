// Import the CommonJS module (Vite handles this automatically)
import initialRecipes from '../../../data/initialRecipes';

// Add IDs to recipes for frontend routing
export const recipes = initialRecipes.map((recipe, index) => ({
  id: index + 1,
  ...recipe
}));
