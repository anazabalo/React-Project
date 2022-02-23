const Cart = ({ cartItems, adding, onRemove }) => {
  console.log(cartItems);
  return (
    <>
      <div className="cartContainer">
        <p>My Cart</p>
        <div>
          {cartItems.lenght === 0 && <div>Cart is empty</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div>{item.name}</div>

              <div>
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>
                <button onClick={() => adding(item)} className="add">
                  +
                </button>
              </div>

              <div>
                {item.quantity} x ${item.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
