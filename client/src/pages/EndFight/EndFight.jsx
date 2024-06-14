import { useLoaderData, useParams, Link } from "react-router-dom";
import { useHackaton } from "../../contexts/hackathonContext";
import CardCharacter from "../../components/CardCharacter/CardCharacter";

import "./EndFight.css";

function EndFight() {
  const [character] = useLoaderData();
  const { id, status } = useParams();
  const { player, setNbVictory, setPlayerstat } = useHackaton();
  const modifiedID = parseInt(id, 10);
  const handleVictories = (att) => {
    setPlayerstat("pv", 100);
    setNbVictory((victories) => [...victories, modifiedID]);
    if (att === "atk") {
      setPlayerstat("atk", player.atk + 5);
    } else {
      setPlayerstat("def", player.def + 5);
    }
  };
  return (
    <main className="background-page">
      {status === "victoire" ? (
        <div className="end-page-victory">
          <CardCharacter classCard="card-battle-character" character={player} />
          <section className="choice-stat">
            <Link
              className="button-style"
              to="/planetes"
              onClick={() => handleVictories("atk")}
            >
              Attaque
            </Link>
            <Link
              className="button-style"
              to="/planetes"
              onClick={() => handleVictories("def")}
            >
              Defense
            </Link>
          </section>
        </div>
      ) : (
        <div className="end-page-defeat">
          <CardCharacter
            classCard="card-battle-character"
            character={character}
          />
          <Link
            className="button-style"
            to="/planetes"
            onClick={() => setPlayerstat("pv", 100)}
          >
            retour
          </Link>
        </div>
      )}
    </main>
  );
}

export default EndFight;
