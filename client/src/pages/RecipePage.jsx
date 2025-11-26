import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ReviewForm from '../components/ReviewForm'
import ReviewList from '../components/ReviewList'
import Stats from '../components/Stats'

function RecipePage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [refreshKey, setRefreshKey] = useState(0)
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchRecipe()
  }, [id])

  const fetchRecipe = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`/api/recipes/${id}`)
      setRecipe(response.data)
      setError(null)
    } catch (err) {
      console.error('Erreur lors de la récupération de la recette:', err)
      setError('Recette non trouvée')
      setTimeout(() => navigate('/'), 2000)
    } finally {
      setLoading(false)
    }
  }

  const handleReviewSubmitted = () => {
    setRefreshKey(prev => prev + 1)
  }

  if (loading) {
    return (
      <div className="recipe-page">
        <nav className="breadcrumb">
          <Link to="/">← Retour aux recettes</Link>
        </nav>
        <div className="loading-message">Chargement de la recette...</div>
      </div>
    )
  }

  if (error || !recipe) {
    return (
      <div className="recipe-page">
        <nav className="breadcrumb">
          <Link to="/">← Retour aux recettes</Link>
        </nav>
        <div className="error-message">{error || 'Recette non trouvée'}</div>
      </div>
    )
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
          <Stats recipeId={recipe._id} key={`stats-${refreshKey}`} />

          <div className="review-form-container">
            <h2>Laissez votre avis</h2>
            <ReviewForm recipeId={recipe._id} onReviewSubmitted={handleReviewSubmitted} />
          </div>

          <ReviewList recipeId={recipe._id} key={`reviews-${refreshKey}`} />
        </aside>
      </div>
    </div>
  )
}

export default RecipePage
