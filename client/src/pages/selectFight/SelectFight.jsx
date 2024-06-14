import { useState, useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { useHackaton } from "../../contexts/hackathonContext";
import CardCharacter from "../../components/CardCharacter/CardCharacter";
import ship from "../../assets/images/ship.png";
import ewok from "../../assets/images/ewok.png";
import "./selectFight.css";
import "../../App.css";

function SelectFight() {
  const characters = useLoaderData();
  const { player, nbVictory, setPlayerstat } = useHackaton();
  if (player.pv !== 100) setPlayerstat("pv", 100);

  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const messageShown = localStorage.getItem("selectFightMessageShown");

    if (messageShown) {
      setShowMessage(false);
    }
  }, []);

  const handleHideMessage = () => {
    localStorage.setItem("selectFightMessageShown", "true");
    setShowMessage(false);
  };

  return (
    <main className="background-page planet-detail">
      <Link to="/planetes" className="ship-position">
        <img src={ship} alt="Vaisseau spacial" />
      </Link>
      <div className="display-tuto">
        {showMessage && (
          <div className="box box-position-story2">
            <p className="text-style box-story1">
              a gauche le vaiseau vous permez de revenir en arrière. <br /> ici
              vous retrouvez plusieurs personnages à combattre, cliquez sur l'un
              d'eux pour l'affronter.
            </p>
            <div className="box-story2">
              <button
                type="button"
                className="button-style button-story"
                onClick={handleHideMessage}
              >
                fermer
              </button>
              <img src={ewok} alt="Personnage Ewok1" />
            </div>
          </div>
        )}
      </div>
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
