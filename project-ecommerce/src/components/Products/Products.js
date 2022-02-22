import EachItem from './EachItem';
import Data from '../../Data';
import { useState } from 'react';
const Products = ({ title }) => {
  return (
    <div className="allProducts">
      <p>{title}</p>
      <div>{Data.map(EachItem)}</div>
    </div>
  );
};

export default Products;
