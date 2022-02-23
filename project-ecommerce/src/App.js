import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ProductList from './components/Products/ProductsList';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'boxicons';

//Create routes Here

function App() {
  const [cartItems, setCartItems] = useState([]);
  const adding = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  return (
    <Router>
      <div className="App">
        <Navbar adding={adding} />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/products">
              <ProductList adding={adding} />
            </Route>
            <Route exact path="/cart">
              <Cart adding={adding} cartItems={cartItems} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
