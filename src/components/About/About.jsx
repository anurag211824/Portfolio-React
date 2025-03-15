import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="container">
      <h1 className="section-header">About Me</h1>
      <div className="about-me">
        <div className="about">
          <p>
            Hello! I'm Anurag Kumar, a passionate full-stack developer with a
            keen interest in building dynamic and user-friendly web
            applications. I enjoy transforming ideas into reality through clean
            and efficient code.
          </p>
        </div>
        <div className="education">
          <h2>Education</h2>
          <p>
            I am currently pursuing a Bachelor's degree in Computer Science,
            where I have built a strong foundation in programming, data
            structures, and software development. This journey has enhanced my
            problem-solving skills and deepened my understanding of technology.
          </p>
        </div>
      </div>
      <div className="my-socials">
        <ul>
          <li>
            <a href="https://github.com/anurag211824/" target="_blank">
              <i className="fab fa-github"></i> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/anurag-kumar-31114b277/"
              target="_blank"
            >
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/u/anurag211824/" target="_blank">
              <i className="fas fa-code"></i> LeetCode
            </a>
          </li>
        </ul>
      </div>
      <div className="message">
        <p className="">Explore my work, connect on LinkedIn, or check out my LeetCode journey.</p>
      </div>
    </div>
  );
};

export default About;
