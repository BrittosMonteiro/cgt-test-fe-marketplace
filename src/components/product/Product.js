import * as React from "react";

import pictureB from "../../assets/b.jpg";

// import CartService from "../../service/cart-service";
// import ProductService from "../../service/product-service";

// const cartService = new CartService();
// const productService = new ProductService();

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      product: null,
    };
    this.id = props.productInformation.id;
    this.name = props.productInformation.name;
    this.price = props.productInformation.price;
  }

  componentDidMount() {}

  addCartItem(item) {}

  render() {
    return (
      <div className="row align-items-start justify-content-between">
        <div className="col-sm-12 col-md-6">
          <img
            src={pictureB}
            width={450}
            alt={this.name}
            className="img-thumbnail"
          />
        </div>
        <div className="card col-sm-12 col-md-6 p-2">
          <h1 className="fs-2 fw-semibold">{this.name}</h1>
          <p className="fw-normal">Price: {this.price} USD</p>

          <button
            className="btn btn-primary btn-sm rounded-sm"
            onClick={() => this.addCartItem({ idItem: this.id })}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}
