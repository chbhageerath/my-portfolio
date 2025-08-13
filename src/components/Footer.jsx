import React from 'react'
import "./Footer.css"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-icons">
        <a href="https://github.com/" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/bhageerath-chikurthi-04b514350" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/" target="_blank" >
          <FaTwitter />
        </a>
        <a href="https://instagram.com/_bhageerath._.0505/" target="_blank">
          <FaInstagram />
        </a>
      </div>


      <p className="footer-text">
        © 2025 All Rights Reserved | Made with ❤️ by <strong>I-Made</strong>
      </p>
    </footer>
  );
};


export default Footer;
