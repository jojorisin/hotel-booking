import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Room from './Room';

function BookingStep1({ setStep, bookingDetails, setBookingDetails }) {
    const [arrival, setArrival] = useState(null);
    const [departure, setDeparture] = useState(null);
    const [guests, setGuests] = useState(1);
    const rooms = [{ name: "Glamping Tent", exteriorImage: "/glamping_exterior.png", interiorImage: "/glamping_interior.png", price: "350", description: "Glamping tent..." },
    { name: "Mountain Cottage", exteriorImage: "/mountain_cottage_exterior.png", interiorImage: "/mountain_cottage_interior.png", price: "450", description: "Mountain cottage..." },
    { name: "Seaside villa", exteriorImage: "/seaside_villa_exterior.png", interiorImage: "/seaside_villa_interior.png", price: "800", description: "Seaside villa..." }
    ];
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
            <div className="booking-details-container">
                <DatePicker selected={arrival} onChange={(date) => setArrival(date)} placeholderText="Arrival" />
                <DatePicker selected={departure} onChange={(date) => setDeparture(date)} placeholdertext="Departure" />
                <label>Guests</label>
                <input type="number" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} />

            </div>
            <div className="room-selection-container">
                {rooms.map((room) => (
                    <Room
                        key={room.name}
                        name={room.name}
                        exteriorImage={room.exteriorImage}
                        interiorImage={room.interiorImage}
                        description={room.description}
                        price={room.price}
                        onSelect={handleBookNow}
                        setStep={setStep}
                    />

                ))}

            </div>
        </>

    )




}
export default BookingStep1;