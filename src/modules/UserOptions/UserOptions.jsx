import "../User/user.css";
import { useHomeContext } from "../../context/HomeContext";

export default function UserOptions() {
  const { handleModalEditUser } = useHomeContext();
  return (
    <div className="edit-exit">
      <p onClick={(e) => handleModalEditUser(true)}>Editar Dados</p>
      <p>Sair</p>
    </div>
  );
}
