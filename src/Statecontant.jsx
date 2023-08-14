import React, { createContext, useState } from 'react';

export const Cartcontext  = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
  
    // Function to add an item to the cart
    const addItemToCart = (product, quantity) => {
      const newItem = {
        product: product,
        quantity: quantity
      };
      setCart([...cart, newItem]);

    }

    const removeItemFromCart = (itemId) => {
      console.log(itemId);
      const updatedCart = cart.filter((item) => item.product.id !== itemId);
      setCart(updatedCart);
    };

    const checkout = () => {
      setCart([]);

    }
      const cartContextValue = {
        cart,
        addItemToCart,
        checkout,
        removeItemFromCart
      };
      return (
        <Cartcontext.Provider value={cartContextValue}>
          {children}
        </Cartcontext.Provider>
      );
}