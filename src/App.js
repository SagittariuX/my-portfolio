import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

import MyNav from "./component/MyNav";
import ContactMe from "./component/ContactMe";
import AboutMe from "./component/AboutMe";
import Projects from "./component/Projects";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MyNav setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />
      <Container
        fluid
        id="content-wrapper"
        className={`${isMenuOpen ? "blur" : ""}`}
      >
        <AboutMe />
        <Projects />
        <ContactMe />
      </Container>
    </>
  );
}

export default App;
