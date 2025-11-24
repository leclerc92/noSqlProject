import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Stats() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/stats')
      setStats(response.data)
      setError(null)
    } catch (err) {
      console.error('Erreur lors de la récupération des stats:', err)
      setError('Impossible de charger les statistiques')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="stats-card loading">Chargement des statistiques...</div>
  }

  if (error) {
    return <div className="stats-card error">{error}</div>
  }

  return (
    <div className="stats-card">
      <h3>📊 Statistiques</h3>
      <div className="stats-content">
        <div className="stat-item">
          <span className="stat-number">{stats?.counter || 0}</span>
          <span className="stat-label">avis reçus</span>
        </div>
      </div>
    </div>
  )
}

export default Stats
