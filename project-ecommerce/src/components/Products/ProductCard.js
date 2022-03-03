import './Products.css';
const ProductCard = ({ product, onAddToCart }) => {
  const { image, title, price, category } = product;
  return (
    <div className="productPreview" key={product.id}>
      <a href="/">
        <img src={image} alt={title} />
      </a>

      <p> {title}</p>

      <p> {category}</p>
      <p> {price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
