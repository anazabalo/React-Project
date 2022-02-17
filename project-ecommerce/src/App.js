import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
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
    </div>   

  );
}

export default App;
