import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import CardCharacter from "../../components/CardCharacter/CardCharacter";
import { useHackaton } from "../../contexts/hackathonContext";

import "./Fight.css";

function Fight() {
  const [character] = useLoaderData();
  const [fighter, setFighter] = useState(character);
  const { player } = useHackaton();
  const navigate = useNavigate();

  const calculDeg = (attacker, defender) => {
    if (attacker.atk > defender.def) {
      return attacker.atk * 3;
    }
    if (attacker.atk < defender.def) {
      return attacker.atk;
    }
    return attacker.atk * 2;
  };

  const lauchAttack = () => {
    // PNJ attaque
    let deg = calculDeg(fighter, player);
    player.pv -= deg;
    // Defaite ?
    if (player.pv <= 0) {
      navigate(`/planetes/${fighter.planet_id}/defaite`);
      return;
    }
    // Joueur·euse contre attaque
    deg = calculDeg(player, fighter);
    setFighter((prev) => ({
      ...prev,
      pv: prev.pv - deg,
    }));
    // Victoire ?
    if (fighter.pv <= deg) {
      navigate(`/planetes/${fighter.planet_id}`);
    }
  };

  return (
    <main className="background-page">
      <h1 className="title-style fight-title">Fight 9</h1>
      <div className="fight-page">
        <CardCharacter classCard="card-battle-character" character={fighter} />
        <CardCharacter classCard="card-battle-character" character={player} />
      </div>
      <button
        type="button"
        className="button-style"
        onClick={() => lauchAttack()}
      >
        Attaquer
      </button>
    </main>
  );
}

export default Fight;
