import { useState } from 'react';
const EachItem = (product) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    console.log('cart');
    setCart([...cart, product]);
  };
  return (
    <div className="productPreview" key={product.id}>
      <a href="/">
        <img src={product.image} alt={product.title} />
      </a>

      <p> {product.title}</p>

      <p> {product.category}</p>
      <p> {product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default EachItem;
