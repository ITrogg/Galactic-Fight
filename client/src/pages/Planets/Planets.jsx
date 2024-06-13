import { useLoaderData, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHackaton } from "../../contexts/hackathonContext";
import Planet from "../../components/planet/Planet";
import "./planets.css";

function Planets() {
  const planets = useLoaderData();
  const { nbVictory } = useHackaton();
  const [filteredPlanets, setFilteredPlanets] = useState([]);

  const handlePlanets = () => {
    const numPlanetsToShow =
      nbVictory.length === 0 ? 1 : Math.floor(nbVictory.length / 2);
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
    </main>
  );
}

export default Planets;
