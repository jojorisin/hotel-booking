import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Room from "./Room";
import { rooms } from "./roomData";
import "./BookingStep1.css";
import InputGroup from "react-bootstrap/InputGroup";

function BookingStep1({ setStep, bookingDetails, setBookingDetails }) {
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(null);
  const [guests, setGuests] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const updateDates = (dates) => {
    const [start, end] = dates;
    setArrivalDate(start);
    setDepartureDate(end);
  };
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calculateNights = (arrivalDate, departureDate) => {
    if (arrivalDate && departureDate) {
      const timeDiff = departureDate.getTime() - arrivalDate.getTime();
      return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }
    return 0;
  };
  const nights = calculateNights(arrivalDate, departureDate);

  const getMinDepartureDate = (arrivalDate) => {
    if (!arrivalDate) return new Date(); // Om inget valt, använd idag

    const nextDay = new Date(arrivalDate); // Skapa en kopia av ankomstdatumet
    nextDay.setDate(nextDay.getDate() + 1); // Plussa på 1 i "dag-fältet"
    return nextDay;
  };

  const handleBookNow = (room) => {
    if (!arrivalDate || !departureDate || !guests) {
      alert("Please fill in all fields before continuing.");
      return;
    }
    setBookingDetails((prev) => ({
      ...prev,
      arrivalDate: arrivalDate,
      departureDate: departureDate,
      guests: guests,
      selectedRoom: { name: room.name, price: room.totalCost },
    }));
    setStep(2);
  };

  return (
    <>
      {" "}
      <form onSubmit={(e) => e.preventDefault()}>
        <Container className="booking-details-container mb-5 shadow-sm">
          <Row className=" align-items-center py-3 ">
            <label className="form-label"></label>
            {isDesktop ? (
              <>
                <Col>
                  <DatePicker
                    className="form-control"
                    selected={arrivalDate}
                    onChange={(date) => setArrivalDate(date)}
                    placeholderText="Checkin"
                    minDate={new Date()}
                    required
                  />
                </Col>
                <Col>
                  <DatePicker
                    className="form-control"
                    selected={departureDate}
                    onChange={(date) => setDeparture(date)}
                    placeholderText="Checkout"
                    minDate={getMinDepartureDate(arrivalDate)}
                    required
                  />
                </Col>
              </>
            ) : (
              <Col xs={12} className="d-flex justify-content-center align-items-center">
                <DatePicker
                  className="datepicker form-control"
                  selected={arrivalDate}
                  onChange={(dates) => {
                    updateDates(dates);
                  }}
                  startDate={arrivalDate}
                  endDate={departureDate}
                  selectsRange
                  minDate={new Date()}
                  inline
                  required
                />
              </Col>
            )}

            <Col xs={12} md={4} className="guests-container d-flex justify-content-between align-items-center mt-4">
              <label className="guest-label me-3 mb-0">Guests</label>
              <div className="stepper-container">
                <button type="button" className="stepper-btn me-3 " onClick={() => setGuests(Math.max(1, guests - 1))}>
                  –
                </button>
                <span className="stepper-value">{guests}</span>
                <button type="button" className="stepper-btn ms-3" onClick={() => setGuests(Math.min(10, guests + 1))}>
                  +
                </button>
              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="g-5">
            {rooms.map((room) => (
              <Col xs={12} key={room.name}>
                <Room
                  key={room.name}
                  name={room.name}
                  exteriorImage={room.exteriorImage}
                  interiorImage={room.interiorImage}
                  description={room.description}
                  amenities={room.amenities}
                  price={room.price}
                  nights={nights}
                  totalCost={nights * room.price}
                  onSelect={handleBookNow}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </form>
    </>
  );
}
export default BookingStep1;
