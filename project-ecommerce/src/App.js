import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import ProductView from './components/Products/ProductView';
import CartPayment from './components/Cart/CartPayment';
import { DataProvider } from './Context/Dataprovider';
import { ItemsProvider } from './Context/CartItemsProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  //ROUTING
  return (
    <ItemsProvider>
      <DataProvider>
        <Router>
          <div className="App">
            <Navbar />
            <div className="content">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/products">
                  <Products />
                </Route>
                <Route exact path="/products/:id">
                  <ProductView />
                </Route>
                <Route exact path="/cart">
                  <Cart />
                </Route>
                <Route exact path="/payment">
                  <CartPayment />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </DataProvider>
    </ItemsProvider>
  );
}

export default App;
