import { CartItemsContext } from '../../Context/CartItemsProvider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Cart.module.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
const Cart = () => {
  const { removeProduct, reduce, increase, cartItems, total } = useContext(CartItemsContext);

  return (
    <>
      <div className={styles.cartContainer}>
        <h1>My Cart</h1>
        <div>
          {cartItems.length === 0 ? (
            <>
              <div className={styles.emptyCartContainer}>
                <div className={styles.emptyCartIcon}>
                  <ShoppingCartIcon />
                  <span>0</span>
                </div>
                <h2>Your cart is empty</h2>
                <button>
                  <Link to="/products"> Shop Now</Link>
                </button>
              </div>
            </>
          ) : (
            <>
              {cartItems.map((product) => (
                <div key={product.id} className={styles.productsInCartContainer}>
                  <div className={styles.images}>
                    <img src={product.image} alt={product.title} />
                  </div>

                  <div className={styles.footerProductCartContainer}>
                    <div>
                      <p className={styles.footerTitle}>{product.title}</p>
                      <p className={styles.footerPrice}>{product.price} SEK</p>
                    </div>
                    <div className={styles.buttonsContainer}>
                      <div className={styles.increaseReduceButtons}>
                        <button onClick={() => increase(product.id)}>+</button>
                        <p>{product.quantity}</p>
                        <button onClick={() => reduce(product.id)}>-</button>
                      </div>
                      <div className={styles.removeProductButton}>
                        <button onClick={() => removeProduct(product.id)}>
                          <DeleteForeverOutlinedIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className={styles.cartTotal}>
                <h3>Total price {total} SEK</h3>
                <button className={styles.payment}>
                  <Link to="/payment">Go to Payment </Link>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;

Cart.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  onClick: PropTypes.func,
};
