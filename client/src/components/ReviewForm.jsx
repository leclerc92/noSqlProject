import React, { useState } from 'react'
import axios from 'axios'

// Composant SVG pour l'étoile
const StarIcon = ({ filled = false }) => (
  <svg 
    width="24" 
    height="24" 
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

function ReviewForm({ recipeId, onReviewSubmitted }) {
  const [formData, setFormData] = useState({
    author: '',
    content: '',
    rating: 0
  })
  const [hoveredRating, setHoveredRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Efface le message quand l'utilisateur tape
    if (message.text) setMessage({ type: '', text: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    if (!formData.author.trim() || !formData.content.trim()) {
      setMessage({ type: 'error', text: 'Veuillez remplir tous les champs' })
      return
    }

    if (formData.rating === 0) {
      setMessage({ type: 'error', text: 'Veuillez donner une note' })
      return
    }

    setIsSubmitting(true)
    setMessage({ type: '', text: '' })

    try {
      const response = await axios.post('/api/feedback', {
        recipeId: recipeId,
        author: formData.author.trim(),
        content: formData.content.trim(),
        rating: formData.rating
      })

      setMessage({ type: 'success', text: 'Merci pour votre avis ! 🎉' })
      setFormData({ author: '', content: '', rating: 0 })
      
      // Notifie le parent pour rafraîchir les stats
      if (onReviewSubmitted) {
        onReviewSubmitted()
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'avis:', error)
      setMessage({ 
        type: 'error', 
        text: 'Erreur lors de l\'envoi. Veuillez réessayer.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="author">Votre nom</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Ex: Marie Dupont"
          disabled={isSubmitting}
          required
        />
      </div>

      <div className="form-group">
        <label>Votre note</label>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              className={`star ${star <= (hoveredRating || formData.rating) ? 'active' : ''}`}
              onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              disabled={isSubmitting}
            >
              <StarIcon filled={star <= (hoveredRating || formData.rating)} />
            </button>
          ))}
          {formData.rating > 0 && (
            <span className="rating-text">({formData.rating}/5)</span>
          )}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="content">Votre avis</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Partagez votre expérience avec ces recettes..."
          rows="4"
          disabled={isSubmitting}
          required
        />
      </div>

      {message.text && (
        <div className={`form-message ${message.type}`}>
          {message.text}
        </div>
      )}

      <button 
        type="submit" 
        className="submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Envoi en cours...' : '✉️ Envoyer mon avis'}
      </button>
    </form>
  )
}

export default ReviewForm
