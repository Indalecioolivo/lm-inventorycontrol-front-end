import "./productstable.css";
import { db } from "../../services/db";
import ProductTableIcon from "../../assets/producttable-icon.png";
import SearchIcon from "../../assets/search-icon.png";
import ProductLine from "../ProductsLine/ProductLine";

export default function ProductsTable() {
  return (
    <div className="producttable-container">
      <div className="header-producttable">
        <div className="for-title">
          <img src={ProductTableIcon} alt="" />
          <h1>Produtos</h1>
        </div>
        <div className="for-button-and-search">
          <button className="add-product">Novo Produto</button>
          <div className="search">
            <img src={SearchIcon} alt="" />
            <input type="text" />
          </div>
        </div>
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
            key={product.id}
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
