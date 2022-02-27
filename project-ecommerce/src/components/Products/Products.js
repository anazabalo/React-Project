import ProductCard from './ProductCard';
import Data from '../../Data';
const Products = ({ onAddToCart }) => {
  return (
    <div className="allProducts">
      <h1>Products</h1>
      <div>
        {Data.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
