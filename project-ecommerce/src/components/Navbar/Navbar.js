import styles from './Navbar.module.css';
const Navbar = () => {
 //Insert LOGO in H1
  return (
    <nav className={styles.navBar}>
      <h1>React Project</h1> 
      <div>
        <a href='/' className={styles.navlinks}> Home</a>
        <a href='/' className={styles.navlinks}> Products</a>
      </div>

      <div className= {styles.rightMenu}>
        
        <div>
          <a href='/' className={styles.signUplink}>New Customer</a>
          <a href='/' className={styles.loginLink}>LogIn</a>        
        </div>
        
        <div>
          <box-icon name='cart'></box-icon>
          <span className={styles.itemTotal}>0</span>
        </div>

      </div>  
    </nav> 
    
  );
};

export default Navbar;