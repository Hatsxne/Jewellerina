import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="content">
        <img
          className="home-img"
          src={"/Images/Homepic.jpg"}
          alt="Sparkle within"
        />
      </div>
      <div className="body-home">"Discover The Sparkle Within"</div>
      <div className="btn-div">
        <button
          className="btn"
          onClick={() => {
            navigate("/shop");
          }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Home;
