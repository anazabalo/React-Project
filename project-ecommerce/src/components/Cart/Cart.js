const Cart = ({ cartItems, setCartItems }) => {
  const removeProduct = (id) => {
    if (window.confirm('do you want remove the product?')) {
      const remove = cartItems.filter((product) => product.id !== id);
      setCartItems(remove);
    }
  };
  return (
    <>
      <div className="cartContainer">
        <p>My Cart</p>
        <div>
          {cartItems.lenght === 0 ? (
            <div>Cart is empty</div>
          ) : (
            cartItems.map((product) => (
              <div key={product.id}>
                <span>{product.image}</span>
                <p>{product.title}</p>
                <p>{product.price}</p>
                <p>{product.quantity}</p>
                <button onClick={() => removeProduct(product.id)}>remove</button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
