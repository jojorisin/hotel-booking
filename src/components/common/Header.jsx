import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="home-header pb-3">
      <Container className="">
        <Row className="align-items-center">
          <Col xs={4} className="d-flex justify-content-start">
            <Nav className="nav-menu">
              <NavDropdown title="Menu" className="header-menu" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/">
                  Home
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/booking">
                  Booking
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about">
                  Our Philosophy
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">
                  Contact Us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Col>
          <Col xs={4} className="d-flex justify-content-center">
            <Link to="/">
              <img src="/logo3.png" alt="bautasten logo" className="header-logo" />
            </Link>{" "}
          </Col>
          <Col xs={4} className="d-flex justify-content-end header-spacer">
            <Nav>
              <Nav.Link as={Link} to="/booking">
                Book now
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
export default Header;
