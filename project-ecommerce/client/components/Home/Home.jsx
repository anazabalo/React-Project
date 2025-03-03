import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div className={styles.homeContent}>
      <div className={styles.mainText}>
        <div>
          <h1>
            <Link to="/products">Make room for everything you love </Link>
          </h1>
          <p>
            <Link to="/products">Your dream house un click away </Link>
          </p>
        </div>

        <div className={styles.imagesSlider}>
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Home;
