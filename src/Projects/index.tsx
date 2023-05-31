import React from "react";
import data from "./data";

const Projects = () => {
  return (
    <div id="projects" className="section">
      <div className="title">Projects</div>
      <div className="median">
        <div className="line"></div>
        <div className="selected line"></div>
        <div className="line"></div>
      </div>
      {data.map((project, index) => (
        <div key={`project-${index}`} className="project card">
          <div className="title">{project.title}</div>
          <div className="description">{project.description}</div>
          <div className="buttons">
            {project.buttons.map((button, index) => {
              return (
                <a
                  key={index}
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>{button.text}</button>
                </a>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
