import "./Home.css";

function Home({ setPage }) {
  return (
    <>
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
