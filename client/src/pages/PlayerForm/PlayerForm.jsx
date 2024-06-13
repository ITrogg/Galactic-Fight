import { Link } from "react-router-dom";
import { useState } from "react";
import { useHackaton } from "../../contexts/hackathonContext";
import avatars from "./dataPlayer";
import "./PlayerForm.css";

function PlayerForm() {
  const { name, setName, setSelectAvatar, selectAvatar } = useHackaton();

  const [sucessForm, setSucessForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSucessForm(true);
  };

  return (
    <section className="background-page">
      <div className="page-container">
        <div className="form-container">
          <form>
            <label htmlFor="avatar" className="avatar-label">
              <h2 className="title-style title-player">Choisissez un avatar</h2>
            </label>
            <div className="avatar-selection">
              {avatars.map((avatar) => (
                <button
                  key={avatar.id}
                  type="button"
                  className={`button-player-avatar ${selectAvatar === avatar.src ? "selected" : ""}`}
                  onClick={() => setSelectAvatar(avatar.src)}
                >
                  <img src={avatar.src} alt={avatar.alt} />
                </button>
              ))}
            </div>
            <label htmlFor="name" className="name-label">
              Quel est votre nom ?
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-form"
              />
            </label>
            <button
              type="submit"
              onClick={handleSubmit}
              className="button-style button-form"
              disabled={name === "" || selectAvatar === ""}
            >
              valider
            </button>
          </form>
          {sucessForm && (
            <Link to="/planetes" className="button-style">
              Let's go
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default PlayerForm;
