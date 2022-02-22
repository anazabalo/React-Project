import { useState } from 'react';

const Cart = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="cartContainer">
        <p>My Cart</p>
        <img src="/" alt="" />
        <p>description</p>
      </div>
      <div>
        <p>Price</p>
        <p>{count}</p>
        <div>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>

        <button>delete</button>
        <p>total</p>
        <button>Checkout</button>
      </div>
    </>
  );
};

export default Cart;
