import React from "react";
import "./About.css";
import { useTranslation } from "react-i18next";

function About() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <div className="content-bg">
        <img
          className="about-img"
          src={"/Images/Model2.jpg"}
          alt="Model wearing Jewllerina's newest collection"
        />
      </div>
      <div className="about-body">{t("aboutbody")}</div>
    </div>
  );
}

export default About;
