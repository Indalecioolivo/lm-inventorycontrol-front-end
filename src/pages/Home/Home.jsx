import "./home.css";
import SideBar from "../../modules/SideBar/SideBar";
import Header from "../../modules/Header/Header";
import ModalEditUser from "../../modules/ModalEditUser/ModalEditUser";
import StockTable from "../../modules/StockTable/StockTable";

export default function Home() {
  return (
    <div className="home-container">
      {/* <ModalEditUser /> */}
      <SideBar />
      <div className="content">
        <Header title={"Home"} />
        <StockTable />
      </div>
    </div>
  );
}
