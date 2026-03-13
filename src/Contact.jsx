import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Contact.css";

function Contact({ setPage }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    setPage("home");
    setTimeout(() => {
      alert("Thanks for your message! We will get back to you shortly.");
    }, 100);
  };

  return (
    <div className="contact-div p-5">
      <Container className="message-form-container mt-5">
        <Row className="justify-content-center g-5">
          <Col xs={12} className="mb-3 text-start bg-white border shadow p-5">
            <h3 className="mb-3">Send us a message</h3>
            <form id="message-form" onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  First Name
                </label>
                <input className="form-control" type="text" id="name" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label required-label">
                  Email
                </label>
                <input className="form-control" id="email" type="email" required />
              </div>
              <div>
                <label htmlFor="message" className="form-label required-label">
                  Message
                </label>
                <textarea className="form-control " id="message" rows="4" required></textarea>
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
