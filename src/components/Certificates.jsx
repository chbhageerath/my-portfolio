import React, { useEffect, useRef } from "react";
import "./Certificates.css";
import Dsa from "../assets/Dsa.png";
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
    </body>
  );
}

export default Certificates;
