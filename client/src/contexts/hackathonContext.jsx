import { createContext, useContext, useState } from "react";

const HackatonContext = createContext();

export function HackatonProvider({ children }) {
  // const [name, setName] = useState("");
  // const [selectAvatar, setSelectAvatar] = useState(null);
  const [nbVictory, setNbVictory] = useState([]);
  const playerInit = {
    pv: 100,
    name: "",
    atk: 20,
    def: 15,
    image: "",
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
      value={{
        player,
        setPlayerstat,
        nbVictory,
        setNbVictory,
      }}
    >
      {children}
    </HackatonContext.Provider>
  );
}
export const useHackaton = () => useContext(HackatonContext);
