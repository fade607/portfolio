import React from "react";
import "../css/sidbar.css";
import { Link } from "react-router-dom";

function sidbar() {
  return (
    <div className="sidbar">
      {" "}
      <ul>
        <Link smooth to="#home">
          Home
        </Link>
        <Link smooth to="#about">
          About
        </Link>

        <Link smooth to="#skills">
          Skills
        </Link>
        <Link smooth to="#projects">
          Projects
        </Link>
        <Link smooth to="#contact">
          Contact
        </Link>
      </ul>
    </div>
  );
}

export default sidbar;
