import React from "react";
import "../css/about.css";
function About() {
  return (
    <div className="about" id="about">
      <div className="header-about">
        <h1>About Me</h1>
        <h2>who I am</h2>
      </div>

      <div className="about-countent">
        <img src="../images/about.jfif" alt="" data-aos="fade-left" />
        <div data-aos="fade-right">
          <p>
            I'm Fade, and I'm a{" "}
            <span> full-stack web developer and UI/UX designer</span>, I have a
            passion for building and developing websites.
          </p>{" "}
          <button className="btn-cv">View CV</button>
        </div>
      </div>
    </div>
  );
}

export default About;
