import React from "react";
import "../index.css";
import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="">
          <img src={logo} alt="Logo" /> 
        </a>
      </div>
      <div className="btn">
        <a href="mailto:muaminab@gmail.com" target="-blank">
          Schedule a call
        </a>
      </div>
    </div>
  );
};

export default Navbar;
