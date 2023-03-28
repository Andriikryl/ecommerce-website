import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const carItem = cart.find((item) => {
      return item.id === id;
    });
    if (carItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: carItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
