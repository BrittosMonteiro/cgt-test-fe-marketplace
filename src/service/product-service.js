export default class ProductService {
  getProductList() {
    return fetch("http://localhost:4000/product");
  }

  getProductById(data) {
    return fetch('http://localhost:4000/product/' + data)
  }
}
