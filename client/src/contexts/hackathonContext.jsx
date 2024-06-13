import { createContext, useContext } from "react";

const HackatonContext = createContext();

export function HackatonProvider({ children }) {

  const player = {
    pv: 100,
    name: "tot",
    nb_victory: 0,
    atk: 35,
    def: 60,
    image:
      "https://github.com/Miadil/starwars-api/blob/master/api/assets/Luke_Skywalker.png?raw=true",
  };
  return (
    <HackatonContext.Provider value={{ player }}>
      {children}
    </HackatonContext.Provider>
  );
}
export const useHackaton = () => useContext(HackatonContext);
