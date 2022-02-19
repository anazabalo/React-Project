import { useState } from 'react';
import Products from './Products';
import styles from './Products.css';

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Odger',
      price: 795,
      image: require('./Images/image2.jpg'),
      category: 'Chair',
      quantity: 1,
    },
    {
      id: 2,
      title: 'Nilsolle',
      price: 499,
      image: require('./Images/image3.jpg'),
      category: 'Bar Chair',
      quantity: 1,
    },
    {
      id: 3,
      title: 'Kyrre',
      price: 129,
      image: require('./Images/image4.jpg'),
      category: 'Stool Chair',
      quantity: 1,
    },
  ]);
  //const handleClick = () => {
  //products.filter((itemUnit) => itemUnit.quantity === 1);};
  return (
    <div>
      <Products products={products} title="All Products" />
    </div>
  );
};

export default ProductList;
