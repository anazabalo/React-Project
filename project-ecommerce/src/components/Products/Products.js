import ProductCard from './ProductCard';
import { DataContext } from '../../Context/Dataprovider';
import { useContext } from 'react';
import styles from './Products.module.css';

const Products = () => {
  const { products } = useContext(DataContext);
  return (
    <div className={styles.allProducts}>
      <div>
        <h1>Products</h1>
      </div>

      <div className={styles.ProductList}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
