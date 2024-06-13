import { useState } from "react";
import ewok from "../../assets/images/ewok.png";
import "./PlayerForm.css";
import "../../App.css";

const messages = [
  {
    id: "0",
    long_text:
      "bienvenue dans l'univers épique de légendes galactiques: l'épopée des ewoks !",
  },
  {
    id: "1",
    long_text:
      "dans une galaxie lointaine, très lointaine, une nouvelle aventure vous attend. toute la galaxie est au bord de la fin, et seule une poignée de braves peut renverser la vapeur.",
  },
  {
    id: "2",
    long_text:
      "la princesse leia organa, figure emblématique de l'alliance rebelle, a été capturée par dark vador.",
  },
  {
    id: "3",
    long_text:
      "votre mission : la sauver et restaurer l'espoir dans la galaxie. avant de partir au combat, il vous faut choisir votre personnage.",
  },
  {
    id: "4",
    long_text:
      "ces personnages ont une statistique d'attaque, de défense, et de points de vie. suite à chaque combat, vous gagnerez en compétences.",
  },
  {
    id: "5",
    long_text:
      "le destin de la galaxie repose entre vos mains. l'univers de star wars vous attend. serez-vous à la hauteur ?",
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
        <div className="box-center-story">
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
                suivant
              </button>
              <img src={ewok} alt="Personnage Ewok" />
            </div>
          </div>
        </div>
      ) : (
        <div className="box-center-story">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="avatar" className="avatar-label">
                choisie ton avatar
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
                quel est ton nom ?
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
