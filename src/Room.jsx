import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Room.css';

function Room({ name, exteriorImage, interiorImage, description, amenities, price, nights, totalCost, onSelect }) {
    return (

        <Row className="room-info g-0 bg-white rounded shadow-sm">
            <Col className="exterior-image-col" xs={12} md={6}>
                <img src={exteriorImage} alt={name + " exterior"} className="img-fluid" />
            </Col>
            <Col className="interior-image-col" xs={12} md={6}>
                <img src={interiorImage} alt={name + " interior"} className="img-fluid" />
            </Col>
            <Col className="room-text-area p-4" xs={12}>
                <h3 className="text-dark ">{name}</h3>
                <p className="text-body-secondary">{description}</p>
                <Row className="amenities-row">
                    <Col className="text-start" xs={12} md={6}>
                        <ul className="amenities-list">
                            {amenities && amenities.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </Col>
                    <Col className="cost-and-book mt-5" xs={12} md={6}>
                        <p className="fw-semibold mb-1">Total cost for {nights}{nights === 1 ? " night" : " nights"}: €{totalCost}</p>
                        <p className="text-body-secondary">Cost per night: €{price}</p>
                        <Button type="submit" className="book-now-btn" size="lg" onClick={() => { onSelect({ name, totalCost, price }); }}>Book now</Button>
                    </Col>
                </Row>
            </Col>
        </Row>

    )
}

export default Room;