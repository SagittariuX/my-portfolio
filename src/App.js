import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import MyNav from "./component/MyNav";
import ContactForm from "./component/ContactForm";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <MyNav setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />
      <Container
        id="content-wrapper"
        style={{ height: "3000px" }}
        className={`${isMenuOpen ? "blur" : ""}`}
      >
        <div id="about-me">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <ContactForm />
      </Container>
    </>
  );
}

export default App;
