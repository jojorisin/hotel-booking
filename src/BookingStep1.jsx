import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Room from "./Room";
import { rooms } from "./roomData";
import "./BookingStep1.css";
import "./DesktopInput";
import InputGroup from "react-bootstrap/InputGroup";
import DesktopInput from "./DesktopInput";

function BookingStep1({ setStep, setBookingDetails }) {
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });
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
    const totalCost = nights * room.price;

    setBookingDetails((prev) => ({
      ...prev,
      arrivalDate: arrivalDate,
      departureDate: departureDate,
      guests: guests,
      selectedRoom: { name: room.name, price: room.price },
      totalCost: totalCost,
      nights: nights,
    }));
    setStep(2);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <Container className="booking-details-container bg-white mb-5 shadow-sm">
          <Row className=" align-items-center ">
            <label className="form-label"></label>
            {isDesktop ? (
              <>
                <Col xs={8}>
                  <DatePicker
                    customInput={<DesktopInput />}
                    className="form-control mx-0"
                    calendarClassName="fluid-calendar"
                    popperClassName="desktop-popper"
                    popperPlacement="bottom-start"
                    selected={arrivalDate}
                    onChange={(dates) => updateDates(dates)}
                    startDate={arrivalDate}
                    endDate={departureDate}
                    selectsRange
                    monthsShown={2}
                    minDate={new Date()}
                    required
                  />
                </Col>
                <Col xs={1} className="d-flex flex-column align-items-center ">
                  <span className="text-secondary small">Nights</span>
                  <span className="text-muted fw-bold">{nights}</span>
                </Col>
                <Col className="guests-container border-start d-flex flex-row align-items-center ms-5">
                  <i class="bi bi-people"></i>
                  <label className="guest-label ms-3 me-5 mb-0">Guests</label>
                  <div className="stepper-container">
                    <button
                      type="button"
                      className="stepper-btn me-3 "
                      onClick={() => setGuests(Math.max(1, guests - 1))}>
                      –
                    </button>
                    <span className="stepper-value">{guests}</span>
                    <button
                      type="button"
                      className="stepper-btn ms-3"
                      onClick={() => setGuests(Math.min(10, guests + 1))}>
                      +
                    </button>
                  </div>
                </Col>
              </>
            ) : (
              <>
                <Col xs={12} className="d-flex justify-content-center align-items-center">
                  <DatePicker
                    className="datepicker form-control"
                    selected={arrivalDate}
                    onChange={(dates) => updateDates(dates)}
                    startDate={arrivalDate}
                    endDate={departureDate}
                    selectsRange
                    minDate={new Date()}
                    inline
                    required
                  />
                </Col>
                <Col xs={12} md={12} className="guests-container d-flex mt-4">
                  <i className="bi bi-people me-2"></i>
                  <label className="guest-label ">Guests</label>
                  <div className="stepper-container  me-2 ms-auto">
                    <button
                      type="button"
                      className="stepper-btn me-3 "
                      onClick={() => setGuests(Math.max(1, guests - 1))}>
                      –
                    </button>
                    <span className="stepper-value">{guests}</span>
                    <button
                      type="button"
                      className="stepper-btn ms-3"
                      onClick={() => setGuests(Math.min(10, guests + 1))}>
                      +
                    </button>
                  </div>
                </Col>
                <Col xs={12} className=" d-flex justify-content-between align-items-center mt-3 mb-3 ">
                  <span className="text-secondary small  ">Nights</span>
                  <span className="text-muted fw-bold me-5">{nights}</span>
                </Col>
              </>
            )}
          </Row>
        </Container>

        <Container className="bg-light mb-5">
          <Row className="g-3 pb-2 mx-2">
            {rooms.map((room) => (
              <Col xs={12} key={room.name}>
                <Room
                  key={room.name}
                  name={room.name}
                  exteriorImage={room.exteriorImage}
                  interiorImage={room.interiorImage}
                  description={room.description}
                  maxGuests={room.maxGuests}
                  size={room.size}
                  mountainView={room.mountainView}
                  seaView={room.seaView}
                  forestView={room.forestView}
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
