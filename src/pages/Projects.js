import React, { useState } from "react";
import "../App.css"; // Make sure to create and style this file

const projectsData = [
  {
    id: 1,
    title: "Weather App",
    description: "A weather application built with React and OpenWeather API.",
    techStack: ["React", "API", "CSS"],
    link: "https://github.com/yourgithub/weather-app",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills and projects.",
    techStack: ["React", "CSS"],
    link: "https://michtecs.com",
  },
  {
    id: 3,
    title: "Task Manager App",
    description: "A simple to-do list app built with Python and Tkinter.",
    techStack: ["Python", "Tkinter"],
    link: "https://github.com/yourgithub/task-manager",
  },
];

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filters = ["All", "React", "Python", "CSS", "API"];

  const filteredProjects =
    selectedFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.techStack.includes(selectedFilter));

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={selectedFilter === filter ? "active" : ""}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-button">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
