import React from "react";
import "../index.css";
import { PiHandWavingFill } from "react-icons/pi";
import { profilepic } from "../assets/images";
const Home = () => {
  return (
    <div className="home padding">
      <div className="pic-section">
        <img src={profilepic} alt="" />
      </div>
      <div className="name-section">
        <h3>
          <span className="hand-wave">
            <PiHandWavingFill />
          </span>
          Hello there, Nice to meet you. I am
        </h3>
        <h1>Mohammed</h1>
        <h1>Front-End</h1>
        <h1 className="web-developer">Web Developer</h1>
      </div>
    </div>
  );
};

export default Home;
