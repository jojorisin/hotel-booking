import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DesktopInput from "./common/DesktopInput";
import "./common/DesktopInput";
import { calculateNights } from "../utils/bookingUtil";
import { useWindowSize } from "../hooks/useWindowSize";

function DatePickerComponent({ bookingDetails, setBookingDetails }) {
  const isDesktop = useWindowSize();
  const nights = calculateNights(bookingDetails.arrivalDate, bookingDetails.departureDate);

  const updateDates = (dates) => {
    const [start, end] = dates;

    const updatedNights = calculateNights(start, end);

    setBookingDetails((prev) => ({
      ...prev,
      arrivalDate: start,
      departureDate: end,
      nights: updatedNights,
    }));
  };

  const updateGuests = (change) => {
    setBookingDetails((prev) => ({
      ...prev,
      guests: Math.max(1, prev.guests + change),
    }));
  };

  return (
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
                selected={bookingDetails.arrivalDate}
                onChange={(dates) => updateDates(dates)}
                startDate={bookingDetails.arrivalDate}
                endDate={bookingDetails.departureDate}
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
                <button type="button" className="stepper-btn me-3 " onClick={() => updateGuests(-1)}>
                  –
                </button>
                <span className="stepper-value">{bookingDetails.guests}</span>
                <button type="button" className="stepper-btn ms-3" onClick={() => updateGuests(1)}>
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
                selected={bookingDetails.arrivalDate}
                onChange={(dates) => updateDates(dates)}
                startDate={bookingDetails.arrivalDate}
                endDate={bookingDetails.departureDate}
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
                <button type="button" className="stepper-btn me-3 " onClick={() => updateGuests(-1)}>
                  –
                </button>
                <span className="stepper-value">{bookingDetails.guests}</span>
                <button type="button" className="stepper-btn ms-3" onClick={() => updateGuests(1)}>
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
  );
}
export default DatePickerComponent;
