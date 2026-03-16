import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Room.css";
import { Carousel } from "react-bootstrap";

function Room({ room, bookingDetails, onSelect }) {
  const totalCost = bookingDetails.nights * room.price;
  return (
    <Row className="room-info g-0 bg-white  shadow-sm">
      <Col xs={12} md={6}>
        <Carousel interval={null} className="room-carousel shadow-sm ">
          <Carousel.Item>
            <img
              xs={12}
              className="d-block w-100 mx-auto img-fluid"
              src={room.interiorImage}
              alt="Interior image"
              style={{ height: "300px", width: "500px", objectFit: "cover", objectPosition: "30% 70%" }}
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 mx-auto img-fluid"
              src={room.exteriorImage}
              alt="Exterior image"
              style={{ height: "300px", width: "500px", objectFit: "cover", objectPosition: "30% 70%" }}
            />
          </Carousel.Item>
        </Carousel>
      </Col>

      <Col className="room-text-area p-3" xs={12} md={6}>
        <h3 className="text-dark-emphasis fw-bold text-start">{room.name}</h3>

        <Row className="amenities-row small g-3 flex-wrap">
          <Col className="col-auto text-start border-end">
            <span>Max guests </span>
            <i class="bi bi-person-standing"></i>
            <span> {room.maxGuests}</span>
          </Col>
          <Col className="col-auto border-end">
            <i class="bi bi-rulers "></i>
            <span> {room.size}</span>
          </Col>
          <Col className="col-auto">
            <i class="bi bi-wifi"></i>
            <span>Free wifi</span>
          </Col>
          {room.seaView && (
            <Col className="col-auto sea-view-info">
              <i className="bi bi-water me-2"></i>
              <span>Sea View</span>
            </Col>
          )}

          {room.mountainView && (
            <Col className="col-auto">
              <i class="bi bi-card-image"></i> <span>Mountain view</span>
            </Col>
          )}

          {room.forestView && (
            <Col className="col-auto sea-view-info">
              <i class="bi bi-tree"></i>
              <span>Forest view</span>
            </Col>
          )}
        </Row>

        <p className="text-body-secondary description-text text-start mt-4">{room.description}</p>

        <Row className="border-top align-items-center">
          <Col className="cost-col" xs={6} md={6}>
            <p className="fw-semibold text-muted text-start mb-0 mt-2 small">
              Total cost for {bookingDetails.nights}
              {bookingDetails.nights === 1 ? " night" : " nights"}: €{totalCost}
            </p>
            <p className="text-secondary text-start ">Cost per night: €{room.price}</p>
          </Col>
          <Col xs={6} md={6} className="text-end">
            <Button
              type="submit"
              className="book-now-btn rounded-0 "
              onClick={() => {
                onSelect({ ...room, totalCost });
              }}>
              Book now
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Room;
