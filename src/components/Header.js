import React from "react";
import Particles from "react-particles-js";
import "../css/header.css";
import Navbar from "./Navbar";
function Header() {
  return (
    <div className="header">
      <div className="header-background">
        <Particles
          params={{
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
      </div>

      <div className="header_content">
        <div className="text-left" data-aos="fade-right">
          <h1>
            Hello<span>!</span>{" "}
          </h1>
          <br />
          <h1 className="name">I'M FADE AHMAD</h1>
          <p>
            As a freelancer web developer and designer, I understand the perfect
            user interface should look more flexible and more attractive. I
            uncover problems and solve them. In short, I create bolder online
            experiences.
          </p>
        </div>
        <div className="image-right" data-aos="fade-left">
          <img src="../images/fade.jfif" alt="header_image" />
        </div>
      </div>
    </div>
  );
}

export default Header;
