import "./home.css";
import SideBar from "../../modules/SideBar/SideBar";
import Header from "../../modules/Header/Header";
import ModalEditUser from "../../modules/ModalEditUser/ModalEditUser";
import ModalAddProduct from "../../modules/ModalAddProduct/ModalAddProduct";
import ModalAddFlow from "../../modules/ModalAddFlow/ModalAddFlow";
import ModalAllFlows from "../../modules/ModalAllFlows/ModalAllFlows";
import StockTable from "../../modules/StockTable/StockTable";
import ProductsTable from "../../modules/ProductsTable/ProductsTable";
import StockFlow from "../../modules/StockFlow/StockFlow";
import { useHomeContext } from "../../context/HomeContext";

export default function Home() {
  const {
    showModalEditUser,
    showModalAddProduct,
    contentStock,
    contentProducts,
    contentFlow,
    showModalAddFlow,
    showModalAllFlows,
  } = useHomeContext();
  return (
    <div className="home-container">
      {showModalEditUser ? <ModalEditUser /> : ""}
      {showModalAddProduct ? <ModalAddProduct /> : ""}
      {showModalAddFlow ? <ModalAddFlow /> : ""}
      {showModalAllFlows ? <ModalAllFlows /> : ""}
      <SideBar />
      <div className="content">
        <Header title={"Home"} />
        <hr />
        {contentStock ? <StockTable /> : ""}
        {contentProducts ? <ProductsTable /> : ""}
        {contentFlow ? <StockFlow /> : ""}
      </div>
    </div>
  );
}
