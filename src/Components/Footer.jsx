import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h4>Jewellerina</h4>
          <p>Crafting Memories, Sparkling Moments</p>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/news">Shop</a>
            </li>
            <li>
              <a href="/news">Sale</a>
            </li>
            <li>
              <a href="/about-us">About</a>
            </li>
            <li>
              <a href="/contact-us">Contact</a>
            </li>
            <li>
              <a href="/news">Reviews</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Jewellerina. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;