import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ProductList from './components/Products/ProductsList';
import Cart from './components/Cart/Cart';
import './App.css';

import 'boxicons';

//Create routes Here

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <div>
        <ProductList />
      </div>
      <div>
        <Cart />
      </div>
    </div>
  );
}

export default App;
