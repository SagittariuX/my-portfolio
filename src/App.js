import React, { useState, useEffect } from "react";
import "./App.css";
import WOW from "wowjs";
import MyNav from "./component/MyNav";
import Intro from "./component/Intro";
import Home from "./component/mainpage/Home";

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
        <Home isMenuOpen={isMenuOpen}/>
      </>
    );

  return <Intro />;
}

export default App;
