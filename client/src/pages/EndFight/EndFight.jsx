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
          <section className="box choice-stat">
            <h1 className="title-style">vous avez gagne ce combat </h1>
            <img
              className="gif-victory"
              src="https://i.giphy.com/3FQ9mRcb94aogeTvmj.webp"
              alt="gif ewok"
            />
            <p className="text-style">
              Bravo, glorieuse victoire! mais ne vous reposez pas vos lauriers.
              preparez vous pour le prochain combat.
            </p>
            <p className="text-style">
              choisissez la statistique que vous voulez augmenter de 5 points.
            </p>
            <nav className="buttons-set-stat">
              <Link
                className="button-style"
                to="/planetes"
                onClick={() => handleVictories("atk")}
              >
                attaque
              </Link>
              <Link
                className="button-style"
                to="/planetes"
                onClick={() => handleVictories("def")}
              >
                defence
              </Link>
            </nav>
          </section>
        </div>
      ) : (
        <div className="end-page-defeat">
          <CardCharacter
            classCard="card-battle-character"
            character={character}
          />
          <section className="box choice-stat">
            <h1 className="title-style">vous avez perdu ce combat </h1>
            <img
              className="gif-defeat"
              src="https://www.icegif.com/wp-content/uploads/2022/05/icegif-145.gif"
              alt=""
            />
            <p className="text-style">
              malheureusement, la force n'était pas au rendez-vous. mais ne
              perdez pas espoir ! chaque défaite est une occasion d'apprendre et
              de s'améliorer.
            </p>
            <p className="text-style"> alors, debout et retournez au combat.</p>
            <nav className="buttons-set-stat">
              <Link className="button-style" to="/planetes">
                retour
              </Link>
            </nav>
          </section>
        </div>
      )}
    </main>
  );
}

export default EndFight;
