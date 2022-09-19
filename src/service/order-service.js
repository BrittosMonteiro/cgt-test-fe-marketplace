const API_URL = "http://localhost:4000";
const END_POINT = "/orders";
const ORDER_API_URL = `${API_URL}${END_POINT}`;

export function addOrderItem() {
  const cart = JSON.parse(localStorage.getItem("cart"));

  return fetch(ORDER_API_URL, {
    method: "POST",
    body: JSON.stringify(cart),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function getPastOrders() {
  return fetch(ORDER_API_URL);
}
