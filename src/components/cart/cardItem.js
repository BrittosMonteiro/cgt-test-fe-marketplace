import * as React from "react";
import { useCartOptions } from "../../context/CartContext";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";

export default function CardItem(props) {
  const { updateItemQtyInCart, removeItemFromCart } = useCartOptions();

  return (
    <React.Fragment>
      <div className="d-flex justify-content-between align-items-center">
        <div className="col-sm-12 col-md-9">
          <span>
            <Link
              to={"/product/" + props.product.id}
            >{`${props.product.name}`}</Link>
            {" - "}
            <CurrencyFormat
              value={props.product.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"USD "}
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </span>
          <p className="m-0 fw-light fs-6">
            Total of item:{" "}
            <CurrencyFormat
              className="m-0 p-0"
              value={props.product.price * props.product.qty}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"USD "}
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </p>
        </div>
        <div className="col-sm-12 col-md-3 ">
          <div className="input-group" style={{ justifyContent: "end" }}>
            <button
              className="btn btn-outline-dark rounded-0"
              type="button"
              onClick={() => updateItemQtyInCart(props.product.id, -1)}
            >
              -1
            </button>
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Quantity"
              style={{ maxWidth: "110px" }}
              min={0}
              value={props.product.qty}
              disabled
            />
            <button
              className="btn btn-outline-dark rounded-0"
              type="button"
              onClick={() => updateItemQtyInCart(props.product.id, +1)}
            >
              +1
            </button>
          </div>
        </div>
      </div>
      <p
        className="p-0 mt-2 mb-0 text-end fw-regular fs-7 text-danger"
        style={{ cursor: "pointer", fontSize: "14px" }}
        title="Remove item from cart"
        onClick={() => removeItemFromCart(props.product.id)}
      >
        Remove
      </p>
    </React.Fragment>
  );
}
