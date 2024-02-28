import CloseIcon from "../../assets/close-icon.png";
import "./modaladdproduct.css";
import { useHomeContext } from "../../context/HomeContext";

export default function ModalAddProduct() {
  const {
    handleModalAddProduct,
    handleDataModalAddProducts,
    dataModalAddProduct,
    validateDataModalAddProduct,
  } = useHomeContext();
  return (
    <div className="background-container">
      <div className="modal-add-product">
        <img
          src={CloseIcon}
          alt=""
          onClick={(e) => handleModalAddProduct(false)}
        />
        <h1>Cadastrar Produto</h1>
        <form>
          <div className="for-inputs">
            <strong>Nome</strong>
            <input
              type="text"
              name="name"
              placeholder="Nome do Produto"
              value={dataModalAddProduct.name}
              onChange={(e) => handleDataModalAddProducts(e)}
              autoFocus
            />
          </div>
          <div className="for-inputs">
            <strong>Código de Barras</strong>
            <input
              type="text"
              name="bar_code"
              maxLength={13}
              placeholder="Código de Barras"
              value={dataModalAddProduct.bar_code}
              onChange={(e) => handleDataModalAddProducts(e)}
            />
          </div>
          <div className="for-inputs">
            <strong>Volume</strong>
            <input
              type="text"
              name="volume"
              placeholder="Volume"
              value={dataModalAddProduct.volume}
              onChange={(e) => handleDataModalAddProducts(e)}
            />
          </div>
          <div className="for-inputs">
            <strong>Estoque</strong>
            <input
              type="text"
              name="stock"
              placeholder="Quantidade em estoque"
              value={dataModalAddProduct.stock}
              onChange={(e) => handleDataModalAddProducts(e)}
            />
          </div>
          <div className="for-inputs">
            <strong>Preço</strong>
            <input
              type="text"
              name="price"
              placeholder="Preço"
              value={dataModalAddProduct.price}
              onChange={(e) => handleDataModalAddProducts(e)}
            />
          </div>
        </form>
        <button>Cadastrar</button>
      </div>
    </div>
  );
}
