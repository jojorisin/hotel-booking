import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Footer() {
    return (
        <footer className="bg-white shadow-sm py-4 mt-5">
            <Container className="footer-container">
                <Row className="row">
                    <Col xs={12} md={6} className="text-center text-md-start">
                        <h5 className="mb-1">Bautasten Resort</h5>
                        <p className="small text-secondary">Experience nature</p>
                    </Col>
                    <Col xs={12} md={6} className=" text-center text-md-end">
                        <p className="mb-0">&copy; 2026 Bautasten Group</p>
                        <p className="small text-secondary">Created by Johanna</p>
                    </Col>
                </Row>
            </Container>
        </footer>

    )
}
export default Footer;