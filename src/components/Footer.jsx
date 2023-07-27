import React from "react";

import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
const Footer = () => {
  return (
    <div className="footer wrap-reverse flex ">
      <div className="icons-container">
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/mohammedibrahimbapetel/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
        </div>
        <div className="icons">
          <a href="https://github.com/mohammedibrahimbapetel" target="_blank">
            <BsGithub />
          </a>
        </div>
        <div className="icons">
          <a href="https://wa.me/8159688275" target="_blank">
            <BsWhatsapp />
          </a>
        </div>
        <div className="icons">
          <a href="mailto:muaminab@gmail.com" target="_blank">
            <HiOutlineMail />
          </a>
        </div>
        <div className="btn">
          <a
            href="/src/assets/bapetelresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
      <div className="designed-section">
        <div className="blue-line"></div>Designed in Figma and coded in VS Code
        by yours truly. Built with React.js
      </div>
    </div>
  );
};

export default Footer;
