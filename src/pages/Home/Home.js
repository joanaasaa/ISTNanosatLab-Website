import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";

import "../../style.css";
import "./Home.css";

import HeroSection from "../../components/HeroSection/HeroSection";
import Section from "../../layouts/Section/Section";

import logo from "../../resources/images/logos/istsat/logo.png";
import esa_logo from "../../resources/images/logos/esa/esa_logo_white.png";
import fys_logo from "../../resources/images/logos/esa/fys_logo_white.png";

export const Logo = styled.img`
  width: 30vw;
  max-width: 200px;
  height: auto;
`;

function ESALogoContainer(props) {
  return (
    <a href={props.url}>
      <img src={props.src} alt={props.alt} className="esa-logo" />
    </a>
  );
}

function PartnerContainer(props) {
  return (
    <div className="partner_container">
      <a href={props.url}>
        <img src={props.src} alt={props.alt} className="esa-logo" />
      </a>
    </div>
  );
}

export const MissionText = styled.p`
  text-align: left;
`;

export default function Home() {
  return (
    <>
      <HeroSection />
      <Section id="about" title="What is ISTSat-1?" subtitle="About Us">
        <img src={logo} alt="ISTSat-1 logo" className="istsat-logo" />
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
      </Section>
      <Section
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
        <p>
          Developing ISTSat-1 to be a CubeSat was an important decision since it
          allowed us to apply to ESA’s Fly Your Satellite! program. Being
          accepted to the program in March 2017 was a very important milestone
          for the team since it meant we could fulfill our most ambitious goal:
          Launch ISTSat-1 into space!
        </p>
        <p>
          The Fly Your Satellite! program, now in its second edition, offers the
          student teams professional support throughout the process of creating
          and developing the satellites. ESA does this by giving students access
          to professional test facilities and offering financial support for the
          teams to be part of various workshops and training sessions. Since
          every team has access to all of these resources, all of them have to
          periodically show ESA the result of their continuous work and show
          their progress. The teams that last until the end of the program get
          to launch their satellites!
        </p>
        <p>
          Even though all FYS participants have the same goal, to launch the
          developed satellite, they each get to decide their CubeSats’ mission…
        </p>
        <h2>What is ADS-B?</h2>
        <p>
          Automatic Dependent Surveillance-Broadcast, ADS-B for short, is an
          aircraft survaillance system designed to compliment the Primary
          Survaillance Radar (PSR) and, in a near future, replace the Secondary
          Surveillance Radar (SSR). Its main purpose, much like SSR, is to
          control aircrafts’ statuses, like velocity and altitude, around the
          world.
        </p>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <div className="mission-text-container">
              <h2>Why will it replace SSR?</h2>
              <MissionText>
                It has many advantages! Firstly, messages are not encrypted and,
                therefore, available to everyone. Another advantage is that the
                aircraft information can be received without an interrogation
                signal, it’s always being broadcasted (nevertheless,
                interrogations are still possible). Additionally, the ADS-B
                system is built so that not only ground stations but also pilots
                have this information available in real-time.
              </MissionText>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="mission-text-container">
              <h2>
                What does it have that others don’t to accomplish world-wide
                coverage?
              </h2>
              <MissionText>
                ADS-B was designed to have a space component. Thus, not only
                will aircrafts and ground stations broadcast and re-transmit
                ADS-B messages, but also satellites. This means that these will
                relay messages sent by aircrafts in order to cover areas which
                ground stations can’t reach, like oceans, deserts or mountains!
              </MissionText>
              <MissionText>
                There are satellites already working for Air Traffic Control
                (ATC) but they are few, mainly due to cost and complexity. This
                is what’s different for ADS-B: It’s simple and cheap! Therefore,
                there can be enough stallites to accomplish world-wide coverage.
              </MissionText>
            </div>
          </Grid>
        </Grid>
        <h2>So what's the mission?</h2>
        <p>
          ISTSat-1’s purpose will be to carry out a feasibility study for the
          use of nanosatellites, namelty CubeSats, to receive ADS-B signals in
          areas that are covered by terrestrial stations. CubeSats are very
          simple and cheap when compared to the classical satellite, so our
          mission is to prove that even a “low-budget” satellite can accomplish
          the purpose of serving as an ADS-B support satellite.
        </p>
      </Section>
      <Section
        id="partners"
        title="Our partners"
        subtitle="Partners & Sponsors"
      ></Section>
    </>
  );
}
