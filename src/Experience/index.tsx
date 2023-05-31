import React from "react";
import data from "./data";
// import "./style.scss";

const Experience = () => {
  const showMore = () =>
    [...document.getElementsByClassName("card")].forEach((card) =>
      card.classList.toggle("more")
    );

  return (
    <div id="experience" className="section">
      <div className="title">Experience</div>
      <div className="median">
        <div className="line"></div>
        <div className="line"></div>
        <div className="selected line"></div>
      </div>
      {data.map(({ company, time, description }) => (
        <div className="card">
          <div className="company">{company}</div>
          <div className="time">{time}</div>
          <div className="description">{description}</div>
        </div>
      ))}
      <div className="card more">
        <button onClick={showMore}>More...</button>
      </div>
    </div>
  );
};

export default Experience;
