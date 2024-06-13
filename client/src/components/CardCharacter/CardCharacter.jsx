import "./cardCharacter.css";

function CardCharacter({ classCard, character }) {
  return (
    <article className={classCard}>
      <img src={character.image} alt={character.name} title={character.name} />
      <p className="atk">{character.atk}</p>
      <p className="def">{character.def}</p>
      <p className="pv">{character.pv}</p>
    </article>
  );
}

export default CardCharacter;
