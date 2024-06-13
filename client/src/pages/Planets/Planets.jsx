import { useLoaderData } from "react-router-dom";

import Planet from "../../components/planet/Planet";

function Planets() {
  const planets = useLoaderData();

  return (
    <main className="background-page">
      <section>
        {planets.map((planet) => (
          <Planet key={planet.index} planet={planet} />
        ))}
      </section>
    </main>
  );
}

export default Planets;
