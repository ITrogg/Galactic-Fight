import "./cardCharacter.css";

function CardCharacter() {
  const mainCharacter = {
    id: 1,
    atk: "35",
    def: "60",
    pv: "100",
    name: "luke skywalker",
    image:
      "https://github.com/Miadil/starwars-api/blob/master/api/assets/Luke_Skywalker.png?raw=true",
  };
  return (
    <article className="card-character">
      <img
        src="https://github.com/Miadil/starwars-api/blob/master/api/assets/Luke_Skywalker.png?raw=true"
        alt={mainCharacter.name}
      />
      <p className="atk">{mainCharacter.atk}</p>
      <p className="def">{mainCharacter.def}</p>
      <p className="pv">{mainCharacter.pv}</p>
    </article>
  );
}

export default CardCharacter;
