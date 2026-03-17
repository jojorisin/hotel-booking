import { useState } from "react";
import BookingStep1 from "./BookingStep1";
import BookingStep2 from "./BookingStep2";
import { Helmet } from "react-helmet-async";

function Booking({ bookingDetails, setBookingDetails }) {
  const [step, setStep] = useState(1);

  return (
    <>
      <Helmet>
        <title>Book Your Stay | Bautasten Resort Eco-Luxury</title>
        <meta
          name="description"
          content="Reserve your eco-friendly getaway at Bautasten Resort. Experience sustainable luxury and reconnect with nature in our modern forest cabins."
        />
      </Helmet>
      {step === 1 && (
        <BookingStep1 setStep={setStep} bookingDetails={bookingDetails} setBookingDetails={setBookingDetails} />
      )}
      {step === 2 && <BookingStep2 setStep={setStep} bookingDetails={bookingDetails} />}
    </>
  );
}

export default Booking;
