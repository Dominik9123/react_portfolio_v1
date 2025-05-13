import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Skills.css";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const sliderSettings = {
  dots: true,          
  infinite: true,      
  speed: 500,         
  slidesToShow: 3,    
  slidesToScroll: 1,  
  autoplay: true,      
  autoplaySpeed: 2000, 
  pauseOnHover: true, 
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h1>Technologies I use</h1>
      <Slider {...sliderSettings}> 
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Skills;
