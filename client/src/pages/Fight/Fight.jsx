import { useLoaderData } from "react-router-dom";
import "./Fight.css";

function Fight() {
  const [fighter] = useLoaderData();
  console.info(fighter);
  return (
    <main className="background-page">
      <h1>Fight page </h1>
    </main>
  );
}

export default Fight;
