import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

import MyNav from "./component/MyNav";
import ContactForm from "./component/ContactForm";
import AboutMe from "./component/AboutMe";
import Projects from "./component/Projects";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MyNav setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />
      <Container id="content-wrapper" className={`${isMenuOpen ? "blur" : ""}`}>
        <AboutMe />
        <Projects />
        <ContactForm />
      </Container>
    </>
  );
}

export default App;