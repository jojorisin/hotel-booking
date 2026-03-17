import "react-datepicker/dist/react-datepicker.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Room from "../components/common/Room";
import { rooms } from "../data/roomData";
import "../components/common/DesktopInput";
import BookingDetailsBar from "../components/BookingDetailsBar";

function BookingStep1({ setStep, bookingDetails, setBookingDetails }) {
  const nights = bookingDetails.nights || 0;

  const handleBookNow = (room) => {
    if (
      bookingDetails.nights < 1 ||
      !bookingDetails.arrivalDate ||
      !bookingDetails.departureDate ||
      !bookingDetails.guests
    ) {
      alert("Please fill in all fields before continuing.");
      return;
    }
    if (bookingDetails.guests > room.maxGuests) {
      alert("Too many guests for this room. please pick another");
      return;
    }

    setBookingDetails((prev) => ({
      ...prev,
      selectedRoom: room,
      totalCost: room.totalCost,
      nights: nights,
    }));
    setStep(2);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <BookingDetailsBar bookingDetails={bookingDetails} setBookingDetails={setBookingDetails}></BookingDetailsBar>

        <Container className="bg-light mb-5">
          <Row className="g-3 pb-2 mx-2">
            {rooms.map((room) => (
              <Col xs={12} key={room.name}>
                <Room room={room} bookingDetails={bookingDetails} onSelect={handleBookNow} />
              </Col>
            ))}
          </Row>
        </Container>
      </form>
    </>
  );
}
export default BookingStep1;
