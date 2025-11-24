import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { recipes } from '../data/recipes'
import ReviewForm from '../components/ReviewForm'
import ReviewList from '../components/ReviewList'
import Stats from '../components/Stats'

function RecipePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [refreshKey, setRefreshKey] = useState(0)
  
  const recipe = recipes.find(r => r.id === parseInt(id))

  useEffect(() => {
    if (!recipe) {
      navigate('/')
    }
  }, [recipe, navigate])

  if (!recipe) {
    return null
  }

  const handleReviewSubmitted = () => {
    setRefreshKey(prev => prev + 1)
  }

  return (
    <div className="recipe-page">
      <nav className="breadcrumb">
        <Link to="/">← Retour aux recettes</Link>
      </nav>

      <div className="recipe-content">
        {/* Recette complète à gauche */}
        <section className="recipe-detail">
          <div className="recipe-header-full">
            <span className="recipe-emoji-large">{recipe.emoji}</span>
            <h1>{recipe.title}</h1>
          </div>

          <p className="recipe-description-full">{recipe.description}</p>

          <div className="recipe-meta-full">
            <div className="meta-item">
              <span className="meta-icon">⏱️</span>
              <div>
                <strong>Préparation</strong>
                <p>{recipe.prepTime}</p>
              </div>
            </div>
            <div className="meta-item">
              <span className="meta-icon">🔥</span>
              <div>
                <strong>Cuisson</strong>
                <p>{recipe.cookTime}</p>
              </div>
            </div>
            <div className="meta-item">
              <span className="meta-icon">🍽️</span>
              <div>
                <strong>Portions</strong>
                <p>{recipe.servings}</p>
              </div>
            </div>
          </div>

          <div className="recipe-section">
            <h2>🛒 Ingrédients</h2>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div className="recipe-section">
            <h2>👨‍🍳 Préparation</h2>
            <ol className="steps-list">
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        {/* Section avis à droite */}
        <aside className="reviews-sidebar">
          <Stats recipeId={recipe.id} key={`stats-${refreshKey}`} />

          <div className="review-form-container">
            <h2>Laissez votre avis</h2>
            <ReviewForm recipeId={recipe.id} onReviewSubmitted={handleReviewSubmitted} />
          </div>

          <ReviewList recipeId={recipe.id} key={`reviews-${refreshKey}`} />
        </aside>
      </div>
    </div>
  )
}

export default RecipePage
