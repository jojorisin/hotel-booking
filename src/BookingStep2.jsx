import { useState, useEffect } from 'react';

function BookingStep2({ setPage, bookingDetails }) {

    const handleSubmit = () => {
        const bookingData = {
            arrivalDate: bookingDetails.arrivalDate.toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' }),
            departureDate: bookingDetails.departureDate.toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' }),
            guests: bookingDetails.guests,
            room: bookingDetails.selectedRoom.name,
            price: bookingDetails.selectedRoom.price,
            firstName: firstName,
            lastName: lastName,
            email: email

        };
        localStorage.setItem('bookingData', JSON.stringify(bookingData));
        setPage('home');
        alert("Booking confirmed! Check your email for details.");
    }
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    return (
        <>
            <div className="confirm-booking-container">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <button type="submit">Confirm booking</button>
                </form>
            </div>
        </>
    )

}
export default BookingStep2;