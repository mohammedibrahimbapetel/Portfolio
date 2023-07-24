import React from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
const Footer = () => {
  return (
    <div className="footer padding">
      <div className="designed">
        <div className="blue-line"></div>Designed in Figma and coded in VS Code
        by yours truly. Built with React.js
      </div>
      <div className="icons-container">
        <div className="icons">
          <a href="#">
            {" "}
            <BsLinkedin />
          </a>
        </div>
        <div className="icons">
          <a href="#">
            <BsGithub />
          </a>
        </div>
        <div className="icons">
          <a href="#">
            <BsWhatsapp />
          </a>
        </div>
        <div className="icons">
          <a href="#">
            {" "}
            <HiOutlineMail />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
