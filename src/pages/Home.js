import React from "react";

import "../style.css";
import "./Home.css";

import HeroSection from "../components/HeroSection";
import HomeSection from "../layouts/HomeSection";

import logo from "../resources/images/logo/logo.png";

// const Logo = styled("img")({
//   width: "30vw",
//   maxWidth: "200px",
//   height: "auto",
//   src: "../resources/images/logo/logo.png",
// });

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeSection id="about" title="What is ISTSat-1?" subtitle="About Us">
        <img src={logo} id="logo" alt="ISTSat-1 Logo" />
        <p>
          ISTSat-1 is a 1U CubeSat and will be the first Portuguese CubeSat to
          be launched into space!
        </p>
        <p>
          It’s being developed by the ISTNanosat team which is made up of
          students and teachers from University of Lisbon’s Instituto Superior
          Técnico, working out of Técnico’s Taguspark campus.
        </p>
        <p>
          ISTSat-1 is a nanosatellite being developed under ESA’s Fly Your
          Satellite! program. ISTSat-1 is scheduled to be launched in 2021.
        </p>
      </HomeSection>
    </>
  );
}
