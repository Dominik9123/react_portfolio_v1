import React from "react";
import { Element } from "react-scroll";  // Smooth Scroll
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import './App.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <About />
        <Element name="certificates">
          <Certificates />
        </Element>
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
};

export default App;
