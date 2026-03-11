import "./Home.css";

function Home({ setPage }) {
  return (
    <>
      <main>
        <section className="hero-section">
          <h1 className="welcome-h1" onClick={() => setPage("booking")}>
            Welcome to another world
          </h1>
        </section>
      </main>
    </>
  );
}

export default Home;
