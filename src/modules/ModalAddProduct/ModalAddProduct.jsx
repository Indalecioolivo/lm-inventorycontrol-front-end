import CloseIcon from "../../assets/close-icon.png";
import "./modaladdproduct.css";

export default function ModalAddProduct() {
  return (
    <div className="background-container">
      <div className="modal-add-product">
        <img src={CloseIcon} alt="" />
        <h1>Cadastrar Produto</h1>
        <form>
          <div className="for-inputs">
            <strong>Nome</strong>
            <input type="text" />
          </div>
          <div className="for-inputs">
            <strong>Código de Barras</strong>
            <input type="text" />
          </div>
          <div className="for-inputs">
            <strong>Volume</strong>
            <input type="text" />
          </div>
          <div className="for-inputs">
            <strong>Estoque</strong>
            <input type="text" />
          </div>
          <div className="for-inputs">
            <strong>Preço</strong>
            <input type="text" />
          </div>
        </form>
        <button>Cadastrar</button>
      </div>
    </div>
  );
}
