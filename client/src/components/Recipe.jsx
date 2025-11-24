import React, { useState } from 'react'

function Recipe({ recipe }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="recipe-card">
      <div className="recipe-header">
        <span className="recipe-emoji">{recipe.emoji}</span>
        <h3>{recipe.title}</h3>
      </div>
      
      <p className="recipe-description">{recipe.description}</p>
      
      <div className="recipe-meta">
        <span>⏱️ Préparation: {recipe.prepTime}</span>
        <span>🔥 Cuisson: {recipe.cookTime}</span>
        <span>🍽️ {recipe.servings}</span>
      </div>

      <button 
        className="recipe-toggle-btn"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? '▲ Masquer la recette' : '▼ Voir la recette complète'}
      </button>

      {isExpanded && (
        <div className="recipe-details">
          <div className="recipe-section">
            <h4>🛒 Ingrédients</h4>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="recipe-section">
            <h4>👨‍🍳 Préparation</h4>
            <ol className="steps-list">
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  )
}

export default Recipe
