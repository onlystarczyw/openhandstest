import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(res => res.text())
      .then(data => {
        setMessage(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🌸 Spring Boot + React Demo</h1>
      </header>
      
      <main className="app-main">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error">
            <h2>❌ Error connecting to backend</h2>
            <p>{error}</p>
            <p className="hint">Make sure the Spring Boot server is running on port 8080</p>
          </div>
        ) : (
          <div className="success">
            <h2>✅ Connected to Spring Boot!</h2>
            <div className="message-box">
              <p className="message">{message}</p>
            </div>
          </div>
        )}
        
        <div className="info-card">
          <h3>Project Info</h3>
          <ul>
            <li><strong>Frontend:</strong> React + Vite</li>
            <li><strong>Backend:</strong> Spring Boot 3.2.0</li>
            <li><strong>API:</strong> http://localhost:8080/</li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default App
