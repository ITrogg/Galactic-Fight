import { useLoaderData, Link } from "react-router-dom";

import { useHackaton } from "../../contexts/hackathonContext";
import CardCharacter from "../../components/CardCharacter/CardCharacter";
import "./selectFight.css";

function SelectFight() {
  const characters = useLoaderData();
  const { player, nbVictory, setPlayerstat } = useHackaton();
  if (player.pv !== 100) setPlayerstat("pv", 100);
  return (
    <main className="background-page planet-detail">
      <nav>
        <Link className="button-style" to="/planetes">
          retour
        </Link>
      </nav>
      <div className="selected-planet-detail">
        <img
          className="img-planet-detail"
          src={characters[0].planet_image}
          alt=""
        />
        <h2 className="title-style  box box-title-planet">
          {characters[0].planet_name}
        </h2>
        <p className="text-style box inhabitant-box">
          Habitants : {characters[0].inhabitant}
        </p>
        <p className="text-style box type-box">Type : {characters[0].type}</p>
        <div className="box box-description-planet">
          <p className="description-planet">{characters[0].description}</p>
        </div>
      </div>
      <div className="bad-guys">
        {characters.map((character) => {
          const isDead = nbVictory.includes(character.id);
          return (
            <Link
              key={character.id}
              to={
                isDead
                  ? `/planetes/${character.planet_id}`
                  : `/adversaire/${character.id}`
              }
            >
              <CardCharacter
                classCard={`card-bad-character ${isDead ? "card-dead-character" : ""}`}
                character={character}
              />
            </Link>
          );
        })}
      </div>
      <CardCharacter classCard="card-main-character" character={player} />
    </main>
  );
}

export default SelectFight;
