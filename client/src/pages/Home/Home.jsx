import "./Home.css";
import { Link } from "react-router-dom";
import "../../App.css";

function Home() {
  return (
    <main className="background-page">
      <section className="home-container">
        <div className="home-crawl-content">
          <h1 className="home-title-style">Légendes Galactiques</h1>
          <h2 className="home-title-style">Jeu de Cartes de Duel</h2>
          <Link className="button-style" type="button" to="/planets">
            START WARS
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
