import { useState } from 'react'
import Booking from './Booking'
import Home from './Home'
import './App.css'
import About from './About'
import Footer from './Footer'
import Contact from './Contact'

function App() {
  const [page, setPage] = useState('home')
  const [bookingDetails, setBookingDetails] = useState({ arrivalDate: null, departureDate: null, guests: 1, selectedRoom: null });

  return (
    <div className="App">
      <header className="home-header shadow-sm">
        <div className="header-spacer"></div>

        <img src="/logo3.png" alt="bautasten logo" className="header-logo" />
        <nav className="nav-menu">
          <button onClick={() => setPage('home')}>Home</button>
          <button onClick={() => setPage('booking', bookingDetails, setBookingDetails)}>Booking</button>
          <button onClick={() => setPage('about')}>Our Philosophy</button>
          <button onClick={() => setPage('contact')}>Contact Us</button>

        </nav>
      </header>





      <main>
        {page === 'home' && < Home setPage={setPage} setBookingDetails={setBookingDetails} />}

        {page === 'booking' && <Booking setPage={setPage} bookingDetails={bookingDetails} setBookingDetails={setBookingDetails} />}

        {page === 'about' && <About setPage={setPage} />}

        {page === 'contact' && <Contact setPage={setPage} />}

      </main>
      <Footer />
    </div>
  );
}

export default App
