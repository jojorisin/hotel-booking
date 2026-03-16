import { useState } from "react";
import Booking from "./pages/Booking";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./App.css";
import About from "./pages/About";
import Footer from "./components/common/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Header from "./components/common/Header";

function App() {
  const [page, setPage] = useState("home");
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [bookingDetails, setBookingDetails] = useState({
    arrivalDate: today,
    departureDate: tomorrow,
    guests: 1,
    selectedRoom: null,
    nights: 1,
    totalCost: null,
  });

  return (
    <div className="App">
      <Header setPage={setPage} />

      <main>
        {page === "home" && <Home setPage={setPage} />}

        {page === "booking" && (
          <Booking setPage={setPage} bookingDetails={bookingDetails} setBookingDetails={setBookingDetails} />
        )}

        {page === "about" && <About />}

        {page === "contact" && <Contact setPage={setPage} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
