import React from "react";
import { tere, islandwonders } from "../assets/images";

const Projects = () => {
  return (
    <>
      <div className="projects padding">
        <div className="project-details item">
          <h2 className="project-title">Tere</h2>
          <p>
            Build and eco-friendly Social Landing page of an App, where an
            individual can download the app for free and take part in a unique
            and rewarding experience, connect with like-minded individuals and
            make friends.
          </p>
        </div>
        <div className="project-image item">
          <a href="https://otere.netlify.app/" target="blank">
            <img src={tere} alt="" />
          </a>
        </div>
      </div>
      <div className="projects padding">
        <div className="project-image item">
          <a href="https://islandwonders.netlify.app/" target="_blank">
            <img src={islandwonders} alt="" />
          </a>
        </div>
        <div className="project-details item">
          <h2 className="project-title">Island Wonders</h2>
          <p>
            Build and eco-friendly Social Landing page of an App, where an
            individual can download the app for free and take part in a unique
            and rewarding experience, connect with like-minded individuals and
            make friends.
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
