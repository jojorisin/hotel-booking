import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import "./Header.css";

function Header({ setPage }) {
  return (
    <header className="home-header  pb-3">
      <Container className="">
        <Row className="align-items-center">
          <Col xs={4} className="d-flex justify-content-start">
            <Nav className="nav-menu">
              <NavDropdown title="Menu" className="header-menu" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => setPage("home")}>Home</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setPage("booking")}>Booking</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setPage("about")}>Our Philosophy</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setPage("contact")}>Contact Us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
          <Col xs={4} className="d-flex justify-content-center">
            <img onClick={() => setPage("home")} src="/logo3.png" alt="bautasten logo" className="header-logo" />
          </Col>
          <Col xs={4} className="d-flex justify-content-end header-spacer">
            <Nav>
              <Nav.Link onClick={() => setPage("booking")}>Book now</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
export default Header;
