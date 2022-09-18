const API_URL = "http://localhost:4000";
const END_POINT = "/cart";
const CART_API_URL = `${API_URL}${END_POINT}`;

export function getCartItems() {
  return fetch(CART_API_URL);
}

export function addCartItem(data) {
  return fetch(CART_API_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
