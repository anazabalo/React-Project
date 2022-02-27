const Cart = ({ cartItems }) => {
  return (
    <>
      <div className="cartContainer">
        <p>My Cart</p>
        <div>
          {cartItems.lenght === 0 ? (
            <div>Cart is empty</div>
          ) : (
            cartItems.map((productTitle) => <p key={productTitle}>{productTitle}</p>)
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
