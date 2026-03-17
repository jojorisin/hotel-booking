import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./styles/BookingStep2.css";
import Button from "react-bootstrap/Button";

function BookingStep2({ bookingDetails }) {
  const navigate = useNavigate();
  const {
    arrivalDate,
    departureDate,
    nights,
    guests,
    totalCost,
    selectedRoom: { name, price },
  } = bookingDetails;
  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingData = {
      arrivalDate: arrivalDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      departureDate: departureDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      guests,
      room: name,
      totalCost,
      firstName,
      lastName,
      email,
      phone,
    };

    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    alert("Booking confirmed! Check your email for details.");
    navigate("/");
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="confirm-booking-div py-5 px-4">
      <Container className="bg-white confirm-booking-container pb-5 p-0">
        <div className="bg-light border-bottom p-4">
          <h1 className="fs-3 text-center">Confirm Your Stay</h1>
        </div>
        <Row className="px-5">
          <Col xs={12} md={6}>
            <div className="text-start p-4 ">
              <h2 className="fw-semibold text-dark fs-5 mb-4">Your reservation</h2>
              <p>
                <strong className="text-muted">{name}</strong>
              </p>
              <p>
                {guests} guests | {nights} nights
              </p>
              <p className="text-secondary">
                {arrivalDate?.toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                -{" "}
                {departureDate?.toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="rate-text small fw-light mb-1">Daily rate including breakfast</p>
              <p className="small fw-light mt-3">{price}€/ per night</p>
              <hr />
              <p className="fs-4 mt-5">Total Price: {totalCost}€</p>
              <hr />
            </div>
          </Col>
          <Col className="text-start" xs={12} md={6}>
            <div className="p-4">
              <h2 className="mb-3 fs-5 fw-medium">Guest information</h2>
              <form id="booking-form" onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label text-muted required-label">
                    First Name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    autoComplete="given-name"
                    aria-required="true"
                    required
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="lastName" className="form-label text-muted required-label">
                    Last Name
                  </label>

                  <input
                    className="form-control"
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    autoComplete="family-name"
                    aria-required="true"
                    required
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="email" className="form-label text-muted required-label">
                    Email
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-required="true"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="phone" className="form-label text-muted">
                    Phone Number
                  </label>
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </Col>
          <Col xs={12}>
            <Button className="confirm-booking-btn rounded-0 mt-5" form="booking-form" type="submit">
              Confirm booking
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default BookingStep2;
