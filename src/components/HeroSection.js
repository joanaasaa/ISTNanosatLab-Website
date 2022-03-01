import React from "react";

import "../style.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div id="hero-section" className="image-background hero-container">
      <h1>ISTSat-1</h1>
      <h3>The First Portuguese CubeSat</h3>
      <a href="#about">
        <i
          id="arrow"
          class="fa-solid fa-arrow-down fa-2xl  animation-bounce"
        ></i>
      </a>
    </div>
  );
}

export default HeroSection;
