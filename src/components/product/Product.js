import * as React from "react";

export default function Product(props) {
  return (
    <div className="row align-items-start justify-content-between">
      <div className="col-sm-12 col-md-6">
        <img
          src={null}
          width={450}
          alt={props.product.name}
          className="img-thumbnail"
        />
      </div>
      <div className="card col-sm-12 col-md-6 p-2">
        <h1 className="fs-2 fw-semibold">{props.product.name}</h1>
        <p className="fw-normal">Price: {props.product.price}USD</p>

        <button
          className="btn btn-sm btn-primary rounded-sm"
          onClick={() => this.addCartItem(props.product.id)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
