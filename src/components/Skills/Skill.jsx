import React from "react";
import "./Skill.css";

const skillsData = [
  { name: "HTML", icon: "fab fa-html5", color: "#E34F26" },
  { name: "CSS", icon: "fab fa-css3-alt", color: "#1572B6" },
  { name: "JavaScript", icon: "fab fa-js-square", color: "#F7DF1E" },
  { name: "React", icon: "fab fa-react", color: "#61DAFB" },
  { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
  { name: "MongoDB", icon: "fas fa-database", color: "#47A248" },
  { name: "GitHub", icon: "fab fa-github", color: "#fff" },
  { name: "C++", icon: "fas fa-code", color: "#00599C" },
];

const Skill = () => {
  return (
    <section id="skills" className="skills container">
      <h2 className="section-header">My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card" style={{ borderColor: skill.color }}>
            <i className={skill.icon} style={{ color: skill.color }}></i>
            <p className="skillName">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
