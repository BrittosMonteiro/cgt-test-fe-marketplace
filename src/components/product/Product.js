import * as React from "react";
import img_path_a from "../../assets/a.jpg";
import img_path_b from "../../assets/b.jpg";

export default function Product(props) {
  return (
    <div className="row align-items-start justify-content-between my-4">
      <div className="col-sm-12 col-md-6">
        <img
          src={props.product.id === 1 ? img_path_a : img_path_b}
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
