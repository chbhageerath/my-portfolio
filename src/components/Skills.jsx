import React, { useEffect, useRef } from "react";
import "./Skills.css";

const skills = [
  { name: "HTML", level: 95 },
  { name: "JavaScript", level: 60 },
  { name: "Java", level: 70 },
  { name: "CSS", level: 90 },
  { name: "C++", level: 90 },
  { name: "Canva", level: 45 }
];

export default function Skills() {
    const homeRef = useRef(null);
    useEffect(() => {
      if (window.VANTA) {
        const effect = window.VANTA.NET({
          el: homeRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
        });
        return () => {
          if (effect.destroy) effect.destroy();
        };
      }
    }, []);
  return (
    <body ref={homeRef}>
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
    </body>
  );
}
