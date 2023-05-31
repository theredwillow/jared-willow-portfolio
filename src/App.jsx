import React from "react";
import "./App.scss";

import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      {/* <img id="scroll" className="info" src="/images/scroll.svg" alt="Scroll to see more" /> */}

      <img id="name" src="/images/name.svg" alt="Jared Weide" />

      <img id="sun" src="/images/sun.svg" alt="Rising Sun" />

      {/* <img id="click-cars" className="info" src="/images/click.svg" alt="Click a car to quickly jump to a section" /> */}

      <AboutMe />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
