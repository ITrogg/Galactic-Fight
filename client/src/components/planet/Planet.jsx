import "./planet.css";

function Planet({ planet }) {
  return (
    <div>
      <img src={planet.image} alt={planet.name} />
    </div>
  );
}

export default Planet;
