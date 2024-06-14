import { Link } from "react-router-dom";
import { useState } from "react";
import { useHackaton } from "../../contexts/hackathonContext";
import avatars from "../../assets/images/dataPlayer";
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
      "dans une galaxie lointaine, très lointaine, une nouvelle aventure vous attend. toute la galaxie est en ébullition, et seule une poignée de braves peut.",
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

function PlayerForm() {
  const { selectAvatar, setPlayerstat, player } = useHackaton();
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [successForm, setSuccessForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccessForm(true); // Corrected variable name to setSuccessForm
  };

  const handleNextMessage = () => {
    if (currentMessageIndex < messages.length - 1) {
      setCurrentMessageIndex(currentMessageIndex + 1);
    } else {
      setCurrentMessageIndex(-1);
    }
  };

  return (
    <section
      className={
        currentMessageIndex >= 0
          ? "background-page display-intro"
          : "background-page display-form"
      }
    >
      {currentMessageIndex >= 0 ? (
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
      ) : (
        <div className="page-container">
          <form onSubmit={handleSubmit} className="form-container">
            {/* Added onSubmit handler */}
            <label htmlFor="avatar" className="avatar-label">
              <h2 className="title-style title-player box">
                Choisissez un avatar
              </h2>
            </label>
            <div className="avatar-selection">
              {avatars.map((avatar) => (
                <button
                  key={avatar.id}
                  type="button"
                  className="selected-avatar"
                  onClick={() => setPlayerstat("image", avatar.src)}
                >
                  <img src={avatar.src} alt={avatar.alt} />
                </button>
              ))}
            </div>
            <label htmlFor="name" className="name-label box">
              Quel est votre nom ?
              <input
                type="text"
                required
                value={player.name}
                onChange={(e) => setPlayerstat("name", e.target.value)}
                className="input-form"
              />
            </label>
            <button
              type="submit"
              className="button-style button-form"
              disabled={player.name === "" || selectAvatar === ""}
            >
              valider
            </button>
            {successForm && (
              <Link to="/planetes" className="button-style">
                Let's go
              </Link>
            )}
          </form>
        </div>
      )}
    </section>
  );
}

export default PlayerForm;
