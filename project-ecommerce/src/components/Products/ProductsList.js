import Products from './Products';
import styles from './Products.css';

const ProductList = ({ adding }) => {
  //const handleClick = () => {
  //products.filter((itemUnit) => itemUnit.quantity === 1);};
  return (
    <div>
      <Products adding={adding} title="AllProducts" />
    </div>
  );
};

export default ProductList;
