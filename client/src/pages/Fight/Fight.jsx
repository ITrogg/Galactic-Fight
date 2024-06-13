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
      <CardCharacter classCard="card-main-character" character={fighter} />
      <CardCharacter classCard="card-main-character" character={player} />
    </main>
  );
}

export default Fight;
