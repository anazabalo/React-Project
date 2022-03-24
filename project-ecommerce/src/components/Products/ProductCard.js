import { CartItemsContext } from '../../Context/CartItemsProvider';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { onAddToCart } = useContext(CartItemsContext);
  const { image, title, price, category } = product;

  return (
    <div className={styles.productPreview}>
      <div className={styles.productImage}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.CardFooterContainer}>
        <div className={styles.productFooter}>
          <div className={styles.alignInRow}>
            <p className={styles.titleFooter}> {title}</p>
            <p className={styles.priceCategory}> {price} SEK</p>
          </div>
          <p className={styles.priceCategory}> {category}</p>
        </div>

        <div className={styles.alignInRow}>
          <div>
            <button className={styles.CardButton} onClick={() => onAddToCart(product)}>
              Add to Cart
            </button>
          </div>
          <div className={styles.vistaButton}>
            <button className={styles.CardButton}>View</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  onClick: PropTypes.func,
};
