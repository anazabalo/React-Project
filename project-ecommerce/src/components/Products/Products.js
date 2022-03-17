import ProductCard from './ProductCard';
//import Data from '../../Data';
import { DataContext } from '../../Context/Dataprovider';
import { useContext } from 'react';

import './Products.css';
const Products = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  return (
    <div className="allProducts">
      <div>
        <h1>Products</h1>
      </div>
      <div className="ProductList">
        {products.map((products) => (
          <ProductCard key={products.id} product={products} />
        ))}
      </div>
    </div>
  );
};

export default Products;

/* return (
      <>
        <div className="App">
          {loading ? (
            <h4>Loading...</h4>
          ) : (
            posts.map((item) => (
              // Presently we only fetch
              // title from the API
              <h4>{item.title}</h4>
            ))
          )}
        </div>
      </>
    );*/
