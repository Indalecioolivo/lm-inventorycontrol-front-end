import "./stockflow.css";
import FlowTableIcon from "../../assets/flowtable-icon.png";
import StockFlowTable from "../StockFlowTable/StockFlowTable";
import SearchIcon from "../../assets/search-icon.png";
import { useHomeContext } from "../../context/HomeContext";

export default function StockFlow() {
  const { handleModalAddFlow } = useHomeContext();
  return (
    <div className="stockflow-container">
      <div className="header-stockflow">
        <div className="for-title">
          <img src={FlowTableIcon} alt="" />
          <h1>Fluxo Estoque</h1>
        </div>
        <div className="for-button-and-search">
          <button
            className="add-flow"
            onClick={(e) => handleModalAddFlow(true)}
          >
            Novo Fluxo
          </button>
          <div className="search">
            <img src={SearchIcon} alt="" />
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="stockflow-content">
        <StockFlowTable key={"entrada"} title={"Entradas"} />
        <StockFlowTable key={"saida"} title={"Saídas"} />
      </div>
    </div>
  );
}
