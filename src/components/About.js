import "./About.css";

const About = () => {
    return (
      <section className="about">
        <div className="about-content">
          <h1>--- About Me ---</h1>
          
          <div className="about-section">
            <h2>Education</h2>
            <p>I am currently studying at WSEI Kraków in my first year of Applied Computer Science,"Where I develop my skills in programming, system architecture, and web application design.</p>
            <p>Before starting my university studies, I completed a technical secondary school specializing in IT.</p>
          </div>
  
          <div className="about-section">
            <h2>Passion & Interests</h2>
            <p>Outside of my studies, I spend time developing my skills in JavaScript, React, and Node.js.. I love creating modern web applications and exploring tools that enhance the development process.</p>
          </div>
  
          <div className="about-section">
            <h2>Design Philosophy</h2>
            <p className="about-subtitle">In my projects, I prioritize clean, intuitive design that ensures user convenience. I adhere to UX/UI principles, focus on responsiveness, and strive to optimize code for performance. 🚀</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  