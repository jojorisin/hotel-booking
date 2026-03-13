import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Room from "./Room";
import { rooms } from "./roomData";
import "./BookingStep2.css";
import Button from "react-bootstrap/Button";

function BookingStep2({ setPage, bookingDetails }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      arrivalDate: bookingDetails.arrivalDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      departureDate: bookingDetails.departureDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      guests: bookingDetails.guests,
      room: bookingDetails.selectedRoom.name,
      totalCost: bookingDetails.totalCost,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    setPage("home");
    setTimeout(() => {
      alert("Booking confirmed! Check your email for details.");
    }, 100);
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="confirm-booking-div">
      <Container className="confirm-booking-container mt-5">
        <Row className="align-items-center p-5 g-5">
          <Col xs={12} md={6} className=" text-start bg-white border shadow p-5">
            <h3 className="mb-3 fw-medium">Guest information</h3>
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
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label text-muted required-label">
                  Last Name
                </label>

                <input
                  className="form-control"
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label  required-label">
                  Email
                </label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="form-label">
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
          </Col>

          <Col className="d-flex justify-content-center  justify-content-md-end" xs={12} md={6}>
            <div className="text-start bg-white shadow p-5 ">
              <h3 className="fw-bold">Your reservation</h3>
              <p>
                <strong className="text-muted">{bookingDetails.selectedRoom.name}</strong>
              </p>
              <p>
                {bookingDetails.guests} guests | {bookingDetails.nights} nights
              </p>
              <p className="text-secondary">
                {bookingDetails.arrivalDate?.toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                -{" "}
                {bookingDetails.departureDate?.toLocaleDateString("en-Us", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="rate-text small fw-light mb-1">Daily rate including breakfast</p>
              <p className="small fw-light mt-3">{bookingDetails.selectedRoom.price}€/ per night</p>
              <hr />
              <h5>Total Price: {bookingDetails.totalCost}€</h5>
              <Col>
                <Button className="confirm-booking-btn rounded-0 mt-2" form="booking-form" type="submit">
                  Confirm booking
                </Button>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default BookingStep2;
