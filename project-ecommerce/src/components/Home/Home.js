import styles from './Home.module.css'
import landingImage from './Homepage.jpg'

const Home = () => {

  /*const handleClick = () => {
    alert('clicking');
    return false;
  }*/

  return ( 
    <div className={styles.homeContent} >
        
      <div className={styles.mainImage}>
        <a href='/' title='' className={styles.imageLink} >
          <img src={landingImage} alt=''  />
          </a>  
      </div>

      <div className={styles.mainText}>
      <div >
        <h2>
          <a href='/' >Your future home is here</a>
        </h2>
      </div>
    
      <div >
        <h4 >
          <span>TAKE YOUR DECORATION TO NEW HEIGHTS WITH OUR NEW COLLECTION</span>
        </h4>
      </div>
        
      <div>
        <a href='/'> SHOP THE NEW COLLECTION</a>
      </div>
      </div>    
     
    </div>

  
   );
}
 
export default Home;