import "./productstable.css";
import db from "../../services/db";
import ProductTableIcon from "../../assets/producttable-icon.png";
import ProductLine from "../ProductsLine/ProductLine";

export default function ProductsTable() {
  return (
    <div className="producttable-container">
      <div className="header-producttable">
        <img src={ProductTableIcon} alt="" />
        <h1>Produtos</h1>
      </div>
      <div className="content-producttable">
        <div className="columns-names">
          <strong></strong>
          <strong>Nome</strong>
          <strong>Volume</strong>
          <strong>Descrição</strong>
          <strong>Preço</strong>
        </div>
        {db.map((product) => (
          <ProductLine
            name={product.name}
            volume={product.volume}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
