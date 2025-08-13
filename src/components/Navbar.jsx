import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import react from "../assets/react.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={react} alt="logo" />
        <span id="span">I-Made</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/certificates">Certificates</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
