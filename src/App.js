import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

import Intro from "./component/Intro";
import MyNav from "./component/MyNav";
import ContactMe from "./component/ContactMe";
import AboutMe from "./component/AboutMe";
import Projects from "./component/Projects";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [finishIntro, setFinishIntro] = useState(false);

  useEffect(() => {
    const introTime = setTimeout(() => {
      setFinishIntro(true);
    }, 5000);
    return () => {
      clearTimeout(introTime);
    };
  }, []);

  if (finishIntro)
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

  return <Intro />;
}

export default App;
