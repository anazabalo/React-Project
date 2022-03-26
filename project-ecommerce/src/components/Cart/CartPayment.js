import styles from './CartPayment.module.css';
import { Link } from 'react-router-dom';
const CartPayment = () => {
  const success = () => {
    alert('Thank you for your purchase');
  };
  return (
    <div className={styles.paymentContainer}>
      <div className={styles.buyerInformation}>
        <h2> Welcome to checkout</h2>
        <div className={styles.personalInformation}>
          <form action="#">
            <label htmlFor="email">Email</label>
            <input type="text" />
            <label htmlFor="Phone">Phone</label>
            <input type="text" />
            <label htmlFor="Name">Name</label>
            <input type="text" />
            <label htmlFor="LastName">Last Name</label>
            <input type="text" />
            <label htmlFor="Address">Address</label>
            <input type="text" />
            <label htmlFor="Zip Code"> Zip Code</label>
            <input type="text" />
            <label htmlFor="City">City</label>
            <input type="text" />
            <label htmlFor="Country">Country</label>
            <input type="text" />
          </form>
        </div>
      </div>

      <div className={styles.checkoutContainer}>
        <h3>Enter your payment details</h3>
        <div className={styles.CardDetails}>
          <form action="#">
            <label htmlFor="card number"> Card Number</label>
            <input type="text" />
            <label htmlFor="expiring">Exp. Month</label>
            <input type="text" />
            <label htmlFor="expiring">Exp. Year</label>
            <input type="text" />
            <label htmlFor="CVC">CVC Number</label>
            <input type="text" />
          </form>
        </div>

        <button onClick={success}>Buy Now</button>
        <div className={styles.BackToProducts}>
          <Link to="/products">
            <p>Back to products</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPayment;
