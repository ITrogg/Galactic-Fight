import { createContext, useContext, useState } from "react";

const HackatonContext = createContext();

export function HackatonProvider({ children }) {
  const [name, setName] = useState("");
  const [selectAvatar, setSelectAvatar] = useState(null);
  const [nbVictory, setNbVictory] = useState([]);
  const playerInit = {
    pv: 100,
    name: { name },
    nb_victory: [],
    atk: 35,
    def: 60,
    image: { selectAvatar },
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
      value={{ player, setPlayerstat, nbVictory, setNbVictory, setName, setSelectAvatar, name, selectAvatar }}
    >
      {children}
    </HackatonContext.Provider>
  );
}
export const useHackaton = () => useContext(HackatonContext);
