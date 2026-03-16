import "./styles/About.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet-async";

function About() {
  return (
    <section className="about-section">
      <Helmet>
        <title>About Us | Bautasten Resort Mission & Values</title>
        <meta
          name="description"
          content="Discover the story of Bautasten Resort. Learn about our commitment to environmental stewardship, sustainability, and our mission to make guests care for nature."
        />
      </Helmet>
      <h1 className="visually-hidden">About Bautasten resort</h1>
      <div className="hotel-quote-div">
        <blockquote className="pt-5 text-white values-quote">
          Not <em>just</em> a hotel
        </blockquote>
      </div>

      <Container fluid className="bg-white p-5 about-container ">
        <Row as="article" className="mission-row align-items-center m-4 p-3">
          <Col xs={12} md={6}>
            <h2 className="mb-4">Our Mission</h2>
          </Col>
          <Col xs={12} md={6}>
            <p className="text-start">
              At Bautasten, we are committed to preserve the natural beauty of our environment. We strive to create a
              sustainable and eco-friendly experience for our guests, while also supporting the local community and
              economy. Our mission is to provide a unique and unforgettable experience for our guests, while also
              promoting responsible tourism and environmental stewardship.
            </p>
          </Col>
        </Row>
      </Container>

      <div className="image-spacer"></div>

      <Container fluid className="bg-white w-100 p-5">
        <Row as="article" className=" values-row align-items-center m-4 p-3">
          <Col xs={12} md={6} className="values-container">
            <h2 className="mb-4">Our Values</h2>
          </Col>
          <Col>
            <p className="text-start ">
              We are not just in the experience-business. We are proud to say that we are in the engagement-business.
              Making our beautiful nautre available to you, not only to give you and your loved ones a cherished memory,
              but to make you care. We want you to care about the environment, to care about the local community, to
              care about the future of our planet. We want you to be a part of our mission, to be a part of our values,
              to be a part of our story. We want you to be a part of our family.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="image-spacer"></div>
    </section>
  );
}
export default About;
