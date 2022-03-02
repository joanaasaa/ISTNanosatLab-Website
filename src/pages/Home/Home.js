import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";

import "../../style.css";
import "./Home.css";

import HeroSection from "../../components/HeroSection";
import HomeSection from "../../layouts/HomeSection";

import logo from "../../resources/images/logo/logo.png";
import esa_logo from "../../resources/images/esa_logo.png";
import fys_logo from "../../resources/images/fys_logo.png";

export const Logo = styled.img`
  width: 30vw;
  max-width: 200px;
  height: auto;
`;

export const ESALogo = styled.img`
  width: 80%;
  height: 80%;
  object-fit: scale-down;
`;

function ESALogoContainer(props) {
  return (
    <div className="responsive-circle esa-logo-background">
      <ESALogo src={props.src} alt={props.alt} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeSection id="about" title="What is ISTSat-1?" subtitle="About Us">
        <Logo src={logo} alt="ISTSat-1 logo" />
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
      <HomeSection
        id="mission"
        title="A mission to educate"
        subtitle="Our mission"
        classes="image-background"
      >
        <p>
          ISTSat-1’s main goal is to provide students with an interesting and
          challenging experience in order too foster enthusiasm for space,
          science and technology.
        </p>
        <p>
          Due to their smallness and relative simplicity, CubeSats are
          appropriate and, therefore, commonly used for this purpose. These
          satellites allow students a hands-on approach with a real and feasible
          space project, that extends to many fields of engineering.
        </p>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={4} lg={2}>
            <ESALogoContainer
              src={esa_logo}
              alt="ESA logo"
              url="https://www.esa.int/"
            />
          </Grid>
          <Grid item xs={12} sm={4} lg={2}>
            <ESALogoContainer
              src={fys_logo}
              alt="ESA FYS logo"
              url="https://www.esa.int/Education/CubeSats_-_Fly_Your_Satellite"
            />
          </Grid>
        </Grid>
      </HomeSection>
    </>
  );
}
