import "./sidebar.css";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/home-icon.png";
import ProductIcon from "../../assets/product-icon.png";
import FlowIcon from "../../assets/flow-icon.png";
import { useHomeContext } from "../../context/HomeContext";

export default function SideBar() {
  const { handleHomeContent } = useHomeContext();
  return (
    <div className="sidebar-container">
      <Link
        to="/home"
        className="link"
        onClick={() => handleHomeContent("home")}
      >
        <img src={HomeIcon} alt="" />
        <p>Home</p>
      </Link>
      <Link className="link" onClick={() => handleHomeContent("products")}>
        <img src={ProductIcon} alt="" />
        <p>Produtos</p>
      </Link>
      <Link className="link" onClick={() => handleHomeContent("flow")}>
        <img src={FlowIcon} alt="" />
        <p>Fluxo</p>
      </Link>
    </div>
  );
}
