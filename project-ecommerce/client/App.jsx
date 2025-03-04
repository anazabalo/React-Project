import Navbar from "./components/Navbar/Navbar";
import { DataProvider } from "./Context/Dataprovider";
import { ItemsProvider } from "./Context/CartItemsProvider";
import AppRoutes from "./Routes/AppRoutes";
import "./App.css";

const App =() => {
  return (
    <ItemsProvider>
      <DataProvider>
        <div className="App">
          <Navbar />
          <div className="content">
            <AppRoutes />
          </div>
        </div>
      </DataProvider>
    </ItemsProvider>
  );
}

export default App;
