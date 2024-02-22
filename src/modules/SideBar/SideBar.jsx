import "./sidebar.css";
import { Link } from "react-router-dom";
import HomeIcon from "../../assets/home-icon.png";
import ProductIcon from "../../assets/product-icon.png";

export default function SideBar() {
  return (
    <div className="sidebar-container">
      <Link to="/home" className="link">
        <img src={HomeIcon} alt="" />
        <p>Home</p>
      </Link>
      <Link className="link">
        <img src={ProductIcon} alt="" />
        <p>Produtos</p>
      </Link>
    </div>
  );
}
