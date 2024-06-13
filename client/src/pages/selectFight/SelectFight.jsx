import { useLoaderData } from "react-router-dom";
import CardCharacter from "../../components/CardCharacter/CardCharacter";
import "./selectFight.css";

function SelectFight() {
  const characters = useLoaderData();
  return (
    <main className="background-page planet-detail">
      <div className="selected-planet-detail">
        <img
          className="img-planet-detail"
          src={characters[0].planet_image}
          alt=""
        />
        <h2 className="title-style  box box-title-planet">
          {characters[0].planet_name}
        </h2>
        <p className="text-style box inhabitant-box">
          Habitants : {characters[0].inhabitant}
        </p>
        <p className="text-style box type-box">Type : {characters[0].type}</p>
        <div className="box box-description-planet">
          <p className="description-planet">{characters[0].description}</p>
        </div>
      </div>
      <div className="bad-guys">
        {characters.map((character) => (
          <CardCharacter
            key={character.id}
            classCard="card-main-character"
            character={character}
          />
        ))}
      </div>
    </main>
  );
}

export default SelectFight;
