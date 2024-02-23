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
      <p>{name}</p>
      <p>{volume}</p>
      <p>{stock}</p>
      <p>{description}</p>
      <p>{barcode}</p>
    </div>
  );
}
