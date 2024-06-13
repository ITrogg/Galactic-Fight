import { createContext, useContext } from "react";

const HackatonContext = createContext();

export function HackatonProvider({ children }) {
  const hello = "Wolrd";
  return (
    <HackatonContext.Provider value={{ hello }}>
      {children}
    </HackatonContext.Provider>
  );
}
export const useHackaton = () => useContext(HackatonContext);
