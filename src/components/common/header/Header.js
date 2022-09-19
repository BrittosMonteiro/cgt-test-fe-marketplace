import { Link } from "react-router-dom";
import { useCartOptions } from "../../../context/CartContext";

const logo =
  "https://assets.cgtrader.com/assets/logo_white_2x-f1061e4fe13451b8ab988351e2ef506ca95f5b5201a1205eb365254c485e7d3c.png";

export default function Header() {
  const { cartTotalItems } = useCartOptions();

  return (
    <nav className="navbar sticky-top bg-black align-content-center px-3 py-3">
      <Link to="/">
        <img src={logo} alt="Logo" height={25} />
      </Link>
      <ul className="navbar-nav">
        <li>
          <Link to="/cart" className="header__list-item">
            Cart ({cartTotalItems})
          </Link>
        </li>
      </ul>
    </nav>
  );
}
