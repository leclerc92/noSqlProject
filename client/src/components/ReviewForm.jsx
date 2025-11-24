import React, { useState } from 'react'
import axios from 'axios'

function ReviewForm({ onReviewSubmitted }) {
  const [formData, setFormData] = useState({
    author: '',
    content: ''
  })
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

    setIsSubmitting(true)
    setMessage({ type: '', text: '' })

    try {
      const response = await axios.post('/api/feedback', {
        author: formData.author.trim(),
        content: formData.content.trim()
      })

      setMessage({ type: 'success', text: 'Merci pour votre avis ! 🎉' })
      setFormData({ author: '', content: '' })
      
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
