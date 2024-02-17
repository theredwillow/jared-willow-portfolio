import React from "react";
import "./App.scss";

import Header from "./Header";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
