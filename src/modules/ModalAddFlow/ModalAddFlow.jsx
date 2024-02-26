import "./modaladdflow.css";
import CloseIcon from "../../assets/close-icon.png";
import { useHomeContext } from "../../context/HomeContext";

export default function ModalAddFlow() {
  const { handleModalAddFlow } = useHomeContext();
  return (
    <div className="background-container">
      <div className="modal-add-flow">
        <img
          src={CloseIcon}
          alt=""
          className="close-icon"
          onClick={(e) => handleModalAddFlow(false)}
        />
        <h1>Cadastrar Entrada/Saída</h1>
        <form>
          <div className="for-inputs">
            <p>Código de Barras:</p>
            <input type="number" id="barcode" />
          </div>
          <div className="for-inputs">
            <p>Nome:</p>
            <input type="text" />
          </div>
          <div className="third-line">
            <div className="for-inputs-third-line">
              <p>Data:</p>
              <input type="date" />
            </div>
            <div className="for-inputs-third-line">
              <p>Quantidade:</p>
              <input type="number" />
            </div>
          </div>
          <div className="for-inputs">
            <p>Origem:</p>
            <input type="text" />
          </div>
          <div className="last-line">
            <p>Tipo:</p>
            <div className="radio">
              <input
                type="radio"
                id="radio-entrada"
                name="radio"
                value="entrada"
              />
              <p>Entrada</p>
            </div>
            <div className="radio">
              <input type="radio" id="radio-saida" name="radio" value="saida" />
              <p>Saída</p>
            </div>
          </div>
        </form>
        <div className="for-buttons">
          <button className="cancel" onClick={(e) => handleModalAddFlow(false)}>
            Cancelar
          </button>
          <button className="register">Cadastrar</button>
        </div>
      </div>
    </div>
  );
}
