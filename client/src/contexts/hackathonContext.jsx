import { createContext, useContext, useState } from "react";

const HackatonContext = createContext();

export function HackatonProvider({ children }) {
  const [name, setName] = useState("");
  const [selectAvatar, setSelectAvatar] = useState(null);

  const player = {
    pv: 100,
    name: { name },
    nb_victory: 0,
    atk: 35,
    def: 60,
    image: { selectAvatar },
  };
  return (
    <HackatonContext.Provider
      value={{ player, setName, setSelectAvatar, name, selectAvatar }}
    >
      {children}
    </HackatonContext.Provider>
  );
}
export const useHackaton = () => useContext(HackatonContext);
