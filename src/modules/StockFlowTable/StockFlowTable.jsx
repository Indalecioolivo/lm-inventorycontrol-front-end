import "./stockflowtable.css";
import { flowdb } from "../../services/db";
import StockFlowLine from "../StockFlowLine/StockFlowLine";

export default function StockFlowTable({ title }) {
  return (
    <div className="flowtable-container">
      <h1>{title}</h1>
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
  );
}
