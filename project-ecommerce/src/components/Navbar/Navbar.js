import styles from './Navbar.module.css';
const Navbar = () => {
 //Insert LOGO in H1
  return (
    <nav className={styles.Navbar}>
      <h1>React Project</h1> 
      <div className={styles.Navlinks}>
        <a href='/' className='home'> Home</a>
        <a href='/' className='products'> Products</a>
      </div>

      <div className= {styles.rightMenu}>
        
        <div className='Login'>
          <a href='/' className='sign-up-link'>New Customer</a>
          <a href='/' className='login-link'>LogIn</a>        
        </div>
        
        <div className='cart'>
          <box-icon name='cart'></box-icon>
          <span className='item-total'>0</span>
        </div>

      </div>  
    </nav> 
    
  );
};

export default Navbar;