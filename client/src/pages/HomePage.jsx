import React from 'react'
import { Link } from 'react-router-dom'
import { recipes } from '../data/recipes'

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>🍳 Recettes de Cuisine</h1>
        <p>Découvrez nos meilleures recettes et partagez vos avis</p>
      </section>

      <section className="recipes-section">
        <h2>Nos Recettes</h2>
        <div className="recipes-grid">
          {recipes.map(recipe => (
            <Link 
              key={recipe.id} 
              to={`/recipe/${recipe.id}`}
              className="recipe-card-link"
            >
              <div className="recipe-card-preview">
                <div className="recipe-header">
                  <span className="recipe-emoji">{recipe.emoji}</span>
                  <h3>{recipe.title}</h3>
                </div>
                
                <p className="recipe-description">{recipe.description}</p>
                
                <div className="recipe-meta">
                  <span>⏱️ {recipe.prepTime}</span>
                  <span>🔥 {recipe.cookTime}</span>
                  <span>🍽️ {recipe.servings}</span>
                </div>

                <div className="view-recipe-btn">
                  👉 Voir la recette et les avis
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
