import * as React from "react";
import CardItem from "./cardItem";
import { useCartOptions } from "../../context/CartContext";
import CurrencyFormat from "react-currency-format";

export default function Cart() {
  const { cartItems, clearCart } = useCartOptions();

  let totalAmout = cartItems.reduce((total, item) => {
    return total + item.price;
  }, 0);

  return (
    <div className="py-4">
      <p className="fs-2 fw-light">Are you ready to purchase these items?</p>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-9 mb-4">
          <div className="card rounded-sm mb-4">
            <h1 className="card-header fw-light fs-5">Your items</h1>
            <ul className="list-group list-group-flush">
              {cartItems.map((item) => (
                <li className="list-group-item" key={item.id}>
                  <CardItem product={item} />
                </li>
              ))}
            </ul>
          </div>
          <div className="d-flex justify-content-start">
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              onClick={() => clearCart()}
            >
              REMOVE ALL ITEMS
            </button>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card rounded-sm">
            <h1 className="card-header fw-light fs-5">Checkout</h1>
            <div className="card-body">
              <p className="">
                Total:{" "}
                <CurrencyFormat
                  value={totalAmout}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"USD "}
                  decimalScale={2}
                  fixedDecimalScale={true}
                />
              </p>
              <div className="d-grid">
                <button
                  className="btn btn-outline-success rounded-sm block"
                  type="button"
                >
                  Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
