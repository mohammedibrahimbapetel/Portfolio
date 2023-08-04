import React from "react";
import { hm, css, js, tailwind, react, git } from "../assets/images";

const Personalintroduction = () => {
  return (
    <div className="padding wrap-reverse gap flex" style={{ gap: "4rem" }}>
      <div className="item">
        <h2 className="title ">My Skills</h2>
        <div className="item flex align-center  skills ">
          <div className="skill">
            <img src={hm} alt="" />
            <h3>HTML 5</h3>
          </div>
          <div className="skill">
            <img src={css} alt="" />
            <h3>CSS 3</h3>
          </div>
          <div className="skill">
            <img src={js} alt="" />
            <h3>JavaScript</h3>
          </div>
          <div className="skill">
            <img src={tailwind} alt="" />
            <h3>TailwindCSS</h3>
          </div>
          <div className="skill">
            <img src={react} alt="" />
            <h3>React.js</h3>
          </div>
          <div className="skill">
            <img src={git} alt="" />
            <h3>GIT</h3>
          </div>
        </div>
      </div>

      <div className="item ">
        <h2 className="title ">About Me</h2>
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
