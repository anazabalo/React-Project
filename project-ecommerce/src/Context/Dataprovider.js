import { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  //GET REQUEST PRODUCTS

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8000/products');
        const data = await response.json();

        // After fetching data stored it in posts state.
        setProducts(data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    // Call the function
    fetchProducts();
  }, []);

  const value = {
    products,
    loading,
  };
  return <DataContext.Provider value={value}>{props.children}</DataContext.Provider>;
};
