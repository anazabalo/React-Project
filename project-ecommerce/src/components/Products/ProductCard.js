import { Link } from 'react-router-dom';
import { DataContext } from '../../Context/Dataprovider';
import { useContext } from 'react';
import './Products.css';

const ProductCard = ({ product }) => {
  console.log(product);

  const value = useContext(DataContext);
  const onAddToCart = value.onAddToCart;
  const { image, title, price, category, id } = product;

  return (
    <div className="productPreview" key={id}>
      <Link to={`/product/${id}`}>
        <div className="productImage">
          <img src={image} alt={title} />
        </div>
      </Link>

      <div className="productFooter">
        <p> {title}</p>

        <p> {category}</p>
        <p> {price}</p>
      </div>
      <div className="productAddButton">
        <button onClick={() => onAddToCart(id)}>Add to Cart</button>
      </div>
      <div>
        <Link to={`/product/${id}`} className="vistaButton">
          Vista
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
