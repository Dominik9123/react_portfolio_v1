import React from "react";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; // Ikony
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h1>Establishing Contact</h1>
      <p>Find me on GitHub and LinkedIn</p>
      <div className="contact-icons">
        <a href="https://github.com/Dominik9123" target="_blank" rel="noopener noreferrer">
        <FaGithub className="contact-icon-git" />
        </a>
        <a href="https://www.linkedin.com/in/dominik-skutecki-1b07b12a4/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="contact-icon-lin" />
        </a>
      </div>

      <p>Reach out to me via phone or email.</p>

      <div className="contact-info">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>+48 503 302 615</span>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:skuteckidominik.contact@gmail.com">skuteckidominik.contact@gmail.com</a>
        </div>
      </div> {/* Zamknięcie contact-info */}
    </section>
  );
};

export default Contact;
