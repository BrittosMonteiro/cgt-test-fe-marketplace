import { Link } from "react-router-dom";

function cartItems() {
  return [];
}

export default function Header() {
  return (
    <header>
      90s shop
      <nav>
        <ul style={{ listStyleType: "none", display: "flex" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          |
          <li>
            <Link to="/cart">Cart ({cartItems().length})</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}
