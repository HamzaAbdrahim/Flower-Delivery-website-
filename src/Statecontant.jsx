import React, { createContext, useState , useEffect } from 'react';

export const Cartcontext  = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
      calculateTotal();
    }, [cart]);
  
    const calculateTotal = () => {
      let totalPrice = 0;
      cart.forEach(item => {
        totalPrice += item.product.price * item.quantity;
      });
      setTotal(totalPrice);
    };
  
    // Function to add an item to the cart
    const addItemToCart = (product, quantity) => {
      const newItem = {
        product: product,
        quantity: quantity
      };
      setCart([...cart, newItem]);

    }

    const removeItemFromCart = (itemId) => {
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
        removeItemFromCart , 
        total
      };

      return (
        <Cartcontext.Provider value={cartContextValue}>
          {children}
        </Cartcontext.Provider>
      );
}