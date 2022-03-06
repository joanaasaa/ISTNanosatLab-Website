import React from "react";
import { Grid } from "@mui/material";
import styled from "styled-components";

import "../../style.scss";
import "./Home.scss";

import HeroSection from "../../components/HeroSection/HeroSection";
import Section from "../../layouts/Section/Section";

import istsat1_logo from "../../resources/images/logos/istsat/logo.png";
import esa_logo from "../../resources/images/logos/esa/esa_logo.png";
import fys_logo from "../../resources/images/logos/esa/fys_logo.png";
import activespace_logo from "../../resources/images/logos/sponsors/activespace.png";
import amrad_logo from "../../resources/images/logos/sponsors/amrad.png";
import anacom_logo from "../../resources/images/logos/sponsors/anacom.png";
import cgd_logo from "../../resources/images/logos/sponsors/cgd.png";
import dorbit_logo from "../../resources/images/logos/sponsors/dorbit.png";
import fernando_logo from "../../resources/images/logos/sponsors/fernando_ferro_e_irmao.png";
import inesc_logo from "../../resources/images/logos/sponsors/inesc.png";
import ipq_logo from "../../resources/images/logos/sponsors/ipq.png";
import ist_logo from "../../resources/images/logos/sponsors/ist.png";
import it_logo from "../../resources/images/logos/sponsors/it.png";
import lusospace_logo from "../../resources/images/logos/sponsors/lusospace.png";
import nav_logo from "../../resources/images/logos/partners/nav.png";
import primetec_logo from "../../resources/images/logos/sponsors/primetec.png";

export const Logo = styled.img`
  width: 30vw;
  max-width: 200px;
  height: auto;
`;

function ESALogoContainer(props) {
  return (
    <a href={props.url}>
      <div className="esa-logo-container responsive-circle">
        <img src={props.src} alt={props.alt} className="esa-logo" />
      </div>
    </a>
  );
}

function SponsorContainer(props) {
  return (
    <a href={props.url}>
      <div className="sponsor-container">
        <img src={props.src} alt={props.alt} className="sponsor-logo" />
      </div>
    </a>
  );
}

function SponsorsAndPartners(props) {
  const sponsors = [
    {
      id: "ist",
      logoSrc: ist_logo,
      logoAlt: "IST logo",
      url: "https://tecnico.ulisboa.pt/",
    },
    {
      id: "inesc",
      logoSrc: inesc_logo,
      logoAlt: "INESC-ID logo",
      url: "https://www.inesc-id.pt/",
    },
    {
      id: "it",
      logoSrc: it_logo,
      logoAlt: "IT logo",
      url: "https://www.it.pt/",
    },
    {
      id: "amrad",
      logoSrc: amrad_logo,
      logoAlt: "AMRAD logo",
      url: "http://www.amrad.pt/",
    },
    {
      id: "anacom",
      logoSrc: cgd_logo,
      logoAlt: "CGD logo",
      url: "https://www.cgd.pt/",
    },
    {
      id: "cgd",
      logoSrc: anacom_logo,
      logoAlt: "ANCOM logo",
      url: "https://www.anacom.pt/",
    },
    {
      id: "dorbit",
      logoSrc: dorbit_logo,
      logoAlt: "D-Orbit logo",
      url: "https://www.dorbit.space/",
    },
    {
      id: "activespace",
      logoSrc: activespace_logo,
      logoAlt: "Activespace logo",
      url: "https://www.activespacetech.com/",
    },
    {
      id: "primetec",
      logoSrc: primetec_logo,
      logoAlt: "Primetec logo",
      url: "https://primetec.pt/",
    },
    {
      id: "ipq",
      logoSrc: ipq_logo,
      logoAlt: "IPQ logo",
      url: "http://www1.ipq.pt/PT/Pages/Homepage.aspx",
    },
    {
      id: "fernando",
      logoSrc: fernando_logo,
      logoAlt: "Fernando Ferro & Irmão, Lda logo",
      url: "https://www.m-tec.pt/",
    },
    {
      id: "lusospace",
      logoSrc: lusospace_logo,
      logoAlt: "LusoSpace logo",
      url: "https://www.lusospace.com/",
    },
  ];
  const sponsorsList = sponsors.map((sponsor) => (
    <Grid item xs={12} sm={6} md={4}>
      <SponsorContainer
        src={sponsor.logoSrc}
        alt={sponsor.logoAlt}
        url={sponsor.url}
      />
    </Grid>
  ));

  const partners = {
    nav: {
      logoSrc: { nav_logo },
      logoAlt: "NAV logo",
      url: "https://nav.pt/",
    },
  };

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      {sponsorsList}
    </Grid>
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
        <img src={istsat1_logo} alt="ISTSat-1 logo" className="istsat-logo" />
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
                There are already satellites working to provide a space
                component to the ADS-B system. Aieron’s Iridium Constellation is
                made up of 66 Low-Earth Orbit (LEO) satellites which provide
                ADS-B worldwide coverage.
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
      >
        <SponsorsAndPartners />
      </Section>
    </>
  );
}
