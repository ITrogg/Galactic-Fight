import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import CardCharacter from "../../components/CardCharacter/CardCharacter";
import { useHackaton } from "../../contexts/hackathonContext";

import "./Fight.css";

function Fight() {
  const [character] = useLoaderData();
  const [fighter, setFighter] = useState(character);

  const { player } = useHackaton();
  console.info(setFighter);
  return (
    <main className="background-page">
      <h1 className="title-style fight-title">Fight 9</h1>
      <div className="fight-page">
        <CardCharacter classCard="card-battle-character" character={fighter} />
        <CardCharacter classCard="card-battle-character" character={player} />
      </div>
    </main>
  );
}

export default Fight;
