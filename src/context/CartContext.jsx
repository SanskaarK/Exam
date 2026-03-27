import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Try to load cart from local storage, default to empty
    const savedCart = localStorage.getItem('edustage_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('edustage_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (course) => {
    setCartItems((prevItems) => {
      // Check if course is already in the cart to avoid duplicates
      const isAlreadyInCart = prevItems.some((item) => item.id === course.id);
      if (isAlreadyInCart) {
        return prevItems; // Optionally, we could increase quantity here, but for a course, 1 is typical
      }
      return [...prevItems, { ...course, quantity: 1 }];
    });
  };

  const removeFromCart = (courseId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== courseId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => {
    // Basic price parsing, assuming price is passed as a number. 
    // If it's a formatted string like "$25.00", we would need to parse it. Let's assume numeric.
    const price = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^0-9.-]+/g, "")) : item.price;
    return total + (isNaN(price) ? 0 : price) * item.quantity;
  }, 0);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    cartTotal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
