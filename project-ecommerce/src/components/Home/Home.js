import styles from './Home.module.css';
import landingImage from '../../Images/Homepage.jpg';

const Home = () => {
  const handleClick = () => {
    alert('clicking');
    return false;
  };

  return (
    <div className={styles.homeContent} onClick={handleClick}>
      <div className={styles.mainImage}>
        <a href="/" title="" className={styles.imageLink}>
          <img src={landingImage} alt="" />
        </a>
      </div>

      <div className={styles.mainText}>
        <div>
          <p>
            <a href="/">Your future home is here</a>
          </p>
        </div>

        <div>
          <p>
            <span>TAKE YOUR DECORATION TO NEW HEIGHTS WITH OUR NEW COLLECTION</span>
          </p>
        </div>

        <div>
          <a href="/"> SHOP THE NEW COLLECTION</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
