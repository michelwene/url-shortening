import { createContext } from "react";

const ShortenContext = createContext({});

export function ShortenContextProvider({ children }) {
  return (
    <ShortenContext.Provider value={""}>{children}</ShortenContext.Provider>
  );
}
