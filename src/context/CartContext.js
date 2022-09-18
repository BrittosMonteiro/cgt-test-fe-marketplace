import * as React from "react";
const CartContext = React.createContext(null);

export function useCartOptions() {
  return React.useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = React.useState();

  async function initialCartItems() {
    const initial = [
      { id: 1, name: "Product A", qty: 1, price: 10 },
      { id: 2, name: "Product B", qty: 1, price: 30 },
    ];
    setCartItems(initial);
  }

  React.useEffect(() => {
    initialCartItems();
  }, []);

  function addItemToCart(id) {
    console.log(id);
  }

  function updateItemQtyInCart(id) {
    console.log(id);
  }

  function removeItemFromCart(id) {
    console.log(id);
  }

  function clearCart() {
    console.log("Limpar carrinho");
  }

  const cartStates = {
    cartItems,
    addItemToCart,
    updateItemQtyInCart,
    removeItemFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartStates}>{children}</CartContext.Provider>
  );
}
