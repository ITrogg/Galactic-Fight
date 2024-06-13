import { createContext, useContext, useState } from "react";

const HackatonContext = createContext();

export function HackatonProvider({ children }) {
  const [nbVictory, setNbVictory] = useState(["", ""]);
  const playerInit = {
    pv: 100,
    name: "tot",
    nb_victory: [],
    atk: 35,
    def: 60,
    image:
      "https://github.com/Miadil/starwars-api/blob/master/api/assets/Luke_Skywalker.png?raw=true",
  };
  const [player, setPlayer] = useState(playerInit);
  const setPlayerstat = (attribute, value) => {
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      [attribute]: value,
    }));
  };
  return (
    <HackatonContext.Provider
      value={{ player, setPlayerstat, nbVictory, setNbVictory }}
    >
      {children}
    </HackatonContext.Provider>
  );
}
export const useHackaton = () => useContext(HackatonContext);
