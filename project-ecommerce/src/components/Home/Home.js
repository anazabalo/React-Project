import styles from './Home.module.css';
import landingImage from '../../Images/Homepage.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  /*const handleClick = () => {
    alert('clicking');
    return false;
  };*/

  return (
    <div className={styles.homeContent}>
      <div className={styles.mainImage}>
        <Link to="/products" title="Link to Products" className={styles.imageLink}>
          <img src={landingImage} alt="Welcome picture redirecting to products" />
        </Link>
      </div>

      <div className={styles.mainText}>
        <div>
          <p>
            <Link to="/products">Your future home is here </Link>
          </p>
        </div>

        <div>
          <p>
            <span>TAKE YOUR DECORATION TO NEW HEIGHTS WITH OUR NEW COLLECTION</span>
          </p>
        </div>

        <div>
          <Link to="/products"> SHOP THE NEW COLLECTION</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
