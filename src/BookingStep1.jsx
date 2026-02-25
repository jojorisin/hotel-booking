import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Room from './Room';
import { rooms } from './roomData';
import './BookingStep1.css';
import InputGroup from 'react-bootstrap/InputGroup';

function BookingStep1({ setStep, bookingDetails, setBookingDetails }) {
    const [arrival, setArrival] = useState(null);
    const [departure, setDeparture] = useState(null);
    const [guests, setGuests] = useState(1);

    const [selectedRoom, setSelectedRoom] = useState(rooms[0]);



    const handleBookNow = (room) => {
        if (!arrival || !departure || !guests) {
            alert("Please fill in all fields before continuing.");
            return;
        }
        setBookingDetails(prev => ({ ...prev, arrivalDate: arrival, departureDate: departure, guests: guests, selectedRoom: { name: room.name, price: room.price } }));
        setStep(2);

    }


    useEffect(() => {
        if (bookingDetails?.arrivalDate) {
            setArrival(bookingDetails.arrivalDate);
        }
        if (bookingDetails?.departureDate) {
            setDeparture(bookingDetails.departureDate);
        }
    }, [bookingDetails])


    return (
        <>
            <Container className="booking-details-container mb-5">
                <Row className="booking-details-container">
                    <Col xs={12} md={4} className="d-flex align-items-center">
                        <label className="form-label"></label>
                        <DatePicker selected={arrival} onChange={(date) => setArrival(date)} placeholderText="Arrival" />
                    </Col>
                    <Col xs={12} md={4} className="d-flex align-items-center">
                        <label className="form-label"></label>
                        <DatePicker selected={departure} onChange={(date) => setDeparture(date)} placeholderText="Departure" />
                    </Col>
                    <Col xs={12} md={4} className="d-flex align-items-center">
                        <label className="guest-label form-label me-2 mb-0">Guests</label>
                        <input type="number" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} />
                    </Col>

                </Row>
            </Container>
            <Container>
                <Row>

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
                                onSelect={handleBookNow}
                                setStep={setStep}
                            />
                        </Col>

                    ))}


                </Row>
            </Container>
        </>


    )




}
export default BookingStep1;