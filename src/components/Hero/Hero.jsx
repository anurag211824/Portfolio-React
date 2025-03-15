import React from "react";
import "./Hero.css";
import profile_image from "../../assets/anu.jpeg";

const Hero = () => {
  return (
    <div id="home" className="hero container">
      <img className="hero-img" src={profile_image} alt="" />
      <h1>
        <span>I am Anurag Kumar</span> <br /> A passionate Web developer
      </h1>

      <p>
        Full-stack developer skilled in React, Node.js & MongoDB, passionate
        about building scalable apps.
      </p>

      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My-Resume</div>
      </div>
    </div>
  );
};

export default Hero;
