import { useState } from 'react';
import './About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function About({ setPage }) {
    return (
        <section className="about-section mt-5 mb-5">
            <div><h2 className="lead fs-1">Not <em>just</em> a hotel</h2></div>

            <Container className="bg-light about-container mt-5">
                <Row className="bg-white p-5 mission-row align-items-center">
                    <Col xs={12} md={6} className=" mission-container">
                        <article className="mission-content">
                            <h2 className="mb-4">Our Mission</h2>
                            <p className="text-secondary text-start lh-lg">At Bautasten, we are committed to preserve the natural beauty of our environment.
                                We strive to create a sustainable and eco-friendly experience for our guests, while also supporting the local community and economy. Our mission is to provide a unique and unforgettable experience for our guests, while also promoting responsible tourism and environmental stewardship.
                            </p>

                        </article>
                    </Col>
                    <Col xs={12} md={6} className="mission-image-container">
                        <img src="/mission_reindeer.png" alt="mission image" className="mission-image shadow" />
                    </Col>
                </Row>

                <blockquote className="shadow about-quote">"Nature is not a place to visit. It is a home."</blockquote>

                <Row className="bg-white p-5 values-row align-items-center">

                    <Col xs={12} md={6} className="values-image-container">
                        <img src="/values_image_dining.png" alt="values image" className="values-image" />
                    </Col>
                    <Col xs={12} md={6} className="values-container">
                        <article className="values-content">
                            <h2 className="mb-4">Our Values</h2>
                            <p className="text-secondary text-start lh-lg">We are not just in the experience-business. We are proud to say that we are in the engagement-business. Making our beautiful nautre available to you, not only to give you and your loved ones a cherished memory, but to make you care. We
                                want you to care about the environment, to care about the local community, to care about the future of our planet. We want you to be a part of our mission, to be a part of our values, to be a part of our story. We want you to be a part of our family.
                            </p>
                        </article>
                    </Col>

                </Row>
            </Container>

        </section>
    );


}
export default About;