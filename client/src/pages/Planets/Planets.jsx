import { useLoaderData, Link } from "react-router-dom";

import Planet from "../../components/planet/Planet";
import "./planets.css";

function Planets() {
  const planets = useLoaderData();

  return (
    <main className="background-page">
      <section className="map-planets">
        {planets.map((planet) => (
          <Link key={planet.id} to={`/planetes/${planet.id}`}>
            <Planet planet={planet} />
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Planets;
