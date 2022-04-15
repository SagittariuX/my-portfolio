import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import WOW from "wowjs";
import { Routes, Route } from "react-router-dom";

import Intro from "./component/Intro";
import MyNav from "./component/MyNav";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [finishIntro, setFinishIntro] = useState(false);

  useEffect(() => {
    const introTime = setTimeout(() => {
      setFinishIntro(true);
    }, 5000);

    const wow = new WOW.WOW({ live: false });
    wow.init();

    return () => {
      clearTimeout(introTime);
    };
  }, [finishIntro]);

  if (finishIntro)
    return (
      <>
        <MyNav setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />
        
      </>
    );

  return <Intro />;
}

export default App;
