import ProductCard from "./ProductCard";
import { DataContext } from "../../Context/Dataprovider";
import { useContext } from "react";
import styles from "./Products.module.css";
import SelectSort from "../UI/Select";

const Products = () => {
  const { products } = useContext(DataContext);
  return (
    <div className={styles.allProducts}>
      <div className={styles.titleContainer}>
        <h3>Products</h3>
        <SelectSort/>   
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
