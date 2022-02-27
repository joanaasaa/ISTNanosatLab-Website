import React from "react";

import "../style.css";
import "./Home.css";

import HeroSection from "../components/HeroSection";
import HomeSection from "../layouts/HomeSection";

function Home() {
  return (
    <>
      <HeroSection />
      <HomeSection id="about" title="What is ISTSat-1?" subtitle="About Us">
        <p>This is a child.</p>
      </HomeSection>
    </>
  );
}

export default Home;
