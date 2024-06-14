import { useParams, Link } from "react-router-dom";
import { useHackaton } from "../../contexts/hackathonContext";
import ewok from "../../assets/images/ewok-love.png";
import "../../App.css";
import "./EndGame.css";

function EndGame() {
  const { id } = useParams();
  const { setNbVictory, setPlayerstat } = useHackaton();
  const reinitGame = () => {
    localStorage.clear();
    setNbVictory([]);
    setPlayerstat("name", "");
    setPlayerstat("image", "");
    setPlayerstat("atk", 20);
    setPlayerstat("def", 15);
  };
  return (
    <main className="background-page">
      {id === "4" ? (
        <section className="display-intro">
          <div className="box box-position-story">
            <div className="text-style box-story1">
              <p>
                votre bravoure a restauré l'espoir et la paix dans la galaxie.
                la princesse leia est désormais libre, votre victoire est une
                inspiration pour toute la galaxie.
              </p>
            </div>
            <div className="box-story2">
              <Link to="/" type="button" className="button-style button-story">
                fin
              </Link>
              <img src={ewok} alt="Personnage Ewok" className="ewok-love-end" />
            </div>
          </div>
        </section>
      ) : (
        <section className="display-intro">
          <div className="box box-position-story ">
            <div className="text-style box-story1">
              <p>
                grâce à votre courage, votre stratégie et votre détermination,
                vous avez triomphé contre la princesse leia. vous pouvez enfin
                vivre votre belle histoire d'amour au côté de dark vador.
                <br /> vadou pour les intimes.
              </p>
            </div>
            <div className="box-story2">
              <Link
                to="/"
                type="button"
                onClick={reinitGame}
                className="button-style button-story"
              >
                fin
              </Link>
              <img src={ewok} alt="Personnage Ewok" className="img-victory" />
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default EndGame;
