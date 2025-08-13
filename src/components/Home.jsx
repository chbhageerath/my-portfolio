import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import myPhoto from "../assets/react.svg";

export default function Home() {
  const homeRef = useRef(null);
  const navigate = useNavigate();

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
    <section className="home" ref={homeRef}>
      <div className="hero-text">
        <h1>
          Hello, I'm <span className="highlight">Ch Bhageerath</span>
        </h1><br/>
        <h2>Full Stack Developer | React Enthusiast</h2><br/>
        <hr /><br/>
        <p>
          I build responsive and interactive web applications using modern
          frontend technologies.
        </p>
        <button
      className="resume-btn"
      onClick={() => navigate("/resume")}
    >
      View Resume
    </button>
      </div>
      <div className="image">
        <img src={myPhoto} alt="Profile" />
      </div>
    </section>
  );
}
