import { useState } from 'react';
import BookingStep1 from './BookingStep1';
import BookingStep2 from './BookingStep2';

function Booking({ setPage, bookingDetails, setBookingDetails }) {
    const [step, setStep] = useState(1);

    return (
        <>
            {step === 1 && <BookingStep1 setStep={setStep} bookingDetails={bookingDetails} setBookingDetails={setBookingDetails} />}
            {step === 2 && <BookingStep2 setStep={setStep} bookingDetails={bookingDetails} />}
        </>
    );
}

export default Booking;