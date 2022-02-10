import React from "react";
import { Header } from "./components/Header";
import { ProductList } from "./components/Products/index";
import 'boxicons';


//Create routes Here

function App() {
  return (
    <div className="App">
      <Header />
      <ProductList/>
    
    </div>
  );
}

export default App;
