import React from "react";
import resume from "../resume/resume.json";

const { basics } = resume;

const AboutMe = () => (
  <div id="about-me" className="section">
    <div className="title">About Me</div>
    <div className="median">
      <div className="selected line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
    <div className="bio card">
      {basics.name}
      <br />
      <span className="profession"></span>
      <div id="social-media">
        {basics.profiles.map(({ network, url }) => (
          <a key={network} href={url} target="_blank" rel="noopener noreferrer">
            <img
              src={`/images/social-media/${network.toLowerCase()}.png`}
              alt={network}
            />
          </a>
        ))}
      </div>
    </div>
    <div className="card">
      <div className="title">Located</div>
      {basics.location.city}
    </div>
    <div className="card">
      <div className="title">Skills</div>
      JavaScript (incl. ES6/TypeScript), React, Angular, HTML, (S)CSS, or any
      programming language, given the time to practice
    </div>
  </div>
);

export default AboutMe;
