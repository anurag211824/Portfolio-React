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
        <a  className="hero-resume" href="https://drive.google.com/file/d/1t1jU2IgId07-4sQ7lTK0iol6mhazVpVt/view?usp=drive_link" target="_blank">My_Resume</a>
      </div>
    </div>
  );
};

export default Hero;
