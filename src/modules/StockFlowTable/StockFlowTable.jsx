import "./stockflowtable.css";
import { flowdb } from "../../services/db";
import StockFlowLine from "../StockFlowLine/StockFlowLine";
import { useHomeContext } from "../../context/HomeContext";

export default function StockFlowTable({ title }) {
  const { handleModalAllFlows } = useHomeContext();
  return (
    <div className="flowtable-container">
      <h1>{title}</h1>
      <div className="for-flow-lines">
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
      <p className="see-all" onClick={(e) => handleModalAllFlows(true)}>
        Ver Todos
      </p>
    </div>
  );
}
