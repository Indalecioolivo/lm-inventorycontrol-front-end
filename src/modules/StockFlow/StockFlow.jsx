import "./stockflow.css";
import FlowTableIcon from "../../assets/flowtable-icon.png";
import StockFlowTable from "../StockFlowTable/StockFlowTable";

export default function StockFlow() {
  return (
    <div className="stockflow-container">
      <div className="header-stockflow">
        <img src={FlowTableIcon} alt="" />
        <h1>Fluxo Estoque</h1>
      </div>
      <div className="stockflow-content">
        <StockFlowTable key={"entrada"} title={"Entradas"} />
        <StockFlowTable key={"saida"} title={"Saídas"} />
      </div>
    </div>
  );
}
