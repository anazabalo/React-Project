import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Context/Dataprovider";
import { CartItemsContext } from "../../Context/CartItemsProvider";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import styles from "./ProductView.module.css";
import ProductCard from "./ProductCard";

const ProductView = () => {
  const { products } = useContext(DataContext);
  const { onAddToCart } = useContext(CartItemsContext);
  const [details, setDetails] = useState([]);
  const params = useParams();
  let item = 0;

  console.log(products);
  console.log(params.id);

  useEffect(() => {
    products.forEach((product) => {
      console.log(product.id, parseInt(params.id));
      if (product.id === parseInt(params.id)) {
        setDetails(product);
      }
    });
  }, [params.id, products]);

  console.log(details);

  return (
    //DISPLAY THE CARD AND IN THE FOOTER. MAP THE PRODUCTS RELATED BY CATEGORY
    <>
      {
        <div className={styles.Details}>
          <div className={styles.backToProductsArrow}>
            <Link to="/products">
              <ArrowBackOutlinedIcon />
            </Link>
          </div>
          <div className={styles.DetailsHeader}>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
          </div>
          <div className={styles.DetailsFooter}>
            <p className={styles.Price}>Price: {details.price} SEK</p>
            <button onClick={() => onAddToCart(details)}>Add to cart</button>
            <div className={styles.Description}>
              <p>
                <strong>Description:</strong>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                necessitatibus soluta alias porro, saepe facere expedita
                asperiores quos fugit inventore ex, itaque sapiente quae
                pariatur beatae optio repellat aperiam quia possimus mollitia
                repellendus? Illo natus quam eaque impedit omnis pariatur!
              </p>
            </div>
          </div>
        </div>
      }
      <div className={styles.productsRelatedContainer}>
        <h3>Products Related</h3>
        <div className={styles.productsRelated}>
          {products.map((product) => {
            if (item < 6 && details.category === product.category) {
              item++;
              return <ProductCard key={product.id} product={product} />;
            } else {
              <div>
                <h3> There are no products related</h3>
              </div>;
            }
            return <div></div>;
          })}
        </div>
      </div>
    </>
  );
};

export default ProductView;
