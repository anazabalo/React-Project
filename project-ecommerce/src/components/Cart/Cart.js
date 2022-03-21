import { CartItemsContext } from '../../Context/CartItemsProvider';
import { useContext } from 'react';
import styles from './Cart.module.css';

const Cart = () => {
  const { removeProduct, reduce, increase, cartItems, total } = useContext(CartItemsContext);

  console.log(cartItems);

  return (
    <>
      <div className={styles.cartContainer}>
        <p>My Cart</p>
        <div>
          {cartItems.lenght === 0 ? (
            <h2>Cart is empty</h2>
          ) : (
            <>
              {cartItems.map((product) => (
                <div key={product.id} className={styles.productsAdded}>
                  <div className={styles.images}>
                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                  </div>
                  <div className={styles.addingIncreasinRemoving}>
                    <div className={styles.addingIncreasingButton}>
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
          <div className={styles.cartTotal}>
            <h3>Total: {total} SEK</h3>
            <button className={styles.payment}>Go to Payment</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
