import "./header.css";
import User from "../User/User";

export default function Header({ title }) {
  return (
    <div className="header-container">
      <h1>{title}</h1>
      <User />
    </div>
  );
}
