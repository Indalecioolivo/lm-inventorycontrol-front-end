import "./home.css";
import SideBar from "../../modules/SideBar/SideBar";
import Header from "../../modules/Header/Header";
import ModalEditUser from "../../modules/ModalEditUser/ModalEditUser";
import ModalAddProduct from "../../modules/ModalAddProduct/ModalAddProduct";
import StockTable from "../../modules/StockTable/StockTable";
import ProductsTable from "../../modules/ProductsTable/ProductsTable";
import StockFlow from "../../modules/StockFlow/StockFlow";
import { useHomeContext } from "../../context/HomeContext";

export default function Home() {
  const { contentStock, contentProducts, contentFlow } = useHomeContext();
  return (
    <div className="home-container">
      {/* <ModalEditUser /> */}
      <ModalAddProduct />
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
