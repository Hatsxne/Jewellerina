import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useTranslation } from "react-i18next";

function Navbar() {
  const navRef = useRef();
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "fr" : "en";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const { t, i18n } = useTranslation();

  return (
    <header>
      <a className="nav-logo" href="/">
        Jewellerina
      </a>
      <nav className="main-nav" ref={navRef}>
        <a href="/">{t("Home")}</a>
        <a href="/about">{t("About")}</a>
        <a href="/shop">{t("Shop")}</a>
        <a href="/sales">{t("Sales")}</a>
        <a href="/contact">{t("Contact")}</a>
        <a href="/reviews">{t("Reviews")}</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <nav className="icon-nav" ref={navRef}>
        {/* <a href="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
        </a> */}
        <a href="#" onClick={toggleLanguage}>
          <FontAwesomeIcon icon={faGlobe} /> {currentLanguage.toUpperCase()}
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
