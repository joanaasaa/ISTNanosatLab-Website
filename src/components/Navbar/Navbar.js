import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTheme } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import "../../style.scss";
import "./Navbar.scss";

import { navbar_entries } from "../../globals";
import logo from "../../resources/images/logos/istsat/logo_minimalist_white.png";
import logo_hamburguer from "../../resources/images/logos/istsat/logo_minimalist.png";

const NavbarContainer = styled.div.attrs((props) => ({
  id: props.id,
  className: props.className,
}))`
  background: ${(props) =>
    props.opaqueNavbar ? "var(--accent)" : "transparent"};
`;

const NavbarHamburguerActive = styled.div.attrs((props) => ({
  className: props.className,
}))`
  opacity: ${(props) => (props.active ? "100%" : "0%")};
  top: ${(props) => (props.active ? "0" : "-100vh")};
`;

function NavbarEntry(props) {
  if (props.to === "") {
    return <p className={props.inactiveClass}>{props.name}</p>;
  } else {
    return (
      <NavLink
        className={({ isActive }) =>
          isActive ? props.activeClass : props.inactiveClass
        }
        to={props.to}
      >
        {props.name}
      </NavLink>
    );
  }
}

function NavbarEntries(props) {
  const menu = navbar_entries.map((entry) => (
    <NavbarEntry
      activeClass={
        props.isHamburguer
          ? "navbar-text-hamburguer-active"
          : "navbar-text-active"
      }
      inactiveClass={
        props.isHamburguer ? "navbar-text-hamburguer" : "navbar-text"
      }
      to={entry.to}
      name={entry.name}
    />
  ));

  return <div className={props.class}>{menu}</div>;
}

function NavbarHamburguer() {
  const [isMenuActive, setMenuActive] = useState(false);

  // On hamburgue click (isMenuActive=true), activate menu.
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
        <NavbarEntries class="navbar-links-mobile" isHamburguer={true} />
        {/* <img
          src={logo_hamburguer}
          alt="ISTSat-1 logo"
          className="navbar-logo-hamburguer"
        /> */}
      </NavbarHamburguerActive>
    </>
  );
}

function NavbarRegular() {
  return <NavbarEntries class="navbar-links-regular" isHamburguer={false} />;
}

function NavbarMenu() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // The navbar menu turns hamburguer style for screens smaller than 900px
  // (aka. sm).
  if (isMobile) {
    return <NavbarHamburguer />;
  } else {
    return <NavbarRegular />;
  }
}

function Navbar() {
  const [opaqueNavbar, setOpaqueNavbar] = useState(false);

  // The navbar turns opaque when the user has scrolled more than 20% of the
  // window height.
  const toggleNavbar = () => {
    if (window.scrollY >= 0.2 * window.innerHeight) setOpaqueNavbar(true);
    else setOpaqueNavbar(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleNavbar);
  });

  return (
    <NavbarContainer
      id="navbar"
      opaqueNavbar={opaqueNavbar}
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
