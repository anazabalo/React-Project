import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
//import 'boxicons';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cartData'));
    if (cartData) {
      setCartItems(cartData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Router>
      <div className="App">
        <Navbar cartItems={cartItems} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/products">
              <Products onAddToCart={handleAddToCart} />
            </Route>
            <Route exact path="/cart">
              <Cart cartItems={cartItems} setCartItems={setCartItems} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
