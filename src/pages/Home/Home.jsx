import "./home.css";
import SideBar from "../../modules/SideBar/SideBar";
import Header from "../../modules/Header/Header";
import ModalEditUser from "../../modules/ModalEditUser/ModalEditUser";
import StockTable from "../../modules/StockTable/StockTable";
import ProductsTable from "../../modules/ProductsTable/ProductsTable";
import db from "../../services/db";
import StockFlow from "../../modules/StockFlow/StockFlow";

export default function Home() {
  return (
    <div className="home-container">
      {/* <ModalEditUser /> */}
      <SideBar />
      <div className="content">
        <Header title={"Home"} />
        <hr />
        {/* <StockTable /> */}
        {/* <ProductsTable /> */}
        <StockFlow />
      </div>
    </div>
  );
}
