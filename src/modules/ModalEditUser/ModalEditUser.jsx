import "./modaledituser.css";
import CloseIcon from "../../assets/close-icon.png";
import { useHomeContext } from "../../context/HomeContext";

export default function ModalEditUser() {
  const { handleModalEditUser } = useHomeContext();
  return (
    <div className="background-container">
      <div className="modal-container">
        <div className="header-modal">
          <h2>Editar Usuário</h2>
          <img
            src={CloseIcon}
            alt=""
            className="close-icon"
            onClick={(e) => handleModalEditUser(false)}
          />
        </div>
        <form>
          <div>
            <p>Nome</p>
            <input type="text" name="" id="" placeholder="Digite seu nome" />
          </div>
          <div>
            <p>E-mail</p>
            <input type="text" name="" id="" placeholder="Digite seu e-mail" />
          </div>
          <div>
            <p>Senha</p>
            <input type="text" name="" id="" placeholder="Digite sua senha" />
          </div>
          <input type="button" value="Confirmar" className="button-confirm" />
        </form>
      </div>
    </div>
  );
}
