import { createContext, useContext, useState } from "react";

const HomeContext = createContext();

export function useHomeContext() {
  return useContext(HomeContext);
}

export function HomeContextProvider({ children }) {
  const [contentStock, setContentStock] = useState(false);
  const [contentProducts, setContentProducts] = useState(true);
  const [contentFlow, setContentFlow] = useState(false);
  const [userOptions, setUserOptions] = useState(false);
  const [showModalEditUser, setShowModalEditUser] = useState(false);
  const [showModalAddProduct, setShowModalAddProduct] = useState(true);
  const [showModalAddFlow, setShowModalAddFlow] = useState(false);
  const [showModalAllFlows, setShowModalAllFlows] = useState(false);
  const [errorsAddProductsFields, setErrorsAddProductFields] = useState({});
  const [dataModalAddProduct, setDataModalAddProduct] = useState({
    name: "",
    bar_code: "",
    volume: "",
    stock: "",
    price: "",
  });

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

  function handleModalAllFlows(e) {
    return setShowModalAllFlows(e);
  }

  function handleHomeContent(selectedContent) {
    setContentStock(selectedContent === "home");
    setContentProducts(selectedContent === "products");
    setContentFlow(selectedContent === "flow");
  }

  function handleDataModalAddProducts(e) {
    setDataModalAddProduct({
      ...dataModalAddProduct,
      [e.target.name]: e.target.value,
    });
    console.log(dataModalAddProduct);
  }

  function isNameValid(nome) {
    const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/;
    return regex.test(nome);
  }

  function isBarcodeValid(bar_code) {
    const regex = /^(\d{13})$/;
    return regex.test(bar_code);
  }

  function validateDataModalAddProduct(dataModalAddProduct) {
    const errors = {};
    if (!isNameValid(dataModalAddProduct.name)) {
      errors.userName = "Campo Obrigatório.";
      console.log("nome");
    }
    if (!isBarcodeValid(dataModalAddProduct.bar_code)) {
      errors.bar_code = "Código de barras Inválido";
      console.log("barcode");
    }
    return errors;
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
        showModalAllFlows,
        handleModalAllFlows,
        handleDataModalAddProducts,
        dataModalAddProduct,
        validateDataModalAddProduct,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
