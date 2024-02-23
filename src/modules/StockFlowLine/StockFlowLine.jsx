import "./stockflowline.css";

export default function StockFlowLine({ name, stock, data, type }) {
  return (
    <div className="flow-line">
      <p>{name}</p>
      <p>{stock}</p>
      <p>{data}</p>
      <p>{type}</p>
    </div>
  );
}
