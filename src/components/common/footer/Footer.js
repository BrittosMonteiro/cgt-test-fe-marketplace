import { Link } from "react-router-dom";

const logo =
  "https://assets.cgtrader.com/assets/logo_white_2x-f1061e4fe13451b8ab988351e2ef506ca95f5b5201a1205eb365254c485e7d3c.png";

export default function Footer() {
  return (
    <footer className="bg-black py-4 bottom-0 w-100">
      <div className="container">
        <div className="row">
          <div>
            <img src={logo} alt="Logo" height={30} />
          </div>
        </div>
        <div className="navbar my-4">
          <ul className="p-0">
            <li><Link to="/" className="">Home</Link></li>
            <li><Link to="/card" className="">Card</Link></li>
          </ul>
        </div>
        <div className="text-center text-white">CGTrader - Lucas Brittos</div>
      </div>
    </footer>
  );
}
