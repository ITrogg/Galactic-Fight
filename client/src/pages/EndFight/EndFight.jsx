import { useLoaderData, useParams } from "react-router-dom";
import { useHackaton } from "../../contexts/hackathonContext";
import CardCharacter from "../../components/CardCharacter/CardCharacter";

import "./EndFight.css";

function EndFight() {
  const [character] = useLoaderData();
  const { id, status } = useParams();
  const { player } = useHackaton();
  console.info(id);
  // setNbVictory((victories) => [...victories, id]);
  // setPlayerstat("atk", player.atk + 2);
  // setPlayerstat("def", player.def + 3);
  return (
    <main className="background-page">
      {status === "victoire" ? (
        <CardCharacter classCard="card-battle-character" character={player} />
      ) : (
        <CardCharacter
          classCard="card-battle-character"
          character={character}
        />
      )}
    </main>
  );
}

export default EndFight;
