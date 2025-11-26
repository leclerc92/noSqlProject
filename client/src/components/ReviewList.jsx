import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Composant SVG pour l'étoile
const StarIcon = ({ filled = false }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

function ReviewList({ recipeId }) {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchReviews()
  }, [recipeId])

  const fetchReviews = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`/api/reviews?recipeId=${recipeId}`)
      setReviews(response.data)
      setError(null)
    } catch (err) {
      console.error('Erreur lors de la récupération des avis:', err)
      // Si l'endpoint n'existe pas encore, afficher un message approprié
      if (err.response?.status === 404) {
        setError('Endpoint /api/reviews non disponible (à implémenter par le backend)')
      } else {
        setError('Impossible de charger les avis')
      }
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return <div className="reviews-list loading">Chargement des avis...</div>
  }

  if (error) {
    return (
      <div className="reviews-list">
        <h3>💬 Avis des utilisateurs</h3>
        <div className="error-message">{error}</div>
      </div>
    )
  }

  return (
    <div className="reviews-list">
      <h3>💬 Avis des utilisateurs</h3>
      {reviews.length === 0 ? (
        <p className="no-reviews">Aucun avis pour le moment. Soyez le premier à partager votre expérience !</p>
      ) : (
        <div className="reviews-container">
          {reviews.map((review) => (
            <div key={review._id} className="review-item">
              <div className="review-header">
                <span className="review-author">👤 {review.author}</span>
                {review.rating && (
                  <span className="review-rating">
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className={index < review.rating ? 'star active' : 'star'}>
                        <StarIcon filled={index < review.rating} />
                      </span>
                    ))}
                  </span>
                )}
                {review.createdAt && (
                  <span className="review-date">{formatDate(review.createdAt)}</span>
                )}
              </div>
              <p className="review-content">{review.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ReviewList
