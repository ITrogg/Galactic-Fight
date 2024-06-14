import { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { useHackaton } from "../../contexts/hackathonContext";
import ewok from "../../assets/images/ewok.png";
import Planet from "../../components/planet/Planet";
import CardCharacter from "../../components/CardCharacter/CardCharacter";
import "./planets.css";
import "../../App.css";

function Planets() {
  const planets = useLoaderData();
  const { nbVictory, player, setPlayerstat } = useHackaton();
  const [filteredPlanets, setFilteredPlanets] = useState([]);
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
  
  if (player.pv !== 100) setPlayerstat("pv", 100);

  const handlePlanets = () => {
    const numPlanetsToShow =
      nbVictory.length === 0 ? 1 : Math.floor((nbVictory.length + 2) / 2);
    const newFilteredPlanets = planets.slice(0, numPlanetsToShow);
    setFilteredPlanets(newFilteredPlanets);
  };
  useEffect(() => {
    handlePlanets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nbVictory]);
  return (
    <main className="background-page">
      <section className="map-planets">
        {filteredPlanets.map((planet) => (
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

      <CardCharacter
        classCard="card-main-character-planets"
        character={player}
      />
    </main>
  );
}

export default Planets;
