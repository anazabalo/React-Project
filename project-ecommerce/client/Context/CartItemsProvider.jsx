import { createContext, useState, useEffect } from "react";

export const CartItemsContext = createContext();

export const ItemsProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  //FUNCTION TO ADD ITEMS IN A ARRAY

  const onAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  //KEEP THE PRODUCTS IN THE CART WHILE REFRESHING OR NAVIGATING
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    if (cartData) {
      setCartItems(cartData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(cartItems));
  }, [cartItems]);

  //REMOVE PRODUCT FROM THE CART
  const removeProduct = (id) => {
    console.log(id);

    if (window.confirm("do you want remove the product?")) {
      const remove = cartItems.filter((product) => product.id !== id);
      setCartItems(remove);
    }
  };

  //REDUCE THE QUANTITY OF PRODUCTS ADDED
  const reduce = (id) => {
    cartItems.forEach((product) => {
      if (product.id === id) {
        product.quantity === 1
          ? (product.quantity = 1)
          : (product.quantity -= 1);
      }
      setCartItems([...cartItems]);
    });
  };
  //INCREASE THE AMOUNT OF PRODUCTS ADDED
  const increase = (id) => {
    cartItems.forEach((product) => {
      if (product.id === id) {
        product.quantity += 1;
      }
      setCartItems([...cartItems]);
    });
  };

  //GET THE TOTAL PRICE OF THE WHOLE PURCHASE (TO FIX)
  useEffect(() => {
    const getTotal = () => {
      const result = cartItems.reduce((prev, product) => {
        return prev + product.price * product.quantity;
      }, 0);
      setTotal(result);
    };
    getTotal();
  });

  const value = {
    cartItems,
    onAddToCart,
    total,
    removeProduct,
    reduce,
    increase,
  };
  return (
    <CartItemsContext.Provider value={value}>
      {props.children}
    </CartItemsContext.Provider>
  );
};
