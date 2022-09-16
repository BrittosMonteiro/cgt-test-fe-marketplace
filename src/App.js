import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main className="container">
        {window.location.pathname === "/" && <Home />}
        {window.location.pathname.startsWith("/products/") && (
          <Product
            productInformation={{
              id: 1,
              name: "Product A",
              price: 10,
              imgPath: "product_a.jpg",
            }}
          />
        )}
        {window.location.pathname === "/cart" && <Cart />}
      </main>
    </React.Fragment>
  );
}

export default App;
