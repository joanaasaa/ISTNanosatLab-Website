import React from "react";
import styled from "styled-components";
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import "../../style.scss";
import "./Footer.scss";

import { istsat1_urls } from "../../globals";

import logo from "../../resources/images/logos/istsat/logo_white_background.png";

const FooterTitle = styled.h2`
  margin: 17px 0;
`;

const FooterTitleSocialMedia = styled.h2`
  margin: 17px 0;
  font-size: 2.5rem;
  // For xs screens (according to MUI breskpoints)
  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
  }
  // For sm screens (according to MUI breskpoints)
  @media screen and (min-width: 600px) and (max-width: 900px) {
    font-size: 2rem;
  }
  text-align: center;
`;

function FooterLogo(props) {
  return (
    <img className={props.className} src={logo} alt="ISTSat-1 sticker logo" />
  );
}

function FooterText(props) {
  return (
    <div className={props.className}>
      <FooterTitle>ISTSat-1</FooterTitle>
      <p>
        ISTSat-1 is a 1U CubeSat being developed under ESA’s Fly Your Satellite
        Program! by the ISTNanosat team at Técnico’s Taguspark campus.
      </p>
      <p>
        ISTSat-1 is scheduled to be launched in 2022 and will be the first
        portuguese CubeSat to be launched into space.
      </p>
    </div>
  );
}

const Icon = styled.i.attrs((props) => ({
  className: props.className,
}))`
  color: ${(props) => props.iconColor};
`;

function SocialMediaIcon(props) {
  const iconClass = "footer-socialmedia-icon fa-xl ".concat(props.iconClass);

  return (
    <a
      href={props.url}
      target="_blank"
      rel="noreferrer"
      style={{
        textDecoration: "none",
      }}
    >
      <div className="responsive-circle footer-socialmedia-icon-container">
        <Icon className={iconClass} iconColor={props.iconColor}></Icon>
      </div>
    </a>
  );
}

function FooterSocialMedia(props) {
  return (
    <div className={props.className}>
      <FooterTitleSocialMedia>
        Follow us on social media!
      </FooterTitleSocialMedia>
      <div className="footer-socialmedia-icons">
        <SocialMediaIcon
          iconClass="fa-brands fa-twitter"
          iconColor="var(--twitter)"
          url={istsat1_urls.twitter}
        />
        <SocialMediaIcon
          iconClass="fa-brands fa-instagram"
          iconColor="var(--instagram)"
          url={istsat1_urls.instagram}
        />
        <SocialMediaIcon
          iconClass="fa-brands fa-facebook"
          iconColor="var(--facebook)"
          url={istsat1_urls.facebook}
        />
      </div>
    </div>
  );
}

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Set to true for screens smaller than 900px

  var containerClass;
  var contentContainerClass;
  var logoClass;
  var textClass;
  var socialMediaClass;
  var linksClass;
  if (isMobile) {
    containerClass = "footer-container-mobile";
    contentContainerClass = "footer-mobile";
    logoClass = "footer-logo-mobile";
    textClass = "footer-text-mobile";
    socialMediaClass = "footer-socialmedia-mobile";
    linksClass = "footer-links-mobile";
  } else {
    containerClass = "footer-container-regular";
    contentContainerClass = "footer-regular";
    logoClass = "footer-logo-regular";
    textClass = "footer-text-regular";
    socialMediaClass = "footer-socialmedia-regular";
    linksClass = "footer-links-regular";
  }

  return (
    <div className={containerClass}>
      <div className={contentContainerClass}>
        <FooterLogo className={logoClass} />
        <FooterText className={textClass} />
        <FooterSocialMedia className={socialMediaClass} />
        {/* <FooterLinks className={linksClass} /> */}
      </div>
    </div>
  );
}

export default Footer;
