import * as React from "react";

// import CartService from "../../service/cart-service";
// const cartService = new CartService();

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }
  render() {
    return (
      <div>
        Are you ready to purchase these?
        <ul>
          {this.cart.map((cartItem) => (
            <li key={cartItem}>{cartItem}</li>
          ))}
        </ul>
      </div>
    );
  }
}
