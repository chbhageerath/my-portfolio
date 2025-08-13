import React, { useState } from 'react';
import "./Portfolio.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.jpeg";


const projects = [
  { id: 1, title: "CSE", image: project1, category: "CSE" },
  { id: 2, title: "Robotics using AI", image: project2, category: "AI" },
  
];

const categories = ["All", "AI", "CSE"];

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="portfolio-page">
      <h2 className="portfolio-heading">My Portfolio</h2>
      <p className="portfolio-subheading">
        Explore some of the projects I've worked on. Each one reflects creativity,
        problem-solving, and practical application of tech skills.
      </p>

      <div className="portfolio-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h4>{project.title}</h4>
              <span>{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;