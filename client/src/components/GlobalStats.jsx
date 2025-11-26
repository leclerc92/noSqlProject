import React, { useState, useEffect } from 'react'
import axios from 'axios'

function GlobalStats() {
  const [totalComments, setTotalComments] = useState(0)
  const [totalRecipes, setTotalRecipes] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      setLoading(true)
      const [statsResponse, recipesResponse] = await Promise.all([
        axios.get('/api/stats'),
        axios.get('/api/recipes')
      ])
      setTotalComments(statsResponse.data.count || 0)
      setTotalRecipes(recipesResponse.data.length || 0)
      setError(null)
    } catch (err) {
      console.error('Erreur lors de la récupération des stats:', err)
      setError('Impossible de charger les statistiques')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="global-stats loading">
        <p>Chargement des statistiques...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="global-stats error">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="global-stats">
      <div className="stat-box">
        <div className="stat-icon">📚</div>
        <div className="stat-info">
          <span className="stat-number">{totalRecipes}</span>
          <span className="stat-label">Recettes</span>
        </div>
      </div>

      <div className="stat-box">
        <div className="stat-icon">💬</div>
        <div className="stat-info">
          <span className="stat-number">{totalComments}</span>
          <span className="stat-label">Commentaires</span>
        </div>
      </div>
    </div>
  )
}

export default GlobalStats
