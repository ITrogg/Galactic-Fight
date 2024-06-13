import "./PlayerForm.css";
import { useState } from "react";
import ewok from "../../assets/images/ewok.png";

const messages = [
  {
    id: "0",
    long_text:
      "Bienvenue dans l'univers épique de Légendes Galactiques: L'Épopée des Ewoks !",
  },
  {
    id: "1",
    long_text:
      "Dans une galaxie lointaine, très lointaine, une nouvelle aventure vous attend. Toute la galaxie est au bord de la fin, et seule une poignée de braves peut renverser la vapeur.",
  },
  {
    id: "2",
    long_text:
      "La princesse Leia Organa, figure emblématique de l'Alliance Rebelle, a été capturée par Dark Vador.",
  },
  {
    id: "3",
    long_text:
      "Votre mission : la sauver et restaurer l'espoir dans la galaxie. Avant de partir au combat, il vous faut choisir votre personnage.",
  },
  {
    id: "4",
    long_text:
      "Ces personnages ont une statistique d'attaque, de défense, et de points de vie. Suite à chaque combat, vous gagnerez en compétences.",
  },
  {
    id: "5",
    long_text:
      "Le destin de la galaxie repose entre vos mains. L'univers de Star Wars vous attend. Serez-vous à la hauteur ?",
  },
];

function PlayerForm({ setName }) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const handleNextMessage = () => {
    if (currentMessageIndex < messages.length - 1) {
      setCurrentMessageIndex(currentMessageIndex + 1);
    } else {
      setCurrentMessageIndex(-1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="background-page">
      {currentMessageIndex >= 0 ? (
        <div className="page-container">
          <div className="box box-position-story">
            <div className="text-style box-story1">
              {messages[currentMessageIndex].long_text}
            </div>
            <div className="box-story2">
              <button
                onClick={handleNextMessage}
                className="button-style button-story"
                type="button"
              >
                Skip
              </button>
              <img src={ewok} alt="Personnage Ewok" />
            </div>
          </div>
        </div>
      ) : (
        <div className="page-container">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="avatar" className="avatar-label">
                Choisie ton avatar
              </label>
              <div className="avatar-selection">
                <img
                  src="https://github.com/Miadil/starwars-api/blob/master/api/assets/Luke_Skywalker.png?raw=true"
                  alt="Avatar 1"
                />
                <img
                  src="https://github.com/Miadil/starwars-api/blob/master/api/assets/Luke_Skywalker.png?raw=true"
                  alt="Avatar 2"
                />
                <img
                  src="https://github.com/Miadil/starwars-api/blob/master/api/assets/Luke_Skywalker.png?raw=true"
                  alt="Avatar 3"
                />
              </div>
              <label htmlFor="name" className="name-label">
                Quel est ton nom ?
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="input-form"
                />
              </label>
              <button type="submit" className="button-style button-form">
                valider
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default PlayerForm;
