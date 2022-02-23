const EachItem = (product, { adding }) => {
  return (
    <div className="productPreview" key={product.id}>
      <a href="/">
        <img src={product.image} alt={product.title} />
      </a>

      <p> {product.title}</p>

      <p> {product.category}</p>
      <p> {product.price}</p>
      <button onClick={adding}>Add to Cart</button>
    </div>
  );
};

export default EachItem;
