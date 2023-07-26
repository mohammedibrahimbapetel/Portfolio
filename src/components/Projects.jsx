import React from "react";
import { tere, islandwonders } from "../assets/images";

const Projects = () => {
  return (
    <div className="padding">
      <div className="align-center">
        <h2 className="title">What I've been working on</h2>
        <h3>Take a look at some of the websites I've dedicated my time to</h3>
      </div>
      <div className="project ">
        <div className="project-details">
          <h2 className="title">Island Wonders</h2>
          <p>
            Build a travel website platform designed to help travelers,
            research, their dream vacations. We offer a comprehensive database
            of hotels, restaurants and attractions from maldives, allowing users
            to seek the perfect hotel for a relaxing getaway, the best
            restaurants for a culinary adventure, or must-visit landmarks
          </p>
        </div>
        <div className="project-image">
          <a href="https://islandwonders.netlify.app/" target="blank">
            <img src={islandwonders} alt="Island Wonders project" />
          </a>
        </div>
      </div>
      <div className="project ">
        <div className="project-details">
          <h2 className="title">Tere</h2>
          <p>
            Build and eco-friendly Social Landing page of an App, where an
            individual can download the app for free and take part in a unique
            and rewarding experience, connect with like-minded individuals and
            make friends.
          </p>
        </div>
        <div className="project-image ">
          <a href="https://otere.netlify.app/" target="_blank">
            <img src={tere} alt="Tere project" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
