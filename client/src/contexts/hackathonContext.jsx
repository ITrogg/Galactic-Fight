import { createContext, useContext, useState } from "react";

const HackatonContext = createContext();

export function HackatonProvider({ children }) {
  const hello = "Wolrd";

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  return (
    <HackatonContext.Provider
      value={{ hello, setName, name, avatar, setAvatar }}
    >
      {children}
    </HackatonContext.Provider>
  );
}
export const useHackaton = () => useContext(HackatonContext);
