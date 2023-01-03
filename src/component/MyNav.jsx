import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./css/nav.module.css";
import React, { useEffect, useState, useRef } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import myLogo from "../assets/pics/logo.png";

const MyNav = ({ isMenuOpen, setMenuOpen }) => {
  const [isSticky, setSticky] = useState(false);
  const [isHidden, setHidden] = useState(false);
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

  return (
    <Navbar
      fixed="top"
      onBlur={() => setMenuOpen(false)}
      expand="lg"
      collapseOnSelect
      className={`
        ${styles["my-navbar"]} 
        ${isSticky ? styles["sticky"] : ""} 
        ${isHidden ? styles["hide"] : ""}`}
    >
      <Container fluid>
        <Navbar.Brand
          href="#"
          className={`${styles["my-icon"]} wow fadeInDown`}
        >
          <img src={myLogo} width="50" height="50" alt="myLogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar"></Navbar.Toggle>
        <Navbar.Offcanvas
          placement="end"
          style={{flexGrow: 0}} //manually overwrite bs styles
          className={`${styles["my-offcanvas"]}`}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body >
            <Nav
              className={`${styles["my-nav-links"]} ${
                isMenuOpen ? styles["toggle"] : ""
              }`}
            >
              <Nav.Link
                className={`${styles["underline-transition"]} wow fadeInDown`}
                href="#about-me"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                className={`${styles["underline-transition"]} wow fadeInDown`}
                href="#projects"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                className={`${styles["underline-transition"]} wow fadeInDown`}
                href="#contact-me"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                Contact Me
              </Nav.Link>
              <Nav.Link
                className={`${styles["underline-transition"]} wow fadeInDown`}
                target="_blank"
                href={process.env.PUBLIC_URL + "/resume/resume.pdf"}
                onClick={() => setMenuOpen(false)}
              >
                View Résumé
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MyNav;
