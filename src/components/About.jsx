import React from "react";
import "./About.css";
import react from "../assets/react.svg";
import {
  FaBirthdayCake,
  FaGlobe,
  FaPhone,
  FaCity,
  FaGraduationCap,
  FaEnvelope,
  FaCheck
} from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section">
      <h2>About</h2>
      <p>
        Hey there! I’m a full stack developer with a passion for creating clean, user-friendly interfaces.
        I’ve got hands-on experience with HTML, CSS, JavaScript, Bootstrap and ReactJS. Recently, I worked
        on real-time projects based on dental lab automation, which helped me sharpen my skills in developing
        practical solutions for real-world challenges.
      </p>

      <div className="about-content">
        <img src={react} alt="react" />

        {/* Developer Details */}
        <div className="about-text">
          <h3>Full Stack Developer</h3>
          <p className="about-bio">
            Hi, I’m Chikurthi Bhageerath, a passionate Full stack Developer currently pursuing my B.Tech
            in Computer Science and Engineering, set to graduate in 2028. With a strong foundation in HTML, CSS,
            JavaScript, Bootstrap, and ReactJS, I thrive on creating, engaging and user-friendly interfaces.
          </p>

          <div className="about-details">
            <p><FaBirthdayCake /> Date-Of-Birth: 05 May 2005</p>
            <p><FaGlobe /> Age: 20</p>
            <p><FaGlobe /> Website: <a href="#">Check Here</a></p>
            <p><FaGraduationCap /> Degree: B.Tech Computer Science</p>
            <p><FaPhone /> Phone: +91 6300523662</p>
            <p><FaEnvelope /> Email: ch.bhageerath05@gmail.com</p>
            <p><FaCity /> City: Hyderabad</p>
            <p><FaCheck /> Ready to Work: Yes</p>
          </div>

          <p className="about-footer">
            I’ve worked on real-time projects , which honed my ability to develop
            practical solutions and enhance user experience. I’m always eager to learn and explore new technologies
            to improve my skills further.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
