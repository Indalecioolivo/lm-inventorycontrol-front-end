import "./user.css";
import ExpandMoreUser from "../../assets/user-expandm-icon.png";
import ModalEditUser from "../ModalEditUser/ModalEditUser";

export default function User() {
  return (
    <div className="user-container">
      <div className="initials">
        <h3>LM</h3>
      </div>
      <div className="user-name-arrow">
        <h3>Lucio</h3>
        <img src={ExpandMoreUser} alt="" />
      </div>
    </div>
  );
}
