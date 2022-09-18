import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/header/Header";
import Home from "./components/home/Home";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";
import React from "react";
import { CartProvider } from "./context/CartContext";
// import Footer from "./components/common/footer/Footer";

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <main className="container" style={{ height: "100%" }}>
          <Routes>
            <Route path="/" exact="true" element={<Home />}></Route>
            <Route path="/product/:idProduct" element={<Product />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </main>
      </CartProvider>
    </Router>
  );
}

export default App;
