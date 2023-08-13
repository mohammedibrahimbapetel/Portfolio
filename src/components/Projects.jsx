import React from "react";
import { tere, islandwonders } from "../assets/images";

const Projects = () => {
  return (
    <div className="padding">
      <div className="align-center">
        <h2 className="title">What I've been working on</h2>
        <p>Take a look at some of the websites I've dedicated my time to</p>
      </div>
      <div className="project ">
        <div className="project-details">
          <h2 className="title">
            <a href="https://islandwonders.netlify.app/">Island Wonders</a>
          </h2>
          <h2 className="sub-header">Built with React</h2>
          <p>
            Build a travel website platform designed to help travelers,
            research, their dream vacations. We offer a comprehensive database
            of hotels, restaurants and attractions from maldives, allowing users
            to seek the perfect hotel for a relaxing getaway, the best
            restaurants for a culinary adventure, or must-visit landmarks
          </p>
        </div>
        <div className="project-image">
          <a href="https://islandwonders.vercel.app/" target="blank">
            <img src={islandwonders} alt="Island Wonders project" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
