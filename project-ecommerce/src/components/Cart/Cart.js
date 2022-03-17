import { useEffect } from 'react';
import { DataContext } from '../../Context/Dataprovider';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import './Cart.css';

const Cart = () => {
  const value = useContext(DataContext);
  const [cartItems, setCartItems] = value.cartItems;
  const [total, setTotal] = value.total;

  //REMOVE PRODUCT FROM THE CART
  const removeProduct = (id) => {
    if (window.confirm('do you want remove the product?')) {
      const remove = cartItems.filter((product) => product.id !== id);
      setCartItems(remove);
    }
  };

  //REDUCE THE QUANTITY OF PRODUCTS ADDED
  const reduce = (id) => {
    cartItems.forEach((product) => {
      if (product.id === id) {
        product.quantity === 1 ? (product.quantity = 1) : (product.quantity -= 1);
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

  return (
    <>
      <div className="cartContainer">
        <p>My Cart</p>
        <div>
          {cartItems.lenght === 0 ? (
            <h2>Cart is empty</h2>
          ) : (
            <>
              {cartItems.map((product) => (
                <div key={product.id} className="productsAdded">
                  <div className="images">
                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                  </div>
                  <div className="addingIncreasinRemoving">
                    <div className="addingIncreasingButton">
                      <button onClick={() => increase(product.id)}>+</button>
                      <p>{product.quantity}</p>
                      <button onClick={() => reduce(product.id)}>-</button>
                    </div>
                    <button onClick={() => removeProduct(product.id)}>remove</button>
                  </div>
                </div>
              ))}
            </>
          )}
          <div className="cartTotal">
            <h3>Total: {total} SEK</h3>
            <button className="payment">Go to Payment</button>
          </div>
        </div>
      </div>
    </>
  );
};
Cart.propTypes = {
  total: PropTypes.number,
};
export default Cart;
