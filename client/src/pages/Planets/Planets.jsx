import { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import Planet from "../../components/planet/Planet";
import ewok from "../../assets/images/ewok.png";
import "./planets.css";
import "../../App.css";

function Planets() {
  const planets = useLoaderData();
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const messageShown = localStorage.getItem("messageShown");

    if (messageShown) {
      setShowMessage(false);
    }
  }, []);

  const handleHideMessage = () => {
    localStorage.setItem("messageShown", "true");
    setShowMessage(false);
  };
  const handleClearLocal = () => {
    localStorage.clear();
  };

  return (
    <main className="background-page">
      <section className="map-planets">
        {planets.map((planet) => (
          <Link key={planet.id} to={`/planetes/${planet.id}`}>
            <Planet planet={planet} />
          </Link>
        ))}
        <button
          className="button-style button-story"
          onClick={handleClearLocal}
          type="button"
        >
          clear
        </button>
      </section>
      <div className="box-center-story">
        {showMessage && (
          <div className="box box-position-story">
            <p className="text-style box-story1">
              voici une carte de la galaxie. la princesse Leia Organa est
              retenue sur une planète. à toi de trouver la princesse!
            </p>
            <div className="box-story2">
              <button
                type="button"
                className="button-style button-story"
                onClick={handleHideMessage}
              >
                fermer
              </button>
              <img src={ewok} alt="Personnage Ewok" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Planets;
