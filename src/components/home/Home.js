import * as React from "react";

// import ProductService from "../../service/product-service";
// const productService = new ProductService();

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  render() {
    return (
      <div>
        Welcome to our shop!
        <p>
          You are probably interested in <a href="/products/a">A</a>.
        </p>
        <p>
          Check out the newest product <a href="/products/b">B</a>!
        </p>
      </div>
    );
  }
}
