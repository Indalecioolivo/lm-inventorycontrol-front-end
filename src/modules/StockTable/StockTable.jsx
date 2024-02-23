import "./stocktable.css";
import StockIcon from "../../assets/stock-icon.png";
import { db } from "../../services/db";
import StockLines from "../StockLines/StockLines";

export default function StockTable() {
  return (
    <div className="stocktable-container">
      <div className="header-stocktable">
        <img src={StockIcon} alt="" />
        <h1>Estoque</h1>
      </div>
      <div className="content-stocktable">
        <div className="columns-names">
          <strong>Nome</strong>
          <strong>Volume</strong>
          <strong>Estoque</strong>
          <strong>Descrição</strong>
          <strong>Código de Barras</strong>
        </div>
        {db.map((product) => (
          <StockLines
            key={product.id}
            barcode={product.bar_code}
            description={product.description}
            name={product.name}
            stock={product.stock}
            volume={product.stock}
          />
        ))}
      </div>
    </div>
  );
}
