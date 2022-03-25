import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../../Context/Dataprovider';
import { CartItemsContext } from '../../Context/CartItemsProvider';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductView = () => {
  const { products } = useContext(DataContext);
  const { onAddToCart } = useContext(CartItemsContext);
  const [details, setDetails] = useState([]);
  const params = useParams();
  let item = 0;

  console.log(products);
  console.log(params.id);

  useEffect(() => {
    products.forEach((product) => {
      console.log(product.id, parseInt(params.id));
      if (product.id === parseInt(params.id)) {
        setDetails(product);
      }
    });
  }, [params.id, products]);

  console.log(details);

  return (
    <>
      {
        <div className="Details">
          <h2>{details.title}</h2>
          <p className="price">{details.price}</p>
          <button onClick={() => onAddToCart(details)}>Add to cart</button>
          <img src={details.image} alt={details.title} />
          <div className="description">
            <p>
              <strong>Description:</strong>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum necessitatibus soluta
              alias porro, saepe facere expedita asperiores quos fugit inventore ex, itaque sapiente
              quae pariatur beatae optio repellat aperiam quia possimus mollitia repellendus? Illo
              natus quam eaque impedit omnis pariatur!
            </p>
          </div>
        </div>
      }

      <h3 className="related">Products Related</h3>
      <div className="products">
        {products.map((product) => {
          if (item < 6 && details.category === product.category) {
            item++;
            return <ProductCard key={product.id} product={products} />;
          } else {
            <div>
              <h3> There are no products related</h3>
            </div>;
          }
        })}
      </div>
    </>
  );
};

export default ProductView;
