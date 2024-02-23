import "./productline.css";
import PhotoIcon from "../../assets/photo-icon.png";

export default function ProductLine({ name, volume, description, price }) {
  return (
    <div className="productlines">
      <div className="tophoto">
        <img src={PhotoIcon} alt="" className="photo" />
      </div>
      <p className="linecolumn">{name}</p>
      <p className="linecolumn">{volume}</p>
      <p className="linecolumn">{description}</p>
      <p className="linecolumn">{price}</p>
    </div>
  );
}
