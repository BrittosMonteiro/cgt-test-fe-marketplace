const API_URL = "http://localhost:4000";
const END_POINT = "/products";
const PRODUCTS_API_URL = `${API_URL}${END_POINT}`;

export function getProductList() {
  return fetch(PRODUCTS_API_URL);
}

export function getProductById(data) {
  return fetch(`${PRODUCTS_API_URL}/${data}`);
}
