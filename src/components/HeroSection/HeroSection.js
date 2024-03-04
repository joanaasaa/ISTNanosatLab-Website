import React from "react";
import styled from "styled-components";

import hero_background from "../../resources/images/cover.jpg";

import "style.scss";
import "components/HeroSection/HeroSection.css";
import "layouts/Section/Section.css";

const HeroBackground = styled.div.attrs((props) => ({
  className: props.className,
}))`
  /* Image background with dark overlay */
  background-image: url(${hero_background});
`;

function HeroSection(props) {
  return (
    <div id={props.id}>
      <HeroBackground className="image-background hero-background">
        <div className="section hero-container">
          <h1>ISTSat-1</h1>
          <h3>The First Portuguese CubeSat</h3>
          <div className="animation-bounce">
            <a href="#about">
              <i id="arrow" class="fa-solid fa-arrow-down fa-2xl"></i>
            </a>
          </div>
        </div>
      </HeroBackground>
    </div>
  );
}

export default HeroSection;
