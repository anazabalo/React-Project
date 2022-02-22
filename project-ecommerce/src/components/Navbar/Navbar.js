import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
const Navbar = () => {
  //Insert LOGO in H1
  return (
    <nav className={styles.navBar}>
      <p>React Project</p>
      <div>
        <Link to="/" className={styles.navlinks}>
          {' '}
          Home
        </Link>
        <Link to="/products" className={styles.navlinks}>
          {' '}
          Products
        </Link>
      </div>

      <div className={styles.rightMenu}>
        <div>
          <Link to="/newcustomer" className={styles.signUplink}>
            New Customer
          </Link>
          <Link to="/login" className={styles.loginLink}>
            LogIn
          </Link>
        </div>

        <div>
          <Link to="/cart">
            <box-icon name="cart"></box-icon>
            <span className={styles.itemTotal}>0</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
