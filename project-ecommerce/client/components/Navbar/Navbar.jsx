import { Link } from "react-router-dom";
import { CartItemsContext } from "../../Context/CartItemsProvider";
import { useContext } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import styles from "./Navbar.module.css";
import CabinIcon from "@mui/icons-material/Cabin";

const Navbar = () => {
  const { cartItems } = useContext(CartItemsContext);

  return (
    <nav className={styles.navBar}>
      <div>
        <Link to="/">
          <CabinIcon />
        </Link>
      </div>
      <div className={styles.navlinks}>
        <Link to="/" className={styles.home}>
          Home
        </Link>
        <Link to="/products">Products</Link>
      </div>

      <div className={styles.rightMenu}>
        <div className={styles.cart}>
          <Link to="/cart">
            <AddShoppingCartIcon />
            <span className={styles.itemTotal}>{cartItems.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
