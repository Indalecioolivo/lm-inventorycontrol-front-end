import "./stocklines.css";

export default function StockLines({
  barcode,
  description,
  name,
  stock,
  volume,
}) {
  return (
    <div className="stocklines">
      <strong>{name}</strong>
      <strong>{volume}</strong>
      <strong>{stock}</strong>
      <strong>{description}</strong>
      <strong>{barcode}</strong>
    </div>
  );
}
