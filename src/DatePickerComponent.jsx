import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function DatePickerComponent({ setPage, setBookingDetails }) {
    const [arrivalDate, setArrivalDate] = useState(null);
    const [departureDate, setDepartureDate] = useState(null);
    const [guests, setGuests] = useState(1);

    const handleCheck = () => {
        setBookingDetails({ arrivalDate, departureDate, guests });
        setPage('booking');


    }

    return (
        <div className="date-picker-container">
            <DatePicker selected={arrivalDate} onChange={(date) => setArrivalDate(date)} placeholderText="Arrival" />
            <DatePicker selected={departureDate} onChange={(date) => setDepartureDate(date)} placeholderText="Departure" />
            <label>Guests</label>
            <input type="number" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} />
            <button onClick={handleCheck}>Check Availability</button>
        </div>
    )

}
export default DatePickerComponent;

