import "./planet.css";

function Planet({ planet }) {
  return (
    <div className={`planet-${planet.id}`}>
      <img src={planet.image} alt={planet.name} />
      <h2 className="title-style">{planet.name}</h2>
    </div>
  );
}

export default Planet;
