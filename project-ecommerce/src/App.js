import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Newcustomer from './components/Newcustomer/Newcustomer';
import ProductView from './components/Products/ProductView';
import { DataProvider } from './Context/Dataprovider';
import { ItemsProvider } from './Context/CartItemsProvider';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  const [user, setUser] = useState({ email: '' });
  //const [error, setError] = useState('');

  //FAKE USER FOR LOGIN TRIAL
  const adminUser = {
    email: 'admin@test.com',
    password: 'test1234',
  };

  //LOGIN
  const login = (details) => {
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log('logged In');
      setUser({
        email: details.email,
      });
    } else {
      console.log('details do not match');
    }
  };

  //LOGOUT
  const logout = () => {
    console.log('logout');
    setUser({ email: '' });
  };

  //ROUTING
  return (
    <ItemsProvider>
      <DataProvider>
        <Router>
          <div className="App">
            <Navbar user={user} />
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
                <Route exact path="/newcustomer">
                  <Newcustomer />
                </Route>
                <Route exact path="/login">
                  <Login user={user} login={login} logout={logout} />
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
