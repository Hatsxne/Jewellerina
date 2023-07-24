import { t } from "i18next";
import React from "react";
import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h4>Jewellerina</h4>
          <p>{t("slogan")}</p>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li>
              <a href="/">{t("Home")}</a>
            </li>
            <li>
              <a href="/about">{t("About")}</a>
            </li>
            <li>
              <a href="/shop">{t("Shop")}</a>
            </li>
            <li>
              <a href="/sales">{t("Sales")}</a>
            </li>
            <li>
              <a href="/contact">{t("Contact")}</a>
            </li>
            <li>
              <a href="/reviews">{t("Reviews")}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {t("rights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
