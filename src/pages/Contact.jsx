import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./styles/Contact.css";
import { Helmet } from "react-helmet-async";

function Contact() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your message! We will get back to you shortly.");
    navigate("/");
  };

  return (
    <div className="contact-div p-5">
      <Helmet>
        <title>Contact Us | Get in Touch with Bautasten Resort</title>
        <meta
          name="description"
          content="Have questions about your stay? Contact Bautasten Resort for bookings, directions, and inquiries about our eco-friendly accommodations."
        />
      </Helmet>
      <Container className="mt-5">
        <Row className="justify-content-center g-5">
          <Col xs={12} className="mb-3 text-start bg-white border shadow p-5">
            <h1 className="mb-3">Contact us</h1>
            <form id="message-form" onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  First Name
                </label>
                <input className="form-control" type="text" id="name" autoComplete="given-name" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label required-label">
                  Email
                </label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  aria-required="true"
                  autoComplete="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="form-label required-label">
                  Message
                </label>
                <textarea className="form-control " id="message" rows="4" aria-required="true" required></textarea>
              </div>
              <Col xs={12} className="d-flex justify-content-center">
                <Button size="lg" className="message-btn mt-5" type="submit">
                  Send
                </Button>
              </Col>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Contact;
