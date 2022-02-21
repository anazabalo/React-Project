const Products = ({ products, title }) => {
  const handleClick = () => {
    console.log('adding to cart');
  };

  return (
    <div className="allProducts">
      <p>{title}</p>

      {products.map((product) => (
        <>
          <div className="productPreview" key={product.id}>
            <a href="/">
              <img src={product.image} alt={product.title} />
            </a>

            <p> {product.title}</p>

            <p> {product.category}</p>
            <p> {product.price}</p>
            <button onClick={() => handleClick()}>Add to Cart</button>
          </div>
        </>
      ))}
    </div>
  );
};

export default Products;
