import { useState } from 'react';
import './About.css';


function About({ setPage }) {
    return (
        <section className="about-section">
            <h1>Not <em>just</em> a hotel</h1>

            <div className="about-container">
                <div className="mission-row">
                    <div className="mission-container">
                        <article className="mission-content">
                            <h2>Our Mission</h2>
                            <p>At Bautasten, we are committed to preserve the natural beauty of our environment.
                                We strive to create a sustainable and eco-friendly experience for our guests, while also supporting the local community and economy. Our mission is to provide a unique and unforgettable experience for our guests, while also promoting responsible tourism and environmental stewardship.
                            </p>

                        </article>
                    </div>
                    <div className="mission-image-container">
                        <img src="/mission_reindeer.png" alt="mission image" className="mission-image" />
                    </div>
                </div>

                <blockquote className="about-quote">"Nature is not a place to visit. It is a home."</blockquote>

                <div className="values-row">

                    <div className="values-image-container">
                        <img src="/values_image_dining.png" alt="values image" className="values-image" />
                    </div>
                    <div className="values-container">
                        <article className="values-content">
                            <h2>Our Values</h2>
                            <p>We are not just in the experience-business. We are proud to say that we are in the engagement-business. Making our beautiful nautre available to you, not only to give you and your loved ones a cherished memory, but to make you care. We
                                want you to care about the environment, to care about the local community, to care about the future of our planet. We want you to be a part of our mission, to be a part of our values, to be a part of our story. We want you to be a part of our family.
                            </p>
                        </article>
                    </div>

                </div>
            </div>

        </section>
    );


}
export default About;