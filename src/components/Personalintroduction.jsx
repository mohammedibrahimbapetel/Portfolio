import React from "react";
import { skills } from "../assets/images";

const Personalintroduction = () => {
  return (
    <div className="personalintroduction wrap-reverse gap flex">
      <div className="item skills-section">
        <h2 className="title">My Skills</h2>
        <div className="skills  align-center">
          <img src={skills} alt="" />
        </div>
      </div>
      <div className="item aboutme-section">
        <h2 className="title">About Me</h2>
        <p>
          I'm Mohammed, a front-end developer specializing in web experiences.
          With HTML, CSS, JavaScript, React.js and git, I craft clean and
          user-friendly interfaces. I prioritize best practices like responsive
          design, accessibility, and performance optimization. I'm good at
          solving complex challenges and thrive in collaborative, agile
          environments. Continuously learning and staying up-to-date, I ensure
          pixel-perfect designs, cross-browser compatibility, and seamless
          teamwork.
        </p>
      </div>
    </div>
  );
};

export default Personalintroduction;
