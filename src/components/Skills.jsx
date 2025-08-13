import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", level: 89 },
  { name: "JavaScript", level: 90 },
  { name: "Java", level: 40 },
  { name: "CSS", level: 95 },
  { name: "C++", level: 90 },
  { name: "Canva", level: 55 }
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-desc">
        Below are the technologies and tools I'm proficient in, along with an
        estimate of my confidence in each.
      </p>

      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <span className="skill-name">{skill.name}</span>
          <span className="skill-percent">{skill.level}%</span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  );
}
