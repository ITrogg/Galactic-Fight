import { useParams } from "react-router-dom";

function EndGame() {
  const { id } = useParams();

  return (
    <main className="background-page">
      {id === "4" ? <div>Fin dark vador</div> : <div>Fin leaia</div>}EndGame
    </main>
  );
}

export default EndGame;
