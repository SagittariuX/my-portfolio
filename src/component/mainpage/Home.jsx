import React from "react";
import { Container } from "react-bootstrap";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

const Home = ({isMenuOpen}) => {
  return (
    <Container
      fluid
      id="content-wrapper"
      className={`${isMenuOpen ? "blur" : ""}`}
    >
      <AboutMe />
      <Projects />
      <ContactMe />
    </Container>
  );
};

export default Home;
