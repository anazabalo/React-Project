import EachItem from './EachItem';
import Data from '../../Data';
const Products = ({ title }) => {
  return (
    <div className="allProducts">
      <p>{title}</p>
      <div>{Data.map(EachItem)}</div>
    </div>
  );
};

export default Products;
