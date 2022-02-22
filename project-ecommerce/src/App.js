import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ProductList from './components/Products/ProductsList';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import 'boxicons';

//Create routes Here

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/products">
              <ProductList />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
