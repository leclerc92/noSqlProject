import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RecipePage from './pages/RecipePage'

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
        </Routes>

        <footer className="app-footer">
          <p>© 2025 Recettes de Cuisine - Projet NoSQL</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
