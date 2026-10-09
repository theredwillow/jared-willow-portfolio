import React from "react";
import resume from "@portfolio/resume/resume.json";
import { Project } from "@portfolio/resume";

const buttonsFor = ({ url, learnMoreUrl }: Project) =>
  [
    learnMoreUrl && { text: "Learn More", link: learnMoreUrl },
    url && { text: "Visit Site", link: url },
  ].filter(Boolean) as { text: string; link: string }[];

const Projects = () => {
  return (
    <div id="projects" className="section">
      <div className="title">Projects</div>
      <div className="median">
        <div className="line"></div>
        <div className="selected line"></div>
        <div className="line"></div>
      </div>
      {resume.projects.map((project, index) => (
        <div key={`project-${index}`} className="project card">
          <div className="title">{project.name}</div>
          <div className="description">{project.description}</div>
          <div className="buttons">
            {buttonsFor(project).map((button, index) => {
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
