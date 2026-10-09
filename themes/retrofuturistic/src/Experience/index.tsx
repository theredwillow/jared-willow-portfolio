import React from "react";
import resume from "@portfolio/resume/resume.json";
import { formatDateRange } from "@portfolio/resume";
import RichText from "../RichText";
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
      {resume.work.map(({ name, startDate, endDate, summary }) => (
        <div key={name} className="card">
          <div className="company">{name}</div>
          <div className="time">{formatDateRange(startDate, endDate)}</div>
          <div className="description">
            <RichText text={summary} />
          </div>
        </div>
      ))}
      <div className="card more">
        <button onClick={showMore}>More...</button>
      </div>
    </div>
  );
};

export default Experience;
