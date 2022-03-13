import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import "../../style.scss";
import "./Navbar.scss";

import logo from "../../resources/images/logos/istsat/logo_minimalist_white.png";
import { color } from "@mui/system";

const NavbarContainer = styled.div.attrs((props) => ({
  id: props.id,
  className: props.className,
}))`
  background: ${(props) => (props.altNavbar ? "var(--accent)" : "transparent")};
`;

const NavbarMenuActive = styled.div.attrs((props) => ({
  className: props.className,
}))`
  opacity: ${(props) => (props.active ? "100%" : "0%")};
  top: ${(props) => (props.active ? "0" : "-100vh")};
`;

const navLinks = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Team",
    to: "/team",
  },
  {
    name: "Publications",
    to: "/publications",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

const navLinksList = navLinks.map((link) => (
  <NavLink
    className={({ isActive }) =>
      isActive ? "navbar-text-active" : "navbar-text"
    }
    to={link.to}
  >
    {link.name}
  </NavLink>
));

function NavbarLinksMobile(props) {
  const [isMenuActive, setMenuActive] = useState(false);

  var icon;
  if (isMenuActive) icon = <i class="fa-solid fa-xmark fa-xl"></i>;
  else icon = <i class="fa-solid fa-bars fa-xl"></i>;

  return (
    <>
      <div className="navbar-links navbar-text">
        <div onClick={() => setMenuActive(!isMenuActive)}>{icon}</div>
      </div>
      <NavbarMenuActive
        active={isMenuActive}
        className="navbar-menu-active navbar-text"
      >
        <div className="navbar-links navbar-text">
          <div onClick={() => setMenuActive(!isMenuActive)}>{icon}</div>
        </div>
        {navLinksList}
      </NavbarMenuActive>
    </>
  );
}

function NavbarLinksRegular(props) {
  return <div className="navbar-links">{navLinksList}</div>;
}

function NavbarLinks(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Set to true for screens smaller than 900px

  if (isMobile) {
    return <NavbarLinksMobile />;
  } else {
    return <NavbarLinksRegular />;
  }
}

function Navbar() {
  const [altNavbar, setAltNavbar] = useState(false);

  const toggleNavbar = () => {
    if (window.pageYOffset >= 0.2 * window.innerHeight) setAltNavbar(true);
    else setAltNavbar(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleNavbar);
  });

  return (
    <NavbarContainer
      id="navbar"
      altNavbar={altNavbar}
      className="navbar-container"
    >
      <a href="/#hero" className="navbar-logo-container">
        <img src={logo} alt="ISTSat-1 logo" className="navbar-logo" />
      </a>
      <NavbarLinks />
    </NavbarContainer>
  );
}

export default Navbar;
