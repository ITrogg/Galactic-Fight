import { useLoaderData } from "react-router-dom";
import CardCharacter from "../../components/CardCharacter/CardCharacter";

function SelectFight() {
  const characters = useLoaderData();
  return (
    <main className="background-page">
      {characters.map((character) => (
        <CardCharacter
          key={character.id}
          classCard="card-main-character"
          character={character}
        />
      ))}
    </main>
  );
}

export default SelectFight;
