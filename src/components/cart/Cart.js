import * as React from "react";
import CardItem from "./cardItem";
import { useCartOptions } from "../../context/CartContext";
import CurrencyFormat from "react-currency-format";

export default function Cart() {
  const { cartItems, clearCart } = useCartOptions();

  let totalAmout = cartItems.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);

  function finishCart() {
    clearCart();
  }

  return (
    <div className="py-4">
      <p className="fs-2 fw-light">Are you ready to purchase these items?</p>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-9 mb-4">
          <div className="card rounded-0 mb-4">
            <h1 className="card-header fw-light fs-5">Your items</h1>
            <ul className="list-group list-group-flush">
              {cartItems.map((item) => (
                <li className="list-group-item" key={item.id}>
                  <CardItem product={item} />
                </li>
              ))}
            </ul>
            {cartItems.length <= 0 ? (
              <div className="card-body">
                <p className="m-0">Your cart is empty</p>
              </div>
            ) : null}
          </div>
          {cartItems.length > 0 ? (
            <div className="d-flex justify-content-start">
              <button
                type="button"
                className="btn btn-outline-danger btn-sm rounded-0"
                onClick={() => clearCart()}
              >
                REMOVE ALL ITEMS
              </button>
            </div>
          ) : null}
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card rounded-0">
            <h1 className="card-header fw-light fs-5">Checkout</h1>
            <div className="card-body">
              <p className="m-0">
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
                {cartItems.length > 0 ? (
                  <button
                    className="btn btn-outline-success rounded-0 block"
                    type="button"
                    onClick={() => finishCart()}
                  >
                    Payment
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
