import EachItem from './EachItem';
import Data from '../../Data';
const Products = ({ title, adding }) => {
  return (
    <div className="allProducts">
      <p>{title}</p>
      <div adding={adding}>{Data.map(EachItem)}</div>
    </div>
  );
};

export default Products;
