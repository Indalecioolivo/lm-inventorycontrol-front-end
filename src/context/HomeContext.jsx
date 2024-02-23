import { createContext, useContext, useState } from "react";

const HomeContext = createContext();

export function useHomeContext() {
  return useContext(HomeContext);
}

export function HomeContextProvider({ children }) {
  const [userOptions, setUserOptions] = useState(false);
  const [contentStock, setContentStock] = useState(true);
  const [contentProducts, setContentProducts] = useState(false);
  const [contentFlow, setContentFlow] = useState(false);

  function handleUserOptions() {
    setUserOptions(!userOptions);
  }

  function handleHomeContent(selectedContent) {
    setContentStock(selectedContent === "home");
    setContentProducts(selectedContent === "products");
    setContentFlow(selectedContent === "flow");
  }
  return (
    <HomeContext.Provider
      value={{
        userOptions,
        handleUserOptions,
        setUserOptions,
        contentStock,
        contentProducts,
        contentFlow,
        handleHomeContent,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
