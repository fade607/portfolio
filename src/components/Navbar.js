import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { BsX } from "react-icons/bs";

import Sidbar from "./Sidbar";
import "../css/navbar.css";
import { HashLink as Link } from "react-router-hash-link";
function Navbar() {
  const [openSid, setOpenSid] = useState(false);
  const openSidbar = (e) => {
    setOpenSid(!openSid);
    console.log(openSid);
  };

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

        <button className="sid_icon" onClick={() => openSidbar(openSid)}>
          {console.log(openSid)}
          {openSid ? <BsX /> : <FiAlignJustify />}
        </button>
      </div>
      {openSid ? (
        <div className="sidbar">
          {" "}
          <ul>
            <Link smooth to="#home" onClick={() => openSidbar(openSid)}>
              Home
            </Link>
            <Link smooth to="#about" onClick={() => openSidbar(openSid)}>
              About
            </Link>

            <Link smooth to="#skills" onClick={() => openSidbar(openSid)}>
              Skills
            </Link>
            <Link smooth to="#projects" onClick={() => openSidbar(openSid)}>
              Projects
            </Link>
            <Link smooth to="#contact" onClick={() => openSidbar(openSid)}>
              Contact
            </Link>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
