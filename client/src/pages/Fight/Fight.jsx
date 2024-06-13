import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import CardCharacter from "../../components/CardCharacter/CardCharacter";
import "./Fight.css";

const userSample = {
  atk: 35,
  def: 60,
  image:
    "https://github.com/Miadil/starwars-api/blob/master/api/assets/Luke_Skywalker.png?raw=true",
};

function Fight() {
  const [character] = useLoaderData();
  const [player, setPlayer] = useState(userSample);
  const [fighter, setFighter] = useState(character);
  console.info(setFighter, setPlayer);
  return (
    <main className="background-page">
      <CardCharacter classCard="card-main-character" character={fighter} />
      <CardCharacter classCard="card-main-character" character={player} />
    </main>
  );
}

export default Fight;
