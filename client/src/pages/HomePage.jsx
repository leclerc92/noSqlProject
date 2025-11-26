import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import GlobalStats from '../components/GlobalStats'

function HomePage() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchRecipes()
  }, [])

  const fetchRecipes = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/recipes')
      setRecipes(response.data)
      setError(null)
    } catch (err) {
      console.error('Erreur lors de la récupération des recettes:', err)
      setError('Impossible de charger les recettes')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="home-page">
        <section className="hero">
          <h1>🍪 Recettes de Cookies</h1>
          <p>Découvrez nos meilleures recettes et partagez vos avis</p>
        </section>
        <div className="loading-message">Chargement des recettes...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="home-page">
        <section className="hero">
          <h1>🍪 Recettes de Cookies</h1>
          <p>Découvrez nos meilleures recettes et partagez vos avis</p>
        </section>
        <div className="error-message">{error}</div>
      </div>
    )
  }

  return (
    <div className="home-page">
      <section className="hero">
        <h1>🍪 Recettes de Cookies</h1>
        <p>Découvrez nos meilleures recettes et partagez vos avis</p>
      </section>

      <GlobalStats />

      <section className="recipes-section">
        <h2>Nos Recettes</h2>
        <div className="recipes-grid">
          {recipes.map(recipe => (
            <Link
              key={recipe._id}
              to={`/recipe/${recipe._id}`}
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
