import React from "react";

import "../style.css";
import "./HeroSection.css";
import "../layouts/HomeSection.css";

function HeroSection() {
  return (
    <div id="hero-section" className="image-background hero-container">
      <div className="home-section">
        <h1>ISTSat-1</h1>
        <h3>The First Portuguese CubeSat</h3>
        <a href="#about">
          <i
            id="arrow"
            class="fa-solid fa-arrow-down fa-2xl  animation-bounce"
          ></i>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
