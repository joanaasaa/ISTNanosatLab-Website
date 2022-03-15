import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import "../../style.scss";
import "./Navbar.scss";

import logo from "../../resources/images/logos/istsat/logo_minimalist_white.png";
import logo_hamburguer from "../../resources/images/logos/istsat/logo_minimalist.png";

const NavbarContainer = styled.div.attrs((props) => ({
  id: props.id,
  className: props.className,
}))`
  background: ${(props) => (props.altNavbar ? "var(--accent)" : "transparent")};
`;

const NavbarHamburguerActive = styled.div.attrs((props) => ({
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

const navLinksListRegular = navLinks.map((link) => (
  <NavLink
    className={({ isActive }) =>
      isActive ? "navbar-text-active" : "navbar-text"
    }
    to={link.to}
  >
    {link.name}
  </NavLink>
));

const navLinksListHamburguer = navLinks.map((link) => (
  <NavLink
    className={({ isActive }) =>
      isActive ? "navbar-text-hamburguer-active" : "navbar-text-hamburguer"
    }
    to={link.to}
  >
    {link.name}
  </NavLink>
));

function NavbarHamburguer(props) {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <>
      <div className="navbar-links-regular navbar-text">
        <div onClick={() => setMenuActive(!isMenuActive)}>
          <i class="fa-solid fa-bars fa-xl"></i>
        </div>
      </div>
      <NavbarHamburguerActive
        active={isMenuActive}
        className="navbar-menu-active"
      >
        <div className="navbar-icon-active navbar-text">
          <div onClick={() => setMenuActive(!isMenuActive)}>
            <i class="fa-solid fa-xmark fa-xl"></i>
          </div>
        </div>
        <div className="navbar-links-mobile">
          {navLinksListHamburguer}
          <img
            src={logo_hamburguer}
            alt="ISTSat-1 logo"
            className="navbar-logo-hamburguer"
          />
        </div>
      </NavbarHamburguerActive>
    </>
  );
}

function NavbarRegular(props) {
  return <div className="navbar-links-regular">{navLinksListRegular}</div>;
}

function NavbarMenu(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Set to true for screens smaller than 900px

  if (isMobile) {
    return <NavbarHamburguer />;
  } else {
    return <NavbarRegular />;
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
        <img
          src={logo}
          alt="ISTSat-1 minimalist logo"
          className="navbar-logo"
        />
      </a>
      <NavbarMenu />
    </NavbarContainer>
  );
}

export default Navbar;
