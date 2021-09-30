import React, { useState } from "react";

import "../css/navbar.css";
import { HashLink as Link } from "react-router-hash-link";
function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="nav">
      <div className="navbar">
        <div className="logo" id="home">
          <Link to="#">
            {" "}
            <img
              src="../images/navbar.jpeg"
              alt="navbar"
              className="logo-img"
            />
          </Link>
        </div>
        <div className="nav-list">
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
        <div className="sid_icon">
          <button>f</button>
        </div>
      </div>
      <div className="sid_list">
        <ul>
          <Link smooth to="#">
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
    </div>
  );
}

export default Navbar;
