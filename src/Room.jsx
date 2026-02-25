import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Room.css';

function Room({ name, exteriorImage, interiorImage, description, amenities, price, onSelect, setStep }) {
    return (

        <Row className="room-info g-0">
            <Col className="exterior-image-col" xs={12} md={6}>
                <img src={exteriorImage} alt={name + " exterior"} className="img-fluid" />
            </Col>
            <Col className="interior-image-col" xs={12} md={6}>
                <img src={interiorImage} alt={name + " interior"} className="img-fluid" />
            </Col>
            <Col className="room-text-area" xs={12}>
                <h3>{name}</h3>
                <p>{description}</p>
                <Row className="amenities-row">
                    <Col className="text-start" xs={12} md={6}>
                        <ul className="amenities-list">
                            {amenities && amenities.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </Col>
                    <Col className="cost-and-book" xs={12} md={6}>
                        <p>Cost per night: €{price}</p>
                        <Button className="book-now-btn" size="lg" onClick={() => { onSelect({ name, price }); setStep(2); }}>Book now</Button>
                    </Col>
                </Row>
            </Col>
        </Row>

    )
}

export default Room;