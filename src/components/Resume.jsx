import React, { useEffect, useRef } from "react";
import "./Resume.css";

export default function Resume() {
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
    <div className="resume">
      <h1 className="name">CHIKURTHI BHAGEERATH</h1>
      <p className="location">Sadasivpet, Telangana</p>
      <p className="contact">
        📞 +91 6300523662 | 📧 ch.bhageerath05@gmail.com |{" "}
        <a href="https://www.linkedin.com/in/bhageerath-chikurthi-04b514350">LinkedIn</a>
      </p>

      <section>
        <h2>Objective</h2>
        <p>
          A dedicated IoT engineering graduate with a strong academic record
          and experience in cross team collaboration. Passionate about
          designing, implementing, and securing software, with a commitment to
          delivering high quality results and service.
        </p>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li>
            <b>B.Tech - IoT</b> | MRUH | 2024-2028 | CGPA: 8.1
          </li>
          <li>
            <b>Intermediate</b> | Ujwala junior College | 2022-2024 | CGPA: 9.4
          </li>
          <li>
            <b>SSC</b> | MPHS School | 2021-2022 | CGPA: 9.8
          </li>
        </ul>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <ul>
          <li>
            <b>Languages:</b> C, C++, MySQL, JavaScript
          </li>
          <li>
            <b>Frameworks:</b> HTML, CSS, Bootstrap
          </li>
          <li>
            <b>Tools:</b> Git, VS Code, Canva
          </li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <b>Quiz app with multiple choices</b> <br />
          </li>
          <li>
            <b>Role:</b> Frontend Developer | Jan 2024 – July 2024 <br />
          </li>
          <li>
            Developed a project that allows users to explore destinations virtually
            before booking travel. <br />
            </li>
            <li><b>Tech Stack:</b> HTML, CSS, Bootstrap
          </li>
        </ul>
      </section>

      <section>
        <h2>Research Projects</h2>
        <p className="project">
          <b>AI-Powered Chatbot for College Enquiries</b> <br /></p>
          <p><i>Duration:</i> June 2024 – Ongoing <br /></p>
          <ul>
            <li>Developed a chatbot to assist students with course details, fee
              structure, and admission queries.</li>
              <li>Used Natural Language Processing techniques to understand user intent.</li>
              <li><b>Tech Stack:</b> Python, Flask, Dialogflow
            </li>
          </ul>

        <p className="project">
          <b>Crop Disease Prediction using Machine Learning</b> <br /></p>
          <p><i>Duration:</i> April 2024 – July 2024 </p>
         <ul><li> Built a model to predict common crop diseases from leaf images.</li>
         <li> Improved accuracy by using CNN-based deep learning models.</li>
          <li><b>Tech Stack:</b> Python, TensorFlow, OpenCV
        </li></ul>
      </section>

      <section>
        <h2>Certificates</h2>
        <ul>
          <li><b>Introduction to Artificial Intelligence</b> – NPTEL, Jan 2024</li>
          <li><b>Responsive Web Design</b> – freeCodeCamp, March 2024</li>
          <li><b>Version Control with Git</b> – Coursera, April 2024</li>
          <li><b>Canva Design Essentials</b> – Canva Certification, Feb 2024</li>
        </ul>
      </section>

      <section>
        <h2>Extracurricular Activities</h2>
        <ul>
          <li>🖼️ <b>Artist:</b> Drawing, Painting</li>
          <li>
            🎯 <b>Placement Cell Student Coordinator:</b> Managed placement
            drives, handled communication.
          </li>
          <li>🎧 <b>Listening Songs:</b> Telugu, English and Hindi</li>
          <li>📚 <b>Reading Books:</b> Stories and Studies</li>
          
        </ul>
      </section>
    </div>
    </body>
  );
}
