import "./modalallflows.css";
import { flowdb } from "../../services/db";
import StockFlowLine from "../StockFlowLine/StockFlowLine";
import CloseIcon from "../../assets/close-icon.png";
import { useHomeContext } from "../../context/HomeContext";

export default function ModalAllFlows() {
  const { handleModalAllFlows } = useHomeContext();
  return (
    <div className="background-container">
      <div className="modal-all-flows">
        <img
          src={CloseIcon}
          alt=""
          className="close-icon"
          onClick={(e) => handleModalAllFlows(false)}
        />
        <h1>esse é o modal</h1>
        <div className="for-informations">
          <div className="column-names">
            <strong>Nome</strong>
            <strong>Quantidade</strong>
            <strong>Data</strong>
            <strong>Tipo</strong>
          </div>
          {flowdb.map((flow) => (
            <StockFlowLine
              key={flow.bar_code}
              name={flow.name}
              stock={flow.stock}
              data={flow.data}
              type={flow.type}
            />
          ))}
        </div>
        <button
          className="exit-button"
          onClick={(e) => handleModalAllFlows(false)}
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
