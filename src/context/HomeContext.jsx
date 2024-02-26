import { createContext, useContext, useState } from "react";

const HomeContext = createContext();

export function useHomeContext() {
  return useContext(HomeContext);
}

export function HomeContextProvider({ children }) {
  const [userOptions, setUserOptions] = useState(false);
  const [showModalEditUser, setShowModalEditUser] = useState(false);
  const [showModalAddProduct, setShowModalAddProduct] = useState(false);
  const [showModalAddFlow, setShowModalAddFlow] = useState(false);
  const [contentStock, setContentStock] = useState(true);
  const [contentProducts, setContentProducts] = useState(false);
  const [contentFlow, setContentFlow] = useState(false);

  function handleUserOptions() {
    return setUserOptions(!userOptions);
  }

  function handleModalEditUser(e) {
    if (userOptions) {
      setShowModalEditUser(e);
      setUserOptions(false);
      return;
    }
    return setShowModalEditUser(e);
  }

  function handleModalAddProduct(e) {
    return setShowModalAddProduct(e);
  }

  function handleModalAddFlow(e) {
    return setShowModalAddFlow(e);
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
        showModalAddProduct,
        handleModalAddProduct,
        showModalEditUser,
        handleModalEditUser,
        showModalAddFlow,
        handleModalAddFlow,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
