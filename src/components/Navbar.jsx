import React, { useState } from "react";
import { Link } from "react-router-dom";
import './App.css';
import react from "../assets/react.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={react} alt="logo" />
        <span id="span">I-Made</span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
        <li><Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link></li>
        <li><Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
        <li><Link to="/certificates" onClick={() => setIsOpen(false)}>Certificates</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>

      {/* Hamburger Button */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
}
