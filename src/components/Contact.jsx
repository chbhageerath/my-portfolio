import React, { useState,useEffect, useRef  } from "react";
import "./Contact.css";




function Contact() {
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation or submit logic here
    setSubmitted(true);
  };

  return (
    <section ref={homeRef}>
    <div className="contact-page">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-subtext">
        Have a question or want to work together? Send me a message or visit us!
      </p>

      <div className="contact-content">
        <div className="contact-form-wrapper">
          {submitted ? (
            <p className="thank-you-message">
              Thank you for contacting me! I will get back to you soon.
            </p>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
              ></textarea>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>

        <div className="map-container">
          <iframe
            title="Mallareddy University Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51891.257465774426!2d77.87195877533227!3d17.61611605642285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbfe478e59faa9%3A0x81529cfaa787745c!2sSadashivpet%2C%20Telangana%20502291!5e1!3m2!1sen!2sin!4v1755086660648!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      
    </div>
    </section>
  );
}

export default Contact;
