import "./planet.css";

function Planet({ planet }) {
  return (
    <div className={`planet-${planet.id}`}>
      <img src={planet.image} alt={planet.name} />
    </div>
  );
}

export default Planet;
