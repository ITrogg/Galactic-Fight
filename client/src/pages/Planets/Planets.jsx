import { useLoaderData, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHackaton } from "../../contexts/hackathonContext";
import Planet from "../../components/planet/Planet";
import CardCharacter from "../../components/CardCharacter/CardCharacter";
import "./planets.css";

function Planets() {
  const planets = useLoaderData();
  const { nbVictory, player } = useHackaton();
  const [filteredPlanets, setFilteredPlanets] = useState([]);
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
      </section>
      <CardCharacter
        classCard="card-main-character-planets"
        character={player}
      />
    </main>
  );
}

export default Planets;
