import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      document.querySelectorAll(".nav-links li a").forEach(link => {
        link.classList.remove("active-link"); 
      });
    }
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="logo"></div>
      
   
      <div className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
      </div>

    
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="hero" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
            Home Page
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
            About Me!
          </Link>
        </li>
        <li>
        <Link to="certificates" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
            Certificates
        </Link>

        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
            Contact Me!
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
