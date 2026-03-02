import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './DatePickerComponent.css';
import Button from 'react-bootstrap/Button';


function DatePickerComponent({ setPage, setBookingDetails }) {
    const [arrivalDate, setArrivalDate] = useState(new Date());
    const [departureDate, setDepartureDate] = useState(null);
    const [guests, setGuests] = useState(1);

    const handleCheck = () => {
        setBookingDetails({ arrivalDate: arrivalDate, departureDate: departureDate, guests: Number(guests) });
        setPage('booking');


    }

    return (
        <Container className="hero-datepicker-container mt-4 mb-5">
            <Row className="hero-datepicker-row">
                <Col xs={12} md={4} className="d-flex align-items-center">
                    <label className="form-label"></label>
                    <DatePicker selected={arrivalDate} onChange={(date) => setArrivalDate(date)} placeholderText="Arrival" />
                </Col>
                <Col xs={12} md={4} className="d-flex align-items-center">
                    <label className="form-label"></label>
                    <DatePicker selected={departureDate} onChange={(date) => setDepartureDate(date)} placeholderText="Departure" />
                </Col>
                <Col xs={12} md={4} className="d-flex align-items-center justify-content-center justify-content-md-start">
                    <label className="hero-guest-label form-label me-2 mb-0">Guests</label>
                    <input type="number" min="1" max="10" value={guests} onChange={(e) => setGuests(parseInt(e.target.value) || 1)} />
                </Col>
                <Col className="mt-4" xs={12}><Button className="check-btn" onClick={handleCheck}>Check Availability</Button></Col>

            </Row>
        </Container>
    )

}
export default DatePickerComponent;

