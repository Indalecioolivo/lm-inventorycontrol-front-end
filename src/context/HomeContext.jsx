import { createContext, useContext } from "react";

const HomeContext = createContext();

export function useHomeContext() {
  return useContext(HomeContext);
}

export function HomeContextProvider({ children }) {
  return <HomeContext.Provider value={{}}>{children}</HomeContext.Provider>;
}
