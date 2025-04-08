import { createContext, useContext, useState } from "react";

// Skapa context
const CartContext = createContext();

// Provider som omger hela appen
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Lägg till i varukorg
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Ta bort en vara
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  // Töm hela varukorgen
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook för att använda context enklare
export const useCart = () => useContext(CartContext);
