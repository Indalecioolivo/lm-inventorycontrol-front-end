import "./user.css";
import ExpandMoreUser from "../../assets/user-expandm-icon.png";
import ModalEditUser from "../ModalEditUser/ModalEditUser";
import UserOptions from "../UserOptions/UserOptions";
import { useHomeContext } from "../../context/HomeContext";

export default function User() {
  const { userOptions, handleUserOptions } = useHomeContext();
  return (
    <div className="user-container">
      <div className="initials">
        <h3>LM</h3>
      </div>
      <div className="user-name-arrow" onClick={() => handleUserOptions()}>
        <h3>Lucio</h3>
        <img src={ExpandMoreUser} alt="" />
      </div>
      {userOptions ? <UserOptions /> : ""}
    </div>
  );
}
