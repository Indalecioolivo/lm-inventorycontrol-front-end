import "./productline.css";
import PhotoIcon from "../../assets/photo-icon.png";

export default function ProductLine({ name, volume, description, price }) {
  return (
    <div className="productlines">
      <div className="tophoto">
        <img src={PhotoIcon} alt="" className="photo" />
      </div>
      <strong className="linecolumn">{name}</strong>
      <strong className="linecolumn">{volume}</strong>
      <strong className="linecolumn">{description}</strong>
      <strong className="linecolumn">{price}</strong>
    </div>
  );
}
