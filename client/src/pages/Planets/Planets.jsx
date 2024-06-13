import { useLoaderData, Link } from "react-router-dom";

import Planet from "../../components/planet/Planet";
import "./planets.css";

function Planets() {
  const planets = useLoaderData();

  return (
    <main className="background-page">
      <section className="map-planets">
        <Link to="/planetes/:id">
          {planets.map((planet) => (
            <Planet key={planet.index} planet={planet} />
          ))}
        </Link>
      </section>
    </main>
  );
}

export default Planets;
