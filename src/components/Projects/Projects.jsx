import React from "react";
import ecommercePhoto from "../../assets/Ecommerce.webp";
import musicApp from "../../assets/MusicApp.jpg";
import landingPage from "../../assets/LandingPages.webp";
import todolist from "../../assets/TodoList.png";
import wheatherApp from "../../assets/weatherApp.jpg";
import mineSweep from "../../assets/Mine.png";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "A fully functional e-commerce platform with product listings, cart, and payment integration.",
      techStack: [
        "React.js",
        "Node.js",
        "MongoDB",
        "useContext",
        "Tailwind CSS",
      ],
      link: "https://github.com/anurag211824/Ecommerce-App",
      image: ecommercePhoto,
    },
    {
      title: "Music App",
      description:
        "A React-based music streaming app with playlist management and audio player features.",
      techStack: ["React.js", "useContext", "Spotify API", "Tailwind CSS"],
      link: "https://spotify-dusky-gamma.vercel.app/",
      image: musicApp,
    },
    {
      title: "Landing Pages",
      description:
        "Responsive and optimized landing pages built using React for various business needs.",
      techStack: ["React.js", "Tailwind CSS", "Gsap"],
      link: "https://nike-react-js-ten.vercel.app/",
      image: landingPage,
    },
    {
      title: "To-Do List",
      description:
        "A simple and interactive to-do list app with local storage support.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://your-todo-app.com",
      image: todolist,
    },
    {
      title: "Weather App",
      description:
        "A weather forecasting app that fetches real-time weather data using an API.",
      techStack: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
      link: "https://anurag211824.github.io/Weather-App-JavaScript/",
      image: wheatherApp,
    },
    {
      title: "Minesweeper Game",
      description:
        "A classic Minesweeper game with customizable difficulty levels.",
      techStack: ["HTML", "CSS", "JavaScript"],
      link: "https://anurag211824.github.io/MineSweeper/",
      image: mineSweep,
    },
  ];

  return (
    <section id="projects" className="projects container">
      <h2 className="section-header">My Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img className="project-img" src={project.image} alt="" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <a className="project-link" href={project.link} target="_blank">
             <p className="project">View Project</p>
            </a>
            <ul>
              {project.techStack.map((tech, index) => (
                <li className="tech" key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
