import styles from "../styles/header.module.css";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import logo from '../assets/logo.png'
function Header() {

  return (
    <>
      {/* <nav className={`navbar navbar-expand-xl bg-body-tertiary `}>
        <div className="container-fluid">
        
          <a className="navbar-brand" href="#"><img src={logo} alt="logo" className={styles.logo} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}



      <nav class={`navbar navbar-expand-lg bg-body-tertiary ${styles.nav}`}>
        <div className={styles.navLeft}>
          <img src={logo} alt="logo" className={`${styles.logo}`} />
          <ul className={styles.navLeftItems}>
            <li>Laptop</li>
            <li>Smartphone</li>
            <li>Smartwatch</li>
          </ul>
        </div>
        <div className={styles.search}>
          <button>
            <IoSearch className={`${styles.searchIcon}`} />
          </button>
          <input type="text" placeholder="Search" />
        </div>
        <ul className={`bar ${styles.navbar} `}>
          <li>Home</li>
          <li>About</li>
          <li>
            <FaShoppingCart />
          </li>
          <li>
            <FaUserAlt />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
