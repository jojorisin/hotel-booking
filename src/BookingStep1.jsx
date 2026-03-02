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
    const [arrivalDate, setArrivalDate] = useState(bookingDetails.arrivalDate || null);
    const [departureDate, setDepartureDate] = useState(bookingDetails.departureDate || null);
    const [guests, setGuests] = useState(bookingDetails.guests || 1);
    const [selectedRoom, setSelectedRoom] = useState(rooms[0]);

    const calculateNights = (arrivalDate, departureDate) => {
        if (arrivalDate && departureDate) {
            const timeDiff = departureDate.getTime() - arrivalDate.getTime();
            return Math.ceil(timeDiff / (1000 * 3600 * 24));
        }
        return 0;
    }
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
        setBookingDetails(prev => ({ ...prev, arrivalDate: arrivalDate, departureDate: departureDate, guests: guests, selectedRoom: { name: room.name, price: room.totalCost } }));
        setStep(2);

    }


    useEffect(() => {
        if (bookingDetails?.arrivalDate) {
            setArrivalDate(bookingDetails.arrivalDate);
        }
        if (bookingDetails?.departureDate) {
            setDeparture(bookingDetails.departureDate);
        }
        if (bookingDetails?.guests) {
            setGuests(bookingDetails.guests);

        }
    }, [bookingDetails])


    return (
        <> <form onSubmit={(e) => e.preventDefault()}>
            <Container className="booking-details-container mb-5 shadow-sm">
                <Row className="align-items-center py-3 ">
                    <Col xs={12} md={4} className="d-flex align-items-center">
                        <label className="form-label"></label>
                        <DatePicker className="form-control" selected={arrivalDate} onChange={(date) => setArrivalDate(date)} placeholderText="Arrival" minDate={new Date()} required />
                    </Col>
                    <Col xs={12} md={4} className="d-flex align-items-center">
                        <label className="form-label"></label>
                        <DatePicker className="form-control" selected={departureDate} onChange={(date) => setDeparture(date)} placeholderText="Departure" minDate={getMinDepartureDate(arrivalDate)} required />
                    </Col>
                    <Col xs={12} md={4} className="d-flex align-items-center">
                        <label className="guest-label form-label me-2 mb-0">Guests</label>
                        <input type="number" min="1" max="10" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} />
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


    )




}
export default BookingStep1;