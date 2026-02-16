import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="app-container">
      <header className="main-header">
        <div className="logo">
          <img src="/logo.png" alt="Bautasten Retreat" className="header-logo" />
        </div>
        <nav className="nav-menu">
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('booking')}>Bookings</button>
        </nav>
      </header>

      <main>
        {page === 'home' ? (
          <section className="hero-section">
            <div className="hero-content">
              <h1>Welcome to another world</h1>
              <p>Experience true nature in the heart of Sweden</p>
              <button className="cta-button" onClick={() => setPage('booking')}>Reservations</button>
            </div>
          </section>
        ) : (
          <section className="booking-section">
            <h1>Book your stay</h1>
            <p>form</p>
          </section>
        )}
      </main>
    </div>
  )
}


export default App;
