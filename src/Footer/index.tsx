import React from "react";
import Mountains from "./Mountains";

const Footer = () => {
  return (
    <>
      <Mountains />
      <Mountains />
      <div id="ground"></div>

      {/* <img className="other lambo" src="/images/lambo.png" alt="Other Lambo" /> */}

      <div id="cars">
        <a href="#about-me">
          <img src="/images/lambo.png" alt="First Lambo" />
        </a>
        <a href="#projects">
          <img src="/images/lambo.png" alt="Second Lambo" />
        </a>
        <a href="#experience">
          <img src="/images/lambo.png" alt="Third Lambo" />
        </a>
      </div>
    </>
  );
};

export default Footer;
