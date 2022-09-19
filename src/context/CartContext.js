import * as React from "react";
import { useNavigate } from "react-router-dom";
const CartContext = React.createContext(null);

export function useCartOptions() {
  return React.useContext(CartContext);
}

export function CartProvider({ children }) {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = React.useState([]);
  const [cartTotalItems, setCartTotalItems] = React.useState(0);

  function addItemToCart(product) {
    const idProduct = parseInt(product.id);

    let pos = cartItems.findIndex((e) => {
      return e.id === parseInt(idProduct);
    });

    if (pos < 0) {
      product.qty = 1;
      cartItems.push(product);
      setCartTotalItems(cartItems.length);
    } else {
      cartItems.findIndex((e) => {
        if (e.id === idProduct) {
          e.qty++;
        }
      });
    }

    navigate("/cart");
  }

  function updateItemQtyInCart(id) {
    const idProduct = parseInt(id);
    let pos = cartItems.findIndex((e) => e.id === idProduct);

    if (pos < 0) return;

    cartItems.findIndex((e) => {
      if (e.id === idProduct) {
        e.qty++;
      }
    });

    setCartItems(cartItems);
  }

  function removeItemFromCart(id) {
    const idProduct = parseInt(id);
    let pos = cartItems.findIndex((e) => e.id === idProduct);

    if (pos < 0) return;

    cartItems.splice(pos, 1);
    setCartItems(cartItems);
    setCartTotalItems(cartItems.length);
  }

  function clearCart() {
    setCartItems([]);
    setCartTotalItems(cartItems.length);
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
