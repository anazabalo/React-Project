import { createContext, useState, useEffect } from 'react';

export const CartItemsContext = createContext();

export const ItemsProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  console.log(cartItems);

  const onAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  //KEEP THE PRODUCTS IN THE CART WHILE REFRESHING OR NAVIGATING
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cartData'));
    if (cartData) {
      setCartItems(cartData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartItems));
  }, [cartItems]);

  const value = {
    cartItems: [cartItems, setCartItems],
    onAddToCart: onAddToCart,
    total: [total, setTotal],
  };
  return <CartItemsContext.Provider value={value}>{props.children}</CartItemsContext.Provider>;
};
