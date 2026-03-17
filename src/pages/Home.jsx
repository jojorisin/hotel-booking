import { Link } from "react-router-dom";
import "./styles/Home.css";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Bautasten Resort | Eco-friendly Luxury in the Heart of Nature</title>
        <meta
          name="description"
          content="Welcome to Bautasten Resort. Experience a sustainable getaway where modern eco-luxury meets the untouched beauty of the forest."
        />
      </Helmet>
      <section className="hero-section d-flex flex-column">
        <Link to="/booking" style={{ textDecoration: "none" }}>
          <h1 className="welcome-h1 shadow-sm fw-medium">Welcome to another world</h1>
        </Link>
      </section>
    </>
  );
}

export default Home;
