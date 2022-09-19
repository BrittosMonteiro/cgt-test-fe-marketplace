import * as React from "react";
import { useNavigate } from "react-router-dom";
const CartContext = React.createContext(null);

export function useCartOptions() {
  return React.useContext(CartContext);
}

export function CartProvider({ children }) {
  const navigate = useNavigate();

  let cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const [cartItems, setCartItems] = React.useState(cart);
  const [cartTotalItems, setCartTotalItems] = React.useState(cart.length);

  function addItemToCart(product) {
    const idProduct = parseInt(product.id);

    let pos = cart.findIndex((e) => {
      return e.id === parseInt(idProduct);
    });

    if (pos < 0) {
      product.qty = 1;
      cart.push(product);
    } else {
      cart.findIndex((e) => {
        if (e.id === idProduct) {
          e.qty = e.qty + 1;
        }
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);
    setCartTotalItems(cart.length);

    navigate("/cart");
  }

  function updateItemQtyInCart(id, newQty) {
    const idProduct = parseInt(id);
    let pos = cart.findIndex((e) => e.id === idProduct);

    if (pos < 0) return;

    cart.findIndex((e) => {
      if (e.id === idProduct) {
        e.qty = e.qty + newQty;
        if(e.qty === 0){
          removeItemFromCart(idProduct)
        }
      }
    });

    localStorage.setItem('cart', JSON.stringify(cart))
    setCartItems(cart);
    setCartTotalItems(cart.length);
  }

  function removeItemFromCart(id) {
    const idProduct = parseInt(id);
    let pos = cart.findIndex((e) => e.id === idProduct);

    if (pos < 0) return;

    cart.splice(pos, 1);

    localStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);
    setCartTotalItems(cart.length);
  }

  function clearCart() {
    cart.length = 0;
    localStorage.removeItem("cart");

    setCartItems(cart);
    setCartTotalItems(cart.length);
  }

  const cartStates = {
    cartItems,
    cartTotalItems,
    addItemToCart,
    updateItemQtyInCart,
    removeItemFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartStates}>{children}</CartContext.Provider>
  );
}
