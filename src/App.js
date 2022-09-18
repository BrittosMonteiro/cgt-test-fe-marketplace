import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";
import React from "react";

function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" exact="true" element={<Home />}></Route>
          <Route path="/product/1" element={<Product product={{id: 1, name: 'Product A', price: 30, img_path: 'a.jpg'}} />}></Route>
          <Route path="/product/2" element={<Product product={{id: 2, name: 'Product B', price: 10, img_path: 'b.jpg'}} />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
