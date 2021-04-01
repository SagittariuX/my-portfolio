import React, { useEffect, useState, useRef } from "react";

import { Button, Nav, Navbar } from "react-bootstrap";
import styles from "./css/nav.module.css";

import myLogo from "../assets/pics/logo.png";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const MyNav = () => {
  const [isSticky, setSticky] = useState(false);
  const [isHidden, setHidden] = useState(false);
  const [isSmallScreen, setSmallScreen] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const lastYOffSet = useRef(0);

  useEffect(() => {
    window.onscroll = () => {
      const yoffset = window.pageYOffset;
      setSticky(yoffset > 0);
      setHidden(yoffset - lastYOffSet.current > 0); //onScroll down hide nav
      lastYOffSet.current = yoffset;
    };

    return () => (window.onscroll = null);
  });

  useEffect(() => {
    window.onresize = () => {
      setSmallScreen(window.innerWidth <= 768);
    };
    return () => (window.onresize = null);
  });

  return (
    <Navbar
      className={`${styles["my-navbar"]} ${isSticky && styles["sticky"]} ${
        isHidden && styles["hide"]
      }`}
    >
      <Navbar.Brand>
        <img src={myLogo} width="50" height="50" alt="myLogo" />
      </Navbar.Brand>

      {isSmallScreen && (
        <Button
          onClick={() => {
            setMenuOpen(!isMenuOpen);
          }}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </Button>
      )}

      <Nav
        className={`${styles["my-nav-links"]} ${
          isMenuOpen && styles["toggle"]
        }`}
      >
        <Nav.Link
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          About Me
        </Nav.Link>
        <Nav.Link
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          Projects
        </Nav.Link>
        <Nav.Link
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          Contact Me
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MyNav;
