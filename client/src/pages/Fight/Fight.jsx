import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import CardCharacter from "../../components/CardCharacter/CardCharacter";
import { useHackaton } from "../../contexts/hackathonContext";

import "./Fight.css";

function Fight() {
  const [character] = useLoaderData();
  const [fighter, setFighter] = useState(character);
  const { player, setPlayerstat, setNbVictory } = useHackaton();
  const navigate = useNavigate();
  const lauchAttack = () => {
    let deg = 0;
    // Joueur attaque
    if (player.atk > fighter.def) {
      deg = player.atk * 4;
    } else if (player.atk < fighter.def) {
      deg = player.atk;
    } else {
      deg = player.atk * 2;
    }
    setFighter((prev) => ({
      ...prev,
      pv: prev.pv - deg,
    }));
    // Victoire ?
    if (fighter.pv <= 0) {
      setNbVictory((victories) => [...victories, fighter.id]);
      setPlayerstat("pv", 100);
      navigate(`/planetes/${fighter.planet_id}`);
    }
    // PNJ contre - attaque
    if (fighter.atk > player.def) {
      deg = fighter.atk * 4;
    } else if (fighter.atk < player.def) {
      deg = fighter.atk;
    } else {
      deg = fighter.atk * 2;
    }
    player.pv -= deg;
    // Defaite ?
    if (player.pv <= 0) {
      setPlayerstat("pv", 100);
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
      <button type="button" onClick={() => lauchAttack()}>
        Attaquer
      </button>
    </main>
  );
}

export default Fight;
