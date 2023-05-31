import React from "react";

const AboutMe = () => (
  <div id="about-me" className="section">
    <div className="title">About Me</div>
    <div className="median">
      <div className="selected line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
    <div className="bio card">
      Jared Weide
      <br />
      <span className="profession"></span>
      <div id="social-media">
        <a
          href="https://www.linkedin.com/in/jared-weide-3670164b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/social-media/linkedin.png" alt="LinkedIn" />
        </a>
        <a
          href="https://medium.com/@theredwillows"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/social-media/medium.png" alt="Medium" />
        </a>
        <a
          href="https://github.com/theredwillow"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/social-media/github.png" alt="GitHub" />
        </a>
      </div>
    </div>
    <div className="card">
      <div className="title">Located</div>
      Las Vegas
      {/* <br /><br />
  <div className="title">From</div>
  Dallas / Fort Worth */}
    </div>
    <div className="card">
      <div className="title">Skills</div>
      JavaScript (incl. ES6/TypeScript), React, Angular, HTML, (S)CSS, or any
      programming language, given the time to practice
    </div>
  </div>
);

export default AboutMe;
