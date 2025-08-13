import React from "react";
import "./Certificates.css";
import Dsa from "../assets/dsa.png";
import python from "../assets/python.png";
import css from "../assets/css.png";
import deloitte from "../assets/deloitte.png";

const certificateData = [
  { id: 1, title: "Hp life", image: Dsa },
  { id: 2, title: "Hacker Rank Python", image: python },
  { id: 3, title: "Hacker Rank CSS", image: css },
  { id: 4, title: "AUS deloitte", image: deloitte },
];

function Certificates() {
  return (
    <div className="certificates-container">
      <h2 className="certificates-title">Certificates</h2>
      <p className="certificates-subtext">
        Here are some of the certificates I've earned through workshops, online courses, and hands-on trainings.
      </p>
      <div className="certificates-grid">
        {certificateData.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <img src={cert.image} alt={cert.title} className="certificate-image" />
            <h4>{cert.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
