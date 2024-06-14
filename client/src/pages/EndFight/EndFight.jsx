import { useLoaderData } from "react-router-dom";
import CardCharacter from "../../components/CardCharacter/CardCharacter";

import "./EndFight.css";

function EndFight() {
  const [character] = useLoaderData();

  /**
    const { player, setPlayerstat, setNbVictory } = useHackaton();
    setNbVictory((victories) => [...victories, fighter.id]);
    setPlayerstat("pv", 100);
    setPlayerstat("atk", player.atk + 2);
    setPlayerstat("def", player.def + 3);
   */
  return (
    <main className="background-page">
      <CardCharacter classCard="card-battle-character" character={character} />
    </main>
  );
}

export default EndFight;
