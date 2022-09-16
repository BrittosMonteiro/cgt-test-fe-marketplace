export default class CartService {
  getCartItems() {
    return fetch("http://localhost:4000/cart");
  }

  addCartItem(data) {
    // console.log(data)
    return fetch("http://localhost:4000/cart", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
