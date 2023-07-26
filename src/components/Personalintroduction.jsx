import React from "react";

const Personalintroduction = () => {
  return (
    <div className="personalintroduction gap flex">
      <div className="item">
        <h2 className="title">About me</h2>
        <div className="aboutme-section">
          <p>
            "I'm Mohammed, a front-end developer specializing in web
            experiences. With HTML, CSS, JavaScript, and React, I craft clean
            and user-friendly interfaces. I prioritize best practices like
            responsive design, accessibility, and performance optimization. I'm
            good at solving complex challenges and thrive in collaborative,
            agile environments. Continuously learning and staying up-to-date, I
            ensure pixel-perfect designs, cross-browser compatibility, and
            seamless teamwork."
          </p>
        </div>
      </div>
      <div className="item">
        <h2 className="title">My Skills</h2>
        <div className="skills-section">
          <ul>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
          </ul>
          <ul>
            <li>Git</li>
            <li>Responsive Design</li>
            <li>Problem Solving</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Personalintroduction;
