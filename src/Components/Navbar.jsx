import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faGlobe } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <a className="nav-logo" href="/">
        Jewellerina
      </a>
      <nav className="main-nav" ref={navRef}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/shop">Shop</a>
        <a href="/sales">Sales</a>
        <a href="/contact">Contact</a>
        <a href="/reviews">Reviews</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <nav className="icon-nav" ref={navRef}>
        <a href="#"><FontAwesomeIcon icon={faSearch} /></a>
        <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
        <a href="#"><FontAwesomeIcon icon={faGlobe} /> ENG</a>
      </nav>
    </header>
  );
}

export default Navbar;