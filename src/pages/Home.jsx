import "./styles/Home.css";
import { Helmet } from "react-helmet-async";

function Home({ setPage }) {
  return (
    <>
      <Helmet>
        <title>Bautasten Resort | Eco-friendly Luxury in the Heart of Nature</title>
        <meta
          name="description"
          content="Welcome to Bautasten Resort. Experience a sustainable getaway where modern eco-luxury meets the untouched beauty of the forest."
        />
      </Helmet>
      <main>
        <section className="hero-section d-flex flex-column">
          <h1 className="welcome-h1 shadow-sm fw-medium" onClick={() => setPage("booking")}>
            Welcome to another world
          </h1>
        </section>
      </main>
    </>
  );
}

export default Home;
