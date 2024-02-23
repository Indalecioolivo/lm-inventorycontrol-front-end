import { createContext, useContext, useState } from "react";

const HomeContext = createContext();

export function useHomeContext() {
  return useContext(HomeContext);
}

export function HomeContextProvider({ children }) {
  const [contentStock, setContentStock] = useState(true);
  const [contentProducts, setContentProducts] = useState(false);
  const [contentFlow, setContentFlow] = useState(false);

  function handleHomeContent(selectedContent) {
    console.log(selectedContent);
    setContentStock(selectedContent === "home");
    setContentProducts(selectedContent === "products");
    setContentFlow(selectedContent === "flow");
  }
  return (
    <HomeContext.Provider
      value={{ contentStock, contentProducts, contentFlow, handleHomeContent }}
    >
      {children}
    </HomeContext.Provider>
  );
}
